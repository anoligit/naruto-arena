import { getActiveModifiers } from '../effects/active'
import { matchesSkillClasses } from '../classes'
import type { BattleCharacter, BattleState, EnergyCost, SkillDefinition } from '../types'

export function getEffectiveEnergyCost(state: BattleState, user: BattleCharacter, skill: SkillDefinition): EnergyCost {
  const owner = Object.values(state.players).find((player) => player.team.some((member) => member.instanceId === user.instanceId))
  let additional = 0
  for (const player of Object.values(state.players)) {
    if (player.id === owner?.id) continue
    for (const member of player.team) {
      if (member.health <= 0) continue
      for (const modifier of getActiveModifiers(state, member)) {
        if (modifier.type === 'enemy-skill-cost-increase' && matchesSkillClasses(skill.classes, modifier.classes)) additional += modifier.random
      }
    }
  }
  return additional === 0 ? skill.cost : { ...skill.cost, random: (skill.cost.random ?? 0) + additional }
}
