export type CharacterMission = {
  id: string
  name: string
  category: string
  image: string
  minimumRank: string
  minimumLevel: number
  prerequisiteMissionIds: string[]
  objective: { type: 'consecutive-wins'; consecutiveWins: number; charactersAnyOf: string[]; pointsPerWin?: 'one' | 'per-required-character' }
  // Compatibilidade com contas antigas. Não é necessário em novas missões.
  legacyProgress?: { streakColumn: string; unlockedColumn: string; streakField: string; unlockedField: string }
}
export type MissionDefinition = CharacterMission & { rewardCharacterId: string }
export type UnlockRequirement = { type: 'none' } | { type: 'mission'; missionId: string }
export function validCharacterMission(value: unknown): value is CharacterMission {
  if (!value || typeof value !== 'object') return false
  const m = value as CharacterMission
  const strings = (values: unknown): values is string[] => Array.isArray(values) && values.every(v => typeof v === 'string' && v.trim().length > 0)
  return [m.id,m.name,m.category,m.minimumRank,m.image].every(v=>typeof v==='string'&&v.trim().length>0)
    && Number.isSafeInteger(m.minimumLevel) && m.minimumLevel>=1
    && strings(m.prerequisiteMissionIds) && new Set(m.prerequisiteMissionIds).size === m.prerequisiteMissionIds.length
    && !m.prerequisiteMissionIds.includes(m.id)
    && m.objective?.type==='consecutive-wins' && Number.isSafeInteger(m.objective.consecutiveWins) && m.objective.consecutiveWins>=1
    && (m.objective.pointsPerWin === undefined || ['one','per-required-character'].includes(m.objective.pointsPerWin))
    && strings(m.objective.charactersAnyOf) && m.objective.charactersAnyOf.length>0
    && new Set(m.objective.charactersAnyOf).size === m.objective.charactersAnyOf.length
    && (!m.legacyProgress || typeof m.legacyProgress === 'object' && (['streakColumn','unlockedColumn','streakField','unlockedField'] as const).every(key => typeof m.legacyProgress![key] === 'string' && /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(m.legacyProgress![key])))
}
