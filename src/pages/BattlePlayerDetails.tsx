import './BattlePlayerDetails.css'
import PlayerAvatar from '../player/PlayerAvatar'
import { characters } from '../characters/registry'
import { imageUrl } from '../utils/imageUrl'
import type { BattlePlayer } from '../game/types'
import type { PlayerProfile } from '../player/profile'

export default function BattlePlayerDetails({ player, profile, onCharacter }: {
  player: BattlePlayer; profile: PlayerProfile; onCharacter: (instanceId: string) => void
}) {
  return <section className="battle-player-details" aria-label={`Perfil de ${profile.name}`}>
    <BattleProfileSummary profile={profile} />
    <div className="battle-profile-bottom">
    <div className="profile-battle-team" role="group" aria-label={`Time completo de ${profile.name}`}>
      <h4>Equipe</h4>
      {player.team.map(member => {
        const definition = characters.find(character => character.id === member.characterId)
        return <button key={member.instanceId} title={`Consultar ${definition?.name}`} aria-label={`Consultar ${definition?.name}`} onClick={() => onCharacter(member.instanceId)}>
          {definition?.image ? <img src={imageUrl(definition.image)} alt={definition.name} draggable={false} /> : definition?.name}
        </button>
      })}
    </div>
    <section className="battle-profile-achievements"><h4>Conquistas</h4><p>Em breve</p></section>
    </div>
  </section>
}

export function BattleProfileSummary({ profile }: { profile: PlayerProfile }) {
  const number = (value: number | null) => value === null ? '—' : new Intl.NumberFormat('pt-BR').format(value)
  const streak = profile.streak === null ? '—' : `${profile.streak > 0 ? '+' : ''}${profile.streak}`
  const sequence = profile.streak === null ? '—' : profile.streak === 0 ? '0' : `${Math.abs(profile.streak)} ${profile.streak > 0 ? 'vitórias' : 'derrotas'}`
  return <>
    <div className="battle-profile-summary">
      <div className="battle-profile-avatar"><PlayerAvatar profile={profile} /></div>
      <div className="battle-profile-heading"><h3>{profile.name}</h3><span className="battle-profile-level">LV {number(profile.level)}</span></div>
      <dl className="battle-profile-facts">
        <div className="battle-profile-clan"><dt>Clã:</dt><dd>{profile.clan ?? '—'}</dd></div>
        <div><dt>Rank:</dt><dd>{profile.rank ?? '—'}</dd></div>
        <div><dt>Rank geral:</dt><dd>{number(profile.overallRank)}</dd></div>
        <div><dt>Ratio:</dt><dd>{number(profile.wins)} - {number(profile.losses)} ({streak})</dd></div>
        <div><dt>Sequência:</dt><dd>{sequence}</dd></div>
      </dl>
    </div>
  </>
}
