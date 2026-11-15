import { findSourceSkill } from './origin'
import { statuses } from './catalog'
import { applySkillEffect } from './apply'
import { getActiveStatuses, isActionSuppressed, getActiveModifiers } from './active'
import { getAppliedModifiers } from './appliedModifiers'
import type { BattleState } from '../types'
import type { DamageEvent } from './types'

// O primeiro dano pertence à própria habilidade. Repetições ocorrem no fim
// dos turnos seguintes de quem a aplicou, sem cobrar novamente energia/CD.
export function collectPeriodicDamage(state: BattleState, random: () => number = Math.random): DamageEvent[] {
  const events: DamageEvent[] = []
  for (const player of Object.values(state.players)) {
    for (const target of player.team) {
      if (target.health <= 0) continue
      for (const active of getActiveStatuses(state, target)) {
        if (isActionSuppressed(state, target, active)) continue
        const definition = statuses.find(entry => entry.id === active.statusId)
        const periodic = active.sourcePlayerId === state.activePlayerId && active.appliedOnUserTurn !== state.players[state.activePlayerId].turnsStarted
        const idle = player.id === state.activePlayerId && target.lastSkillUsedOnTurn !== player.turnsStarted
        if (!periodic && !(idle && definition?.idleEffects?.length)) continue
        const source = Object.values(state.players).flatMap(p => p.team).find(m => m.instanceId === active.sourceCharacterId)
        const skill = findSourceSkill(source, active.sourceSkillId)
        if (source && skill) {
          for (const [effectIndex, effect] of [...(periodic ? definition?.periodicEffects ?? [] : []), ...(idle ? definition?.idleEffects ?? [] : [])].entries()) {
            const error = applySkillEffect(effect, { state, source, target, skill, playerId: active.sourcePlayerId, effectIndex, damageEvents: events, random, periodic: true, elapsedTurns: state.players[active.sourcePlayerId].turnsStarted - (active.appliedOnUserTurn ?? state.players[active.sourcePlayerId].turnsStarted), isPrimaryTarget: active.isPrimaryTarget })
            if (error) throw new Error(`Efeito periódico inválido: ${definition?.id}: ${error}`)
          }
        }
        if (!periodic) continue
        for (const modifier of getAppliedModifiers(active)) {
          if (modifier.type !== 'periodic-damage') continue
          events.push({ sourceInstanceId: active.sourceCharacterId, targetInstanceId: target.instanceId,
            skillId: active.sourceSkillId ?? active.statusId, amount: modifier.amount * (source ? getActiveModifiers(state, source).reduce((factor, current) => current.type === 'outgoing-damage-reduction-percent' ? factor * (1 - current.percent / 100) : factor, 1) : 1), damageType: modifier.damageType })
        }
      }
    }
  }
  return events
}
