import { matchesSkillClasses } from '../classes'
import type { SkillDefinition } from '../types'
import type { StatusModifier } from './types'

// Somar o dano normal, aplicar percentuais, subtrair redução fixa e truncar.
// Piercing e affliction entram depois da redução.
export function calculateProtectedDamage(normal: number, bypass: number, modifiers: StatusModifier[]): number {
  const flat = modifiers.reduce((sum, modifier) => modifier.type === 'damage-reduction' ? sum + modifier.amount : sum, 0)
  const percentFactor = modifiers.reduce((factor, modifier) => modifier.type === 'damage-reduction-percent' ? factor * (1 - modifier.percent / 100) : factor, 1)
  return Math.trunc(Math.max(0, normal * percentFactor - flat) + bypass)
}

// Invulnerabilidade pode bloquear todas as classes ou só uma lista delas.
export function isInvulnerableByModifiers(modifiers: StatusModifier[], skill: SkillDefinition | undefined): boolean {
  return modifiers.some((modifier) => modifier.type === 'invulnerable' &&
    (!modifier.classes || (skill !== undefined && matchesSkillClasses(skill.classes, modifier.classes))))
}
