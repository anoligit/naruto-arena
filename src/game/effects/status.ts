import { findSourceSkill } from './origin'
import { characters } from '../../data/characters'
import { statuses } from './catalog'
import { getActiveStatuses, hasActiveModifier, isInvulnerableToSkill, isActionSuppressed } from './active'
import { recordCounter } from './counters'
import { getAppliedModifiers } from './appliedModifiers'
import { validModifier } from './validation'
import { createStatusExpiration } from './duration'
import type { SkillEffect, EffectContext, EffectError } from './types'

export function applyStatus(effect: Extract<SkillEffect, { type: 'apply-status' }>, context: EffectContext): EffectError | null {
  const definition = statuses.find((entry) => entry.id === effect.statusId)
  if (!definition) return 'unknown-status-definition'
  if (!['opponent-turns', 'owner-turns', 'permanent'].includes(definition.duration.type) || !Number.isInteger(definition.duration.turns) || (definition.duration.type === 'permanent' ? definition.duration.turns !== 0 : definition.duration.turns < 1) || !definition.modifiers.every(validModifier)) return 'invalid-effect-definition'
  const recipient = effect.recipient === 'user' ? context.source : context.target
  if (effect.skipIfUntargetable && recipient === context.target && isInvulnerableToSkill(context.state, recipient, context.skill)) return null
  if (!definition.ignoresImmunity && definition.modifiers.length > 0 && definition.modifiers.every((modifier) => modifier.type === 'stun') && hasActiveModifier(context.state, recipient, 'stun-immunity')) return null
  const recipientOwner = Object.values(context.state.players).find(player => player.team.some(member => member.instanceId === recipient.instanceId))
  const immune = !definition.ignoresImmunity && recipientOwner?.id !== context.playerId && hasActiveModifier(context.state, recipient, 'harmful-effect-immunity')
  if (immune && definition.modifiers.every(modifier => modifier.type !== 'periodic-damage' && modifier.type !== 'on-skill-use-damage') && !definition.periodicEffects?.some(effect => effect.type === 'damage' || effect.type === 'steal-health')) return null
  const blockedModifiers: import('./types').StatusModifier['type'][] = immune ? definition.modifiers.filter(modifier => modifier.type !== 'periodic-damage' && modifier.type !== 'on-skill-use-damage').map(modifier => modifier.type) : []
  if (hasActiveModifier(context.state, recipient, 'prevent-damage-reduction')) {
    blockedModifiers.push('damage-reduction', 'damage-reduction-percent')
  }
  const prevention = definition.modifiers.some((modifier) => modifier.type === 'invulnerable')
    ? getActiveStatuses(context.state, recipient).find((active) => !isActionSuppressed(context.state, recipient, active) && getAppliedModifiers(active).some((modifier) => modifier.type === 'prevent-invulnerability'))
    : undefined
  const blocksInvulnerability = prevention !== undefined
  if (blocksInvulnerability) blockedModifiers.push('invulnerable')
  if (prevention) {
    recordCounter(context.state, context.source, context.skill, prevention, recipient.instanceId,
      'prevented-invulnerability', context.actionIndex ?? 0, context.effectIndex)
  }
  // Um status pode também liberar ou melhorar habilidades (como os espelhos
  // do Haku). Bloquear a proteção não deve apagar esses outros benefícios.
  const grantsSkillChanges = characters.find((character) => character.id === recipient.characterId)?.skillDefinitions.some((skill) =>
    skill.targetExpansion?.whenUserHasStatus === definition.id ||
    skill.enhancement?.whenUserHasStatus === definition.id ||
    skill.replacement?.whenStatusId === definition.id)
  if (blocksInvulnerability && !grantsSkillChanges && definition.modifiers.every((modifier) => modifier.type === 'invulnerable')) return null
  // Só uma nova aplicação efetiva de stun reage. Dano contínuo, imunidade,
  // counters e múltiplos componentes do mesmo stun não multiplicam a reação.
  const stunMarks = !context.periodic && !context.deferred && !blockedModifiers.includes('stun') && definition.modifiers.some(modifier => modifier.type === 'stun')
    && (definition.ignoresImmunity || !hasActiveModifier(context.state, recipient, 'stun-immunity') || definition.modifiers.some(modifier => modifier.type === 'stun' && modifier.ignoresImmunity))
    && context.skill.effects.some(entry => entry.type === 'apply-status' && entry.statusId === definition.id)
    ? getActiveStatuses(context.state, recipient).filter(active => statuses.find(status => status.id === active.statusId)?.reapplyOnNewStun) : []
  const bonus = effect.durationBonus
  if (bonus && (!Number.isInteger(bonus.turns) || bonus.turns < 0)) return 'invalid-effect-definition'
  const extended = bonus && getActiveStatuses(context.state, recipient).some(active =>
    active.statusId === bonus.whenTargetHasStatus && (!bonus.fromSourceOnly || active.sourceCharacterId === context.source.instanceId))
  const duration = { ...definition.duration, turns: definition.duration.turns + (extended ? bonus.turns : 0) }
  if (definition.replaces) recipient.statuses = recipient.statuses.filter(active => !definition.replaces!.includes(active.statusId))
  if (definition.exclusiveToSource) {
    for (const player of Object.values(context.state.players)) for (const target of player.team) target.statuses = target.statuses.filter(active => active.statusId !== definition.id || active.sourceCharacterId !== context.source.instanceId)
  }
  recipient.statuses.push({
    ...(effect.linkTo ? { linkedTargetInstanceId: effect.linkTo === 'source' ? context.source.instanceId : context.selectedTargetInstanceId ?? context.target.instanceId } : {}),
    instanceId: `${context.state.turnNumber}:${context.source.instanceId}:${context.skill.id}:${context.applicationId ?? context.target.instanceId}:${context.effectIndex}`,
    statusId: definition.id, sourcePlayerId: context.playerId, sourceCharacterId: context.source.instanceId, sourceSkillId: context.skill.originSkillId ?? context.skill.id, sourceDamageBonus: context.skill.effectDamageBonus,
    ...(definition.modifiers.some(modifier => modifier.type === 'destructible-defense') ? { shieldRemaining: effect.defenseFromTrigger && context.triggeringSkill ? context.triggeringSkill.effects.reduce((sum, incoming) => incoming.type === 'damage' || incoming.type === 'steal-health' ? sum + incoming.amount : sum, 0) : definition.modifiers.reduce((sum, modifier) => modifier.type === 'destructible-defense' ? sum + modifier.amount : sum, 0) } : {}),
    ...((definition.uses ?? definition.endsAfterHarmfulSkills) ? { remainingUses: definition.uses ?? definition.endsAfterHarmfulSkills } : {}),
    isPrimaryTarget: context.isPrimaryTarget,
    appliedAt: { turn: context.state.turnNumber, action: context.actionIndex ?? 0, effect: context.effectIndex },
    ...(blockedModifiers.length ? { blockedModifiers } : {}),
    appliedOnUserTurn: context.state.players[context.playerId].turnsStarted,
    expiration: createStatusExpiration(context.state, context.playerId, { ...definition, duration }),
  })
  for (const active of stunMarks) {
    const key = JSON.stringify([recipient.instanceId, active.statusId, active.sourceCharacterId])
    context.stunReapplications ??= new Set<string>()
    if (context.stunReapplications.has(key)) continue
    context.stunReapplications.add(key)
    const source = Object.values(context.state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
    const skill = findSourceSkill(source, active.sourceSkillId)
    if (!source || !skill) continue
    const error = applyStatus({ type:'apply-status', statusId:active.statusId }, { ...context, source, skill, target:recipient,
      playerId:active.sourcePlayerId, applicationId:`stun:${context.source.instanceId}:${context.skill.id}:${context.actionIndex ?? 0}:${recipient.instanceId}`, effectIndex:-200-context.effectIndex })
    if (error) return error
  }
  const threshold = definition.onStacksReach
  if (threshold && recipient.statuses.filter(active => active.statusId === definition.id && active.sourceCharacterId === context.source.instanceId).length >= threshold.count) {
    recipient.statuses = recipient.statuses.filter(active => active.statusId !== definition.id || active.sourceCharacterId !== context.source.instanceId)
    return applyStatus({ type: 'apply-status', statusId: threshold.statusId }, { ...context, target: recipient, effectIndex: context.effectIndex - 100 })
  }
  return null
}
