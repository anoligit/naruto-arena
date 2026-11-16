import type { ActiveStatus, DamageType, SkillEffect } from './effects/types'
export type { ActiveStatus, DamageType, SkillEffect, StatusModifier, StatusDefinition } from './effects/types'
import type { SkillClass } from './classes/types'
export type { SkillClass } from './classes/types'
import type { EnergyCost, EnergyPool } from './energy/types'

export type { EnergyType, EnergyPool, EnergyCost } from './energy/types'

// Onde o jogador pode clicar para atribuir a ação. recipient define quem recebe o efeito.
export type SkillTarget = 'self' | 'enemy' | 'ally' | 'self-or-enemy' | 'ally-or-enemy'

// Condição para ampliar o alvo: sem status, vale em todo uso.
export type SkillTargetExpansion = {
  whenUserHasStatus?: string
  target: 'all-vulnerable-enemies' | 'all-enemies' | 'all-living-allies'
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
  passive?: boolean
  battleStart?: boolean
  preselection?: { group: string }
  summonSelections?: { group: string; shieldPerOption: number; randomPerOption: number; cooldownTurns: number }
  selectionEffects?: { group: string; skillId: string }
  originSkillId?: string
  effectDamageBonus?: number
  randomTargetCount?: { base: number; statusId?: string }
  replayPrevious?: { damageBonus: number; lockOriginalTurns: number }
  archivedSkills?: SkillDefinition[]
  storedCast?: { count: number; countWhenStatus?: { statusId: string; count: number } }
  onUseSkillId?: string
  onUseEffects?: SkillEffect[]
  requiredStoredSkills?: number
  copySlotStatusId?: string
  implementationPending?: boolean
  maxUserHealth?: number
  maxUses?: number
  healthTrigger?: number
  variants?: { whenUserHasStatus: string; cost: EnergyCost; effects: SkillEffect[]; cooldown?: number }[]
  requirements?: SkillCondition[]
  effects: SkillEffect[]
  cannotBeCountered?: boolean
  targetMustLackStatus?: string
  targetMustHaveStatus?: { statusId: string; fromSourceOnly?: boolean }
  allowInvulnerableTarget?: boolean
  replacement?: { skillId: string; whenStatusId: string }
}
export type SkillCondition = {
  count?: number
  type: 'has-status' | 'lacks-status' | 'has-revival' | 'status-uses'
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
  skillUses?: Record<string, number>
  memory?: { consumedStatusStacks?: { turn: number; keys: string[] }; previousSkill?: SkillDefinition; previousTurn?: number; storedSkills?: SkillDefinition[]; health?: Record<string, number> }
  selectedOptions?: string[]
  lastHarmfulTurn?: number
  copiedSkill?: SkillDefinition
  triggeredPassives?: string[]
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
  scheduledSkills?: { id: string; playerId: PlayerId; sourceInstanceId: string; targetInstanceId: string; skill: SkillDefinition; afterOwnerTurn?: number; afterBattleTurn?: number; markerInstanceId?: string; causePlayerId: PlayerId }[]
  counterReports: import('./effects/counters').CounterReport[]
  players: Record<PlayerId, BattlePlayer>
  activePlayerId: PlayerId
  turnNumber: number
  phase: 'planning' | 'confirmation' | 'finished'
  winnerId: PlayerId | null
  turnEndsAt: number | null
}
