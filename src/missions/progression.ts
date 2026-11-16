import { characters } from '../characters/registry'
import { characterMissions, missionGoalText } from './index'
import { getMissionProgress } from './progress'
import type { AccountProgression } from './progress'
export type { AccountProgression } from './progress'

// A liberação inicial é declarada em unlockRequirement no index.ts de cada personagem.
export const initialCharacterIds = characters.filter(character => character.unlockRequirement.type === 'none').map(character => character.id)
export const progressionRules = { initialCharacterIds, missions: characterMissions, provisionalRankPerWin: true, trainingProgress: true }

export function canUseCharacter(id: string, progress?: AccountProgression | null): boolean {
  const character = characters.find(character => character.id === id)
  if (!character) return false
  if (character.unlockRequirement.type === 'none') return true
  const missionId = character.unlockRequirement.missionId
  const mission = characterMissions.find(mission => mission.id === missionId)
  return !!mission && getMissionProgress(mission, progress).completed
}

export function characterUnlockText(id: string, progress?: AccountProgression | null): string {
  const character = characters.find(character => character.id === id)
  if (!character) return 'Personagem indisponível'
  if (character.unlockRequirement.type === 'none') return 'Personagem inicial'
  const missionId = character.unlockRequirement.missionId
  const mission = characterMissions.find(mission => mission.id === missionId)
  if (!mission) return 'Missão indisponível'
  return getMissionProgress(mission, progress).completed
    ? `Missão ${mission.name} concluída`
    : `${mission.name}: ${missionGoalText(mission)} Rank mínimo: ${mission.minimumRank} (nível ${mission.minimumLevel}).`
}
