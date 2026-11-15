import type { SkillDefinition } from './types'

// Classificação de uso; a natureza Physical/Chakra/Mental não define se é ofensiva.
export function isHarmfulSkill(skill: SkillDefinition): boolean {
  return skill.target === 'enemy' || skill.target === 'self-or-enemy' || skill.target === 'ally-or-enemy'
}
