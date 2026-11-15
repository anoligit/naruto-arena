import { getAppliedModifiers } from './appliedModifiers'
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
    const modifiers = getAppliedModifiers(active)
    for (const modifier of modifiers) {
      if (modifier.type !== 'damage-taken-multiplier' && modifier.type !== 'damage-taken-bonus') continue
      if (modifier.skillId !== context.skill.id || (modifier.fromSourceOnly && active.sourceCharacterId !== context.source.instanceId)) continue
      if (!validModifier(modifier)) return 'invalid-effect-definition'
      if (modifier.type === 'damage-taken-multiplier') amount *= modifier.multiplier
      else bonus += modifier.amount
    }
  }
  amount += bonus
  for (const modifier of getActiveModifiers(context.state, context.source)) {
    if (modifier.type === 'outgoing-damage-reduction' && (!modifier.excludesAffliction || effect.damageType !== 'affliction')) amount = Math.max(0, amount - modifier.amount)
  }
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
    for (const modifier of getAppliedModifiers(active)) {
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
  const stolenHealth = new Map<string, number>()
  for (const owner of Object.values(state.players)) {
    for (const target of owner.team) {
      const incoming = events.filter((event) => event.targetInstanceId === target.instanceId)
      if (!incoming.length) continue
      const normal = incoming.filter((event) => event.damageType === 'normal').reduce((sum, event) => sum + event.amount, 0)
      const bypass = incoming.filter((event) => event.damageType !== 'normal').reduce((sum, event) => sum + event.amount, 0)
      const modifiers = getActiveModifiers(state, target)
      let damage = incoming.some((event) => event.execute) ? target.health : calculateProtectedDamage(normal, bypass, modifiers)
      const shields = getActiveStatuses(state, target).filter(active =>
        getAppliedModifiers(active).some(modifier => modifier.type === 'destructible-defense'))
      if (!incoming.some(event => event.execute) && (shields.length || incoming.some(event => event.leechToInstanceId))) {
        let normalRemaining = calculateProtectedDamage(normal, 0, modifiers)
        let healthRemaining = target.health
        damage = 0
        for (const event of incoming) {
          let amount = event.damageType === 'normal' ? Math.min(event.amount, normalRemaining) : event.amount
          if (event.damageType === 'normal') normalRemaining -= amount
          if (event.damageType !== 'affliction') {
            for (const shield of shields) {
              const remaining = shield.shieldRemaining ?? getAppliedModifiers(shield).reduce((sum, modifier) => modifier.type === 'destructible-defense' ? sum + modifier.amount : sum, 0)
              const absorbed = Math.min(remaining, amount)
              shield.shieldRemaining = remaining - absorbed
              amount -= absorbed
            }
          }
          const lost = Math.min(healthRemaining, Math.trunc(amount))
          healthRemaining -= lost
          damage += Math.trunc(amount)
          if (event.leechToInstanceId) stolenHealth.set(event.leechToInstanceId, (stolenHealth.get(event.leechToInstanceId) ?? 0) + lost)
        }
      }
      const healthBefore = target.health
      results.push({ targetInstanceId: target.instanceId, damage, healthBefore, healthAfter: Math.max(0, healthBefore - damage) })
    }
  }
  for (const player of Object.values(state.players)) {
    for (const target of player.team) {
      const gained = stolenHealth.get(target.instanceId) ?? 0
      if (target.health > 0) target.health = Math.min(target.maxHealth, target.health + gained)
      const result = results.find(entry => entry.targetInstanceId === target.instanceId)
      if (result) {
        result.healthBefore = target.health
        target.health = Math.max(0, target.health - result.damage)
        result.healthAfter = target.health
      }
    }
  }
  return results
}
