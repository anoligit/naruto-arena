import { statuses } from './catalog'
import { matchesSkillClasses } from '../classes'
import { getAppliedModifiers } from './appliedModifiers'
import { getActiveModifiers, getActiveStatuses, hasActiveModifier } from './active'
import { nonnegative, validModifier } from './validation'
import { calculateProtectedDamage } from './protection'
import type { BattleCharacter, BattleState } from '../types'
import type { ActiveStatus, SkillEffect, EffectContext, EffectError, DamageEvent, DamageResult, DamageProtection } from './types'

export function applyDamage(effect: Extract<SkillEffect, { type: 'damage' }>, context: EffectContext): EffectError | null {
  if (!nonnegative(effect.amount)) return 'invalid-effect-definition'
  const execute = effect.executeIf && getActiveStatuses(context.state, context.target).some((active) =>
    active.statusId === effect.executeIf!.statusId &&
    (!effect.executeIf!.fromSourceOnly || active.sourceCharacterId === context.source.instanceId) &&
    (!effect.executeIf!.previousUserTurn || active.appliedOnUserTurn === context.state.players[context.playerId].turnsStarted - 1)
  )
  if (effect.healthScaling && ((!Number.isFinite(effect.healthScaling.step) || !(effect.healthScaling.step > 0)) || !nonnegative(effect.healthScaling.bonus))) return 'invalid-effect-definition'
  if (effect.primaryAmount !== undefined && !nonnegative(effect.primaryAmount)) return 'invalid-effect-definition'
  const scalingTarget = effect.healthScaling?.of === 'target' ? context.target : context.source
  let amount = (context.isPrimaryTarget ? effect.primaryAmount ?? effect.amount : effect.amount) + (effect.healthScaling ? Math.floor(Math.max(0, scalingTarget.maxHealth - scalingTarget.health) / effect.healthScaling.step) * effect.healthScaling.bonus : 0)
  amount += (effect.growthPerTurn ?? 0) * (context.elapsedTurns ?? 0)
  if (effect.healingBonusScaling) amount += Math.floor(getActiveModifiers(context.state, context.source).reduce((sum, modifier) => modifier.type === 'healing-bonus' ? sum + modifier.amount : sum, 0) / 15) * 10
  if (effect.statusTurnScaling) {
    const active = getActiveStatuses(context.state, context.source).find(active => active.statusId === effect.statusTurnScaling!.statusId)
    if (active) amount += effect.statusTurnScaling.amount * Math.max(0, context.state.players[active.sourcePlayerId].turnsStarted - (active.appliedOnUserTurn ?? 0))
  }
  if (effect.currentHealthPercent !== undefined) amount = context.target.health * effect.currentHealthPercent / 100
  for (const modifier of getActiveModifiers(context.state, context.source)) {
    if (modifier.type === 'outgoing-damage-bonus' && (modifier.skillId === context.skill.id || modifier.skillId === '*')) amount += modifier.amount
    if (modifier.type === 'damage-multiplier' && modifier.skillId === context.skill.id) {
      if (!validModifier(modifier)) return 'invalid-effect-definition'
      amount *= modifier.multiplier
    }
  }
  const targetOwner = Object.values(context.state.players).find(player => player.team.some(member => member.instanceId === context.target.instanceId))
  const immune = hasActiveModifier(context.state, context.target, 'harmful-effect-immunity')
  let bonus = 0
  for (const active of getActiveStatuses(context.state, context.target)) {
    if (immune && active.sourcePlayerId !== targetOwner?.id) continue
    const modifiers = getAppliedModifiers(active)
    for (const modifier of modifiers) {
      if (modifier.type !== 'damage-taken-multiplier' && modifier.type !== 'damage-taken-bonus') continue
      if ((modifier.skillId !== '*' && modifier.skillId !== context.skill.id) || (modifier.fromSourceOnly && active.sourceCharacterId !== context.source.instanceId)) continue
      if (modifier.classes && !matchesSkillClasses(context.skill.classes, modifier.classes)) continue
      if (modifier.type === 'damage-taken-bonus' && modifier.excludesAffliction && effect.damageType === 'affliction') continue
      if (!validModifier(modifier)) return 'invalid-effect-definition'
      if (modifier.type === 'damage-taken-multiplier') amount *= modifier.multiplier
      else bonus += modifier.amount
    }
  }
  amount += bonus
  for (const modifier of getActiveModifiers(context.state, context.source)) {
    if (modifier.type === 'outgoing-damage-reduction-percent') amount *= Math.max(0, 1 - modifier.percent / 100)
    if (modifier.type === 'outgoing-damage-reduction' && (!modifier.classes || matchesSkillClasses(context.skill.classes, modifier.classes)) && (!modifier.excludesAffliction || effect.damageType !== 'affliction')) amount = Math.max(0, amount - modifier.amount)
  }
  if (effect.damageType !== 'affliction') for (const modifier of getActiveModifiers(context.state, context.target)) if (modifier.type === 'incoming-damage-cap') amount = Math.min(amount, modifier.amount)
  if (!nonnegative(amount)) return 'invalid-effect-definition'
  context.damageEvents.push({ sourceInstanceId: context.source.instanceId, targetInstanceId: context.target.instanceId,
    skillId: context.skill.id, amount, newSkill: !context.periodic, protection: captureDamageProtection(context.state, context.target), ignoresImmunity: effect.ignoresImmunity, execute: Boolean(execute), executeBelowHealth: effect.executeBelowHealth, nonlethal: effect.nonlethal, damageType: effect.damageType })
  return null
}

