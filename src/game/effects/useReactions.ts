import { freezeUsedSkill } from '../skillCatalog'
import { findSourceSkill } from './origin'
import { isHarmfulSkill } from '../skillKinds'
import { statuses } from './catalog'
import { matchesSkillClasses } from '../classes'
import { getActiveStatuses, getActiveModifiers, hasActiveModifier, isActionSuppressed } from './active'
import { getAppliedModifiers } from './appliedModifiers'
import { applySkillEffect } from './apply'
import { applyHeal } from './healing'
import { applyStatus } from './status'
import { settleTurnDamage, applyDamage } from './damage'
import type { BattleCharacter } from '../types'
import type { ActiveStatus, EffectContext, EffectError } from './types'

type UseContext = Omit<EffectContext, 'effectIndex'>
function origin(context: UseContext, active: ActiveStatus) {
  const source = Object.values(context.state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
  const skill = findSourceSkill(source, active.sourceSkillId)
  return source && skill ? { source, skill } : null
}

// Reações à utilização, sem cobrar outra ação ou custo. Um stun reativo não
// invalida retroativamente a habilidade que já passou pela validação.
export function reactToSkillUse(context: UseContext, before: ActiveStatus[]): EffectError | null {
  for (const active of before) {
    if (isActionSuppressed(context.state, context.source, active)) continue
    if (active.sourcePlayerId !== context.playerId && hasActiveModifier(context.state, context.source, 'harmful-effect-immunity')) continue
    const original = origin(context, active)
    if (!original) continue
    for (const modifier of getAppliedModifiers(active)) {
      if (modifier.type !== 'on-skill-use' || (modifier.exceptClasses && matchesSkillClasses(context.skill.classes, modifier.exceptClasses))) continue
      if (modifier.harmfulOnly && !isHarmfulSkill(context.skill)) continue
      if (modifier.skillEffect && !context.skill.effects.some(effect => modifier.skillEffect === 'damage' ? effect.type === 'damage' || effect.type === 'steal-health' : modifier.skillEffect === 'energy' ? effect.type === 'steal-energy' || effect.type === 'remove-energy' : effect.type === 'apply-status' && statuses.find(status => status.id === effect.statusId)?.modifiers.some(modifier => modifier.type === 'stun'))) continue
      for (const [effectIndex, effect] of modifier.effects.entries()) {
        const error = applySkillEffect(effect, { ...context, ...original, triggeringSkill: freezeUsedSkill(context.state, context.source, context.skill), triggeringSource: context.source, playerId: active.sourcePlayerId, target: context.source,
          applicationId: `${context.skill.id}:${context.source.instanceId}`, effectIndex: -10 - effectIndex })
        if (error) return error
      }
      if (modifier.once) context.source.statuses = context.source.statuses.filter(status => status.instanceId !== active.instanceId)
    }
  }
  for (const player of Object.values(context.state.players)) {
    for (const target of player.team) {
      for (const active of getActiveStatuses(context.state, target)) {
        if (active.sourceCharacterId !== context.source.instanceId || isActionSuppressed(context.state, target, active)) continue
        for (const modifier of getAppliedModifiers(active)) {
          if (modifier.type !== 'on-source-skill-use-heal' || !modifier.skillIds.includes(context.skill.id)) continue
          const error = applyHeal({ type: 'heal', amount: modifier.amount }, { ...context, target, effectIndex: -11 })
          if (error) return error
        }
      }
    }
  }
  return null
}

export function reactToTargetedSkill(context: UseContext, targets: BattleCharacter[]): EffectError | null {
  for (const target of targets) {
    for (const active of getActiveStatuses(context.state, target)) {
      if (active.sourcePlayerId === context.playerId) continue
      const original = origin(context, active)
      const reaction = getAppliedModifiers(active).find(modifier => modifier.type === 'on-targeted-harmful' && matchesSkillClasses(context.skill.classes, modifier.classes))
      if (!original || reaction?.type !== 'on-targeted-harmful' || (reaction.oncePerTurn && active.lastTriggeredTurnBy?.targetedReaction === context.state.turnNumber)) continue
      if (reaction.consume !== false) target.statuses = target.statuses.filter(status => status.instanceId !== active.instanceId)
      if (reaction.oncePerTurn) active.lastTriggeredTurnBy = { ...active.lastTriggeredTurnBy, targetedReaction: context.state.turnNumber }
      for (const [effectIndex, effect] of (reaction.onAttackerEffects ?? []).entries()) {
        const error = applySkillEffect(effect, { ...context, ...original, target: context.source, playerId: active.sourcePlayerId, effectIndex: -50-effectIndex })
        if (error) return error
      }
      for (const [effectIndex, effect] of reaction.effects.entries()) {
        const error = applySkillEffect(effect, { ...context, ...original, target, playerId: active.sourcePlayerId, effectIndex: -20-effectIndex })
        if (error) return error
      }
    }
  }
  // Marca de Yugao: a primeira utilização de cada aliado concede proteção
  // a esse aliado, inclusive antes de uma possível resposta do inimigo.
  for (const target of targets) {
    if (hasActiveModifier(context.state, target, 'harmful-effect-immunity')) continue
    for (const active of getActiveStatuses(context.state, target)) {
      if (active.sourcePlayerId !== context.playerId || active.triggeredBy?.includes(context.source.instanceId)) continue
      const original = origin(context, active)
      if (!original) continue
      for (const modifier of getAppliedModifiers(active)) {
        if (modifier.type !== 'on-ally-targeted-hit') continue
        active.triggeredBy = [...(active.triggeredBy ?? []), context.source.instanceId]
        const error = applyStatus({ type: 'apply-status', statusId: modifier.statusId }, { ...context, ...original,
          playerId: active.sourcePlayerId, target: context.source, applicationId: context.source.instanceId, effectIndex: -8 })
        if (error) return error
      }
    }
  }
  // Aura de Shigure: uma reação por atacante e turno, mesmo em habilidades em área.
  for (const player of Object.values(context.state.players)) {
    if (player.id === context.playerId || !targets.some(target => player.team.some(member => member.instanceId === target.instanceId))) continue
    for (const holder of player.team) {
      if (holder.health <= 0 || !getActiveModifiers(context.state, holder).some(modifier => modifier.type === 'on-enemy-target-team')) continue
      for (const active of getActiveStatuses(context.state, holder)) {
        if (active.lastTriggeredTurnBy?.[context.source.instanceId] === context.state.turnNumber || isActionSuppressed(context.state, holder, active)) continue
        const original = origin(context, active)
        if (!original) continue
        for (const modifier of getAppliedModifiers(active)) {
          if (modifier.type !== 'on-enemy-target-team') continue
          active.lastTriggeredTurnBy = { ...active.lastTriggeredTurnBy, [context.source.instanceId]: context.state.turnNumber }
          const error = applyDamage({ type: 'damage', amount: modifier.amount, damageType: modifier.damageType },
            { ...context, ...original, triggeringSkill: freezeUsedSkill(context.state, context.source, context.skill), triggeringSource: context.source, playerId: active.sourcePlayerId, target: context.source, effectIndex: -9 })
          if (error) return error
        }
      }
    }
  }
  return null
}

// A habilidade que ativa a proteção recebe todos os seus efeitos. Só novas
// utilizações posteriores são bloqueadas; dano contínuo não ativa esta reação.
export function reactToNewSkillDamage(context: UseContext, damageStart: number, reactions: { target: BattleCharacter; active: ActiveStatus }[]): EffectError | null {
  const eligible = reactions.filter(({ target, active }) => context.damageEvents.slice(damageStart).some(event => event.targetInstanceId === target.instanceId && event.skillId === context.skill.id && event.amount > 0 && !event.noMarkTrigger) &&
    getActiveStatuses(context.state, target).includes(active) && !isActionSuppressed(context.state, target, active))
  if (!eligible.length) return null
  const before = structuredClone(context.state), after = structuredClone(context.state)
  settleTurnDamage(before, context.damageEvents.slice(0, damageStart))
  settleTurnDamage(after, context.damageEvents)
  const health = (state: typeof before, id: string) => Object.values(state.players).flatMap(player => player.team).find(member => member.instanceId === id)!.health
  const triggeredMarks = new Set<string>()
  for (const { target, active } of eligible) {
    if (health(after, target.instanceId) >= health(before, target.instanceId)) continue
    const original = origin(context, active)
    if (!original) continue
    for (const modifier of getAppliedModifiers(active)) {
      if (modifier.type === 'on-allied-damage') {
        const key = `${target.instanceId}:${active.statusId}:${active.sourceCharacterId}`
        if (active.sourcePlayerId !== context.playerId || triggeredMarks.has(key)) continue
        triggeredMarks.add(key)
        target.statuses = target.statuses.filter(status => status.instanceId !== active.instanceId)
        const error = applyDamage({ type: 'damage', amount: modifier.amount, damageType: modifier.damageType, noMarkTrigger: true }, { ...context, ...original, target, playerId: active.sourcePlayerId, effectIndex: -91 })
        if (error) return error
        continue
      }
      if (health(after, target.instanceId) <= 0) continue
      if (modifier.type === 'heal-on-new-skill-damage') {
        const error = applyHeal({ type: 'heal', amount: modifier.amount }, { ...context, ...original, target, playerId: active.sourcePlayerId, effectIndex: -13 })
        if (error) return error
        if (modifier.once) target.statuses = target.statuses.filter(status => status.instanceId !== active.instanceId)
        continue
      }
      if (modifier.type !== 'on-new-skill-damage' || (modifier.exceptClasses && matchesSkillClasses(context.skill.classes, modifier.exceptClasses))) continue
      const count = target.statuses.length
      const error = applyStatus({ type: 'apply-status', statusId: modifier.statusId }, { ...context, ...original,
        playerId: active.sourcePlayerId, target, applicationId: `${context.skill.id}:${target.instanceId}`, effectIndex: -12 })
      if (error) return error
      const applied = target.statuses[count]
      if (applied && applied.expiration.playerId === context.state.activePlayerId) applied.expiration.afterTurn -= 1
    }
  }
  return null
}
