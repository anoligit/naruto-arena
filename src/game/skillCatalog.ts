import { characters } from '../data/characters'
import { getActiveStatuses } from './effects'
import { getEffectiveEnergyCost } from './energy/skillCost'
import type { BattleCharacter, BattleState, SkillDefinition } from './types'

export function getBattleSkills(state: BattleState, character: BattleCharacter): SkillDefinition[] {
  const definitions = characters.find((entry) => entry.id === character.characterId)?.skillDefinitions ?? []
  const active = getActiveStatuses(state, character)
  return definitions.filter((skill) => !skill.replacement).map((base) =>
    definitions.find((candidate) => candidate.replacement?.skillId === base.id &&
      active.some((status) => status.statusId === candidate.replacement?.whenStatusId)
    ) ?? base
  ).map((skill) => getEffectiveSkill(state, character, skill))
}

export function getBattleSkillNames(state: BattleState, character: BattleCharacter): string[] {
  const skills = getBattleSkills(state, character)
  return skills.map((skill) => skill.name)
}

// Resolve modificações a partir dos efeitos ativos, sem alterar o cadastro.
export function getEffectiveSkill(state: BattleState, character: BattleCharacter, skill: SkillDefinition): SkillDefinition {
  const enhancement = skill.enhancement
  const enhanced = enhancement && getActiveStatuses(state, character).some((active) => active.statusId === enhancement.whenUserHasStatus)
  return {
    ...skill,
    cost: getEffectiveEnergyCost(state, character, skill),
    allowInvulnerableTarget: skill.allowInvulnerableTarget || Boolean(enhanced && enhancement.ignoreInvulnerability),
    effects: enhanced && enhancement.damage
      ? skill.effects.map((effect) => effect.type === 'damage' ? { ...effect, ...enhancement.damage } : effect)
      : skill.effects,
  }
}
