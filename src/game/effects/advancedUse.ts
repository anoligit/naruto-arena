import { freezeUsedSkill } from '../skillCatalog'
import { statuses } from './catalog'
import { getActiveStatuses, isStunnedForSkill } from './active'
import { getAppliedModifiers } from './appliedModifiers'
import { findSourceSkill } from './origin'
import { applySkillEffect } from './apply'
import { applyStatus } from './status'
import { recordCounter } from './counters'
import { characters } from '../../data/characters'
import type { BattleState, BattleCharacter } from '../types'
import type { ActiveStatus, EffectContext, EffectError } from './types'

type Context = Omit<EffectContext, 'effectIndex'>
export type IncomingRule = { target: BattleCharacter; active: ActiveStatus }
export function captureIncomingRules(state: BattleState): IncomingRule[] {
  return Object.values(state.players).flatMap(player => player.team).flatMap(target => getActiveStatuses(state, target)
    .filter(active => statuses.find(status => status.id === active.statusId)?.endsAfterHarmfulSkills || getAppliedModifiers(active).some(modifier => modifier.type === 'counter-damage-shield'))
    .map(active => ({ target, active })))
}

export function startSourceUse(context: Context): EffectError | null {
  const harmful = !context.state.players[context.playerId].team.some(member => member.instanceId === context.target.instanceId)
  if (!harmful) return null
  for (const active of getActiveStatuses(context.state, context.source)) {
    const rule = statuses.find(status => status.id === active.statusId)?.consecutiveHarmful
    if (!rule) continue
    const turn = context.state.players[context.playerId].turnsStarted
    active.streak = Math.min(rule.stages.length, active.lastHarmfulTurn === turn - 1 ? (active.streak ?? 0) + 1 : 1)
    active.lastHarmfulTurn = turn; active.idleTurns = 0
    const skill = findSourceSkill(context.source, active.sourceSkillId)
    if (skill) {
      const error = applyStatus({ type: 'apply-status', statusId: rule.stages[active.streak - 1] }, { ...context, skill, target: context.source, effectIndex: -70 })
      if (error) return error
    }
  }
  return null
}

