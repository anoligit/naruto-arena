import { statuses, getActiveStatuses, isInvulnerableToSkill } from '../effects'
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
  if (skill.target === 'self-or-enemy') return 'O próprio usuário ou um inimigo vivo e vulnerável'
  if (skill.target === 'self') return 'O próprio usuário'
  if (skill.target === 'ally') return 'Um aliado vivo que possa receber esta habilidade'
  return 'Um inimigo vivo que possa receber esta habilidade'
}

// Projeta os destinatários dos efeitos para os indicadores de planejamento.
// O alvo clicado pode apenas ativar a habilidade: recipient: 'user' permanece no usuário.
export function getAffectedCharacters(
  state: BattleState, playerId: PlayerId, source: BattleCharacter,
  skill: SkillDefinition, primaryTarget: BattleCharacter
): BattleCharacter[] {
  const affected = new Map<string, BattleCharacter>()
  const targets = getSkillTargets(state, playerId, source, skill, primaryTarget)
  for (const effect of skill.effects) {
    const recipients = effect.type === 'apply-status' && effect.recipient === 'user' ? [source] : targets
    for (const recipient of recipients) {
      if (effect.type === 'apply-status' && effect.skipIfUntargetable && recipient.instanceId !== source.instanceId && isInvulnerableToSkill(state, recipient, skill)) continue
      affected.set(recipient.instanceId, recipient)
      if (effect.type !== 'apply-status') continue
      const aura = statuses.find((definition) => definition.id === effect.statusId)?.modifiers
        .some((modifier) => modifier.type === 'enemy-skill-cost-increase')
      if (!aura) continue
      const owner = Object.values(state.players).find((player) => player.team.some((member) => member.instanceId === recipient.instanceId))
      if (!owner) continue
      for (const player of Object.values(state.players)) {
        if (player.id === owner.id) continue
        for (const member of player.team) {
          if (member.health > 0) affected.set(member.instanceId, member)
        }
      }
    }
  }
  return [...affected.values()]
}
