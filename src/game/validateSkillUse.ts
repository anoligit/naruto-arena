import { getRemainingCooldown } from './cooldown'
import { characters } from '../data/characters'
import { paySkillCost } from './chakra/index'
import { statuses } from './effects'
import { getActiveStatuses, hasActiveModifier, isStunnedForSkill } from './effects'
import { getBattleSkills } from './skillCatalog'
import type {
  BattleCharacter,
  BattleState,
  ChakraPool,
  PlayerId,
  SkillDefinition,
} from './types'

export type SkillUseRequest = {
  playerId: PlayerId
  characterInstanceId: string
  skillId: string
  targetInstanceId: string
  randomPayment: ChakraPool
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
      chakraAfterPayment: ChakraPool
    }

function hasUnknownStatus(character: BattleCharacter): boolean {
  return character.statuses.some((active) =>
    !statuses.some((status) => status.id === active.statusId)
  )
}

// Validates a proposed action without spending chakra or changing the battle.
// The queue must also prevent two planned actions by the same character.
export function validateSkillUse(
  state: BattleState,
  request: SkillUseRequest,
  now: number = Date.now()
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

  const skill = characters.find((definition) => definition.id === character.characterId)
    ?.skillDefinitions?.find((definition) => definition.id === request.skillId)
  if (!skill) return fail('skill-not-found')
  if (isStunnedForSkill(state, character, skill)) return fail('stunned')
  if (getRemainingCooldown(character.skillReadyOnTurn[skill.id], player.turnsStarted) > 0) {
    return fail('cooldown')
  }

  for (const requirement of skill.requirements ?? []) {
    switch (requirement.type) {
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
    (skill.target === 'ally' && !alliedTarget)
  ) return fail('invalid-target')
  if (hasUnknownStatus(target)) return fail('unknown-status')
  if (enemyTarget && hasActiveModifier(state, target, 'invulnerable') && !skill.allowInvulnerableTarget) return fail('target-invulnerable')

  const chakraAfterPayment = paySkillCost(player.chakra, skill.cost, request.randomPayment)
  if (!chakraAfterPayment) return fail('invalid-payment')

  return { ok: true, skill, chakraAfterPayment }
}
