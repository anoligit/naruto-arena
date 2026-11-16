import type { EnergyType } from '../energy/types'
import type { SkillClass } from '../classes/types'
import type { BattleCharacter, BattleState, PlayerId, SkillDefinition } from '../types'

export type DamageType = 'normal' | 'piercing' | 'affliction'

export type SkillEffect = (
  | { type: 'cancel-delayed-skills' }
  | { type: 'store-triggering-skill' }
  | { type: 'store-random-target-skill' }
  | { type: 'set-cooldown'; skillId: string; turns: number }
  | { type: 'consume-status-uses'; statusId: string; amount: number }
  | { type: 'reset-skill-uses'; skillId: string }
  | { type: 'consume-revival'; amount: number }
  | { type: 'consume-stacks'; statusId: string; count: number }
  | { type: 'store-health'; key: string }
  | { type: 'restore-health'; key: string }
  | { type: 'copy-triggering-skill' }
  | { type: 'copy-enemy-skill'; characterIds?: string[] }
  | { type: 'steal-defenses' }
  | { type: 'remove-defensive-statuses'; onlyShields?: boolean }
  | { type: 'remove-statuses'; statusIds: string[]; scope?: 'source-applications' }
  | { type: 'remove-harmful-statuses'; classes: SkillClass[] }
  | { type: 'steal-health'; amount: number }
  | { type: 'remove-energy'; amount: number; perStatus?: string; types?: EnergyType[] }
  | { type: 'steal-energy'; amount: number; types: EnergyType[] }
  | { type: 'gain-energy'; amount: number; energyType?: EnergyType; team?: 'user' | 'target' }

  | {
      type: 'damage'
      amount: number
      primaryAmount?: number
      ignoresImmunity?: boolean
      damageType: DamageType
      growthPerTurn?: number
      statusTurnScaling?: { statusId: string; amount: number }
      healingBonusScaling?: boolean
      statusCountScaling?: { statusId: string; amount: number; of?: 'user' | 'target' }
      currentHealthPercent?: number
      healthScaling?: { step: number; bonus: number; of?: 'target' | 'user' }
      noMarkTrigger?: boolean
      nonlethal?: boolean
      executeBelowHealth?: number
      executeIf?: { statusId: string; fromSourceOnly?: boolean; previousUserTurn?: boolean }
    }
  | {
      type: 'apply-status'
      statusId: string
      defenseFromTrigger?: boolean
      linkTo?: 'target' | 'source'
      durationBonus?: { whenTargetHasStatus: string; turns: number; fromSourceOnly?: boolean }
      recipient?: 'user' | 'target' | 'all-allies' | 'random-enemy' | 'random-other-enemy' | 'linked-target' | 'all-enemies' | 'random-ally' | 'all-other-enemies'
      skipIfUntargetable?: boolean
    }
  | {
      type: 'heal'
      amount: number
      decreasePerUse?: number
      perSkillUse?: string
    }

) & { targetGroup?: string; whenSelectedTargetHasStatus?: string; whenEnemiesHaveStacks?: { statusId: string; count: number }; whenStatusUses?: { statusId: string; max?: number; min?: number }; whenSkillReady?: string; originSkillId?: string; whenTargetHealthAtMost?: number; targetPosition?: 'primary' | 'secondary'; whenTargetHasStatus?: string; unlessTargetHasStatus?: string; targetCondition?: 'self' | 'other' | 'ally' | 'enemy'; whenUserHasStatus?: string; skipIfUntargetable?: boolean; recipient?: 'user' | 'target' | 'all-allies' | 'random-enemy' | 'random-other-enemy' | 'linked-target' | 'all-enemies' | 'random-ally' | 'all-other-enemies' }

