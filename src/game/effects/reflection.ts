import { matchesSkillClasses } from '../classes'
import { getActiveStatuses, isInvulnerableToSkill } from './active'
import { getAppliedModifiers } from './appliedModifiers'
import type { ActiveStatus } from './types'
import type { BattleCharacter, BattleState, SkillDefinition } from '../types'

export function getSkillReflection(
  state: BattleState,
  source: BattleCharacter,
  target: BattleCharacter,
  skill: SkillDefinition
): { reflected: boolean; blockedReflection: boolean; counter?: ActiveStatus } {
  const counter = skill.target === 'enemy' ? getActiveStatuses(state, target).find((active) =>
    getAppliedModifiers(active).some((modifier) => modifier.type === 'reflect' && matchesSkillClasses(skill.classes, modifier.classes))) : undefined
  const reflected = counter !== undefined
  // Uma habilidade refletida não reflete novamente. Control perde a conexão.
  const blockedReflection = reflected && (skill.classes.includes('control') || (!skill.allowInvulnerableTarget && isInvulnerableToSkill(state, source, skill)))
  return { reflected, blockedReflection, counter }
}
