import { createEmptyEnergyPool, exchangeEnergy, paySkillCost, energyRules } from './energy/index'
import { resolveTurn } from './resolveTurn'
import { expireTurn } from './turnTimer'
import { buildConfirmedActions, getQueueBudget, validatePlannedAction } from './plannedActions'
import type { PlannedAction } from './plannedActions'
import type { BattleState, EnergyPool, EnergyType } from './types'

export type BattleMode = 'ladder' | 'quick' | 'private'

export function appendAction(
  battle: BattleState, queue: readonly PlannedAction[], action: PlannedAction, now: number
): { ok: true; queue: PlannedAction[] } | { ok: false; reason: string } {
  if (battle.phase !== 'planning') return { ok: false, reason: 'confirmation-open' }
  if (queue.some((entry) => entry.characterInstanceId === action.characterInstanceId)) return { ok: false, reason: 'already-queued' }
  const validation = validatePlannedAction(battle, queue, action, now)
  if (!validation.ok) return validation
  // Persist only actor, skill and target. Random energy is chosen at confirmation.
  const planned: PlannedAction = {
    playerId: action.playerId, characterInstanceId: action.characterInstanceId,
    skillId: action.skillId, targetInstanceId: action.targetInstanceId,
  }
  return { ok: true, queue: [...queue, planned] }
}

export function applyExchange(
  battle: BattleState, queue: readonly PlannedAction[], sacrificed: EnergyPool, chosenType: EnergyType, now: number
): BattleState | null {
  if (battle.phase !== 'planning' || battle.turnEndsAt === null || now >= battle.turnEndsAt) return null
  const budget = getQueueBudget(battle, queue)
  if (!budget || !paySkillCost(budget.afterSpecific, { random: energyRules.exchangeCost }, sacrificed)) return null
  const player = battle.players[battle.activePlayerId]
  const energy = exchangeEnergy(player.energy, sacrificed, chosenType)
  if (!energy) return null
  const next = { ...battle, players: { ...battle.players, [player.id]: { ...player, energy } } }
  // An applied trade cannot make the planned specific or random costs impossible.
  return getQueueBudget(next, queue) ? next : null
}

export type PendingAction = { characterInstanceId: string; skillId: string }
export type LocalBattleSession = {
  battle: BattleState
  queue: PlannedAction[]
  pending: PendingAction | null
  randomPayment: EnergyPool
  surrenderPending: boolean
  exchangeOpen: boolean
  sacrificed: EnergyPool
  chosenType: EnergyType
  error: string
  notice: string
  log: string[]
  now: number
}

export function createLocalSession(battle: BattleState, now: number): LocalBattleSession {
  return {
    battle, queue: [], pending: null, randomPayment: createEmptyEnergyPool(),
    surrenderPending: false, exchangeOpen: false, sacrificed: createEmptyEnergyPool(), chosenType: 'ninjutsu',
    error: '', notice: '', log: [], now,
  }
}

export function tickSession(session: LocalBattleSession, now: number): LocalBattleSession {
  const battle = expireTurn(session.battle, now)
  if (battle === session.battle) return { ...session, now }
  return { ...createLocalSession(battle, now), notice: 'Tempo esgotado. Nenhuma habilidade foi executada.',
    log: [...session.log, `Turno ${session.battle.turnNumber}: tempo esgotado.`].slice(-8) }
}

export function confirmSession(session: LocalBattleSession, now: number): LocalBattleSession {
  if (session.battle.phase !== 'confirmation') return session
  const checked = tickSession(session, now)
  if (checked.battle !== session.battle) return checked
  const actions = buildConfirmedActions(session.battle, session.queue, session.randomPayment)
  if (!actions) return { ...session, now, error: 'choose-random-energy' }
  const result = resolveTurn(session.battle, actions, now)
  if (!result.ok) return result.reason === 'turn-expired' ? tickSession(session, now) : { ...session, error: result.reason, now }
  const entries = result.damageResults.map((item) => `${item.targetInstanceId}: ${item.damage} de dano (${item.healthAfter} de vida).`)
  return { ...createLocalSession(result.state, now),
    log: [...session.log, `Turno ${session.battle.turnNumber}: ${session.queue.length} habilidade(s).`, ...entries].slice(-8) }
}

// Cancelar uma ação libera a reserva; a energia confirmada permanece intacta.
export function cancelPlannedAction(session: LocalBattleSession, characterInstanceId: string): LocalBattleSession {
  if (session.battle.phase === 'finished' || session.battle.turnEndsAt === null || session.now >= session.battle.turnEndsAt) return session
  const queue = session.queue.filter((action) => action.characterInstanceId !== characterInstanceId)
  if (queue.length === session.queue.length) return session
  return { ...session, queue, randomPayment: createEmptyEnergyPool(), error: '' }
}
