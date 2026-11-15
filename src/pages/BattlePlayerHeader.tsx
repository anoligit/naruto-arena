import PlayerAvatar from '../player/PlayerAvatar'
import type { PlayerProfile } from '../player/profile'

export default function BattlePlayerHeader({ profile, opponent = false, onInspect }: {
  profile: PlayerProfile; opponent?: boolean; onInspect: () => void
}) {
  return <div className={`player-card${opponent ? ' enemy-player' : ''}`}>
    <div className="player-identity"><strong title={profile.name}>{profile.name}</strong><small>{profile.rank ?? 'Rank: —'}</small></div>
    <button className="player-avatar" aria-label={`Consultar perfil de ${profile.name}`} title={`Consultar perfil de ${profile.name}`} onClick={onInspect}>
      <PlayerAvatar profile={profile} />
    </button>
  </div>
}
