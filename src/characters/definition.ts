import type { SkillDefinition, StatusDefinition } from '../game/types'
import type { CharacterOrder } from './order'
import type { UnlockRequirement, CharacterMission } from '../missions/definition'

export type CharacterInfo = {
  name: string
  image: string
  description: string
  unlockRequirement: UnlockRequirement
  mission?: CharacterMission
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
  order?: CharacterOrder
  abilities: AbilityDefinition[]
}

export type CharacterModule = {
  character: Character
  statuses: StatusDefinition[]
  order?: CharacterOrder
}

export function getBaseSkills(character: Character): SkillDefinition[] {
  return character.skillDefinitions.filter((skill) => !skill.replacement && !skill.passive)
}

// O motor recebe os catálogos; o autor edita somente os blocos do personagem.
export function defineCharacter({ id, order, abilities, ...info }: CharacterDefinition): CharacterModule {
  return {
    character: { id, ...info, skillDefinitions: abilities.map((ability) => ability.skill) },
    statuses: abilities.flatMap((ability) => ability.statuses ?? []),
    order,
  }
}