// Cada golpe registra a proteção que existia quando foi executado. Assim,
// suspender defesas depois dele não altera retroativamente o dano anterior.
function captureDamageProtection(state: BattleState, target: BattleCharacter): DamageProtection {
  const modifiers = getActiveModifiers(state, target)
  return {
    modifiers: modifiers.filter(modifier => ['damage-reduction', 'damage-reduction-percent', 'damage-immunity', 'cannot-die'].includes(modifier.type)),
    shields: modifiers.some(modifier => modifier.type === 'ignore-defenses') ? [] : getActiveStatuses(state, target)
      .filter(active => getAppliedModifiers(active).some(modifier => modifier.type === 'destructible-defense'))
      .map(active => ({ instanceId: active.instanceId, remaining: active.shieldRemaining ?? getAppliedModifiers(active).reduce((sum, modifier) => modifier.type === 'destructible-defense' ? sum + modifier.amount : sum, 0) })),
  }
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
        skillId: active.sourceSkillId ?? active.statusId, amount: modifier.amount, damageType: modifier.damageType, nonlethal: modifier.nonlethal })
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
      const fallback = captureDamageProtection(state, target)
      const incoming = events.filter(event => event.targetInstanceId === target.instanceId && (event.ignoresImmunity || !(event.protection ?? fallback).modifiers.some(modifier => modifier.type === 'damage-immunity' && (!modifier.types || modifier.types.includes(event.damageType)))))
      if (!incoming.length) {
        if (events.some(event => event.targetInstanceId === target.instanceId)) results.push({ targetInstanceId: target.instanceId, damage: 0, healthBefore: target.health, healthAfter: target.health })
        continue
      }
      // Golpes sob a mesma proteção dividem a redução fixa uma única vez.
      const groups = new Map<string, { protection: DamageProtection; normal: number; piercing: number; events: DamageEvent[] }>()
      const eventGroups = new Map<DamageEvent, string>()
      for (const event of incoming) {
        const protection = event.protection ?? fallback
        const key = JSON.stringify({ modifiers: protection.modifiers, shields: protection.shields.map(shield => shield.instanceId) })
        const group = groups.get(key) ?? { protection, normal: 0, piercing: 0, events: [] }
        group.events.push(event)
        groups.set(key, group)
        eventGroups.set(event, key)
      }
      for (const group of groups.values()) {
        const normal = group.events.filter(event => event.damageType === 'normal').reduce((sum, event) => sum + event.amount, 0)
        const piercing = group.events.filter(event => event.damageType === 'piercing').reduce((sum, event) => sum + event.amount, 0)
        group.normal = calculateProtectedDamage(normal, 0, group.protection.modifiers)
        group.piercing = calculateProtectedDamage(normal, 0, group.protection.modifiers, piercing) - group.normal
      }
      const first = groups.values().next().value!
      const healthFloor = first.protection.modifiers.some(modifier => modifier.type === 'cannot-die') ? 1 : 0
      let damage = incoming.some(event => event.execute) ? target.health : calculateProtectedDamage(incoming.filter(event => event.damageType === 'normal').reduce((sum, event) => sum + event.amount, 0), incoming.filter(event => event.damageType === 'affliction').reduce((sum, event) => sum + event.amount, 0), first.protection.modifiers, incoming.filter(event => event.damageType === 'piercing').reduce((sum, event) => sum + event.amount, 0))
      const detailed = groups.size > 1 || [...groups.values()].some(group => group.protection.shields.length) || incoming.some(event => event.leechToInstanceId || event.nonlethal || event.executeBelowHealth !== undefined)
      if (detailed) {
        const shieldPoints = new Map<string, number>()
        let healthRemaining = target.health
        damage = 0
        for (const event of incoming) {
          const group = groups.get(eventGroups.get(event)!)!
          const floor = group.protection.modifiers.some(modifier => modifier.type === 'cannot-die') ? 1 : 0
          let amount = event.execute ? Math.max(0, healthRemaining - floor) : event.damageType === 'normal' ? Math.min(event.amount, group.normal) : event.damageType === 'piercing' ? Math.min(event.amount, group.piercing) : event.amount
          if (event.damageType === 'normal') group.normal -= amount
          if (event.damageType === 'piercing') group.piercing -= amount
          if (!event.execute && event.damageType !== 'affliction') {
            for (const shield of group.protection.shields) {
              const remaining = shieldPoints.get(shield.instanceId) ?? shield.remaining
              const absorbed = Math.min(remaining, amount)
              shieldPoints.set(shield.instanceId, remaining - absorbed)
              const active = target.statuses.find(active => active.instanceId === shield.instanceId)
              if (active) active.shieldRemaining = remaining - absorbed
              amount -= absorbed
            }
          }
          if (event.nonlethal) amount = Math.min(amount, Math.max(0, healthRemaining - 1))
          const lost = Math.min(Math.max(0, healthRemaining - floor), Math.trunc(amount))
          healthRemaining -= lost
          damage += Math.trunc(amount)
          if (event.executeBelowHealth !== undefined && lost > 0 && healthRemaining > 0 && healthRemaining <= event.executeBelowHealth) {
            damage += Math.max(0, healthRemaining - floor)
            healthRemaining = Math.min(healthRemaining, floor)
          }
          if (event.leechToInstanceId) stolenHealth.set(event.leechToInstanceId, (stolenHealth.get(event.leechToInstanceId) ?? 0) + lost)
        }
        // Em uma troca de proteções, o limite de vida pertence a cada golpe.
        if (groups.size > 1) damage = target.health - healthRemaining
      }
      if (groups.size === 1 && healthFloor) damage = Math.min(damage, Math.max(0, target.health - healthFloor))
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
        if (result.healthAfter < result.healthBefore && events.some(event => event.targetInstanceId === target.instanceId && event.sourceInstanceId !== target.instanceId && event.newSkill !== false)) target.statuses = target.statuses.filter(active => !statuses.find(definition => definition.id === active.statusId)?.endsOnNewSkillDamage)
      }
    }
  }
  return results
}
