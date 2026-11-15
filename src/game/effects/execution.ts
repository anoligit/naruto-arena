import { characters } from '../../data/characters'
import { getSkillTargets } from '../targeting'
import { getActiveStatuses, isInvulnerableToSkill } from './active'
import { getAppliedModifiers } from './appliedModifiers'
import { getSkillReflection } from './reflection'
import { applySkillEffect } from './apply'
import { applyStatus } from './status'
import { statuses } from './catalog'
import { triggerSkillUseDamage } from './damage'
import { getEffectiveSkill } from '../skillCatalog'
import { recordCounter } from './counters'
import type { EffectContext, EffectError } from './types'

type ExecutionContext = Omit<EffectContext, 'effectIndex'>

// A marca reage apenas à nova utilização, não ao dano contínuo já existente.
function triggerHarmfulEffects(context: ExecutionContext): EffectError | null {
  for (const active of getActiveStatuses(context.state, context.source)) {
    for (const modifier of getAppliedModifiers(active)) {
      if (modifier.type !== 'on-harmful-skill') continue
      const source = Object.values(context.state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
      const skill = characters.find(character => character.id === source?.characterId)?.skillDefinitions.find(skill => skill.id === active.sourceSkillId)
      if (!source || !skill) continue
      const before = context.source.statuses.length
      const error = applyStatus({ type: 'apply-status', statusId: modifier.statusId }, { ...context,
        source, target: context.source, skill, playerId: active.sourcePlayerId, effectIndex: -2 })
      if (error) return error
      const applied = context.source.statuses[before]
      const definition = statuses.find(status => status.id === modifier.statusId)
      if (applied && definition?.duration.type === 'opponent-turns' && applied.expiration.playerId === context.state.activePlayerId) {
        applied.expiration.afterTurn -= 1
      }
    }
  }
  return null
}

export function executeSkillEffects(context: ExecutionContext, depth = 0): EffectError | null {
  if (depth > 12) return 'invalid-effect-definition'
  const { state, source, skill, target, playerId } = context
  const targets = getSkillTargets(state, playerId, source, skill, target)
  const harmful = !state.players[playerId].team.some(member => member.instanceId === target.instanceId)
  if (harmful) {
    const error = triggerHarmfulEffects(context)
    if (error) return error
  }
  // O primeiro counter intercepta a utilização inteira antes de atingir qualquer
  // destinatário de uma habilidade em área. A resposta não cobra custo/CD/ação.
  if (harmful && !skill.cannotBeCountered) {
    for (const recipient of targets) {
      const active = getActiveStatuses(state, recipient).find(status => getAppliedModifiers(status).some(modifier => modifier.type === 'counter-first-harmful'))
      if (!active) continue
      const modifier = getAppliedModifiers(active).find(modifier => modifier.type === 'counter-first-harmful')!
      if (modifier.type !== 'counter-first-harmful') continue
      recipient.statuses = recipient.statuses.filter(status => status.instanceId !== active.instanceId)
      recordCounter(state, source, skill, active, recipient.instanceId, 'countered', context.actionIndex ?? 0, -1)
      const defender = Object.values(state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
      const response = characters.find(character => character.id === defender?.characterId)?.skillDefinitions.find(skill => skill.id === modifier.responseSkillId)
      if (defender && defender.health > 0 && source.health > 0 && response && !isInvulnerableToSkill(state, source, response)) {
        const before = getActiveStatuses(state, defender)
        const error = executeSkillEffects({ ...context, playerId: active.sourcePlayerId, source: defender, target: source, skill: getEffectiveSkill(state, defender, response) }, depth + 1)
        if (!error) triggerSkillUseDamage(defender, before, context.damageEvents)
        return error
      }
      return null
    }
  }
  const appliedSelfEffects = new Set<number>()
  for (const recipient of targets) {
    const { reflected, blockedReflection, counter } = getSkillReflection(state, source, recipient, skill)
    if (counter) recordCounter(state, source, skill, counter, recipient.instanceId,
      skill.classes.includes('control') ? 'cancelled' : blockedReflection ? 'return-blocked' : 'reflected', context.actionIndex ?? 0, -1)
    for (const [effectIndex, effect] of (blockedReflection ? [] : skill.effects).entries()) {
      const self = effect.type === 'gain-energy' || (effect.type === 'apply-status' && effect.recipient === 'user')
      if (self && appliedSelfEffects.has(effectIndex)) continue
      const error = applySkillEffect(effect, { ...context,
        playerId: reflected && !self ? (playerId === 'player-1' ? 'player-2' : 'player-1') : playerId,
        target: reflected ? source : recipient, applicationId: recipient.instanceId, effectIndex })
      if (error) return error
      if (self) appliedSelfEffects.add(effectIndex)
    }
  }
  return null
}
