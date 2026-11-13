import type { ActiveStatus, SkillEffect } from './effects/types'
export type { ActiveStatus, SkillEffect, StatusModifier, StatusDefinition } from './effects/types'
import type { SkillClass } from './classes/types'
export type { SkillClass } from './classes/types'
import type { EnergyCost, EnergyPool } from './energy/types'

export type { EnergyType, EnergyPool, EnergyCost } from './energy/types'

export type SkillTarget = 'self' | 'enemy' | 'ally'

export type SkillDefinition = {
  id: string
  name: string
  description: string
  image?: string
  cost: EnergyCost
  cooldown: number
  target: SkillTarget
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
  players: Record<PlayerId, BattlePlayer>
  activePlayerId: PlayerId
  turnNumber: number
  phase: 'planning' | 'confirmation' | 'finished'
  winnerId: PlayerId | null
  turnEndsAt: number | null
}