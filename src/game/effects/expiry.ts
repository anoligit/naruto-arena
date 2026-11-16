import { findSourceSkill } from './origin'
import { statuses } from './catalog'
import { hasStatusExpired } from './duration'
import { applySkillEffect } from './apply'
import type { ActiveStatus, DamageEvent } from './types'
import type { BattleCharacter, BattleState } from '../types'

// Remove todos os efeitos vencidos antes de resolver o dano de término.
// A morte da origem cancela esse dano quando endsWhenSourceDies estiver ativo.
export function collectExpiringDamage(state: BattleState): DamageEvent[] {
  const finished = state.players[state.activePlayerId]
  const ended: { target: BattleCharacter; active: ActiveStatus }[] = []
  for (const player of Object.values(state.players)) {
    for (const target of player.team) {
      target.statuses = target.statuses.filter(active => {
        if (!hasStatusExpired(active, finished.id, finished.turnsStarted)) return true
        ended.push({ target, active })
        return false
      })
    }
  }
  const damageEvents: DamageEvent[] = []
  for (const { target, active } of ended) {
    const definition = statuses.find(status => status.id === active.statusId)
    const source = Object.values(state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
    const skill = findSourceSkill(source, active.sourceSkillId)
    if (!source || !skill || target.health <= 0 && !definition?.persistsOnDead || (definition?.endsWhenSourceDies && source.health <= 0)) continue
    for (const [effectIndex, effect] of (definition?.onExpireEffects ?? []).entries()) {
      const error = applySkillEffect(effect, { state, source, target, skill, playerId: active.sourcePlayerId, effectIndex, damageEvents, periodic: true, damageBonus: active.sourceDamageBonus })
      if (error) throw new Error(`Efeito de término inválido: ${definition?.id}: ${error}`)
    }
  }
  return damageEvents
}
