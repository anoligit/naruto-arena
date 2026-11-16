import { hakuMission, missionGoalText } from './index'

export const initialCharacterIds = [
  'classico-naruto','classico-sasuke','classico-sakura',
  'classico-hinata','classico-kiba','classico-shino',
  'classico-shikamaru','classico-chouji','classico-ino',
  'classico-lee','classico-neji','classico-tenten',
  'classico-gaara','classico-temari','classico-kankuro',
  'classico-dosu','classico-zaku','classico-kin',
  'classico-rin','classico-young-kakashi','classico-obito',
] as const
export type AccountProgression = { hakuStreak: number; hakuUnlocked: boolean; completedMissionIds?: string[] }
export const progressionRules = { initialCharacterIds, haku: hakuMission, provisionalRankPerWin:true, qualifyingCharacterPoints:true, trainingProgress:true }
export function canUseCharacter(id: string, progress?: AccountProgression | null): boolean {
  return (initialCharacterIds as readonly string[]).includes(id) || id === hakuMission.rewardCharacterId && progress?.hakuUnlocked === true
}
export function characterUnlockText(id: string, progress?: AccountProgression | null): string {
  if ((initialCharacterIds as readonly string[]).includes(id)) return 'Personagem inicial'
  if (id === hakuMission.rewardCharacterId) return progress?.hakuUnlocked ? `Missão ${hakuMission.name} concluída` : `${hakuMission.name}: ${missionGoalText(hakuMission)} Rank mínimo: ${hakuMission.minimumRank} (nível ${hakuMission.minimumLevel}).`
  return 'Missão de desbloqueio em breve'
}
