import { findSourceSkill } from './origin'
import { applyMemoryEffect } from './memory'
import { characters } from '../../data/characters'
import { isHarmfulSkill } from '../skillKinds'
import { getAppliedModifiers } from './appliedModifiers'
import { isDefensiveModifier } from './protection'
import { removeHarmfulStatuses } from './cleanse'
import { getActiveStatuses, hasActiveModifier } from './active'
import { applyStealHealth, applyStealEnergy, applyGainEnergy, applyRemoveEnergy } from './resources'
import { applyDamage } from './damage'
import { applyHeal } from './healing'
import { applyStatus } from './status'
import type { SkillEffect, EffectContext, EffectError } from './types'

function removeStatuses(effect: Extract<SkillEffect, { type: 'remove-statuses' }>, context: EffectContext): EffectError | null {
  const targets = effect.scope === 'source-applications' ? Object.values(context.state.players).flatMap(player => player.team) : [context.target]
  for (const target of targets) target.statuses = target.statuses.filter(active => !effect.statusIds.includes(active.statusId) || (effect.scope === 'source-applications' && active.sourceCharacterId !== context.source.instanceId))
  return null
}

function removeDefenses(effect: Extract<SkillEffect, { type: 'remove-defensive-statuses' }>, context: EffectContext): EffectError | null {
  context.target.statuses = context.target.statuses.filter(active => !getAppliedModifiers(active).some(modifier => effect.onlyShields ? modifier.type === 'destructible-defense' : isDefensiveModifier(modifier)))
  return null
}

function stealDefenses(_effect: Extract<SkillEffect, { type: 'steal-defenses' }>, context: EffectContext): EffectError | null {
  const stolen = context.target.statuses.filter(active => getAppliedModifiers(active).some(isDefensiveModifier))
  context.target.statuses = context.target.statuses.filter(active => !stolen.includes(active))
  context.source.statuses.push(...stolen)
  return null
}

function copyEnemySkill(effect: Extract<SkillEffect, { type: 'copy-enemy-skill' }>, context: EffectContext): EffectError | null {
  const enemies = effect.characterIds ? effect.characterIds.map(characterId => ({ characterId, health: 1 })) : Object.values(context.state.players).filter(player => player.id !== context.playerId).flatMap(player => player.team).filter(member => member.health > 0)
  const choose = <T,>(items: T[]) => items[Math.floor((context.random ?? Math.random)() * items.length)]
  if (!enemies.length) return null
  const enemy = choose(enemies)
  const choices = characters.find(character => character.id === enemy.characterId)?.skillDefinitions.filter(skill => !skill.passive && !skill.implementationPending && isHarmfulSkill(skill)) ?? []
  if (!choices.length) return null
  const skill = choose(choices)
  context.source.copiedSkill = { ...skill, requirements: undefined, replacement: undefined, cost: { random: (skill.cost.random ?? 0) + Object.values(skill.cost.specific ?? {}).reduce((sum, cost) => sum + cost, 0) } }
  return null
}

function copyTriggeringSkill(_effect: Extract<SkillEffect, { type: 'copy-triggering-skill' }>, context: EffectContext): EffectError | null {
  const skill = context.triggeringSkill
  if (skill) context.source.copiedSkill = { ...skill, replacement: undefined, requirements: undefined, cost: { random: (skill.cost.random ?? 0) + Object.values(skill.cost.specific ?? {}).reduce((sum, amount) => sum + amount, 0) } }
  return null
}

