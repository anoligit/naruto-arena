import PlayerAvatar from './PlayerAvatar'
import type { PlayerProfile } from './profile'
import './PlayerProfileCard.css'

const number = (value: number | null) => value === null ? '—' : new Intl.NumberFormat('pt-BR').format(value)

export default function PlayerProfileCard({ profile }: { profile: PlayerProfile }) {
  const streak = profile.streak === null ? '—' : `${profile.streak > 0 ? '+' : ''}${profile.streak}`
  return <section className="selection-profile" aria-label="Perfil do jogador">
    <div className="selection-profile-avatar">
      <PlayerAvatar profile={profile} />
    </div>
    <div className="selection-profile-info">
      <h3>{profile.name}</h3>
      <p>{profile.rank ?? 'Rank: —'}</p>
      <dl>
        <div><dt>Clã</dt><dd>{profile.clan ?? '—'}</dd></div>
        <div><dt>Level</dt><dd>{number(profile.level)}{profile.experience !== null && ` (${number(profile.experience)} XP)`}</dd></div>
        <div><dt>Rank geral</dt><dd>{number(profile.overallRank)}</dd></div>
        <div><dt>Ratio</dt><dd>{number(profile.wins)} - {number(profile.losses)} ({streak})</dd></div>
      </dl>
    </div>
  </section>
}
