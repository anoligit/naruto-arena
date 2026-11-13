import { characters } from '../../characters/registry'
import type { Character } from '../../characters/definition'
import { createBattle } from '../createBattle'
import { getCompleteTeam } from '../teamRules'
import { trainingRules } from './config'

export function createTrainingBattle(team: readonly (Character | null)[], now = Date.now(), random = Math.random) {
  const readyTeam = getCompleteTeam(team)
  if (!readyTeam) throw new Error('Selecione três personagens diferentes para treinar.')
  const roster = [...characters]
  for (let index = roster.length - 1; index > 0; index--) {
    const picked = Math.floor(random() * (index + 1))
    ;[roster[index], roster[picked]] = [roster[picked], roster[index]]
  }
  const opponent = getCompleteTeam(roster.slice(0, 3))
  if (!opponent) throw new Error('O treinamento precisa de três personagens cadastrados para o adversário.')
  return createBattle(readyTeam, opponent, trainingRules.humanPlayerId, 100, now)
}
