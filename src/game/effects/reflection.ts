import { matchesSkillClasses } from '../classes'
import { hasActiveModifier, getActiveStatuses, isInvulnerableToSkill } from './active'
import { getAppliedModifiers } from './appliedModifiers'
import type { ActiveStatus } from './types'
import type { BattleCharacter, BattleState, SkillDefinition } from '../types'

export function getSkillReflection(
  state: BattleState,
  source: BattleCharacter,
  target: BattleCharacter,
  skill: SkillDefinition
): { reflected: boolean; blockedReflection: boolean; counter?: ActiveStatus; redirectTarget?: BattleCharacter } {
  if (!hasActiveModifier(state, target, 'reflect')) return { reflected: false, blockedReflection: false }
  const enemyTarget = !Object.values(state.players).some(player => player.team.some(member => member.instanceId === source.instanceId) && player.team.some(member => member.instanceId === target.instanceId))
  const counter = !skill.cannotBeCountered && (skill.target === 'enemy' || (skill.target === 'ally-or-enemy' && enemyTarget)) ? getActiveStatuses(state, target).find((active) =>
    getAppliedModifiers(active).some((modifier) => modifier.type === 'reflect' && matchesSkillClasses(skill.classes, modifier.classes))) : undefined
  const redirected = counter && getAppliedModifiers(counter).some(modifier => modifier.type === 'reflect' && modifier.toLinkedTarget)
  const redirectTarget = redirected ? Object.values(state.players).flatMap(player => player.team).find(member => member.instanceId === counter.linkedTargetInstanceId && member.health > 0) : undefined
  const reflected = counter !== undefined
  // Uma habilidade refletida não reflete novamente. Control perde a conexão.
  const blockedReflection = reflected && (skill.classes.includes('control') || (!skill.allowInvulnerableTarget && isInvulnerableToSkill(state, redirectTarget ?? source, skill)))
  return { reflected, blockedReflection, counter, redirectTarget }
}
