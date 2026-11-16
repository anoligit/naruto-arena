import type { AccountProgression } from '../missions/progression'
import type { PlayerProfile } from '../player/profile'

export type Account = {
  id: string
  username: string
  email: string
  createdAt: string
  avatarId: string | null
  team: (string | null)[]
  progression?: AccountProgression
  profile: PlayerProfile
}
export type Preferences = { avatarId?: string | null; team?: (string | null)[] }
export type Credentials = { username: string; password: string }
export type Registration = Credentials & { email: string; confirmPassword: string }
