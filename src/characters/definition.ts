import type { SkillDefinition, StatusDefinition } from '../game/types'
import type { UnlockRequirement } from '../missions'

export type CharacterInfo = {
  name: string
  image: string
  description: string
  unlockRequirement: UnlockRequirement
}

// Nome, imagem e descrição de cada habilidade existem apenas em SkillDefinition.
export type Character = CharacterInfo & {
  id: string
  skillDefinitions: SkillDefinition[]
}

export type AbilityDefinition = {
  skill: SkillDefinition
  statuses?: StatusDefinition[]
}

export type CharacterDefinition = CharacterInfo & {
  id: string
  order?: number
  abilities: AbilityDefinition[]
}

export type CharacterModule = {
  character: Character
  statuses: StatusDefinition[]
  order?: number
}

export function getBaseSkills(character: Character): SkillDefinition[] {
  return character.skillDefinitions.filter((skill) => !skill.replacement)
}

// O motor recebe os catálogos; o autor edita somente os blocos do personagem.
export function defineCharacter({ id, order, abilities, ...info }: CharacterDefinition): CharacterModule {
  return {
    character: { id, ...info, skillDefinitions: abilities.map((ability) => ability.skill) },
    statuses: abilities.flatMap((ability) => ability.statuses ?? []),
    order,
  }
}
