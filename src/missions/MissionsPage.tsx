import { useAccount } from '../account/useAccount'
import { characters } from '../characters/registry'
import { characterMissions, missions, missionGoalText, missionRequirementsMet } from './index'
import { imageUrl } from '../utils/imageUrl'
import './Missions.css'

export default function MissionsPage() {
  const { account, profile } = useAccount()
  return <section className="missions-page"><h1>Missões</h1>
    {characterMissions.map(mission => {
      const reward = characters.find(c => c.id === mission.rewardCharacterId)!
      const completed = mission.id === 'haku' && account?.progression?.hakuUnlocked === true
      const eligible = missionRequirementsMet(mission, profile.level ?? 1, account?.progression?.completedMissionIds)
      const missingPrevious = mission.prerequisiteMissionIds.some(id=>!account?.progression?.completedMissionIds?.includes(id))
      const target = mission.objective.consecutiveWins
      const count = completed ? target : Math.min(target, mission.id === 'haku' ? account?.progression?.hakuStreak ?? 0 : 0)
      return <article key={mission.id} className="mission-card" aria-label={`Missão ${mission.name}`}>
        <header className="mission-heading"><p className="mission-path">Missões › {mission.category}</p><h2>{mission.name}</h2>
          <strong className="mission-state">{completed ? 'Concluída' : eligible ? 'Missão liberada' : missingPrevious ? 'Missões anteriores pendentes' : `Requer ${mission.minimumRank} · Nível ${mission.minimumLevel}`}</strong>
        </header>
        <div className="mission-layout">
          <section className="mission-information"><h3>Informações da missão</h3><dl><div><dt>Nome:</dt><dd>{mission.name}</dd></div><div><dt>Tipo:</dt><dd>{mission.category}</dd></div></dl></section>
          <section className="mission-requirements"><h3>Requisitos da missão</h3><dl><div><dt>Rank mínimo:</dt><dd>{mission.minimumRank} · Nível {mission.minimumLevel}</dd></div><div><dt>Missões anteriores:</dt><dd>{mission.prerequisiteMissionIds.length ? mission.prerequisiteMissionIds.map(id => missions[id]?.name ?? id).join(', ') : 'Nenhuma'}</dd></div></dl></section>
          <figure className="mission-picture"><img src={imageUrl(mission.image)} alt={`Imagem da missão ${mission.name}`} /></figure>
          <section className="mission-goals"><h3>Objetivos da missão</h3><p className="mission-goal-text">{missionGoalText(mission)} <strong>({count}/{target})</strong></p>
          </section>
          <section className="mission-reward"><h3>Recompensa da missão</h3><p>{completed ? 'Personagem desbloqueado.' : 'Conclua a missão para desbloquear:'}</p><figure><img src={imageUrl(reward.image)} alt={reward.name} /><figcaption>{reward.name}</figcaption></figure></section>
        </div>
        {!account && <p className="mission-account-note">Entre na sua conta para salvar seu progresso.</p>}
      </article>
    })}
  </section>
}
