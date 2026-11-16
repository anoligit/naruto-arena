import { useCallback, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { characters } from '../characters/registry'
import { avatarImage } from './avatarCatalog'
import { playerProfile } from '../player/profile'
import { AccountContext } from './context'
import { AccountRequestError, accountRequest } from './api'
import type { Account, Credentials, Preferences, Registration } from './types'

const changeKey = 'naruto-arena:account-change'
function notify() { try { localStorage.setItem(changeKey, crypto.randomUUID()) } catch { /* As contas funcionam mesmo sem armazenamento local. */ } }
export default function AccountProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<Account | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'offline'>('loading')
  const [syncError, setSyncError] = useState('')
  const accountId = useRef<string | null>(null)
  const generation = useRef(0), refreshNumber = useRef(0)
  const saves = useRef<Promise<void>>(Promise.resolve())
  const refresh = useCallback(async () => {
    const number = ++refreshNumber.current, epoch = generation.current
    try {
      const current = await accountRequest('session')
      if (number !== refreshNumber.current || epoch !== generation.current) return
      if ((current?.id ?? null) !== accountId.current) { generation.current++; accountId.current = current?.id ?? null }
      setAccount(current); setStatus('ready')
    } catch { if (number === refreshNumber.current && epoch === generation.current) setStatus('offline') }
  }, [])
  const invalidateRefresh = useCallback(() => { refreshNumber.current++ }, [])
  useEffect(() => {
    const initial = window.setTimeout(() => { void refresh() }, 0)
    const changed = (event: StorageEvent) => { if (event.key === changeKey) void refresh() }
    const focused = () => { void refresh() }
    window.addEventListener('storage', changed); window.addEventListener('focus', focused)
    return () => { window.clearTimeout(initial); invalidateRefresh(); window.removeEventListener('storage', changed); window.removeEventListener('focus', focused) }
  }, [refresh, invalidateRefresh])
  const enter = useCallback(async (action: 'register' | 'login', input: Registration | Credentials) => {
    const epoch = ++generation.current
    const current = await accountRequest(action, 'POST', input)
    if (epoch !== generation.current) return
    generation.current++; accountId.current = current?.id ?? null
    setAccount(current); setStatus('ready'); setSyncError(''); notify()
  }, [])
  const register = useCallback((input: Registration) => enter('register', input), [enter])
  const login = useCallback((input: Credentials) => enter('login', input), [enter])
  const logout = useCallback(async () => {
    await saves.current.catch(() => {})
    ++generation.current
    await accountRequest('logout', 'POST')
    generation.current++; accountId.current = null
    setAccount(null); setStatus('ready'); setSyncError(''); notify()
  }, [])
  const preferences = useCallback((input: Preferences) => {
    const epoch = generation.current, ownerId = accountId.current
    const save = saves.current.catch(() => {}).then(async () => {
      if (epoch !== generation.current) return
      try {
        const current = await accountRequest('preferences', 'PATCH', input, ownerId ?? undefined)
        if (epoch !== generation.current) return
        setAccount(current); setSyncError(''); notify()
      } catch (error) {
        if (epoch !== generation.current) return
        if (error instanceof AccountRequestError && error.status === 401) { generation.current++; accountId.current = null; setAccount(null); notify() }
        setSyncError(error instanceof Error ? error.message : 'Não foi possível salvar a conta.'); throw error
      }
    })
    saves.current = save
    return save
  }, [])
  const profile = account ? { ...account.profile, image: avatarImage(account.avatarId) ?? characters.find(character => character.id === account.avatarId)?.image } : playerProfile
  return <AccountContext.Provider value={{ account, profile, status, syncError, refresh, register, login, logout, preferences }}>{children}</AccountContext.Provider>
}
