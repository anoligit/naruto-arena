import { isHarmfulSkill } from '../skillKinds'
import { matchesSkillClasses } from '../classes'
import type { SkillDefinition } from '../types'
import type { StatusModifier } from './types'

// Somar o dano normal, aplicar percentuais, subtrair redução fixa e truncar.
// Piercing e affliction entram depois da redução.
export function calculateProtectedDamage(normal: number, bypass: number, modifiers: StatusModifier[], piercing = 0): number {
  const flat = modifiers.reduce((sum, modifier) => modifier.type === 'damage-reduction' && !modifier.includesPiercing ? sum + modifier.amount : sum, 0)
  const percentFactor = modifiers.reduce((factor, modifier) => modifier.type === 'damage-reduction-percent' ? factor * (1 - modifier.percent / 100) : factor, 1)
  const piercingFactor = modifiers.reduce((factor, modifier) => modifier.type === 'damage-reduction-percent' && modifier.includesPiercing ? factor * (1 - modifier.percent / 100) : factor, 1)
  const sharedFlat = modifiers.reduce((sum, modifier) => modifier.type === 'damage-reduction' && modifier.includesPiercing ? sum + modifier.amount : sum, 0)
  return Math.trunc(Math.max(0, Math.max(0, normal * percentFactor - flat) + piercing * piercingFactor - sharedFlat) + bypass)
}

// Invulnerabilidade pode bloquear todas as classes ou só uma lista delas.
export function isInvulnerableByModifiers(modifiers: StatusModifier[], skill: SkillDefinition | undefined): boolean {
  return filterIgnoredDefenses(modifiers).some((modifier) => modifier.type === 'invulnerable' && (!modifier.scope || (skill !== undefined && !isHarmfulSkill(skill))) &&
    (!modifier.classes || (skill !== undefined && matchesSkillClasses(skill.classes, modifier.classes))))
}

// Suspender preserva os status e os pontos dos escudos para quando o efeito acabar.
export function isDefensiveModifier(modifier: StatusModifier): boolean {
  return ['damage-reduction', 'damage-reduction-percent', 'destructible-defense',
    'invulnerable', 'reflect', 'counter-first-harmful', 'damage-immunity',
    'harmful-effect-immunity', 'stun-immunity', 'cannot-die', 'on-new-skill-damage'].includes(modifier.type)
}

export function filterIgnoredDefenses(modifiers: StatusModifier[]): StatusModifier[] {
  return modifiers.some(modifier => modifier.type === 'ignore-defenses')
    ? modifiers.filter(modifier => !isDefensiveModifier(modifier)) : modifiers
}
