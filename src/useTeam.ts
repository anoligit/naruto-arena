import { canUseCharacter } from './missions/progression'
import { useAccount } from './account/useAccount'
import { characters } from './characters/registry'
import { useCallback, useEffect, useReducer } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { loadTeam, saveTeam, TEAM_KEY } from './teamStorage'
import { teamReducer } from './teamState'
import type { Team, TeamState } from './teamState'

export function useTeam(): [Team, Dispatch<SetStateAction<Team>>] {
  const { account, preferences } = useAccount()
  const accountId = account?.id
  const key = accountId ? `${TEAM_KEY}:${accountId}` : TEAM_KEY
  const [state, dispatch] = useReducer(teamReducer, undefined, (): TeamState => ({
    team: account ? account.team.map(id => canUseCharacter(id??'',account.progression) ? characters.find(character => character.id === id) ?? null : null) : loadTeam().map(character=>character&&canUseCharacter(character.id)?character:null),
    persist: false,
  }))

  // Somente alterações feitas nesta janela são gravadas. Receber o time de
  // outra janela nunca deve regravar uma versão filtrada pelo catálogo local.
  useEffect(() => {
    if (!state.persist) return
    saveTeam(state.team, key)
    if (!accountId) return
    void preferences({ team: state.team.map(member => member?.id ?? null) }).catch(() => {})
  }, [state, key, accountId, preferences])

  useEffect(() => {
    function handleStorage(event: StorageEvent) {
      if (event.storageArea !== window.localStorage) return
      if (event.key !== key && event.key !== null) return
      dispatch({ type: 'receive', team: loadTeam(key).map(character=>character&&canUseCharacter(character.id,account?.progression)?character:null) })
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [key,account?.progression])

  useEffect(() => {
    const retry = () => dispatch({ type: 'edit', update: current => [...current] })
    window.addEventListener('arena:retry-team-save', retry)
    return () => window.removeEventListener('arena:retry-team-save', retry)
  }, [])

  const setTeam = useCallback<Dispatch<SetStateAction<Team>>>((update) => {
    dispatch({ type: 'edit', update })
  }, [])
  return [state.team, setTeam]
}
