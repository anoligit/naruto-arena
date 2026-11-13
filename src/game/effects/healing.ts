import { nonnegative } from './validation'
import type { SkillEffect, EffectContext, EffectError } from './types'

export function applyHeal(effect: Extract<SkillEffect, { type: 'heal' }>, context: EffectContext): EffectError | null {
  if (!nonnegative(effect.amount)) return 'invalid-effect-definition'
  if (context.target.health > 0) context.target.health = Math.min(context.target.maxHealth, context.target.health + effect.amount)
  return null
}
