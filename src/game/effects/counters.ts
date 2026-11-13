import { characters } from '../../data/characters'
import type { BattleCharacter, BattleState, SkillDefinition } from '../types'
import type { ActiveStatus } from './types'

export type CounterReport = {
  id: string
  counteredPlayerId: ActiveStatus['sourcePlayerId']
  counteredCharacterId: string
  counteredSkillId: string
  counterPlayerId: ActiveStatus['sourcePlayerId']
  counterCharacterId: string
  counterSkillId?: string
  counterStatusId: string
  affectedCharacterId: string
  outcome: 'reflected' | 'cancelled' | 'return-blocked' | 'prevented-invulnerability'
  appliedAt: { turn: number; action: number; effect: number }
  visibleFromTurn: number
  expiration: ActiveStatus['expiration']
}

// Registra uma ocorrência, sem revelar ou prolongar o efeito que a causou.
// O registro fica na cópia transacional e só chega à tela após a confirmação.
export function recordCounter(
  state: BattleState, actor: BattleCharacter, skill: SkillDefinition,
  counter: ActiveStatus, affectedCharacterId: string,
  outcome: CounterReport['outcome'], actionIndex: number, effectIndex: number
): void {
  const owner = Object.values(state.players).find((player) => player.team.some((member) => member.instanceId === actor.instanceId))
  if (!owner) return
  const counterSource = Object.values(state.players).flatMap((player) => player.team)
    .find((member) => member.instanceId === counter.sourceCharacterId)
  const counterSkills = characters.find((character) => character.id === counterSource?.characterId)?.skillDefinitions ?? []
  const counterSkill = counterSkills.find((entry) => entry.id === counter.sourceSkillId)
    ?? counterSkills.find((entry) => entry.effects.some((effect) => effect.type === 'apply-status' && effect.statusId === counter.statusId))
  const followingPlayerId = owner.id === 'player-1' ? 'player-2' : 'player-1'
  const id = `counter:${state.turnNumber}:${actionIndex}:${actor.instanceId}:${affectedCharacterId}:${counter.instanceId}:${outcome}`
  if (state.counterReports.some((entry) => entry.id === id)) return
  state.counterReports.push({
    id,
    counteredPlayerId: owner.id,
    counteredCharacterId: actor.instanceId,
    counteredSkillId: skill.id,
    counterPlayerId: counter.sourcePlayerId,
    counterCharacterId: counter.sourceCharacterId,
    counterSkillId: counterSkill?.id,
    counterStatusId: counter.statusId,
    affectedCharacterId,
    outcome,
    appliedAt: { turn: state.turnNumber, action: actionIndex, effect: effectIndex },
    visibleFromTurn: state.turnNumber + 1,
    expiration: { playerId: followingPlayerId, afterTurn: state.players[followingPlayerId].turnsStarted + 1 },
  })
}

export function isCounterReportVisible(state: BattleState, report: CounterReport): boolean {
  return state.turnNumber === report.visibleFromTurn ||
    (state.phase === 'finished' && state.turnNumber + 1 === report.visibleFromTurn)
}
