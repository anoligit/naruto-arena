import { applyStealHealth, applyStealEnergy, applyGainEnergy } from './resources'
import { applyDamage } from './damage'
import { applyHeal } from './healing'
import { applyStatus } from './status'
import type { SkillEffect, EffectContext, EffectError } from './types'

const effectHandlers = { 'steal-health': applyStealHealth, 'steal-energy': applyStealEnergy, 'gain-energy': applyGainEnergy, damage: applyDamage, heal: applyHeal, 'apply-status': applyStatus } satisfies {
  [Type in SkillEffect['type']]: (effect: Extract<SkillEffect, { type: Type }>, context: EffectContext) => EffectError | null
}
export function applySkillEffect(effect: SkillEffect, context: EffectContext): EffectError | null {
  switch (effect.type) {
    case 'steal-health': return effectHandlers['steal-health'](effect, context)
    case 'steal-energy': return effectHandlers['steal-energy'](effect, context)
    case 'gain-energy': return effectHandlers['gain-energy'](effect, context)
    case 'damage': return effectHandlers.damage(effect, context)
    case 'heal': return effectHandlers.heal(effect, context)
    case 'apply-status': return effectHandlers['apply-status'](effect, context)
    default: { const unsupported: never = effect; void unsupported; return 'invalid-effect-definition' }
  }
}

