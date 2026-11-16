import { characters } from '../characters/registry'
import type { MissionDefinition, UnlockRequirement } from './definition'
export type { CharacterMission, MissionDefinition, UnlockRequirement } from './definition'

// Cada personagem é a fonte dos dados da própria missão.
export const characterMissions: MissionDefinition[] = characters.flatMap(character => character.mission ? [{...character.mission,rewardCharacterId:character.id}] : [])
if(new Set(characterMissions.map(m=>m.id)).size!==characterMissions.length)throw new Error('Use um ID diferente para cada missão no index.ts dos personagens.')
export const missions: Record<string, {name:string}> = Object.fromEntries(characterMissions.map(mission=>[mission.id,mission]))
export type MissionId = string
export function missionGoalText(mission: MissionDefinition): string {
  const count=mission.objective.consecutiveWins
  const names=mission.objective.charactersAnyOf.map(id=>characters.find(c=>c.id===id)?.name??id).join(' ou ')
  return mission.objective.pointsPerWin === 'one'
    ? `Ganhar ${count} ${count===1?'partida seguida':'partidas seguidas'} com ${names}`
    : `Somar ${count} ${count===1?'ponto':'pontos'} em vitórias seguidas com ${names}. Cada personagem exigido presente soma um ponto por vitória.`
}
export function missionRequirementsMet(mission: MissionDefinition, level: number, completed: readonly string[] = []): boolean {
  return level>=mission.minimumLevel && mission.prerequisiteMissionIds.every(id=>completed.includes(id))
}
export function describeUnlockRequirement(requirement: UnlockRequirement): string {
  return requirement.type==='none'?'Nenhum':missions[requirement.missionId]?.name??requirement.missionId
}
