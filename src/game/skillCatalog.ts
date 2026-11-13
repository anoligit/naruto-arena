import { characters } from '../data/characters'
import { getActiveStatuses } from './statusRules'
import type { BattleCharacter, BattleState, SkillDefinition } from './types'

export function getBattleSkills(state: BattleState, character: BattleCharacter): SkillDefinition[] {
  const definitions = characters.find((entry) => entry.id === character.characterId)?.skillDefinitions ?? []
  const active = getActiveStatuses(state, character)
  return definitions.filter((skill) => !skill.replacement).map((base) =>
    definitions.find((candidate) => candidate.replacement?.skillId === base.id &&
      active.some((status) => status.statusId === candidate.replacement?.whenStatusId)
    ) ?? base
  )
}

export function getBattleSkillNames(state: BattleState, character: BattleCharacter): string[] {
  const skills = getBattleSkills(state, character)
  return skills.length ? skills.map((skill) => skill.name)
    : characters.find((entry) => entry.id === character.characterId)?.skills ?? []
}
