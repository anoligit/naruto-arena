// Cadastro das missões. O nome é escrito aqui uma única vez.
// Objetivos, progresso e conclusão serão tratados pelo sistema de missões.
export const missions = {
  'team-7-fights-as-a-team': {
    name: 'Time 7 Luta como uma Equipe',
  },
} as const

export type MissionId = keyof typeof missions
export type UnlockRequirement =
  | { type: 'none' }
  | { type: 'mission'; missionId: MissionId }

export function describeUnlockRequirement(requirement: UnlockRequirement): string {
  return requirement.type === 'none' ? 'Nenhum' : missions[requirement.missionId].name
}