export type StatusModifier =
  | { type: 'outgoing-damage-bonus'; skillId: string; amount: number }
  | { type: 'cannot-die' }
  | { type: 'ignore-defenses' }
  | { type: 'ignore-healing' }
  | { type: 'healing-bonus'; amount: number }
  | { type: 'incoming-damage-cap'; amount: number }
  | { type: 'cooldown-increase'; amount: number }
  | { type: 'cooldown-reduction'; amount: number }
  | { type: 'heal-on-new-skill-damage'; amount: number; once?: boolean }
  | { type: 'revive-on-death'; health: number; energy?: number; uses?: number }
  | { type: 'harmful-skills-heal' }
  | { type: 'random-harmful-target' }
  | { type: 'forced-target'; }
  | { type: 'delay-next-harmful'; clock?: 'owner-turns' | 'battle-turns'; turns: number; markerStatusId: string }
  | { type: 'energy-removal-reduction'; amount: number }
  | { type: 'on-allied-damage'; amount: number; damageType: DamageType }
  | { type: 'intercept-target'; classes?: SkillClass[]; storeSkill?: boolean; cooldownSkillId?: string; cooldownTurns?: number }
  | { type: 'counter-damage-shield'; classes: SkillClass[]; shieldStatusId: string }
  | { type: 'isolated' }
  | { type: 'life-link' }
  | { type: 'skill-cost-reduction'; random: number; scope?: 'harmful' }
  | { type: 'on-targeted-harmful'; classes: SkillClass[]; effects: SkillEffect[]; onAttackerEffects?: SkillEffect[]; consume?: boolean; oncePerTurn?: boolean }
  | { type: 'counter-skill-use'; harmfulOnly?: boolean; effects: SkillEffect[] }
  | { type: 'reveal-enemy-invisible' }
  | { type: 'on-skill-use'; harmfulOnly?: boolean; once?: boolean; skillEffect?: 'damage' | 'energy' | 'stun'; exceptClasses?: SkillClass[]; effects: SkillEffect[] }
  | { type: 'on-source-skill-use-heal'; skillIds: string[]; amount: number }
  | { type: 'on-ally-targeted-hit'; statusId: string }
  | { type: 'on-enemy-target-team'; amount: number; damageType: DamageType }
  | { type: 'damage-immunity'; types?: DamageType[] }
  | { type: 'on-new-skill-damage'; statusId: string; exceptClasses?: SkillClass[] }
  | { type: 'harmful-effect-immunity' }
  | { type: 'counter-first-harmful'; responseSkillId?: string; classes?: SkillClass[]; onCounterStatusId?: string; onCounterAttackerStatusId?: string; onCounterEffects?: SkillEffect[]; onCounterProtectedEffects?: SkillEffect[] }
  | { type: 'destructible-defense'; amount: number }
  | { type: 'on-harmful-skill'; statusId: string; endsWithTriggerTurn?: boolean }
  | { type: 'on-harmful-skill-heal-source'; amount: number }
  | { type: 'on-source-harmful-hit'; statusId: string }
  | { type: 'skill-cost-increase'; random: number; scope?: 'helpful' | 'harmful' }
  | { type: 'outgoing-damage-reduction-percent'; percent: number }
  | { type: 'outgoing-damage-reduction'; amount: number; excludesAffliction: boolean; classes?: SkillClass[] }
  | { type: 'prevent-invulnerability' }
  | { type: 'prevent-damage-reduction' }
  | { type: 'periodic-damage'; amount: number; damageType: DamageType }
  | { type: 'enemy-skill-cost-increase'; classes: SkillClass[]; random: number }
  | { type: 'reflect'; classes: SkillClass[]; toLinkedTarget?: boolean; oncePerTurn?: boolean; consume?: boolean }
  | {
      type: 'damage-reduction'
      growthPerTurn?: number
      includesPiercing?: boolean
      amount: number
    }
  | {
      type: 'damage-multiplier'
      skillId: string
      multiplier: number
    }
  | {
      type: 'stun'
      ignoresImmunity?: boolean
      scope?: 'harmful' | 'helpful'
      classes?: SkillClass[]
    }
  | {
      type: 'invulnerable'
      scope?: 'helpful'
      blocksAllies?: boolean
      classes?: SkillClass[]
    }
  | { type: 'damage-reduction-percent'; percent: number; includesPiercing?: boolean }
  | { type: 'stun-immunity' }
  | { type: 'damage-taken-multiplier'; skillId: string; multiplier: number; fromSourceOnly?: boolean; classes?: SkillClass[] }
  | { type: 'damage-taken-bonus'; skillId: string; amount: number; fromSourceOnly?: boolean; excludesAffliction?: boolean; classes?: SkillClass[] }
  | { type: 'on-skill-use-damage'; amount: number; damageType: DamageType; nonlethal?: boolean }

