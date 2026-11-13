import { useCallback, useEffect, useReducer } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { loadTeam, saveTeam, TEAM_KEY } from './teamStorage'
import { teamReducer } from './teamState'
import type { Team, TeamState } from './teamState'

export function useTeam(): [Team, Dispatch<SetStateAction<Team>>] {
  const [state, dispatch] = useReducer(teamReducer, undefined, (): TeamState => ({
    team: loadTeam(),
    persist: false,
  }))

  // Somente alterações feitas nesta janela são gravadas. Receber o time de
  // outra janela nunca deve regravar uma versão filtrada pelo catálogo local.
  useEffect(() => {
    if (state.persist) saveTeam(state.team)
  }, [state])

  useEffect(() => {
    function handleStorage(event: StorageEvent) {
      if (event.storageArea !== window.localStorage) return
      if (event.key !== TEAM_KEY && event.key !== null) return
      dispatch({ type: 'receive', team: loadTeam() })
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const setTeam = useCallback<Dispatch<SetStateAction<Team>>>((update) => {
    dispatch({ type: 'edit', update })
  }, [])
  return [state.team, setTeam]
}
