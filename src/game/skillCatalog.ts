import { characters } from '../data/characters'
import { getActiveModifiers, getActiveStatuses } from './effects'
import { getEffectiveEnergyCost } from './energy/skillCost'
import type { BattleCharacter, BattleState, SkillDefinition } from './types'

export function getBattleSkills(state: BattleState, character: BattleCharacter): SkillDefinition[] {
  const definitions = characters.find((entry) => entry.id === character.characterId)?.skillDefinitions ?? []
  const active = getActiveStatuses(state, character)
  return definitions.filter((skill) => !skill.replacement && !skill.passive).map((base) =>
    definitions.find((candidate) => candidate.replacement?.skillId === base.id &&
      active.some((status) => status.statusId === candidate.replacement?.whenStatusId)
    ) ?? (base.copySlotStatusId && active.some(status => status.statusId === base.copySlotStatusId) && character.copiedSkill ? character.copiedSkill : base)
  ).map((skill) => getEffectiveSkill(state, character, skill))
}

export function getBattleSkillNames(state: BattleState, character: BattleCharacter): string[] {
  const skills = getBattleSkills(state, character)
  return skills.map((skill) => skill.name)
}

// Resolve modificações a partir dos efeitos ativos, sem alterar o cadastro.
export function getEffectiveSkill(state: BattleState, character: BattleCharacter, skill: SkillDefinition): SkillDefinition {
  const variant = skill.variants?.find(entry => getActiveStatuses(state, character).some(active => active.statusId === entry.whenUserHasStatus))
  if (variant) skill = { ...skill, cost: variant.cost, effects: variant.effects, cooldown: variant.cooldown ?? skill.cooldown }
  const enhancement = skill.enhancement
  const enhanced = enhancement && getActiveStatuses(state, character).some((active) => active.statusId === enhancement.whenUserHasStatus)
  return {
    ...skill,
    cooldown: skill.cooldown + getActiveModifiers(state, character).reduce((sum, modifier) => modifier.type === 'cooldown-increase' ? sum + modifier.amount : sum, 0),
    cost: getEffectiveEnergyCost(state, character, skill),
    allowInvulnerableTarget: skill.allowInvulnerableTarget || Boolean(enhanced && enhancement.ignoreInvulnerability),
    effects: enhanced && enhancement.damage
      ? skill.effects.map((effect) => effect.type === 'damage' ? { ...effect, ...enhancement.damage } : effect)
      : skill.effects,
  }
}
