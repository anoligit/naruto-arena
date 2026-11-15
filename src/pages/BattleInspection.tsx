import CharacterInspectionContent from './CharacterInspectionContent'
import { getEffectiveSkill } from '../game/skillCatalog'
import { characters } from '../data/characters'
import type { BattleState } from '../game/types'
import type { PlayerId } from '../game/types'
import type { BattleProfiles } from '../player/battleProfiles'
import { createBattleProfile } from '../player/battleProfiles'
import BattlePlayerDetails from './BattlePlayerDetails'

export type BattleInspection =
  | { characterInstanceId: string; skillName: string | null }
  | { playerId: PlayerId; characterInstanceId?: never; skillName?: never }

export default function BattleInspectionPanel({ battle, inspection, profiles, onCharacter, onSkill }: {
  battle: BattleState
  inspection: BattleInspection | null
  profiles?: BattleProfiles
  onCharacter: (instanceId: string) => void
  onSkill?: (instanceId: string, skillName: string) => void
}) {
  if (inspection && 'playerId' in inspection) {
    const player = battle.players[inspection.playerId]
    const profile = profiles?.[player.id] ?? createBattleProfile(player.id === 'player-1' ? 'Jogador 1' : 'Jogador 2', player.team[0].characterId)
    return <BattlePlayerDetails player={player} profile={profile} onCharacter={onCharacter} />
  }
  const member = Object.values(battle.players).flatMap((owner) => owner.team)
    .find((entry) => entry.instanceId === inspection?.characterInstanceId)
  const definition = characters.find((entry) => entry.id === member?.characterId)
  const skillName = inspection?.skillName
  const baseSkill = definition?.skillDefinitions?.find((entry) => entry.name === skillName)
  const skill = member && baseSkill ? getEffectiveSkill(battle, member, baseSkill) : baseSkill
  if (!member || !definition) return null
  return <CharacterInspectionContent definition={definition} skill={skill} skillName={skillName}
    onSkill={onSkill ? name => onSkill(member.instanceId, name) : undefined} />
}
