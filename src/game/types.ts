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
    }
  | {
      type: 'apply-status'
      statusId: string
    }

export type StatusModifier =
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
    }
  | {
      type: 'invulnerable'
    }

export type StatusDefinition = {
  id: string
  name: string
  duration: {
    type: 'opponent-turns'
    turns: number
  }
  modifiers: StatusModifier[]
}


export type PlayerId = 'player-1' | 'player-2'

export type ActiveStatus = {
  instanceId: string
  statusId: string
  sourcePlayerId: PlayerId
  sourceCharacterId: string
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
}