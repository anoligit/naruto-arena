import { getBattleSkills } from './skillCatalog'
import type { BattleState, PlayerId } from './types'

// Pré-selecionar não executa habilidade, não cobra energia e não ocupa a ação.
export function togglePreselection(battle: BattleState, playerId: PlayerId, instanceId: string, skillId: string, now: number): BattleState | null {
  if (battle.phase !== 'planning' || battle.activePlayerId !== playerId || battle.turnEndsAt === null || now >= battle.turnEndsAt) return null
  const source = battle.players[playerId].team.find(member => member.instanceId === instanceId)
  const skill = source && getBattleSkills(battle, source).find(skill => skill.id === skillId)
  if (!source || source.health <= 0 || source.lastSkillUsedOnTurn === battle.players[playerId].turnsStarted || !skill?.preselection || (source.skillReadyOnTurn[skillId] ?? 0) > battle.players[playerId].turnsStarted) return null
  const next = structuredClone(battle), member = next.players[playerId].team.find(member => member.instanceId === instanceId)!
  member.selectedOptions = member.selectedOptions?.includes(skillId) ? member.selectedOptions.filter(id => id !== skillId) : [...(member.selectedOptions ?? []), skillId]
  return next
}
