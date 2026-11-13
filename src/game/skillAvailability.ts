import { getDisplayedCooldown } from './cooldown'
import { characters } from '../data/characters'
import { validatePlannedAction } from './plannedActions'
import type { SkillUseError } from './validateSkillUse'
import type { PlannedAction } from './plannedActions'
import type { BattleState, PlayerId } from './types'

export type AvailabilityReason = SkillUseError | 'already-queued' | 'confirmation-open' | 'no-valid-target'
export type SkillAvailability = {
  usable: boolean
  reason: AvailabilityReason | null
  cooldown: number
  targetInstanceIds: string[]
}

// Consultation is unrestricted. This result controls use and target highlighting only.
export function getSkillAvailability(
  battle: BattleState,
  queue: readonly PlannedAction[],
  ownerId: PlayerId,
  sourceInstanceId: string,
  skillId: string,
  now: number
): SkillAvailability {
  const player = battle.players[ownerId]
  const source = player.team.find((member) => member.instanceId === sourceInstanceId)
  const cooldown = getDisplayedCooldown(source?.skillReadyOnTurn[skillId], player.turnsStarted, ownerId === battle.activePlayerId)
  const blocked = (reason: AvailabilityReason): SkillAvailability => ({ usable: false, reason, cooldown, targetInstanceIds: [] })
  if (battle.phase === 'finished') return blocked('battle-finished')
  if (ownerId !== battle.activePlayerId) return blocked('not-your-turn')
  if (battle.turnEndsAt === null || now >= battle.turnEndsAt) return blocked('turn-expired')
  if (battle.phase !== 'planning') return blocked('confirmation-open')
  if (queue.some((action) => action.characterInstanceId === sourceInstanceId)) return blocked('already-queued')
  if (!source) return blocked('character-not-found')
  const skill = characters.find((entry) => entry.id === source.characterId)
    ?.skillDefinitions?.find((entry) => entry.id === skillId)
  if (!skill) return blocked('skill-not-found')
  const targets: string[] = []
  let reason: AvailabilityReason = 'no-valid-target'
  for (const owner of Object.values(battle.players)) {
    for (const target of owner.team) {
      const result = validatePlannedAction(battle, queue, {
        playerId: ownerId, characterInstanceId: sourceInstanceId, skillId,
        targetInstanceId: target.instanceId,
      }, now)
      if (result.ok) targets.push(target.instanceId)
      else if (result.reason !== 'invalid-target' && result.reason !== 'target-defeated') reason = result.reason
    }
  }
  return targets.length ? { usable: true, reason: null, cooldown, targetInstanceIds: targets } : blocked(reason)
}
