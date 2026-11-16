import { executeSkillEffects } from './execution'
import { settleTurnDamage } from './damage'
import { applyHealthPassives } from './passives'
import type { BattleState } from '../types'
import type { DamageEvent } from './types'

// A ação já foi paga. A resolução futura não cobra ação, chakra ou recarga de novo.
export function resolveScheduledSkills(state: BattleState, random: () => number = Math.random): void {
  const due = (state.scheduledSkills ?? []).filter(record => record.afterBattleTurn !== undefined
    ? state.turnNumber >= record.afterBattleTurn : state.activePlayerId === record.playerId && state.players[record.playerId].turnsStarted >= (record.afterOwnerTurn ?? Infinity))
  state.scheduledSkills = (state.scheduledSkills ?? []).filter(record => !due.includes(record))
  for (const record of due) {
    const members = Object.values(state.players).flatMap(player => player.team)
    for (const member of members) member.statuses = member.statuses.filter(active => active.instanceId !== record.markerInstanceId)
    const source = members.find(member => member.instanceId === record.sourceInstanceId), target = members.find(member => member.instanceId === record.targetInstanceId)
    if (!source || source.health <= 0 || !target || target.health <= 0) continue
    const damageEvents: DamageEvent[] = []
    const error = executeSkillEffects({ state, playerId: record.playerId, source, target, skill: record.skill, deferred: true, damageEvents, random })
    if (error) throw new Error(`Habilidade adiada inválida: ${record.skill.id}: ${error}`)
    settleTurnDamage(state, damageEvents)
    applyHealthPassives(state)
  }
}
