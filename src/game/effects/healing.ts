import { getActiveModifiers, hasActiveModifier } from './active'
import { nonnegative } from './validation'
import type { SkillEffect, EffectContext, EffectError } from './types'

export function applyHeal(effect: Extract<SkillEffect, { type: 'heal' }>, context: EffectContext): EffectError | null {
  if (hasActiveModifier(context.state, context.target, 'ignore-healing')) return null
  if (!nonnegative(effect.amount)) return 'invalid-effect-definition'
  const bonus = getActiveModifiers(context.state, context.source).reduce((sum, modifier) => modifier.type === 'healing-bonus' ? sum + modifier.amount : sum, 0)
  const decrease = (effect.decreasePerUse ?? 0) * Math.max(0, (context.source.skillUses?.[context.skill.id] ?? 1) - 1)
  if (context.target.health > 0) context.target.health = Math.min(context.target.maxHealth, context.target.health + Math.max(0, effect.amount + bonus - decrease))
  return null
}
