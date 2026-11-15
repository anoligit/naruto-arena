import { findSourceSkill } from './origin'
import { getAppliedModifiers } from './appliedModifiers'
import { filterIgnoredDefenses, isInvulnerableByModifiers } from './protection'
import { statuses } from './catalog'
import { isStunnedByModifiers } from './stun'
import type { BattleCharacter, BattleState, SkillDefinition } from '../types'
import type { ActiveStatus, StatusModifier } from './types'

export function getActiveStatuses(state: BattleState, character: BattleCharacter): ActiveStatus[] {
  return character.statuses.filter((active) => {
    const definition = statuses.find((entry) => entry.id === active.statusId)
    if (active.shieldRemaining === 0) return false
    const source = Object.values(state.players).flatMap((owner) => owner.team)
      .find((member) => member.instanceId === active.sourceCharacterId)
    if (definition?.requiresSourceStatus && !source?.statuses.some(status => status.statusId === definition.requiresSourceStatus && status.shieldRemaining !== 0)) return false
    if (definition?.endsWhenLinkedTargetDies && !Object.values(state.players).flatMap(player => player.team).some(member => member.instanceId === active.linkedTargetInstanceId && member.health > 0)) return false
    if (definition?.endsWhenSourceDies && (!source || source.health <= 0)) return false
    if (definition?.control && source) {
      const modifiers = source.statuses.flatMap(getAppliedModifiers)
      const skill = findSourceSkill(source, active.sourceSkillId)
      const stunned = isStunnedByModifiers(modifiers, skill)
      const targetModifiers = character.statuses.flatMap(getAppliedModifiers)
      const invulnerable = isInvulnerableByModifiers(targetModifiers, skill)
      if (stunned || invulnerable) return false
    }
    return true
  })
}

export function getActiveModifiers(state: BattleState, character: BattleCharacter): StatusModifier[] {
  const active = getActiveStatuses(state, character).filter(entry => !isActionSuppressed(state, character, entry))
  const ignoresDefenses = active.some(entry => getAppliedModifiers(entry).some(modifier => modifier.type === 'ignore-defenses'))
  const immune = !ignoresDefenses && active.some(entry => getAppliedModifiers(entry).some(m => m.type === 'harmful-effect-immunity'))
  const owner = Object.values(state.players).find(player => player.team.some(member => member.instanceId === character.instanceId))
  return filterIgnoredDefenses(active.flatMap(entry => {
    const modifiers = getAppliedModifiers(entry).map(modifier => modifier.type === 'damage-reduction' && modifier.growthPerTurn ? { ...modifier, amount: modifier.amount + modifier.growthPerTurn * Math.max(0, state.players[entry.sourcePlayerId].turnsStarted - (entry.appliedOnUserTurn ?? 0)) } : modifier)
    return immune && entry.sourcePlayerId !== owner?.id && !statuses.find(definition => definition.id === entry.statusId)?.ignoresImmunity
      ? modifiers.filter(m => m.type === 'periodic-damage' || m.type === 'on-skill-use-damage') : modifiers
  }))
}

// Action fica suspenso sem apagar o efeito nem prolongar sua duração.
export function isActionSuppressed(state: BattleState, target: BattleCharacter, active: ActiveStatus): boolean {
  if (!statuses.find(entry => entry.id === active.statusId)?.action) return false
  const source = Object.values(state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
  if (!source || source.health <= 0) return true
  const skill = findSourceSkill(source, active.sourceSkillId)
  const allied = state.players[active.sourcePlayerId].team.some(member => member.instanceId === target.instanceId)
  const modifiers = target.statuses.flatMap(getAppliedModifiers)
  return isStunnedByModifiers(getActiveStatuses(state, source).flatMap(getAppliedModifiers), skill) ||
    isInvulnerableByModifiers(allied ? modifiers.filter(modifier => modifier.type === 'invulnerable' && modifier.blocksAllies) : modifiers,
      allied && skill ? { ...skill, target: 'ally' } : skill)
}

export function hasActiveModifier(state: BattleState, character: BattleCharacter, type: StatusModifier['type']): boolean {
  return getActiveModifiers(state, character).some((modifier) => modifier.type === type)
}

export function isStunnedForSkill(state: BattleState, character: BattleCharacter, skill: SkillDefinition): boolean {
  return isStunnedByModifiers(getActiveModifiers(state, character), skill)
}

export function isInvulnerableToSkill(state: BattleState, character: BattleCharacter, skill: SkillDefinition): boolean {
  return isInvulnerableByModifiers(getActiveModifiers(state, character), skill)
}

export function isInvulnerableToAlliedSkill(state: BattleState, character: BattleCharacter, skill: SkillDefinition): boolean {
  return isInvulnerableByModifiers(getActiveModifiers(state, character).filter(modifier => modifier.type === 'invulnerable' && modifier.blocksAllies), { ...skill, target: 'ally' })
}

export function isIsolatedFrom(state: BattleState, target: BattleCharacter, source: BattleCharacter): boolean {
  return target.instanceId !== source.instanceId && getActiveStatuses(state, target).some(active =>
    getAppliedModifiers(active).some(modifier => modifier.type === 'isolated') && active.linkedTargetInstanceId !== source.instanceId)
}
