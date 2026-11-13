import type { BattleState, PlayerId } from '../types'
import type { ActiveStatus, StatusDefinition } from './types'

export function createStatusExpiration(
  state: BattleState,
  sourcePlayerId: PlayerId,
  definition: StatusDefinition
): ActiveStatus['expiration'] {
  const opponentId = sourcePlayerId === 'player-1' ? 'player-2' : 'player-1'
  const playerId = definition.duration.type === 'owner-turns' ? sourcePlayerId : opponentId
  return { playerId, afterTurn: state.players[playerId].turnsStarted + definition.duration.turns }
}

export function hasStatusExpired(active: Pick<ActiveStatus, 'expiration'>, finishedPlayerId: PlayerId, finishedTurns: number): boolean {
  return active.expiration.playerId === finishedPlayerId && active.expiration.afterTurn <= finishedTurns
}
