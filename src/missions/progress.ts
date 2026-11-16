import type { CharacterMission } from './definition'

export type MissionProgress = { streak: number; completed: boolean }
export type AccountProgression = {
  missionProgress?: Record<string, MissionProgress>
  completedMissionIds?: string[]
  // Campos antigos continuam aceitos durante a migração das contas.
  [field: string]: unknown
}

export function getMissionProgress(mission: CharacterMission, progress?: AccountProgression | null): MissionProgress {
  const saved = progress?.missionProgress?.[mission.id]
  const legacy = mission.legacyProgress
  const oldCount = legacy ? progress?.[legacy.streakField] : undefined
  const oldCompleted = legacy ? progress?.[legacy.unlockedField] === true : false
  const completed = saved?.completed === true || progress?.completedMissionIds?.includes(mission.id) === true || oldCompleted
  const streak = saved?.streak ?? (typeof oldCount === 'number' && Number.isFinite(oldCount) ? oldCount : 0)
  return { streak: Math.max(0, streak), completed }
}
