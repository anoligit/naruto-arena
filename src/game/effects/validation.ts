import type { StatusModifier } from './types'

export const nonnegative = (value: number) => Number.isFinite(value) && value >= 0
export function validModifier(modifier: StatusModifier): boolean {
  switch (modifier.type) {
    case 'enemy-skill-cost-increase': return Number.isInteger(modifier.random) && modifier.random >= 0
    case 'counter-first-harmful': return !modifier.responseSkillId || typeof modifier.responseSkillId === 'string'
    case 'on-harmful-skill': return typeof modifier.statusId === 'string' && modifier.statusId.length > 0
    case 'destructible-defense': case 'outgoing-damage-reduction': return nonnegative(modifier.amount)
    case 'periodic-damage': return nonnegative(modifier.amount) && ['normal', 'piercing', 'affliction'].includes(modifier.damageType)
    case 'damage-reduction': case 'damage-taken-bonus': case 'on-skill-use-damage': return nonnegative(modifier.amount)
    case 'damage-multiplier': case 'damage-taken-multiplier': return nonnegative(modifier.multiplier)
    case 'damage-reduction-percent': return nonnegative(modifier.percent) && modifier.percent <= 100
    case 'prevent-damage-reduction': case 'prevent-invulnerability': case 'reflect': case 'stun': case 'invulnerable': case 'stun-immunity': return true
    default: { const unsupported: never = modifier; void unsupported; return false }
  }
}
