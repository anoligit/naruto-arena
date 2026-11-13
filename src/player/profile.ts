// Dados do perfil exibido na seleção. Campos sem cadastro ficam vazios.
export type PlayerProfile = {
  name: string
  image?: string
  rank: string | null
  clan: string | null
  level: number | null
  experience: number | null
  overallRank: number | null
  wins: number | null
  losses: number | null
  streak: number | null
}

export const playerProfile: PlayerProfile = {
  name: 'Visitante',
  rank: null,
  clan: null,
  level: null,
  experience: null,
  overallRank: null,
  wins: null,
  losses: null,
  streak: null,
}
