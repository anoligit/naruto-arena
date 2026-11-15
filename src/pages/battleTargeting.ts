import { getBattleSkills } from '../game/skillCatalog'
import { getAffectedCharacters } from '../game/targeting'
import type { PendingAction } from '../game/localBattleSession'
import type { SkillAvailability } from '../game/skillAvailability'
import type { BattleState, PlayerId } from '../game/types'

// Piscar significa que a escolha muda quem recebe a habilidade. Habilidades
// em área e auras permanecem estáticas, mesmo permitindo vários locais de clique.
export function shouldPulseTargets(
  battle: BattleState, playerId: PlayerId,
  pending: PendingAction | null, availability: SkillAvailability | null
): boolean {
  if (!pending || !availability?.usable || availability.targetInstanceIds.length < 2) return false
  const source = battle.players[playerId].team.find(member => member.instanceId === pending.characterInstanceId)
  const skill = source && getBattleSkills(battle, source).find(entry => entry.id === pending.skillId)
  if (!source || !skill) return false
  const targets = Object.values(battle.players).flatMap(player => player.team)
    .filter(member => availability.targetInstanceIds.includes(member.instanceId))
  if (targets.length < 2) return false
  const recipients = targets.map(target => new Set(getAffectedCharacters(battle, playerId, source, skill, target).map(member => member.instanceId)))
  const first = recipients[0]
  return recipients.some(group => group.size !== first.size || [...group].some(id => !first.has(id)))
}
