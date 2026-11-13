import { characters } from '../data/characters'
import { statuses } from './statuses'
import type { ActiveStatus, BattleCharacter, BattleState, SkillDefinition, StatusModifier } from './types'

export function getActiveStatuses(state: BattleState, character: BattleCharacter): ActiveStatus[] {
  return character.statuses.filter((active) => {
    const definition = statuses.find((entry) => entry.id === active.statusId)
    const source = Object.values(state.players).flatMap((owner) => owner.team)
      .find((member) => member.instanceId === active.sourceCharacterId)
    if (definition?.endsWhenSourceDies && (!source || source.health <= 0)) return false
    if (definition?.control && source) {
      const modifiers = source.statuses.flatMap((entry) => statuses.find((status) => status.id === entry.statusId)?.modifiers ?? [])
      const skill = characters.find((entry) => entry.id === source.characterId)?.skillDefinitions?.find((entry) => entry.id === active.sourceSkillId)
      const stunned = !modifiers.some((modifier) => modifier.type === 'stun-immunity') && modifiers.some((modifier) =>
        modifier.type === 'stun' && (!modifier.classes || modifier.classes.some((name) => skill?.classes.includes(name))))
      const invulnerable = character.statuses.some((entry) => statuses.find((status) => status.id === entry.statusId)?.modifiers.some((modifier) => modifier.type === 'invulnerable'))
      if (stunned || invulnerable) return false
    }
    return true
  })
}

export function getActiveModifiers(state: BattleState, character: BattleCharacter): StatusModifier[] {
  return getActiveStatuses(state, character).flatMap((active) => statuses.find((entry) => entry.id === active.statusId)?.modifiers ?? [])
}

export function hasActiveModifier(state: BattleState, character: BattleCharacter, type: StatusModifier['type']): boolean {
  return getActiveModifiers(state, character).some((modifier) => modifier.type === type)
}

export function isStunnedForSkill(state: BattleState, character: BattleCharacter, skill: SkillDefinition): boolean {
  const modifiers = getActiveModifiers(state, character)
  if (modifiers.some((modifier) => modifier.type === 'stun-immunity')) return false
  return modifiers.some((modifier) => modifier.type === 'stun' &&
    (!modifier.classes || modifier.classes.some((className) => skill.classes.includes(className)))
  )
}
