import type { EnergyPool, EnergyType, PlayerId } from '../game/types'
import type { LocalBattleSession } from '../game/localBattleSession'
import type { PlayerProfile } from '../player/profile'
import type { BattleProfiles } from '../player/battleProfiles'

export type BattleCommand =
  | { type: 'select-skill'; characterInstanceId: string; skillId: string }
  | { type: 'select-target'; targetInstanceId: string }
  | { type: 'remove-action'; characterInstanceId: string }
  | { type: 'move-action'; from: number; to: number }
  | { type: 'open-confirmation' }
  | { type: 'allocate'; value: EnergyPool }
  | { type: 'confirm-turn' }
  | { type: 'close-dialog' }
  | { type: 'open-exchange' }
  | { type: 'choose-exchange'; energyType: EnergyType }
  | { type: 'apply-exchange' }
  | { type: 'open-surrender' }
  | { type: 'confirm-surrender' }

export type ClientMessage =
  | { type: 'resume'; code: string; version: string; token?: string }
  | { type: 'create'; name: string; avatarId?: string; team: string[]; version: string }
  | { type: 'join'; code: string; name: string; avatarId?: string; team: string[]; version: string }
  | { type: 'command'; seq: number; turn: number; command: BattleCommand }

export type RoomSnapshot = {
  mode?: 'private' | 'quick' | 'training'
  code: string
  you: PlayerId
  players: { id: PlayerId; name: string; avatarId?: string; accountId?: string; connected?: boolean; missedTurns?: number; profile?: PlayerProfile }[]
  session: LocalBattleSession | null
}

export type ServerMessage =
  | { type: 'resume-info'; code: string; token?: string }
  | { type: 'state'; snapshot: RoomSnapshot }
  | { type: 'error'; message: string }
  | { type: 'closed'; message: string }

export type RemoteBattle = {
  playerId: PlayerId
  session: LocalBattleSession
  send: (command: BattleCommand) => void
  names: Record<PlayerId, string>
  profiles?: BattleProfiles
  code: string
}
