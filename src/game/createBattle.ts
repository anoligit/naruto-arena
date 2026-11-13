import { getCompleteTeam } from './teamRules'
import { TURN_DURATION_MS } from './rules'
import type { Character } from '../data/characters'
import { createEmptyEnergyPool, receiveTurnEnergy } from './energy/index'
import type {
  BattleCharacter,
  BattlePlayer,
  BattleState,
  PlayerId,
} from './types'

export function createBattle(
  firstTeam: Character[],
  secondTeam: Character[],
  startingPlayerId: PlayerId,
  startingHealth: number,
now: number = Date.now()
): BattleState {
  if (!Number.isInteger(startingHealth) || startingHealth <= 0) {
    throw new Error('A vida inicial deve ser um número inteiro positivo.')
  }

  if (
    startingPlayerId !== 'player-1' &&
    startingPlayerId !== 'player-2'
  ) {
    throw new Error('Jogador inicial inválido.')
  }

  function createPlayer(
    id: PlayerId,
    characters: Character[]
  ): BattlePlayer {
    const completeTeam = getCompleteTeam(characters)
    if (!completeTeam) {
      throw new Error('Cada equipe precisa ter exatamente 3 personagens cadastrados e diferentes.')
    }

    function createCharacter(character: Character): BattleCharacter {
      return {
        instanceId: `${id}:${character.id}`,
        characterId: character.id,
        health: startingHealth,
        maxHealth: startingHealth,
        statuses: [],
        skillReadyOnTurn: {},
        lastSkillUsedOnTurn: null,
      }
    }

    return {
      id,
      team: [
        createCharacter(completeTeam[0]),
        createCharacter(completeTeam[1]),
        createCharacter(completeTeam[2]),
      ],
      energy: createEmptyEnergyPool(),
      turnsStarted: 0,
    }
  }

  const players: BattleState['players'] = {
    'player-1': createPlayer('player-1', firstTeam),
    'player-2': createPlayer('player-2', secondTeam),
  }

  const startingPlayer = players[startingPlayerId]

  startingPlayer.turnsStarted = 1
  startingPlayer.energy = receiveTurnEnergy(
    startingPlayer.energy,
    3,
    true
  )

  return {
    players,
    activePlayerId: startingPlayerId,
    turnNumber: 1,
    turnEndsAt: now + TURN_DURATION_MS,
    phase: 'planning',
    winnerId: null,
  }
}