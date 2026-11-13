import { statuses } from './catalog'
import { getActiveModifiers, getActiveStatuses } from './active'
import { nonnegative, validModifier } from './validation'
import { calculateProtectedDamage } from './protection'
import type { BattleCharacter, BattleState } from '../types'
import type { ActiveStatus, SkillEffect, EffectContext, EffectError, DamageEvent, DamageResult } from './types'

export function applyDamage(effect: Extract<SkillEffect, { type: 'damage' }>, context: EffectContext): EffectError | null {
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
      const damage = incoming.some((event) => event.execute) ? target.health : calculateProtectedDamage(normal, bypass, modifiers)
      const healthBefore = target.health
      target.health = Math.max(0, target.health - damage)
      results.push({ targetInstanceId: target.instanceId, damage, healthBefore, healthAfter: target.health })
    }
  }
  return results
}
