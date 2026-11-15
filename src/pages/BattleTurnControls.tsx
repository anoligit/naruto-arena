import type { CSSProperties, ReactNode } from 'react'
import EnergyToken from '../components/EnergyToken'
import { energyLabels, energyDisplayOrder, energyDefinitions } from '../game/energy'
import type { BattleState, EnergyPool } from '../game/types'

export default function BattleTurnControls({ phase, opponentTurn, remaining, available, freeTotal, onReady, onExchange, mobile = false, review }: {
  phase: BattleState['phase']; opponentTurn: boolean; remaining: number
  available: EnergyPool; freeTotal: number; onReady: () => void; onExchange: () => void
  mobile?: boolean; review?: ReactNode
}) {
  return <div className={`turn-center${opponentTurn ? ' opponent-turn' : ''}${review ? ' reviewing-turn' : ''}`} aria-label="Controles do turno">
    {mobile && opponentTurn ? <div className="opponent-turn-state" role="status">TURNO DO OPONENTE…</div> :
      <button className="ready-button" aria-expanded={phase === 'confirmation' && !opponentTurn} disabled={(phase !== 'planning' && phase !== 'confirmation') || opponentTurn} onClick={onReady}>{opponentTurn ? 'OPPONENT TURN...' : 'FINALIZAR'}</button>}
    <div className={`turn-meter${remaining > 0 && remaining <= 10 ? ' time-low' : ''}`} style={{ '--turn-progress': `${Math.max(0, Math.min(100, remaining / 60 * 100))}%` } as CSSProperties}>
      <progress max={60} value={remaining} aria-label="Tempo restante do turno" />
      <span role="timer" aria-label="Segundos restantes">{remaining}s</span>
    </div>
    {review}
    <div className="turn-energy-controls" hidden={opponentTurn}>
      <div className="energy-reserve" aria-label={energyLabels.afterSpecificCosts}>
        {energyDisplayOrder.map(type => <span key={type} title={energyDefinitions[type].name}>
          <EnergyToken type={type} /><span className="sr-only">{energyDefinitions[type].name}: </span>× {available[type]}
        </span>)}
        <span title={energyLabels.freeTotal}><b aria-hidden="true">T</b><span className="sr-only">Total livre: </span>× {freeTotal}</span>
      </div>
      <button className="exchange-link" disabled={opponentTurn} onClick={onExchange}>
        <svg className="exchange-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9a8 8 0 0 1 13-5l3 3M20 2v5h-5M20 15a8 8 0 0 1-13 5l-3-3M4 22v-5h5" /></svg>
        {energyLabels.exchange}
      </button>
    </div>
  </div>
}
