import { findSourceSkill } from './origin'
import { statuses } from './catalog'
import { matchesSkillClasses } from '../classes'
import type { SkillEffect, EffectContext, EffectError } from './types'

// Usa as classes e a origem da habilidade aplicada, sem lista de personagens.
export function removeHarmfulStatuses(effect: Extract<SkillEffect, { type: 'remove-harmful-statuses' }>, context: EffectContext): EffectError | null {
  const owner = Object.values(context.state.players).find(player => player.team.some(member => member.instanceId === context.target.instanceId))
  context.target.statuses = context.target.statuses.filter(active => {
    if (statuses.find(definition => definition.id === active.statusId)?.unremovable) return true
    if (active.sourcePlayerId === owner?.id) return true
    const source = Object.values(context.state.players).flatMap(player => player.team).find(member => member.instanceId === active.sourceCharacterId)
    const skill = findSourceSkill(source, active.sourceSkillId)
    return !skill || !matchesSkillClasses(skill.classes, effect.classes)
  })
  return null
}
