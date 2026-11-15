import { filterIgnoredDefenses } from './protection'
import { isHarmfulSkill } from '../skillKinds'
import { matchesSkillClasses } from '../classes'
import type { SkillDefinition } from '../types'
import type { StatusModifier } from './types'

export function isStunnedByModifiers(modifiers: StatusModifier[], skill: SkillDefinition | undefined): boolean {
  modifiers = filterIgnoredDefenses(modifiers)
  const immune = modifiers.some(modifier => modifier.type === 'stun-immunity' || modifier.type === 'harmful-effect-immunity')
  return modifiers.some(modifier => modifier.type === 'stun' && (!immune || modifier.ignoresImmunity) &&
    (!modifier.scope || (skill !== undefined && isHarmfulSkill(skill))) &&
    (!modifier.classes || (skill !== undefined && matchesSkillClasses(skill.classes, modifier.classes))))
}
