import type { SkillDefinition, StatusDefinition } from '../game/types'

export type Character = {
  id: string
  name: string
  image?: string
  skills: string[]
  skillImages?: Record<string, string>
  description?: string
  unlockRequirement?: { type: 'none' } | { type: 'mission'; id: string; name: string }
  skillDescriptions?: Record<string, string>
  skillDefinitions?: SkillDefinition[]
}

export function characterWithSkills(
  id: string, name: string, image: string, description: string, skillDefinitions: SkillDefinition[]
): Character {
  return {
    id, name, image, description, skillDefinitions,
    skills: skillDefinitions.filter((skill) => !skill.replacement).map((skill) => skill.name),
    skillImages: Object.fromEntries(skillDefinitions.filter((skill) => skill.image).map((skill) => [skill.name, skill.image!])),
    skillDescriptions: Object.fromEntries(skillDefinitions.map((skill) => [skill.name, skill.description])),
  }
}


// Exportação padrão de cada pasta: personagem, efeitos e posição no catálogo.
export type CharacterModule = {
  character: Character
  statuses: StatusDefinition[]
  order?: number
}

export function defineCharacter(module: CharacterModule): CharacterModule {
  return module
}
