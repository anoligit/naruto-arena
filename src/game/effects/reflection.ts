import { matchesSkillClasses } from '../classes'
import { getActiveModifiers, isInvulnerableToSkill } from './active'
import type { BattleCharacter, BattleState, SkillDefinition } from '../types'

export function getSkillReflection(
  state: BattleState,
  source: BattleCharacter,
  target: BattleCharacter,
  skill: SkillDefinition
): { reflected: boolean; blockedReflection: boolean } {
  const reflected = skill.target === 'enemy' && getActiveModifiers(state, target).some((modifier) =>
    modifier.type === 'reflect' && matchesSkillClasses(skill.classes, modifier.classes))
  // Uma habilidade refletida não reflete novamente. Control perde a conexão.
  const blockedReflection = reflected && (skill.classes.includes('control') || (!skill.allowInvulnerableTarget && isInvulnerableToSkill(state, source, skill)))
  return { reflected, blockedReflection }
}
