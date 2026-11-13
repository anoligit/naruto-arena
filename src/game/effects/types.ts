import type { SkillClass } from '../classes/types'
import type { BattleCharacter, BattleState, PlayerId, SkillDefinition } from '../types'

export type DamageType = 'normal' | 'piercing' | 'affliction'

export type SkillEffect =
  | {
      type: 'damage'
      amount: number
      damageType: DamageType
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
  | { type: 'on-skill-use-damage'; amount: number; damageType: DamageType }

export type StatusDefinition = {
  id: string
  name: string
  duration: {
    type: 'opponent-turns' | 'owner-turns'
    turns: number
  }
  modifiers: StatusModifier[]
  indicatorNote?: string
  endsWhenSourceDies?: boolean
  invisible?: boolean
  control?: boolean
}



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

export type DamageEvent = {
  sourceInstanceId: string
  targetInstanceId: string
  skillId: string
  amount: number
  execute?: boolean
  damageType: DamageType
}
export type DamageResult = { targetInstanceId: string; damage: number; healthBefore: number; healthAfter: number }
export type EffectError = 'unknown-status-definition' | 'invalid-effect-definition'
export type EffectContext = {
  state: BattleState; playerId: PlayerId; source: BattleCharacter; target: BattleCharacter
  skill: SkillDefinition; effectIndex: number; damageEvents: DamageEvent[]
}
