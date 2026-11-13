import type { StatusModifier } from './types'

export const nonnegative = (value: number) => Number.isFinite(value) && value >= 0
export function validModifier(modifier: StatusModifier): boolean {
  switch (modifier.type) {
    case 'damage-reduction': case 'damage-taken-bonus': case 'on-skill-use-damage': return nonnegative(modifier.amount)
    case 'damage-multiplier': case 'damage-taken-multiplier': return nonnegative(modifier.multiplier)
    case 'damage-reduction-percent': return nonnegative(modifier.percent) && modifier.percent <= 100
    case 'reflect': case 'stun': case 'invulnerable': case 'stun-immunity': return true
    default: { const unsupported: never = modifier; void unsupported; return false }
  }
}