export function finishIncomingRules(context: Context, start: number, rules: IncomingRule[], received: Set<string>): EffectError | null {
  const harmful = !context.state.players[context.playerId].team.some(member => member.instanceId === context.target.instanceId)
  if (!harmful) return null
  const handled = new Set<string>()
  for (const { target, active } of rules) {
    if (!received.has(target.instanceId) || !target.statuses.includes(active)) continue
    const definition = statuses.find(status => status.id === active.statusId)
    const defender = Object.values(context.state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
    const skill = findSourceSkill(defender, active.sourceSkillId)
    if (!defender || !skill) continue
    const shield = getAppliedModifiers(active).find(modifier => modifier.type === 'counter-damage-shield')
    if (shield?.type === 'counter-damage-shield' && !handled.has(target.instanceId)) {
      const events = context.damageEvents.slice(start).filter(event => event.targetInstanceId === target.instanceId && event.skillId === context.skill.id && event.damageType !== 'affliction')
      if (events.length) {
        const amount = events.reduce((sum, event) => sum + (event.rawAmount ?? event.amount), 0)
        for (const event of events) { event.amount = 0; event.execute = false; delete event.executeBelowHealth; delete event.leechToInstanceId }
        target.statuses = target.statuses.filter(status => status.instanceId !== active.instanceId)
        const before = target.statuses.length
        const error = applyStatus({ type: 'apply-status', statusId: shield.shieldStatusId }, { ...context, source: defender, target, skill, playerId: active.sourcePlayerId, effectIndex: -71 })
        if (error) return error
        const granted = target.statuses[before]
        if (granted) granted.shieldRemaining = amount
        recordCounter(context.state, context.source, context.skill, active, target.instanceId, 'damage-prevented', context.actionIndex ?? 0, -71)
        handled.add(target.instanceId)
      }
    }
    if (definition?.endsAfterHarmfulSkills) {
      active.remainingUses = Math.max(0, (active.remainingUses ?? definition.endsAfterHarmfulSkills) - 1)
      if (!active.remainingUses) {
        target.statuses = target.statuses.filter(status => status.instanceId !== active.instanceId)
        for (const [effectIndex, effect] of (definition.onExhaustEffects ?? []).entries()) {
          const error = applySkillEffect(effect, { ...context, source: defender, target, skill, playerId: active.sourcePlayerId, effectIndex: -72-effectIndex })
          if (error) return error
        }
      }
    }
  }
  return null
}

export function finishOwnerRules(state: BattleState): void {
  const player = state.players[state.activePlayerId]
  for (const target of player.team) {
    if (target.health <= 0) continue
    for (const active of [...getActiveStatuses(state, target)]) {
      const definition = statuses.find(status => status.id === active.statusId)
      const source = Object.values(state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
      const skill = findSourceSkill(source, active.sourceSkillId)
      if (!source || !skill) continue
      const streak = definition?.consecutiveHarmful
      if (streak && active.lastHarmfulTurn !== player.turnsStarted) {
        active.streak = 0; active.idleTurns = (active.idleTurns ?? 0) + 1
        target.statuses = target.statuses.filter(status => !streak.stages.includes(status.statusId))
        if (active.idleTurns >= streak.idleTurns) applyStatus({ type: 'apply-status', statusId: streak.idleStatusId }, { state, source, target, skill, playerId: active.sourcePlayerId, effectIndex: -73, damageEvents: [] })
      }
      const definitions = characters.find(character => character.id === target.characterId)?.skillDefinitions.filter(skill => !skill.passive) ?? []
      if (definition?.onOwnerTurnEndWhenStunned && definitions.some(skill => isStunnedForSkill(state, target, skill))) {
        for (const [effectIndex, effect] of definition.onOwnerTurnEndWhenStunned.entries()) applySkillEffect(effect, { state, source, target, skill, playerId: active.sourcePlayerId, effectIndex: -74-effectIndex, damageEvents: [] })
      }
    }
  }
}

export function queueDelayedSkill(context: Context, active: ActiveStatus, modifier: Extract<import('./types').StatusModifier, { type: 'delay-next-harmful' }>): EffectError | null {
  const owner = context.state.players[context.playerId]
  const cause = Object.values(context.state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
  const skill = findSourceSkill(cause, active.sourceSkillId)
  context.source.statuses = context.source.statuses.filter(status => status.instanceId !== active.instanceId)
  if (!cause || !skill) return null
  const before = context.source.statuses.length
  const error = applyStatus({ type: 'apply-status', statusId: modifier.markerStatusId }, { ...context, source: cause, target: context.source, skill, playerId: active.sourcePlayerId, effectIndex: -81 })
  if (error) return error
  const marker = context.source.statuses[before]
  if (marker) marker.expiration = { playerId: context.playerId, afterTurn: owner.turnsStarted + (modifier.clock === 'battle-turns' ? Math.ceil(modifier.turns / 2) : modifier.turns) }
  context.state.scheduledSkills ??= []
  context.state.scheduledSkills.push({ id: `delayed:${context.state.turnNumber}:${context.source.instanceId}:${context.state.scheduledSkills.length}`, playerId: context.playerId,
    sourceInstanceId: context.source.instanceId, targetInstanceId: context.target.instanceId, skill: freezeUsedSkill(context.state, context.source, context.skill), causePlayerId: active.sourcePlayerId,
    markerInstanceId: marker?.instanceId,
    ...(modifier.clock === 'battle-turns' ? { afterBattleTurn: context.state.turnNumber + modifier.turns } : { afterOwnerTurn: owner.turnsStarted + modifier.turns }) })
  return null
}
