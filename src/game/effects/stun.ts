import { matchesSkillClasses } from '../classes'
import type { SkillDefinition } from '../types'
import type { StatusModifier } from './types'

export function isStunnedByModifiers(modifiers: StatusModifier[], skill: SkillDefinition | undefined): boolean {
  if (modifiers.some((modifier) => modifier.type === 'stun-immunity')) return false
  return modifiers.some((modifier) => modifier.type === 'stun' &&
    (!modifier.classes || (skill !== undefined && matchesSkillClasses(skill.classes, modifier.classes))))
}
