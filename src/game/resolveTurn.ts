import { advanceTurn } from './advanceTurn'
import { expireTurn } from './turnTimer'
import { getActiveModifiers, getActiveStatuses, hasActiveModifier } from './statusRules'
import { applySkillEffect, settleTurnDamage, triggerSkillUseDamage } from './skillEffects'
import type { DamageEvent, DamageResult, EffectError } from './skillEffects'
import { validateSkillUse } from './validateSkillUse'
import type { SkillUseError, SkillUseRequest } from './validateSkillUse'
import type { BattleState } from './types'

export type TurnResolution =
  | {
      ok: true
      state: BattleState
      damageEvents: DamageEvent[]
      damageResults: DamageResult[]
    }
  | {
      ok: false
      state: BattleState
      reason: SkillUseError | EffectError
      actionIndex: number | null
    }

// Call only when the player confirms the complete ordered queue.
// Invalid queues spend no chakra and execute no actions. Applied exchanges are
// already part of the input state, so cancellation or timeout cannot undo them.
export function resolveTurn(
  state: BattleState,
  actions: readonly SkillUseRequest[],
  now: number = Date.now()
): TurnResolution {
  if (state.phase === 'finished') {
    return { ok: false, state, reason: 'battle-finished', actionIndex: null }
  }
  if (state.turnEndsAt === null || now >= state.turnEndsAt) {
    return {
      ok: false,
      state: expireTurn(state, now),
      reason: 'turn-expired',
      actionIndex: null,
    }
  }

  const working = structuredClone(state)
  const damageEvents: DamageEvent[] = []

  for (const [actionIndex, request] of actions.entries()) {
    const validation = validateSkillUse(working, request, now)
    if (!validation.ok) {
      return { ok: false, state, reason: validation.reason, actionIndex }
    }
    const skill = validation.skill
    if (!Number.isInteger(skill.cooldown) || skill.cooldown < 0) {
      return { ok: false, state, reason: 'invalid-effect-definition', actionIndex }
    }

    const player = working.players[request.playerId]
    const source = player.team.find((character) =>
      character.instanceId === request.characterInstanceId
    )!
    const target = Object.values(working.players).flatMap((owner) => owner.team)
      .find((character) => character.instanceId === request.targetInstanceId)!

    const activeBefore = getActiveStatuses(working, source)
    player.chakra = validation.chakraAfterPayment
    source.lastSkillUsedOnTurn = player.turnsStarted
    source.skillReadyOnTurn[skill.id] = player.turnsStarted + skill.cooldown + 1

    const reflected = skill.target === 'enemy' && getActiveModifiers(working, target).some((modifier) =>
      modifier.type === 'reflect' && modifier.classes.some((name) => skill.classes.includes(name)))
    // A reflected skill cannot reflect again. Control loses its connection.
    const blockedReflection = reflected && (skill.classes.includes('control') || hasActiveModifier(working, source, 'invulnerable'))
    for (const [effectIndex, effect] of (blockedReflection ? [] : skill.effects).entries()) {
      const error = applySkillEffect(effect, {
        state: working,
        playerId: reflected && !(effect.type === 'apply-status' && effect.recipient === 'user') ? (player.id === 'player-1' ? 'player-2' : 'player-1') : player.id,
        source,
        target: reflected ? source : target,
        skill,
        effectIndex,
        damageEvents,
      })
      if (error) return { ok: false, state, reason: error, actionIndex }
    }
    triggerSkillUseDamage(source, activeBefore, damageEvents)
    for (const owner of Object.values(working.players)) {
      for (const member of owner.team) member.statuses = getActiveStatuses(working, member)
    }
  }

  const damageResults = settleTurnDamage(working, damageEvents)
  // Source-dependent effects end on death even when this damage ends the match.
  for (const owner of Object.values(working.players)) {
    for (const member of owner.team) member.statuses = getActiveStatuses(working, member)
  }
  return {
    ok: true,
    state: advanceTurn(working, now),
    damageEvents,
    damageResults,
  }
}
