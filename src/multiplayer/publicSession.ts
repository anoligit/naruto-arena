import { visibleBattleForPreview } from '../game/healthPreview'
import { createEmptyEnergyPool } from '../game/energy'
import { isCounterReportVisible } from '../game/effects/counters'
import { createLocalSession } from '../game/localBattleSession'
import type { LocalBattleSession } from '../game/localBattleSession'
import type { PlayerId } from '../game/types'

// Único ponto de saída do estado de uma partida para os clientes.
export function publicSessionFor(session: LocalBattleSession, viewerId: PlayerId, surrenderPending: boolean): LocalBattleSession {
  const battle = visibleBattleForPreview(session.battle, viewerId)
  for (const player of Object.values(battle.players)) {
    if (player.id === viewerId) continue
    player.energy = createEmptyEnergyPool()
    for (const member of player.team) {
      member.skillReadyOnTurn = {}
      member.lastSkillUsedOnTurn = null
    }
  }
  battle.counterReports = battle.counterReports.filter((report) => isCounterReportVisible(battle, report))
  const ownTurn = battle.activePlayerId === viewerId
  if (!ownTurn && battle.phase !== 'finished') battle.phase = 'planning'
  if (ownTurn) return { ...structuredClone(session), battle, surrenderPending }
  return { ...createLocalSession(battle, session.now), surrenderPending, log: [...session.log] }
}
