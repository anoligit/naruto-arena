import { statuses } from './statuses'
import { getActiveModifiers, getActiveStatuses, hasActiveModifier } from './statusRules'
import type { ActiveStatus, BattleCharacter, BattleState, PlayerId, SkillDefinition, SkillEffect, StatusModifier } from './types'

export type DamageEvent = {
  sourceInstanceId: string
  targetInstanceId: string
  skillId: string
  amount: number
  execute?: boolean
  damageType: 'normal' | 'piercing' | 'affliction'
}
export type DamageResult = { targetInstanceId: string; damage: number; healthBefore: number; healthAfter: number }
export type EffectError = 'unknown-status-definition' | 'invalid-effect-definition'
export type EffectContext = {
  state: BattleState; playerId: PlayerId; source: BattleCharacter; target: BattleCharacter
  skill: SkillDefinition; effectIndex: number; damageEvents: DamageEvent[]
}
const nonnegative = (value: number) => Number.isFinite(value) && value >= 0
function validModifier(modifier: StatusModifier): boolean {
  switch (modifier.type) {
    case 'damage-reduction': case 'damage-taken-bonus': case 'on-skill-use-damage': return nonnegative(modifier.amount)
    case 'damage-multiplier': case 'damage-taken-multiplier': return nonnegative(modifier.multiplier)
    case 'damage-reduction-percent': return nonnegative(modifier.percent) && modifier.percent <= 100
    case 'reflect': case 'stun': case 'invulnerable': case 'stun-immunity': return true
    default: { const unsupported: never = modifier; void unsupported; return false }
  }
}
function applyDamage(effect: Extract<SkillEffect, { type: 'damage' }>, context: EffectContext): EffectError | null {
  if (!nonnegative(effect.amount)) return 'invalid-effect-definition'
  const execute = effect.executeIf && getActiveStatuses(context.state, context.target).some((active) =>
    active.statusId === effect.executeIf!.statusId &&
    (!effect.executeIf!.fromSourceOnly || active.sourceCharacterId === context.source.instanceId) &&
    (!effect.executeIf!.previousUserTurn || active.appliedOnUserTurn === context.state.players[context.playerId].turnsStarted - 1)
  )
  let amount = effect.amount
  for (const modifier of getActiveModifiers(context.state, context.source)) {
    if (modifier.type === 'damage-multiplier' && modifier.skillId === context.skill.id) {
      if (!validModifier(modifier)) return 'invalid-effect-definition'
      amount *= modifier.multiplier
    }
  }
  let bonus = 0
  for (const active of getActiveStatuses(context.state, context.target)) {
    const modifiers = statuses.find((entry) => entry.id === active.statusId)?.modifiers ?? []
    for (const modifier of modifiers) {
      if (modifier.type !== 'damage-taken-multiplier' && modifier.type !== 'damage-taken-bonus') continue
      if (modifier.skillId !== context.skill.id || (modifier.fromSourceOnly && active.sourceCharacterId !== context.source.instanceId)) continue
      if (!validModifier(modifier)) return 'invalid-effect-definition'
      if (modifier.type === 'damage-taken-multiplier') amount *= modifier.multiplier
      else bonus += modifier.amount
    }
  }
  amount += bonus
  if (!nonnegative(amount)) return 'invalid-effect-definition'
  context.damageEvents.push({ sourceInstanceId: context.source.instanceId, targetInstanceId: context.target.instanceId,
    skillId: context.skill.id, amount, execute: Boolean(execute), damageType: effect.damageType })
  return null
}
function applyHeal(effect: Extract<SkillEffect, { type: 'heal' }>, context: EffectContext): EffectError | null {
  if (!nonnegative(effect.amount)) return 'invalid-effect-definition'
  if (context.target.health > 0) context.target.health = Math.min(context.target.maxHealth, context.target.health + effect.amount)
  return null
}
function applyStatus(effect: Extract<SkillEffect, { type: 'apply-status' }>, context: EffectContext): EffectError | null {
  const definition = statuses.find((entry) => entry.id === effect.statusId)
  if (!definition) return 'unknown-status-definition'
  if (!['opponent-turns', 'owner-turns'].includes(definition.duration.type) || !Number.isInteger(definition.duration.turns) || definition.duration.turns < 1 || !definition.modifiers.every(validModifier)) return 'invalid-effect-definition'
  const recipient = effect.recipient === 'user' ? context.source : context.target
  if (effect.skipIfUntargetable && recipient === context.target && hasActiveModifier(context.state, recipient, 'invulnerable')) return null
  if (definition.modifiers.every((modifier) => modifier.type === 'stun') && hasActiveModifier(context.state, recipient, 'stun-immunity')) return null
  const opponentId: PlayerId = context.playerId === 'player-1' ? 'player-2' : 'player-1'
  recipient.statuses.push({
    instanceId: `${context.state.turnNumber}:${context.source.instanceId}:${context.skill.id}:${context.effectIndex}`,
    statusId: definition.id, sourcePlayerId: context.playerId, sourceCharacterId: context.source.instanceId, sourceSkillId: context.skill.id,
    appliedOnUserTurn: context.state.players[context.playerId].turnsStarted,
    expiration: {
      playerId: definition.duration.type === 'owner-turns' ? context.playerId : opponentId,
      afterTurn: context.state.players[definition.duration.type === 'owner-turns' ? context.playerId : opponentId].turnsStarted + definition.duration.turns,
    },
  })
  return null
}
const effectHandlers = { damage: applyDamage, heal: applyHeal, 'apply-status': applyStatus } satisfies {
  [Type in SkillEffect['type']]: (effect: Extract<SkillEffect, { type: Type }>, context: EffectContext) => EffectError | null
}
export function applySkillEffect(effect: SkillEffect, context: EffectContext): EffectError | null {
  switch (effect.type) {
    case 'damage': return effectHandlers.damage(effect, context)
    case 'heal': return effectHandlers.heal(effect, context)
    case 'apply-status': return effectHandlers['apply-status'](effect, context)
    default: { const unsupported: never = effect; void unsupported; return 'invalid-effect-definition' }
  }
}

