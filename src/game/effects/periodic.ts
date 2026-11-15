import { getActiveStatuses, isActionSuppressed } from './active'
import { getAppliedModifiers } from './appliedModifiers'
import type { BattleState } from '../types'
import type { DamageEvent } from './types'

// O primeiro dano pertence à própria habilidade. Repetições ocorrem no fim
// dos turnos seguintes de quem a aplicou, sem cobrar novamente energia/CD.
export function collectPeriodicDamage(state: BattleState): DamageEvent[] {
  const events: DamageEvent[] = []
  for (const player of Object.values(state.players)) {
    for (const target of player.team) {
      if (target.health <= 0) continue
      for (const active of getActiveStatuses(state, target)) {
        if (active.sourcePlayerId !== state.activePlayerId ||
          active.appliedOnUserTurn === state.players[state.activePlayerId].turnsStarted ||
          isActionSuppressed(state, target, active)) continue
        for (const modifier of getAppliedModifiers(active)) {
          if (modifier.type !== 'periodic-damage') continue
          events.push({ sourceInstanceId: active.sourceCharacterId, targetInstanceId: target.instanceId,
            skillId: active.sourceSkillId ?? active.statusId, amount: modifier.amount, damageType: modifier.damageType })
        }
      }
    }
  }
  return events
}
