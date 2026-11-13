import type { SetStateAction } from 'react'
import type { Character } from './data/characters'

export type Team = (Character | null)[]
export type TeamState = { team: Team; persist: boolean }
export type TeamAction =
  | { type: 'edit'; update: SetStateAction<Team> }
  | { type: 'receive'; team: Team }

export function teamReducer(state: TeamState, action: TeamAction): TeamState {
  if (action.type === 'receive') return { team: action.team, persist: false }
  const team = typeof action.update === 'function' ? action.update(state.team) : action.update
  return team === state.team ? state : { team, persist: true }
}