const effectHandlers = { 'cancel-delayed-skills': applyMemoryEffect, 'consume-status-uses': applyMemoryEffect, 'reset-skill-uses': applyMemoryEffect, 'set-cooldown': applyMemoryEffect, 'store-triggering-skill': applyMemoryEffect, 'store-random-target-skill': applyMemoryEffect, 'consume-revival': applyMemoryEffect, 'consume-stacks': applyMemoryEffect, 'store-health': applyMemoryEffect, 'restore-health': applyMemoryEffect, 'copy-triggering-skill': copyTriggeringSkill, 'copy-enemy-skill': copyEnemySkill, 'steal-defenses': stealDefenses, 'remove-defensive-statuses': removeDefenses, 'remove-statuses': removeStatuses, 'remove-energy': applyRemoveEnergy, 'remove-harmful-statuses': removeHarmfulStatuses, 'steal-health': applyStealHealth, 'steal-energy': applyStealEnergy, 'gain-energy': applyGainEnergy, damage: applyDamage, heal: applyHeal, 'apply-status': applyStatus } satisfies {
  [Type in SkillEffect['type']]: (effect: Extract<SkillEffect, { type: Type }>, context: EffectContext) => EffectError | null
}
export function applySkillEffect(effect: SkillEffect, context: EffectContext): EffectError | null {
  if (effect.whenSelectedTargetHasStatus) {
    const selected = Object.values(context.state.players).flatMap(player => player.team).find(member => member.instanceId === context.selectedTargetInstanceId)
    if (!selected || !getActiveStatuses(context.state, selected).some(active => active.statusId === effect.whenSelectedTargetHasStatus)) return null
  }
  if (effect.whenEnemiesHaveStacks && Object.values(context.state.players).filter(player => player.id !== context.playerId).flatMap(player => player.team).flatMap(member => getActiveStatuses(context.state, member)).filter(active => active.statusId === effect.whenEnemiesHaveStacks!.statusId).length < effect.whenEnemiesHaveStacks.count) return null
  if (effect.whenStatusUses) {
    const active = getActiveStatuses(context.state, context.target).find(active => active.statusId === effect.whenStatusUses!.statusId)
    const count = active?.remainingUses ?? 0
    if (effect.whenStatusUses.min !== undefined && count < effect.whenStatusUses.min || effect.whenStatusUses.max !== undefined && count > effect.whenStatusUses.max) return null
  }
  if (effect.whenSkillReady && (context.source.skillReadyOnTurn[effect.whenSkillReady] ?? 0) > context.state.players[context.playerId].turnsStarted) return null
  const origin = effect.originSkillId && findSourceSkill(context.source, effect.originSkillId)
  if (origin) context = { ...context, skill: origin }
  if (effect.whenTargetHealthAtMost !== undefined && context.target.health > effect.whenTargetHealthAtMost) return null
  if ((effect.targetPosition === 'primary' && !context.isPrimaryTarget) || (effect.targetPosition === 'secondary' && context.isPrimaryTarget)) return null
  const active = getActiveStatuses(context.state, context.target)
  if (effect.whenTargetHasStatus && !active.some(status => status.statusId === effect.whenTargetHasStatus)) return null
  if (effect.unlessTargetHasStatus && active.some(status => status.statusId === effect.unlessTargetHasStatus)) return null
  const selfTarget = context.target.instanceId === context.source.instanceId
  if ((effect.targetCondition === 'self' && !selfTarget) || (effect.targetCondition === 'other' && selfTarget)) return null
  const owner = Object.values(context.state.players).find(player => player.team.some(member => member.instanceId === context.target.instanceId))
  if ((effect.targetCondition === 'enemy' && owner?.id === context.playerId) || (effect.targetCondition === 'ally' && owner?.id !== context.playerId)) return null
  if (owner?.id !== context.playerId && hasActiveModifier(context.state, context.target, 'harmful-effect-immunity') && effect.type !== 'damage' && effect.type !== 'steal-health' && effect.type !== 'apply-status' && effect.type !== 'gain-energy') return null
  switch (effect.type) {
    case 'cancel-delayed-skills': case 'consume-status-uses': case 'reset-skill-uses': case 'set-cooldown': case 'store-triggering-skill': case 'store-random-target-skill': case 'consume-revival': case 'consume-stacks': case 'store-health': case 'restore-health': return applyMemoryEffect(effect, context)
    case 'copy-triggering-skill': return effectHandlers['copy-triggering-skill'](effect, context)
    case 'copy-enemy-skill': return effectHandlers['copy-enemy-skill'](effect, context)
    case 'steal-defenses': return effectHandlers['steal-defenses'](effect, context)
    case 'remove-defensive-statuses': return effectHandlers['remove-defensive-statuses'](effect, context)
    case 'remove-statuses': return effectHandlers['remove-statuses'](effect, context)
    case 'remove-energy': return effectHandlers['remove-energy'](effect, context)
    case 'remove-harmful-statuses': return effectHandlers['remove-harmful-statuses'](effect, context)
    case 'steal-health': return effectHandlers['steal-health'](effect, context)
    case 'steal-energy': return effectHandlers['steal-energy'](effect, context)
    case 'gain-energy': return effectHandlers['gain-energy'](effect, context)
    case 'damage': return effectHandlers.damage(effect, context)
    case 'heal': return effectHandlers.heal(effect, context)
    case 'apply-status': return effectHandlers['apply-status'](effect, context)
    default: { const unsupported: never = effect; void unsupported; return 'invalid-effect-definition' }
  }
}

