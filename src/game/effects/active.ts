import { getAppliedModifiers } from './appliedModifiers'
import { isInvulnerableByModifiers } from './protection'
import { characters } from '../../data/characters'
import { statuses } from './catalog'
import { isStunnedByModifiers } from './stun'
import type { BattleCharacter, BattleState, SkillDefinition } from '../types'
import type { ActiveStatus, StatusModifier } from './types'

export function getActiveStatuses(state: BattleState, character: BattleCharacter): ActiveStatus[] {
  return character.statuses.filter((active) => {
    const definition = statuses.find((entry) => entry.id === active.statusId)
    if (active.shieldRemaining === 0 && definition?.modifiers.every(modifier => modifier.type === 'destructible-defense')) return false
    const source = Object.values(state.players).flatMap((owner) => owner.team)
      .find((member) => member.instanceId === active.sourceCharacterId)
    if (definition?.endsWhenSourceDies && (!source || source.health <= 0)) return false
    if (definition?.control && source) {
      const modifiers = source.statuses.flatMap(getAppliedModifiers)
      const skill = characters.find((entry) => entry.id === source.characterId)?.skillDefinitions?.find((entry) => entry.id === active.sourceSkillId)
      const stunned = isStunnedByModifiers(modifiers, skill)
      const targetModifiers = character.statuses.flatMap(getAppliedModifiers)
      const invulnerable = isInvulnerableByModifiers(targetModifiers, skill)
      if (stunned || invulnerable) return false
    }
    return true
  })
}

export function getActiveModifiers(state: BattleState, character: BattleCharacter): StatusModifier[] {
  return getActiveStatuses(state, character).filter(active => !isActionSuppressed(state, character, active)).flatMap(getAppliedModifiers)
}

// Action fica suspenso sem apagar o efeito nem prolongar sua duração.
export function isActionSuppressed(state: BattleState, target: BattleCharacter, active: ActiveStatus): boolean {
  if (!statuses.find(entry => entry.id === active.statusId)?.action) return false
  const source = Object.values(state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
  if (!source || source.health <= 0) return true
  const skill = characters.find(entry => entry.id === source.characterId)?.skillDefinitions.find(entry => entry.id === active.sourceSkillId)
  return isStunnedByModifiers(getActiveStatuses(state, source).flatMap(getAppliedModifiers), skill) ||
    isInvulnerableByModifiers(target.statuses.flatMap(getAppliedModifiers), skill)
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
