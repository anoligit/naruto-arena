export type ChakraType =
  | 'bloodline'
  | 'ninjutsu'
  | 'taijutsu'
  | 'genjutsu'

export type ChakraPool = Record<ChakraType, number>

export type ChakraCost = {
  specific?: Partial<ChakraPool>
  random?: number
}

export type SkillTarget = 'self' | 'enemy' | 'ally'

export type SkillClass =
  | 'physical'
  | 'chakra'
  | 'affliction'
  | 'mental'
  | 'melee'
  | 'ranged'
  | 'instant'
  | 'action'
  | 'control'
  | 'unique'

export type SkillDefinition = {
  id: string
  name: string
  description: string
  image?: string
  cost: ChakraCost
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

export type SkillEffect =
  | {
      type: 'damage'
      amount: number
      damageType: 'normal' | 'piercing' | 'affliction'
      executeIf?: { statusId: string; fromSourceOnly?: boolean; previousUserTurn?: boolean }
    }
  | {
      type: 'apply-status'
      statusId: string
      recipient?: 'user' | 'target'
      skipIfUntargetable?: boolean
    }
  | {
      type: 'heal'
      amount: number
    }

export type StatusModifier =
  | { type: 'reflect'; classes: SkillClass[] }
  | {
      type: 'damage-reduction'
      amount: number
    }
  | {
      type: 'damage-multiplier'
      skillId: string
      multiplier: number
    }
  | {
      type: 'stun'
      classes?: SkillClass[]
    }
  | {
      type: 'invulnerable'
    }
  | { type: 'damage-reduction-percent'; percent: number }
  | { type: 'stun-immunity' }
  | { type: 'damage-taken-multiplier'; skillId: string; multiplier: number; fromSourceOnly?: boolean }
  | { type: 'damage-taken-bonus'; skillId: string; amount: number; fromSourceOnly?: boolean }
  | { type: 'on-skill-use-damage'; amount: number; damageType: 'normal' | 'piercing' | 'affliction' }

export type StatusDefinition = {
  id: string
  name: string
  duration: {
    type: 'opponent-turns' | 'owner-turns'
    turns: number
  }
  modifiers: StatusModifier[]
  endsWhenSourceDies?: boolean
  invisible?: boolean
  control?: boolean
}


export type PlayerId = 'player-1' | 'player-2'

export type ActiveStatus = {
  instanceId: string
  statusId: string
  sourcePlayerId: PlayerId
  sourceCharacterId: string
  sourceSkillId?: string
  appliedOnUserTurn?: number
  expiration: {
    playerId: PlayerId
    afterTurn: number
  }
}

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
  chakra: ChakraPool
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