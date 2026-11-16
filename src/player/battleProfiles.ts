import { avatarImage } from '../account/avatarCatalog'
import { characters } from '../characters/registry'
import type { PlayerProfile } from './profile'
import type { PlayerId } from '../game/types'

export type BattleProfiles = Record<PlayerId, PlayerProfile>

// Partidas sem contas: só nome e avatar são conhecidos. Progressão fica vazia.
export function createBattleProfile(name: string, avatarId?: string): PlayerProfile {
  return {
    name, image: avatarImage(avatarId) ?? characters.find(character => character.id === avatarId)?.image,
    rank: null, clan: null, level: null, experience: null, overallRank: null,
    wins: null, losses: null, streak: null,
  }
}
