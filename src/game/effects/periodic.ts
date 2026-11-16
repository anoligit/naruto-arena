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
        const elapsed = state.players[state.activePlayerId].turnsStarted - (active.appliedOnUserTurn ?? state.players[state.activePlayerId].turnsStarted - 1)
        const periodic = definition?.periodicOn === 'every-turn' || active.sourcePlayerId === state.activePlayerId && elapsed > 0 && elapsed % (definition?.periodicInterval ?? 1) === 0
        const idle = player.id === state.activePlayerId && target.lastSkillUsedOnTurn !== player.turnsStarted
        if (!periodic && !(idle && definition?.idleEffects?.length)) continue
        const source = Object.values(state.players).flatMap(p => p.team).find(m => m.instanceId === active.sourceCharacterId)
        const skill = findSourceSkill(source, active.sourceSkillId)
        if (source && skill) {
          const randomRecipients = new Map<string, typeof player.team[number][]>()
          for (const [effectIndex, effect] of [...(periodic ? definition?.periodicEffects ?? [] : []), ...(idle ? definition?.idleEffects ?? [] : [])].entries()) {
            const allies = state.players[active.sourcePlayerId].team.filter(member => member.health > 0)
            const enemies = state.players[active.sourcePlayerId === 'player-1' ? 'player-2' : 'player-1'].team.filter(member => member.health > 0)
            const choose = (members: typeof allies) => members.length ? [members[Math.floor(random() * members.length)]] : []
            const group = effect.targetGroup ?? effect.recipient ?? ''
            const cached = randomRecipients.get(group)
            const recipients = cached ?? (effect.recipient === 'user' ? [source] : effect.recipient === 'all-allies' ? allies : effect.recipient === 'all-enemies' ? enemies : effect.recipient === 'random-ally' ? choose(allies) : effect.recipient === 'random-enemy' ? choose(enemies) : [target])
            if (effect.recipient === 'random-enemy' || effect.recipient === 'random-ally') randomRecipients.set(group, recipients)
            for (const recipient of recipients) {
              const error = applySkillEffect(effect, { state, source, target: recipient, skill, playerId: active.sourcePlayerId, effectIndex, applicationId: recipient.instanceId, damageEvents: events, random, periodic: true, damageBonus: active.sourceDamageBonus, elapsedTurns: state.players[active.sourcePlayerId].turnsStarted - (active.appliedOnUserTurn ?? state.players[active.sourcePlayerId].turnsStarted), isPrimaryTarget: active.isPrimaryTarget })
              if (error) throw new Error(`Efeito periódico inválido: ${definition?.id}: ${error}`)
            }
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
