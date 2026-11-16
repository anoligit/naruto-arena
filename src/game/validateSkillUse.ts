import { isIsolatedFrom, isInvulnerableToAlliedSkill } from './effects/active'
import { getSkillTargets, isSkillExpanded } from './targeting/index'
import { getRemainingCooldown } from './cooldown'
import { characters } from '../data/characters'
import { paySkillCost } from './energy/index'
import { statuses } from './effects'
import { getActiveModifiers, getActiveStatuses, isInvulnerableToSkill, isStunnedForSkill } from './effects'
import { getBattleSkills, getEffectiveSkill } from './skillCatalog'
import type {
  BattleCharacter,
  BattleState,
  EnergyPool,
  PlayerId,
  SkillDefinition,
} from './types'

export type SkillUseRequest = {
  playerId: PlayerId
  characterInstanceId: string
  skillId: string
  targetInstanceId: string
  randomPayment: EnergyPool
}

export type SkillUseError =
  | 'battle-finished'
  | 'not-your-turn'
  | 'turn-expired'
  | 'character-not-found'
  | 'character-defeated'
  | 'already-acted'
  | 'unknown-status'
  | 'stunned'
  | 'skill-not-found'
  | 'skill-replaced'
  | 'cooldown'
  | 'requirements-not-met'
  | 'target-already-affected'
  | 'target-not-found'
  | 'target-defeated'
  | 'invalid-target'
  | 'target-invulnerable'
  | 'invalid-payment'

export type SkillUseValidation =
  | { ok: false; reason: SkillUseError }
  | {
      ok: true
      skill: SkillDefinition
      energyAfterPayment: EnergyPool
    }

function hasUnknownStatus(character: BattleCharacter): boolean {
  return character.statuses.some((active) =>
    !statuses.some((status) => status.id === active.statusId)
  )
}

// Validates a proposed action without spending energy or changing the battle.
// The queue must also prevent two planned actions by the same character.
export function validateSkillUse(
  state: BattleState,
  request: SkillUseRequest,
  now: number = Date.now(),
  options: { allowBlockedTarget?: boolean } = {}
): SkillUseValidation {
  const fail = (reason: SkillUseError): SkillUseValidation => ({ ok: false, reason })

  if (state.phase === 'finished') return fail('battle-finished')
  if (request.playerId !== state.activePlayerId) return fail('not-your-turn')
  if (state.turnEndsAt === null || now >= state.turnEndsAt) return fail('turn-expired')

  const player = state.players[request.playerId]
  const character = player.team.find((member) =>
    member.instanceId === request.characterInstanceId
  )
  if (!character) return fail('character-not-found')
  if (character.health <= 0) return fail('character-defeated')
  if (character.lastSkillUsedOnTurn === player.turnsStarted) return fail('already-acted')
  if (hasUnknownStatus(character)) return fail('unknown-status')

  const definition = (character.copiedSkill?.id === request.skillId ? character.copiedSkill : undefined) ?? characters.find((definition) => definition.id === character.characterId)
    ?.skillDefinitions?.find((definition) => definition.id === request.skillId)
  if (!definition) return fail('skill-not-found')
  const skill = getEffectiveSkill(state, character, definition)
  if (skill.preselection || (skill.replayPrevious && !character.memory?.previousSkill) || (skill.requiredStoredSkills && (character.memory?.storedSkills?.length ?? 0) < skill.requiredStoredSkills) || (skill.summonSelections && !character.selectedOptions?.length)) return fail('requirements-not-met')
  if (skill.implementationPending || (skill.maxUserHealth !== undefined && character.health > skill.maxUserHealth)) return fail('requirements-not-met')
  if (skill.maxUses !== undefined && (character.skillUses?.[skill.id] ?? 0) >= skill.maxUses) return fail('requirements-not-met')
  if (isStunnedForSkill(state, character, skill)) return fail('stunned')
  if (getRemainingCooldown(character.skillReadyOnTurn[skill.id], player.turnsStarted) > 0) {
    return fail('cooldown')
  }

  for (const requirement of skill.requirements ?? []) {
    switch (requirement.type) {
      case 'has-revival':
        if (!getActiveModifiers(state, character).some(modifier => modifier.type === 'revive-on-death' && (modifier.uses ?? 1) > 0)) return fail('requirements-not-met')
        break
      case 'status-uses':
        if (!getActiveStatuses(state, character).some(active => active.statusId === requirement.statusId && (active.remainingUses ?? 0) >= (requirement.count ?? 1))) return fail('requirements-not-met')
        break
      case 'lacks-status':
        if (getActiveStatuses(state, character).some(status => status.statusId === requirement.statusId)) return fail('requirements-not-met')
        break
      case 'has-status':
        if (!getActiveStatuses(state, character).some((status) => status.statusId === requirement.statusId)) {
          return fail('requirements-not-met')
        }
        break
      default: {
        const unsupported: never = requirement.type
        throw new Error(`Unsupported skill requirement: ${unsupported}`)
      }
    }
  }

  if (!getBattleSkills(state, character).some((entry) => entry.id === skill.id)) return fail('skill-replaced')

  const opponentId: PlayerId = request.playerId === 'player-1' ? 'player-2' : 'player-1'
  const alliedTarget = player.team.find((member) => member.instanceId === request.targetInstanceId)
  const enemyTarget = state.players[opponentId].team.find((member) =>
    member.instanceId === request.targetInstanceId
  )
  const target = alliedTarget ?? enemyTarget
  if (!target) return fail('target-not-found')
  if (target.health <= 0) return fail('target-defeated')
  if (
    (skill.target === 'self' && target.instanceId !== character.instanceId) ||
    (skill.target === 'enemy' && !enemyTarget) ||
    (skill.target === 'ally' && !alliedTarget) ||
    (skill.target === 'self-or-enemy' && target.instanceId !== character.instanceId && !enemyTarget)
  ) return fail('invalid-target')
  if (isIsolatedFrom(state, target, character)) return fail('target-invulnerable')
  const forced = getActiveStatuses(state, character).find(active => statuses.find(status => status.id === active.statusId)?.modifiers.some(modifier => modifier.type === 'forced-target'))
  if (forced && target.instanceId !== forced.linkedTargetInstanceId) return fail('invalid-target')
  if (hasUnknownStatus(target)) return fail('unknown-status')
  if (skill.targetMustHaveStatus && !getActiveStatuses(state, target).some(active => active.statusId === skill.targetMustHaveStatus!.statusId && (!skill.targetMustHaveStatus!.fromSourceOnly || active.sourceCharacterId === character.instanceId))) return fail('requirements-not-met')
  if (skill.targetMustLackStatus && getActiveStatuses(state, target).some(active => active.statusId === skill.targetMustLackStatus)) return fail('target-already-affected')
  if (!options.allowBlockedTarget && alliedTarget && !skill.allowInvulnerableTarget && isInvulnerableToAlliedSkill(state, target, skill)) return fail('target-invulnerable')
  if (!options.allowBlockedTarget && enemyTarget && isInvulnerableToSkill(state, target, skill) &&
    (!skill.allowInvulnerableTarget || (isSkillExpanded(state, character, skill) && skill.targetExpansion?.target !== 'all-enemies'))) return fail('target-invulnerable')
  if (getSkillTargets(state, request.playerId, character, skill, target).some(hasUnknownStatus)) return fail('unknown-status')

  const energyAfterPayment = paySkillCost(player.energy, skill.cost, request.randomPayment)
  if (!energyAfterPayment) return fail('invalid-payment')

  return { ok: true, skill, energyAfterPayment }
}
