import type { StatusModifier } from './types'

export const nonnegative = (value: number) => Number.isFinite(value) && value >= 0
export function validModifier(modifier: StatusModifier): boolean {
  switch (modifier.type) {
    case 'intercept-target': return !modifier.cooldownTurns || Number.isInteger(modifier.cooldownTurns) && modifier.cooldownTurns >= 0
    case 'counter-damage-shield': return typeof modifier.shieldStatusId === 'string'
    case 'energy-removal-reduction': case 'on-allied-damage': return nonnegative(modifier.amount)
    case 'delay-next-harmful': return Number.isInteger(modifier.turns) && modifier.turns > 0
    case 'revive-on-death': return nonnegative(modifier.health) && modifier.health > 0
    case 'on-targeted-harmful': case 'counter-skill-use': case 'on-skill-use': return Array.isArray(modifier.effects)
    case 'on-new-skill-damage': case 'on-ally-targeted-hit': return typeof modifier.statusId === 'string'
    case 'on-enemy-target-team': return nonnegative(modifier.amount)
    case 'on-source-skill-use-heal': return nonnegative(modifier.amount) && Array.isArray(modifier.skillIds)
    case 'skill-cost-reduction': case 'skill-cost-increase':
    case 'enemy-skill-cost-increase': return Number.isInteger(modifier.random) && modifier.random >= 0
    case 'counter-first-harmful': return !modifier.responseSkillId || typeof modifier.responseSkillId === 'string'
    case 'on-source-harmful-hit': case 'on-harmful-skill': return typeof modifier.statusId === 'string' && modifier.statusId.length > 0
    case 'heal-on-new-skill-damage': case 'cooldown-reduction': case 'healing-bonus': case 'incoming-damage-cap': case 'cooldown-increase': case 'on-harmful-skill-heal-source': case 'outgoing-damage-bonus': case 'destructible-defense': case 'outgoing-damage-reduction': return nonnegative(modifier.amount)
    case 'periodic-damage': return nonnegative(modifier.amount) && ['normal', 'piercing', 'affliction'].includes(modifier.damageType)
    case 'damage-reduction': case 'damage-taken-bonus': case 'on-skill-use-damage': return nonnegative(modifier.amount)
    case 'damage-multiplier': case 'damage-taken-multiplier': return nonnegative(modifier.multiplier)
    case 'outgoing-damage-reduction-percent': case 'damage-reduction-percent': return nonnegative(modifier.percent) && modifier.percent <= 100
    case 'forced-target': case 'random-harmful-target': case 'harmful-skills-heal': case 'isolated': case 'life-link': case 'ignore-healing': case 'ignore-defenses': case 'prevent-damage-reduction': case 'prevent-invulnerability': case 'reflect': case 'stun': case 'invulnerable': case 'stun-immunity': case 'harmful-effect-immunity': case 'damage-immunity': case 'cannot-die': case 'reveal-enemy-invisible': return true
    default: { const unsupported: never = modifier; void unsupported; return false }
  }
}
