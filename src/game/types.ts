import type { ActiveStatus, DamageType, SkillEffect } from './effects/types'
export type { ActiveStatus, DamageType, SkillEffect, StatusModifier, StatusDefinition } from './effects/types'
import type { SkillClass } from './classes/types'
export type { SkillClass } from './classes/types'
import type { EnergyCost, EnergyPool } from './energy/types'

export type { EnergyType, EnergyPool, EnergyCost } from './energy/types'

// Onde o jogador pode clicar para atribuir a ação. recipient define quem recebe o efeito.
export type SkillTarget = 'self' | 'enemy' | 'ally' | 'self-or-enemy'

// Condição para ampliar o alvo: sem status, vale em todo uso.
export type SkillTargetExpansion = {
  whenUserHasStatus?: string
  target: 'all-vulnerable-enemies'
}

// Melhoria aplicada somente enquanto o status estiver ativo no próprio usuário.
export type SkillEnhancement = {
  whenUserHasStatus: string
  damage?: { amount: number; damageType: DamageType }
  ignoreInvulnerability?: boolean
}

export type SkillDefinition = {
  id: string
  name: string
  description: string
  image?: string
  cost: EnergyCost
  cooldown: number
  target: SkillTarget
  targetExpansion?: SkillTargetExpansion
  enhancement?: SkillEnhancement
  classes: SkillClass[]
  requirements?: SkillCondition[]
  effects: SkillEffect[]
  allowInvulnerableTarget?: boolean
  replacement?: { skillId: string; whenStatusId: string }
}
export type SkillCondition = {
  type: 'has-status'
  statusId: string
}

export type PlayerId = 'player-1' | 'player-2'

export type BattleCharacter = {
  instanceId: string
  characterId: string
  health: number
  maxHealth: number
  statuses: ActiveStatus[]
  skillReadyOnTurn: Record<string, number>
  lastSkillUsedOnTurn: number | null
}

export type BattleTeam = [
  BattleCharacter,
  BattleCharacter,
  BattleCharacter,
]

export type BattlePlayer = {
  id: PlayerId
  team: BattleTeam
  energy: EnergyPool
  turnsStarted: number
}

export type BattleState = {
  counterReports: import('./effects/counters').CounterReport[]
  players: Record<PlayerId, BattlePlayer>
  activePlayerId: PlayerId
  turnNumber: number
  phase: 'planning' | 'confirmation' | 'finished'
  winnerId: PlayerId | null
  turnEndsAt: number | null
}
