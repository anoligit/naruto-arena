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
  if (skill.replayPrevious && character.memory?.previousSkill) {
    const previous = character.memory.previousSkill
    const bonus = skill.replayPrevious.damageBonus
    skill = { ...previous, id: skill.id, originSkillId: previous.originSkillId ?? previous.id, effectDamageBonus: skill.replayPrevious.damageBonus, name: skill.name, image: skill.image, description: skill.description, cooldown: skill.cooldown, replayPrevious: skill.replayPrevious, replacement: skill.replacement, requirements: undefined, variants: undefined, enhancement: undefined, cost: { random: (previous.cost.random ?? 0) + Object.values(previous.cost.specific ?? {}).reduce((sum, value) => sum + value, 0) }, effects: previous.effects.map(effect => effect.type === 'damage' && effect.recipient !== 'user' ? { ...effect, amount: effect.amount + bonus, ...(effect.primaryAmount !== undefined ? { primaryAmount: effect.primaryAmount + bonus } : {}) } : effect) }
  }
  if (skill.summonSelections) {
    const definitions = characters.find(definition => definition.id === character.characterId)?.skillDefinitions ?? []
    const selected = definitions.filter(option => character.selectedOptions?.includes(option.id) && option.preselection?.group === skill.summonSelections?.group)
    skill = { ...skill, cost: { ...skill.cost, random: (skill.cost.random ?? 0) + selected.length * skill.summonSelections.randomPerOption }, effects: [...skill.effects, ...selected.flatMap(option => option.effects)] }
  }
  if (skill.storedCast?.countWhenStatus && getActiveStatuses(state, character).some(status => status.statusId === skill.storedCast?.countWhenStatus?.statusId)) skill = { ...skill, requiredStoredSkills: skill.storedCast.countWhenStatus.count }
  const variant = skill.variants?.find(entry => getActiveStatuses(state, character).some(active => active.statusId === entry.whenUserHasStatus))
  if (variant) skill = { ...skill, cost: variant.cost, effects: variant.effects, cooldown: variant.cooldown ?? skill.cooldown }
  const enhancement = skill.enhancement
  const enhanced = enhancement && getActiveStatuses(state, character).some((active) => active.statusId === enhancement.whenUserHasStatus)
  return {
    ...skill,
    cooldown: Math.max(0, skill.cooldown + getActiveModifiers(state, character).reduce((sum, modifier) => modifier.type === 'cooldown-increase' ? sum + modifier.amount : modifier.type === 'cooldown-reduction' ? sum - modifier.amount : sum, 0)),
    cost: getEffectiveEnergyCost(state, character, skill),
    allowInvulnerableTarget: skill.allowInvulnerableTarget || Boolean(enhanced && enhancement.ignoreInvulnerability),
    effects: enhanced && enhancement.damage
      ? skill.effects.map((effect) => effect.type === 'damage' ? { ...effect, ...enhancement.damage } : effect)
      : skill.effects,
  }
}

// A cópia guarda o jutsu que foi usado, com a melhoria e a área já resolvidas.
export function freezeUsedSkill(state: BattleState, source: BattleCharacter, skill: SkillDefinition): SkillDefinition {
  const active = getActiveStatuses(state, source)
  const expansion = skill.targetExpansion
  return structuredClone({ ...skill, variants: undefined, enhancement: undefined, requirements: undefined, replacement: undefined, replayPrevious: undefined,
    randomTargetCount: skill.randomTargetCount ? { base: skill.randomTargetCount.base + active.filter(status => status.statusId === skill.randomTargetCount?.statusId).length } : undefined,
    targetExpansion: expansion && (!expansion.whenUserHasStatus || active.some(status => status.statusId === expansion.whenUserHasStatus)) ? { target: expansion.target } : undefined,
    effects: skill.effects.filter(effect => !effect.whenUserHasStatus || active.some(status => status.statusId === effect.whenUserHasStatus)).map(effect => ({ ...effect, whenUserHasStatus: undefined })) })
}
