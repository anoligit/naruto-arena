import { advanceTurn } from './advanceTurn'
import type { BattleState } from './types'

export function getRemainingTurnSeconds(
  state: BattleState,
  now: number = Date.now()
): number {
  if (state.phase === 'finished' || state.turnEndsAt === null) {
    return 0
  }

  return Math.max(
    0,
    Math.ceil((state.turnEndsAt - now) / 1000)
  )
}

export function expireTurn(
  state: BattleState,
  now: number = Date.now()
): BattleState {
  if (state.phase === 'finished' || state.turnEndsAt === null) {
    return state
  }

  if (now < state.turnEndsAt) {
    return state
  }

  return advanceTurn(state, now)
}