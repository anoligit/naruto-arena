import { characters } from '../../data/characters'
import { statuses } from './catalog'
import { getActiveStatuses, hasActiveModifier, isInvulnerableToSkill } from './active'
import { recordCounter } from './counters'
import { getAppliedModifiers } from './appliedModifiers'
import { validModifier } from './validation'
import { createStatusExpiration } from './duration'
import type { SkillEffect, EffectContext, EffectError } from './types'

export function applyStatus(effect: Extract<SkillEffect, { type: 'apply-status' }>, context: EffectContext): EffectError | null {
  const definition = statuses.find((entry) => entry.id === effect.statusId)
  if (!definition) return 'unknown-status-definition'
  if (!['opponent-turns', 'owner-turns'].includes(definition.duration.type) || !Number.isInteger(definition.duration.turns) || definition.duration.turns < 1 || !definition.modifiers.every(validModifier)) return 'invalid-effect-definition'
  const recipient = effect.recipient === 'user' ? context.source : context.target
  if (effect.skipIfUntargetable && recipient === context.target && isInvulnerableToSkill(context.state, recipient, context.skill)) return null
  if (definition.modifiers.every((modifier) => modifier.type === 'stun') && hasActiveModifier(context.state, recipient, 'stun-immunity')) return null
  const prevention = definition.modifiers.some((modifier) => modifier.type === 'invulnerable')
    ? getActiveStatuses(context.state, recipient).find((active) => getAppliedModifiers(active).some((modifier) => modifier.type === 'prevent-invulnerability'))
    : undefined
  const blocksInvulnerability = prevention !== undefined
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
  recipient.statuses.push({
    instanceId: `${context.state.turnNumber}:${context.source.instanceId}:${context.skill.id}:${context.applicationId ?? context.target.instanceId}:${context.effectIndex}`,
    statusId: definition.id, sourcePlayerId: context.playerId, sourceCharacterId: context.source.instanceId, sourceSkillId: context.skill.id,
    appliedAt: { turn: context.state.turnNumber, action: context.actionIndex ?? 0, effect: context.effectIndex },
    ...(blocksInvulnerability ? { blockedModifiers: ['invulnerable' as const] } : {}),
    appliedOnUserTurn: context.state.players[context.playerId].turnsStarted,
    expiration: createStatusExpiration(context.state, context.playerId, definition),
  })
  return null
}