// Capture these statuses before execution: a newly-applied effect must not
// retroactively trigger on the skill that created it. Failed actions do not trigger.
export function triggerSkillUseDamage(
  user: BattleCharacter, activeBefore: ActiveStatus[], events: DamageEvent[]
): void {
  for (const active of activeBefore) {
    const definition = statuses.find((entry) => entry.id === active.statusId)
    for (const modifier of definition?.modifiers ?? []) {
      if (modifier.type !== 'on-skill-use-damage') continue
      events.push({ sourceInstanceId: active.sourceCharacterId, targetInstanceId: user.instanceId,
        skillId: active.sourceSkillId ?? active.statusId, amount: modifier.amount, damageType: modifier.damageType })
    }
  }
}

// Reduction is applied to the combined normal damage once per turn. Piercing
// and affliction bypass it. Truncate only the final result, as specified.
export function settleTurnDamage(state: BattleState, events: DamageEvent[]): DamageResult[] {
  const results: DamageResult[] = []
  for (const owner of Object.values(state.players)) {
    for (const target of owner.team) {
      const incoming = events.filter((event) => event.targetInstanceId === target.instanceId)
      if (!incoming.length) continue
      const normal = incoming.filter((event) => event.damageType === 'normal').reduce((sum, event) => sum + event.amount, 0)
      const bypass = incoming.filter((event) => event.damageType !== 'normal').reduce((sum, event) => sum + event.amount, 0)
      const modifiers = getActiveModifiers(state, target)
      const flat = modifiers.reduce((sum, modifier) => modifier.type === 'damage-reduction' ? sum + modifier.amount : sum, 0)
      const percentFactor = modifiers.reduce((factor, modifier) => modifier.type === 'damage-reduction-percent' ? factor * (1 - modifier.percent / 100) : factor, 1)
      const damage = incoming.some((event) => event.execute) ? target.health : Math.trunc(Math.max(0, normal * percentFactor - flat) + bypass)
      const healthBefore = target.health
      target.health = Math.max(0, target.health - damage)
      results.push({ targetInstanceId: target.instanceId, damage, healthBefore, healthAfter: target.health })
    }
  }
  return results
}
