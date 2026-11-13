import { getActiveStatuses, isInvulnerableToSkill } from '../effects'
import type { BattleCharacter, BattleState, PlayerId, SkillDefinition } from '../types'

export function isSkillExpanded(state: BattleState, source: BattleCharacter, skill: SkillDefinition): boolean {
  return skill.target === 'enemy' && skill.targetExpansion?.target === 'all-vulnerable-enemies' &&
    (!skill.targetExpansion.whenUserHasStatus || getActiveStatuses(state, source).some((status) => status.statusId === skill.targetExpansion?.whenUserHasStatus))
}

export function getSkillTargets(
  state: BattleState, playerId: PlayerId, source: BattleCharacter,
  skill: SkillDefinition, primaryTarget: BattleCharacter
): BattleCharacter[] {
  if (!isSkillExpanded(state, source, skill)) return [primaryTarget]
  const opponentId = playerId === 'player-1' ? 'player-2' : 'player-1'
  return state.players[opponentId].team.filter((target) =>
    target.health > 0 && !isInvulnerableToSkill(state, target, skill))
}

export function describeSkillTarget(state: BattleState, source: BattleCharacter, skill: SkillDefinition): string {
  if (isSkillExpanded(state, source, skill)) return 'Todos os inimigos vivos e vulneráveis a esta habilidade'
  if (skill.target === 'self') return 'O próprio usuário'
  if (skill.target === 'ally') return 'Um aliado vivo que possa receber esta habilidade'
  return 'Um inimigo vivo que possa receber esta habilidade'
}
