export type CharacterMission = {
  id: string
  name: string
  category: string
  image: string
  minimumRank: string
  minimumLevel: number
  prerequisiteMissionIds: string[]
  objective: { type: 'consecutive-wins'; consecutiveWins: number; charactersAnyOf: string[] }
}
export type MissionDefinition = CharacterMission & { rewardCharacterId: string }
export type UnlockRequirement = { type: 'none' } | { type: 'mission'; missionId: string }
export function validCharacterMission(value: unknown): value is CharacterMission {
  if (!value || typeof value !== 'object') return false
  const m = value as CharacterMission
  return [m.id,m.name,m.category,m.minimumRank,m.image].every(v=>typeof v==='string'&&v.trim().length>0)
    && Number.isSafeInteger(m.minimumLevel) && m.minimumLevel>=1
    && Array.isArray(m.prerequisiteMissionIds) && m.prerequisiteMissionIds.every(v=>typeof v==='string')
    && m.objective?.type==='consecutive-wins' && Number.isSafeInteger(m.objective.consecutiveWins) && m.objective.consecutiveWins>=1
    && Array.isArray(m.objective.charactersAnyOf) && m.objective.charactersAnyOf.length>0
    && m.objective.charactersAnyOf.every(v=>typeof v==='string'&&v.length>0)
}
