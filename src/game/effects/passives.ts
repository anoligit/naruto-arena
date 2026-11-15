import { findSourceSkill } from './origin'
import { statuses } from './catalog'
import { getAppliedModifiers } from './appliedModifiers'
import { characters } from '../../data/characters'
import { applySkillEffect } from './apply'
import type { BattleState } from '../types'

// Despertares automáticos pertencem ao personagem, sem uma ação ou cobrança extra.
export function applyHealthPassives(state: BattleState): void {
  const members = Object.values(state.players).flatMap(player => player.team)
  for (let round = 0; round < members.length; round++) {
    for (const target of members) {
      for (const active of target.statuses) {
        if (getAppliedModifiers(active).some(modifier => modifier.type === 'life-link') && members.some(member => member.instanceId === active.linkedTargetInstanceId && member.health <= 0)) target.health = 0
      }
    }
  }
  for (const target of members.filter(member => member.health <= 0)) {
    for (const active of [...target.statuses]) {
      const definition = statuses.find(status => status.id === active.statusId)
      if (!definition?.onTargetDeathEffects?.length) continue
      target.statuses = target.statuses.filter(status => status.instanceId !== active.instanceId)
      const source = members.find(member => member.instanceId === active.sourceCharacterId)
      const skill = findSourceSkill(source, active.sourceSkillId)
      if (!source || source.health <= 0 || !skill) continue
      for (const [effectIndex, effect] of definition.onTargetDeathEffects.entries()) applySkillEffect(effect, { state, source, target, skill, playerId: active.sourcePlayerId, effectIndex, damageEvents: [] })
    }
  }
  for (const player of Object.values(state.players)) {
    for (const source of player.team) {
      if (source.health <= 0) continue
      const skills = characters.find(character => character.id === source.characterId)?.skillDefinitions ?? []
      for (const skill of skills) {
        if (!skill.passive || skill.healthTrigger === undefined || source.health > skill.healthTrigger || source.triggeredPassives?.includes(skill.id)) continue
        source.triggeredPassives = [...(source.triggeredPassives ?? []), skill.id]
        for (const [effectIndex, effect] of skill.effects.entries()) {
          const error = applySkillEffect(effect, { state, source, target: source, skill, playerId: player.id, effectIndex, damageEvents: [] })
          if (error) throw new Error(`Passiva inválida: ${skill.id}: ${error}`)
        }
      }
    }
  }
}
