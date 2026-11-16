import { createContext } from 'react'
import { playerProfile } from '../player/profile'
import type { PlayerProfile } from '../player/profile'
import type { Account, Credentials, Preferences, Registration } from './types'

type AuthState = {
  account: Account | null
  profile: PlayerProfile
  status: 'loading' | 'ready' | 'offline'
  refresh: () => Promise<void>
  syncError: string
  register: (input: Registration) => Promise<void>
  login: (input: Credentials) => Promise<void>
  logout: () => Promise<void>
  preferences: (input: Preferences) => Promise<void>
}
const unavailable = async () => { throw new Error('Abra a conta pelo jogo.') }
export const AccountContext = createContext<AuthState>({ account: null, profile: playerProfile, status: 'ready', refresh:async()=>{}, syncError: '', register: unavailable, login: unavailable, logout: unavailable, preferences: unavailable })
