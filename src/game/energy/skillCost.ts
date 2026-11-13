import { getActiveStatuses } from '../effects/active'
import { statuses } from '../effects/catalog'
import { matchesSkillClasses } from '../classes'
import type { ActiveStatus, BattleCharacter, BattleState, EnergyCost, SkillDefinition, StatusModifier } from '../types'

type EnemyCostModifier = Extract<StatusModifier, { type: 'enemy-skill-cost-increase' }>
export type EnemyCostEffect = {
  source: BattleCharacter
  active: ActiveStatus
  modifiers: EnemyCostModifier[]
}

// A cobrança e os indicadores consultam a mesma lista de efeitos ativos.
export function getEnemyCostEffects(state: BattleState, user: BattleCharacter): EnemyCostEffect[] {
  if (user.health <= 0) return []
  const owner = Object.values(state.players).find((player) => player.team.some((member) => member.instanceId === user.instanceId))
  if (!owner) return []
  const effects: EnemyCostEffect[] = []
  for (const player of Object.values(state.players)) {
    if (player.id === owner.id) continue
    for (const source of player.team) {
      if (source.health <= 0) continue
      for (const active of getActiveStatuses(state, source)) {
        const modifiers = statuses.find((definition) => definition.id === active.statusId)?.modifiers
          .filter((modifier): modifier is EnemyCostModifier => modifier.type === 'enemy-skill-cost-increase') ?? []
        if (modifiers.length) effects.push({ source, active, modifiers })
      }
    }
  }
  return effects
}

export function getEffectiveEnergyCost(state: BattleState, user: BattleCharacter, skill: SkillDefinition): EnergyCost {
  let additional = 0
  for (const effect of getEnemyCostEffects(state, user)) {
    for (const modifier of effect.modifiers) {
      if (matchesSkillClasses(skill.classes, modifier.classes)) additional += modifier.random
    }
  }
  return additional === 0 ? skill.cost : { ...skill.cost, random: (skill.cost.random ?? 0) + additional }
}
