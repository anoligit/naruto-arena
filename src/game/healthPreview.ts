import { statuses, isStatusVisible } from './effects'
import { buildConfirmedActions, getQueueBudget } from './plannedActions'
import type { PlannedAction } from './plannedActions'
import { createEmptyEnergyPool, energyDisplayOrder } from './energy'
import { resolveTurn } from './resolveTurn'
import type { BattleState, PlayerId } from './types'

export type HealthPreview = Record<string, { before: number; after: number }>

// Filtrar antes de validar ou simular: efeitos ocultos também poderiam alterar
// custos, alvos e falhas, revelando sua presença mesmo sem mostrar seu nome.
export function visibleBattleForPreview(battle: BattleState, viewerId: PlayerId): BattleState {
  const visible = structuredClone(battle)
  for (const player of Object.values(visible.players)) {
    for (const member of player.team) {
      member.statuses = member.statuses.filter((active) => {
        const definition = statuses.find((entry) => entry.id === active.statusId)
        return definition !== undefined && isStatusVisible(definition, active, viewerId)
      })
    }
  }
  return visible
}

// Estimativa do fim das ações já atribuídas. Nunca modifica vida, energia,
// cooldown ou relógio reais. Só a confirmação usa o estado completo da batalha.
export function previewTurnHealth(
  battle: BattleState, queue: readonly PlannedAction[], viewerId: PlayerId, now: number
): HealthPreview | null {
  if (!queue.length || battle.phase === 'finished' || viewerId !== battle.activePlayerId || battle.turnEndsAt === null || now >= battle.turnEndsAt) return null
  const visible = visibleBattleForPreview(battle, viewerId)
  const budget = getQueueBudget(visible, queue)
  if (!budget) return null

  // Os tipos de energia aleatória ainda serão escolhidos na confirmação.
  // Este pagamento existe apenas na cópia e não afeta a reserva do jogador.
  const payment = createEmptyEnergyPool()
  let needed = budget.randomRequired
  for (const type of energyDisplayOrder) {
    payment[type] = Math.min(budget.afterSpecific[type], needed)
    needed -= payment[type]
  }
  const actions = buildConfirmedActions(visible, queue, payment)
  if (!actions) return null
  const result = resolveTurn(visible, actions, now, { advanceToNextTurn: false })
  if (!result.ok) return null

  const preview: HealthPreview = {}
  for (const player of Object.values(battle.players)) {
    for (const member of player.team) {
      const projected = result.state.players[player.id].team.find((entry) => entry.instanceId === member.instanceId)!
      preview[member.instanceId] = { before: member.health, after: projected.health }
    }
  }
  return preview
}
