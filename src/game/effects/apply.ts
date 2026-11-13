import { applyDamage } from './damage'
import { applyHeal } from './healing'
import { applyStatus } from './status'
import type { SkillEffect, EffectContext, EffectError } from './types'

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

