import { statuses } from './catalog'
import { hasActiveModifier, isInvulnerableToSkill } from './active'
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
  recipient.statuses.push({
    instanceId: `${context.state.turnNumber}:${context.source.instanceId}:${context.skill.id}:${context.applicationId ?? context.target.instanceId}:${context.effectIndex}`,
    statusId: definition.id, sourcePlayerId: context.playerId, sourceCharacterId: context.source.instanceId, sourceSkillId: context.skill.id,
    appliedOnUserTurn: context.state.players[context.playerId].turnsStarted,
    expiration: createStatusExpiration(context.state, context.playerId, definition),
  })
  return null
}
