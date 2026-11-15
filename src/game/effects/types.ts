import type { EnergyType } from '../energy/types'
import type { SkillClass } from '../classes/types'
import type { BattleCharacter, BattleState, PlayerId, SkillDefinition } from '../types'

export type DamageType = 'normal' | 'piercing' | 'affliction'

export type SkillEffect =
  | { type: 'steal-health'; amount: number }
  | { type: 'steal-energy'; amount: number; types: EnergyType[] }
  | { type: 'gain-energy'; amount: number }

  | {
      type: 'damage'
      amount: number
      damageType: DamageType
      executeIf?: { statusId: string; fromSourceOnly?: boolean; previousUserTurn?: boolean }
    }
  | {
      type: 'apply-status'
      statusId: string
      durationBonus?: { whenTargetHasStatus: string; turns: number; fromSourceOnly?: boolean }
      recipient?: 'user' | 'target'
      skipIfUntargetable?: boolean
    }
  | {
      type: 'heal'
      amount: number
    }

export type StatusModifier =
  | { type: 'counter-first-harmful'; responseSkillId?: string }
  | { type: 'destructible-defense'; amount: number }
  | { type: 'on-harmful-skill'; statusId: string }
  | { type: 'outgoing-damage-reduction'; amount: number; excludesAffliction: boolean }
  | { type: 'prevent-invulnerability' }
  | { type: 'prevent-damage-reduction' }
  | { type: 'periodic-damage'; amount: number; damageType: DamageType }
  | { type: 'enemy-skill-cost-increase'; classes: SkillClass[]; random: number }
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
      classes?: SkillClass[]
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
    type: 'opponent-turns' | 'owner-turns' | 'permanent'
    turns: number
  }
  modifiers: StatusModifier[]
  indicatorNote?: string
  endsWhenSourceDies?: boolean
  invisible?: boolean
  control?: boolean
  action?: boolean
}



export type ActiveStatus = {
  instanceId: string
  statusId: string
  sourcePlayerId: PlayerId
  sourceCharacterId: string
  sourceSkillId?: string
  appliedOnUserTurn?: number
  appliedAt?: { turn: number; action: number; effect: number }
  shieldRemaining?: number
  blockedModifiers?: StatusModifier['type'][]
  expiration: {
    playerId: PlayerId
    afterTurn: number
    permanent?: true
  }
}

export type DamageEvent = {
  sourceInstanceId: string
  targetInstanceId: string
  skillId: string
  amount: number
  leechToInstanceId?: string
  execute?: boolean
  damageType: DamageType
}
export type DamageResult = { targetInstanceId: string; damage: number; healthBefore: number; healthAfter: number }
export type EffectError = 'unknown-status-definition' | 'invalid-effect-definition'
export type EffectContext = {
  state: BattleState; playerId: PlayerId; source: BattleCharacter; target: BattleCharacter
  random?: () => number
  applicationId?: string
  actionIndex?: number
  skill: SkillDefinition; effectIndex: number; damageEvents: DamageEvent[]
}