export type StatusDefinition = {
  id: string
  name: string
  duration: {
    type: 'opponent-turns' | 'owner-turns' | 'permanent'
    turns: number
  }
  modifiers: StatusModifier[]
  endsAfterHarmfulSkills?: number
  onExhaustEffects?: SkillEffect[]
  persistsOnDead?: boolean
  onShieldDestroyedEffects?: SkillEffect[]
  healthThresholdEffects?: { health: number; effects: SkillEffect[] }
  onOwnerTurnEndWhenStunned?: SkillEffect[]
  consecutiveHarmful?: { stages: string[]; idleTurns: number; idleStatusId: string }
  onStacksReach?: { count: number; statusId: string }
  indicatorNote?: string
  indicator?: { name?: string; image?: string }
  periodicOn?: 'every-turn'
  periodicInterval?: number
  periodicEffects?: SkillEffect[]
  idleEffects?: Extract<SkillEffect, { type: 'damage' }>[]
  onExpireEffects?: SkillEffect[]
  replaces?: string[]
  uses?: number
  consumeOnSkillUse?: { exceptSkillIds?: string[] }
  endsOnSkillUseExcept?: string[]
  endsOnSkillUse?: boolean
  endsOnDamagingSkillUse?: boolean
  consumeStackOnNonAfflictionSkillUse?: boolean
  reapplyOnNewStun?: boolean
  exclusiveToSource?: boolean
  endsWhenLinkedTargetDies?: boolean
  requiresSourceStatus?: string
  onTargetDeathEffects?: SkillEffect[]
  endsOnNewSkillDamage?: boolean
  ignoresImmunity?: boolean
  unremovable?: boolean
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
  sourceDamageBonus?: number
  appliedOnUserTurn?: number
  appliedAt?: { turn: number; action: number; effect: number }
  linkedTargetInstanceId?: string
  isPrimaryTarget?: boolean
  triggeredBy?: string[]
  lastTriggeredTurnBy?: Record<string, number>
  streak?: number
  idleTurns?: number
  lastHarmfulTurn?: number
  remainingUses?: number
  shieldRemaining?: number
  blockedModifiers?: StatusModifier['type'][]
  expiration: {
    playerId: PlayerId
    afterTurn: number
    permanent?: true
  }
}

export type DamageProtection = {
  modifiers: StatusModifier[]
  shields: { instanceId: string; remaining: number }[]
}

export type DamageEvent = {
  rawAmount?: number
  noMarkTrigger?: boolean
  newSkill?: boolean
  protection?: DamageProtection
  sourceInstanceId: string
  targetInstanceId: string
  skillId: string
  amount: number
  leechToInstanceId?: string
  execute?: boolean
  ignoresImmunity?: boolean
  nonlethal?: boolean
  executeBelowHealth?: number
  damageType: DamageType
}
export type DamageResult = { targetInstanceId: string; damage: number; healthBefore: number; healthAfter: number }
export type EffectError = 'unknown-status-definition' | 'invalid-effect-definition'
export type EffectContext = {
  state: BattleState; playerId: PlayerId; source: BattleCharacter; target: BattleCharacter
  receivedTargets?: Set<string>
  stunReapplications?: Set<string>
  damageBonus?: number
  deferred?: boolean
  random?: () => number
  elapsedTurns?: number
  periodic?: boolean
  selectedTargetInstanceId?: string
  applicationId?: string
  isPrimaryTarget?: boolean
  beneficiaryInstanceId?: string
  actionIndex?: number
  triggeringSource?: BattleCharacter
  triggeringSkill?: SkillDefinition
  skill: SkillDefinition; effectIndex: number; damageEvents: DamageEvent[]
}
