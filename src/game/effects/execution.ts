import { findSourceSkill } from './origin'
import { reactToNewSkillDamage, reactToSkillUse, reactToTargetedSkill } from './useReactions'
import { matchesSkillClasses } from '../classes'
import type { StatusModifier, SkillDefinition } from '../types'
import { applyHeal } from './healing'
import { characters } from '../../data/characters'
import { getSkillTargets } from '../targeting'
import { isIsolatedFrom, getActiveStatuses, isInvulnerableToSkill, hasActiveModifier, isInvulnerableToAlliedSkill } from './active'
import { getAppliedModifiers } from './appliedModifiers'
import { getSkillReflection } from './reflection'
import { applySkillEffect } from './apply'
import { applyStatus } from './status'
import { statuses } from './catalog'
import { triggerSkillUseDamage } from './damage'
import { getEffectiveSkill } from '../skillCatalog'
import { recordCounter } from './counters'
import type { EffectContext, EffectError } from './types'

type ExecutionContext = Omit<EffectContext, 'effectIndex'>

// A marca reage apenas à nova utilização, não ao dano contínuo já existente.
function triggerHarmfulEffects(context: ExecutionContext): EffectError | null {
  for (const active of getActiveStatuses(context.state, context.source)) {
    for (const modifier of getAppliedModifiers(active)) {
      if (modifier.type !== 'on-harmful-skill' && modifier.type !== 'on-harmful-skill-heal-source') continue
      if (active.sourcePlayerId !== context.playerId && hasActiveModifier(context.state, context.source, 'harmful-effect-immunity')) continue
      const source = Object.values(context.state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
      const skill = findSourceSkill(source, active.sourceSkillId)
      if (!source || !skill) continue
      if (modifier.type === 'on-harmful-skill-heal-source') {
        const error = applyHeal({ type: 'heal', amount: modifier.amount }, { ...context, target: source, effectIndex: -5 })
        if (error) return error
        continue
      }
      const before = context.source.statuses.length
      const error = applyStatus({ type: 'apply-status', statusId: modifier.statusId }, { ...context,
        source, target: context.source, skill, playerId: active.sourcePlayerId, effectIndex: -2 })
      if (error) return error
      const applied = context.source.statuses[before]
      const definition = statuses.find(status => status.id === modifier.statusId)
      if (modifier.endsWithTriggerTurn !== false && applied && definition?.duration.type === 'opponent-turns' && applied.expiration.playerId === context.state.activePlayerId) {
        applied.expiration.afterTurn -= 1
      }
    }
  }
  return null
}

export function executeSkillEffects(context: ExecutionContext, depth = 0): EffectError | null {
  const damageStart = context.damageEvents.length
  const damageReactions = Object.values(context.state.players).flatMap(player => player.team).flatMap(target =>
    getActiveStatuses(context.state, target).filter(active => getAppliedModifiers(active).some(modifier => modifier.type === 'on-new-skill-damage')).map(active => ({ target, active })))
  const before = getActiveStatuses(context.state, context.source)
  const ended = new Set(before.filter(active => statuses.find(s => s.id === active.statusId)?.endsOnSkillUse).map(active => active.instanceId))
  context.source.statuses = context.source.statuses.filter(active => !ended.has(active.instanceId))
  const reactionError = reactToSkillUse(context, before)
  if (reactionError) return reactionError
  if (!context.skill.cannotBeCountered) {
    for (const active of before) {
      const counter = getAppliedModifiers(active).find(modifier => modifier.type === 'counter-skill-use' && (!modifier.harmfulOnly || !context.state.players[context.playerId].team.some(member => member.instanceId === context.target.instanceId)))
      if (counter?.type !== 'counter-skill-use') continue
      context.source.statuses = context.source.statuses.filter(status => status.instanceId !== active.instanceId)
      const defender = Object.values(context.state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
      const original = findSourceSkill(defender, active.sourceSkillId)
      if (!defender || !original) continue
      recordCounter(context.state, context.source, context.skill, active, defender.instanceId, 'countered', context.actionIndex ?? 0, -1)
      for (const [effectIndex, effect] of counter.effects.entries()) {
        const error = applySkillEffect(effect, { ...context, source: defender, target: context.source, playerId: active.sourcePlayerId, skill: original, effectIndex })
        if (error) return error
      }
      return null
    }
  }
  const error = executeEffects(context, depth)
  if (!error && context.skill.effects.some(effect => effect.type === 'damage' || effect.type === 'steal-health')) {
    const consumed = new Set(before.filter(active => statuses.find(s => s.id === active.statusId)?.endsOnDamagingSkillUse).map(active => active.instanceId))
    context.source.statuses = context.source.statuses.filter(active => !consumed.has(active.instanceId))
  }
  return error ?? reactToNewSkillDamage(context, damageStart, damageReactions)
}

function acceptsCounter(modifier: StatusModifier, skill: SkillDefinition): modifier is Extract<StatusModifier, { type: 'counter-first-harmful' }> {
  return modifier.type === 'counter-first-harmful' && (!modifier.classes || matchesSkillClasses(skill.classes, modifier.classes))
}

function executeEffects(context: ExecutionContext, depth: number): EffectError | null {
  if (depth > 12) return 'invalid-effect-definition'
  const { state, source, skill, target, playerId } = context
  const targets = getSkillTargets(state, playerId, source, skill, target).filter(recipient =>
    !isIsolatedFrom(state, recipient, source) && (skill.allowInvulnerableTarget || (state.players[playerId].team.some(member => member.instanceId === recipient.instanceId)
      ? !isInvulnerableToAlliedSkill(state, recipient, skill) : !isInvulnerableToSkill(state, recipient, skill))))
  const harmful = !state.players[playerId].team.some(member => member.instanceId === target.instanceId)
  if (harmful) {
    const error = triggerHarmfulEffects(context)
    if (error) return error
    const reactionError = reactToTargetedSkill(context, targets)
    if (reactionError) return reactionError
  }
  // O primeiro counter intercepta a utilização inteira antes de atingir qualquer
  // destinatário de uma habilidade em área. A resposta não cobra custo/CD/ação.
  if (harmful && !skill.cannotBeCountered) {
    for (const recipient of targets) {
      if (!hasActiveModifier(state, recipient, 'counter-first-harmful')) continue
      const active = getActiveStatuses(state, recipient).find(status => getAppliedModifiers(status).some(modifier => acceptsCounter(modifier, skill)))
      if (!active) continue
      const modifier = getAppliedModifiers(active).find(modifier => acceptsCounter(modifier, skill))!
      if (modifier.type !== 'counter-first-harmful') continue
      recipient.statuses = recipient.statuses.filter(status => status.instanceId !== active.instanceId)
      recordCounter(state, source, skill, active, recipient.instanceId, 'countered', context.actionIndex ?? 0, -1)
      const defender = Object.values(state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
      const counterSkill = findSourceSkill(defender, active.sourceSkillId)
      if (defender && defender.health > 0 && counterSkill && modifier.onCounterStatusId) {
        const error = applyStatus({ type: 'apply-status', statusId: modifier.onCounterStatusId }, { ...context, source: defender, target: defender,
          skill: counterSkill, playerId: active.sourcePlayerId, effectIndex: 0 })
        if (error) return error
      }
      if (defender && counterSkill && modifier.onCounterAttackerStatusId) {
        const error = applyStatus({ type: 'apply-status', statusId: modifier.onCounterAttackerStatusId }, { ...context, source: defender, target: source, skill: counterSkill, playerId: active.sourcePlayerId, effectIndex: -3 })
        if (error) return error
      }
      const response = characters.find(character => character.id === defender?.characterId)?.skillDefinitions.find(skill => skill.id === modifier.responseSkillId)
      if (defender && defender.health > 0 && source.health > 0 && response && !isInvulnerableToSkill(state, source, response)) {
        const before = getActiveStatuses(state, defender)
        const error = executeSkillEffects({ ...context, playerId: active.sourcePlayerId, source: defender, target: source, skill: getEffectiveSkill(state, defender, response) }, depth + 1)
        if (!error) triggerSkillUseDamage(defender, before, context.damageEvents)
        return error
      }
      return null
    }
  }
  const appliedSelfEffects = new Set<number>()
  for (const recipient of targets) {
    const { reflected, blockedReflection, counter, redirectTarget } = getSkillReflection(state, source, recipient, skill)
    if (counter) recordCounter(state, source, skill, counter, recipient.instanceId,
      skill.classes.includes('control') ? 'cancelled' : blockedReflection ? 'return-blocked' : 'reflected', context.actionIndex ?? 0, -1)
    // Apenas marcas anteriores à habilidade atual reagem; a aplicação inicial não se ativa sozinha.
    if (harmful && !reflected && !blockedReflection) {
      for (const active of getActiveStatuses(state, recipient)) {
        if (active.sourceCharacterId !== source.instanceId) continue
        for (const modifier of getAppliedModifiers(active)) {
          if (modifier.type !== 'on-source-harmful-hit') continue
          const original = findSourceSkill(source, active.sourceSkillId)
          if (!original) continue
          const error = applyStatus({ type: 'apply-status', statusId: modifier.statusId }, { ...context, target: recipient, skill: original,
            applicationId: `${skill.id}:${recipient.instanceId}`, effectIndex: -4 })
          if (error) return error
        }
      }
    }
    for (const [effectIndex, effect] of (blockedReflection ? [] : skill.effects).entries()) {
      if (effect.whenUserHasStatus && !getActiveStatuses(state, source).some(active => active.statusId === effect.whenUserHasStatus)) continue
      if (effect.skipIfUntargetable && effect.recipient !== 'user' && effect.recipient !== 'all-allies' && isInvulnerableToSkill(state, recipient, skill)) continue
      const self = (effect.type === 'gain-energy' && effect.team !== 'target') || effect.recipient === 'user' || effect.recipient === 'all-allies'
      if (self && appliedSelfEffects.has(effectIndex)) continue
      const enemies = Object.values(state.players).filter(player => player.id !== playerId).flatMap(player => player.team).filter(enemy => enemy.health > 0 && (effect.recipient !== 'random-other-enemy' || enemy.instanceId !== target.instanceId))
      const linkedId = getActiveStatuses(state, source).find(active => active.linkedTargetInstanceId)?.linkedTargetInstanceId
      const specialTargets = effect.recipient === 'linked-target' ? Object.values(state.players).flatMap(player => player.team).filter(member => member.instanceId === linkedId && member.health > 0)
        : effect.recipient === 'random-enemy' || effect.recipient === 'random-other-enemy' ? (enemies.length ? [enemies[Math.floor((context.random ?? Math.random)() * enemies.length)]] : []) : null
      const effectTargets = specialTargets ?? (effect.recipient === 'all-allies'
        ? state.players[playerId].team.filter(ally => ally.health > 0 && !isInvulnerableToAlliedSkill(state, ally, skill))
        : [effect.recipient === 'user' ? source : reflected ? redirectTarget ?? source : recipient])
      for (const effectTarget of effectTargets) {
        const error = applySkillEffect(effect, { ...context,
          selectedTargetInstanceId: target.instanceId,
          playerId: reflected && !self ? (playerId === 'player-1' ? 'player-2' : 'player-1') : playerId,
          isPrimaryTarget: recipient.instanceId === target.instanceId,
          beneficiaryInstanceId: reflected && !self ? recipient.instanceId : undefined,
          target: effectTarget, applicationId: effect.recipient === 'all-allies' ? effectTarget.instanceId : recipient.instanceId, effectIndex })
        if (error) return error
      }
      if (self) appliedSelfEffects.add(effectIndex)
    }
  }
  return null
}
