import { statuses, hasStatusExpired } from './effects'
import { TURN_DURATION_MS } from './rules'
import { receiveTurnEnergy } from './energy/index'
import type {
  BattleCharacter,
  BattlePlayer,
  BattleState,
  PlayerId,
} from './types'

export function advanceTurn(
  state: BattleState,
  now: number = Date.now()
): BattleState {
  if (state.phase === 'finished') {
    return state
  }

  const firstTeamAlive = state.players['player-1'].team.some(
    (character) => character.health > 0
  )

  const secondTeamAlive = state.players['player-2'].team.some(
    (character) => character.health > 0
  )

  if (!firstTeamAlive || !secondTeamAlive) {
    const winnerId: PlayerId | null =
      firstTeamAlive
        ? 'player-1'
        : secondTeamAlive
          ? 'player-2'
          : null

    return {
      ...state,
      phase: 'finished',
      winnerId,
      turnEndsAt: null,
    }
  }

  const finishedPlayer = state.players[state.activePlayerId]

  function updateCharacter(
    character: BattleCharacter
  ): BattleCharacter {
    return {
      ...character,
      statuses: character.statuses.filter((status) => {
        const expiresNow =
          hasStatusExpired(status, finishedPlayer.id, finishedPlayer.turnsStarted)

        const sourceDied = statuses.find((entry) => entry.id === status.statusId)?.endsWhenSourceDies &&
          !Object.values(state.players).some((owner) => owner.team.some((member) => member.instanceId === status.sourceCharacterId && member.health > 0))
        return !expiresNow && !sourceDied
      }),
    }
  }

  function updatePlayer(player: BattlePlayer): BattlePlayer {
    return {
      ...player,
      team: [
        updateCharacter(player.team[0]),
        updateCharacter(player.team[1]),
        updateCharacter(player.team[2]),
      ],
    }
  }

  const players: BattleState['players'] = {
    'player-1': updatePlayer(state.players['player-1']),
    'player-2': updatePlayer(state.players['player-2']),
  }

  const nextPlayerId: PlayerId =
    state.activePlayerId === 'player-1'
      ? 'player-2'
      : 'player-1'

  const nextPlayer = players[nextPlayerId]

  const livingCharacters = nextPlayer.team.filter(
    (character) => character.health > 0
  ).length

  players[nextPlayerId] = {
    ...nextPlayer,
    turnsStarted: nextPlayer.turnsStarted + 1,
    energy: receiveTurnEnergy(
      nextPlayer.energy,
      livingCharacters,
      false
    ),
  }

  return {
    ...state,
    players,
    activePlayerId: nextPlayerId,
    turnNumber: state.turnNumber + 1,
    turnEndsAt: now + TURN_DURATION_MS,
    phase: 'planning',
    winnerId: null,
  }
}