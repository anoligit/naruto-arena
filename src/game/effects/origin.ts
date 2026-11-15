import { characters } from '../../data/characters'
import type { BattleCharacter } from '../types'

export function findSourceSkill(source: BattleCharacter | undefined, skillId: string | undefined) {
  if (!source || !skillId) return undefined
  return characters.find(character => character.id === source.characterId)?.skillDefinitions.find(skill => skill.id === skillId)
    ?? (source.copiedSkill?.id === skillId ? source.copiedSkill : undefined)
    ?? characters.flatMap(character => character.skillDefinitions).find(skill => skill.id === skillId)
}
