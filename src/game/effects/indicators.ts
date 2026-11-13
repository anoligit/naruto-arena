import { characters } from '../../data/characters'
import { formatSkillClasses } from '../classes'
import { getEnemyCostEffects } from '../energy/skillCost'
import { getPlannedTargets, skillForAction } from '../plannedActions'
import type { PlannedAction } from '../plannedActions'
import type { BattleCharacter, BattleState, PlayerId } from '../types'
import { getActiveStatuses } from './active'
import { getAppliedModifiers } from './appliedModifiers'
import { statuses } from './catalog'
import { isCounterReportVisible } from './counters'
import { describeStatusEffect, formatStatusDuration, isStatusVisible } from './presentation'
import type { ActiveStatus } from './types'

export type CharacterIndicator = {
  id: string
  name: string
  image?: string
  lines: string[]
  duration: string
  sourceCharacterId: string
  sourceSkillName: string | null
  origin: 'ally' | 'enemy'
  planned: boolean
  counterReport?: boolean
  order: { turn: number; action: number; effect: number }
}

// Partidas antigas não possuem appliedAt. Preserva a ordem disponível nelas;
// novas aplicações registram turno, posição da ação e posição do efeito.
function applicationOrder(active: ActiveStatus): CharacterIndicator['order'] {
  const legacyTurn = Number(active.instanceId.split(':')[0])
  return active.appliedAt ?? { turn: Number.isInteger(legacyTurn) ? legacyTurn : 0, action: 0, effect: 0 }
}

export function getCharacterIndicators(
  battle: BattleState, queue: readonly PlannedAction[], member: BattleCharacter, viewerId: PlayerId
): CharacterIndicator[] {
  const members = Object.values(battle.players).flatMap((player) => player.team)
  const playerName = (id: PlayerId) => id === 'player-1' ? 'Jogador 1' : 'Jogador 2'
  const indicators: CharacterIndicator[] = []

  function fromStatus(active: ActiveStatus, auraLines?: string[]): CharacterIndicator | null {
    const definition = statuses.find((entry) => entry.id === active.statusId)
    if (!isStatusVisible(definition, active, viewerId)) return null
    const source = members.find((entry) => entry.instanceId === active.sourceCharacterId)
    const sourceDefinition = characters.find((entry) => entry.id === source?.characterId)
    const skills = sourceDefinition?.skillDefinitions ?? []
    const skill = skills.find((entry) => entry.id === active.sourceSkillId)
      ?? skills.find((entry) => entry.effects.some((effect) => effect.type === 'apply-status' && effect.statusId === active.statusId))
    const lines = auraLines ?? (definition
      ? describeStatusEffect({ ...definition, modifiers: getAppliedModifiers(active) }, skills)
      : ['Efeito ativo.'])
    if (!auraLines && active.blockedModifiers?.includes('invulnerable')) {
      lines.push('A invulnerabilidade desta aplicação foi impedida; os demais efeitos permanecem ativos.')
    }
    return {
      id: auraLines ? `aura:${active.sourceCharacterId}:${active.instanceId}` : active.instanceId,
      name: skill?.name ?? definition?.name ?? active.statusId,
      image: skill?.image,
      lines: [`Origem: ${sourceDefinition?.name ?? 'personagem'} · ${playerName(active.sourcePlayerId)}.`, ...lines],
      duration: formatStatusDuration(battle, active),
      sourceCharacterId: source?.instanceId ?? member.instanceId,
      sourceSkillName: skill?.name ?? null,
      origin: active.sourcePlayerId === viewerId ? 'ally' : 'enemy',
      planned: false,
      order: applicationOrder(active),
    }
  }

  for (const active of getActiveStatuses(battle, member)) {
    const indicator = fromStatus(active)
    if (indicator) indicators.push(indicator)
  }
  for (const { active, modifiers } of getEnemyCostEffects(battle, member)) {
    const indicator = fromStatus(active, modifiers.map((modifier) =>
      `As habilidades ${formatSkillClasses(modifier.classes)} deste personagem custam ${modifier.random} energia aleatória adicional por uso.`))
    if (indicator) indicators.push(indicator)
  }
  for (const report of battle.counterReports ?? []) {
    if (report.counteredCharacterId !== member.instanceId || !isCounterReportVisible(battle, report)) continue
    const source = members.find((entry) => entry.instanceId === report.counterCharacterId)
    const sourceDefinition = characters.find((entry) => entry.id === source?.characterId)
    const counterSkill = sourceDefinition?.skillDefinitions.find((skill) => skill.id === report.counterSkillId)
    const actorDefinition = characters.find((entry) => entry.id === member.characterId)
    const counteredSkill = actorDefinition?.skillDefinitions.find((skill) => skill.id === report.counteredSkillId)
    const affected = members.find((entry) => entry.instanceId === report.affectedCharacterId)
    const affectedDefinition = characters.find((entry) => entry.id === affected?.characterId)
    const affectedOwner = Object.values(battle.players).find((player) => player.team.some((character) => character.instanceId === report.affectedCharacterId))
    const counteredName = `${actorDefinition?.name ?? 'personagem'} · ${playerName(report.counteredPlayerId)}`
    const counterName = counterSkill?.name ?? statuses.find((entry) => entry.id === report.counterStatusId)?.name ?? report.counterStatusId
    const outcomes = {
      reflected: `A habilidade foi refletida. Destino do retorno: ${counteredName}.`,
      cancelled: 'A habilidade Control foi counterada e cancelada.',
      'return-blocked': `O counter refletiu a habilidade para ${counteredName}, mas a proteção desse personagem impediu o retorno.`,
      'prevented-invulnerability': 'A nova invulnerabilidade foi impedida. A ação, a energia e o cooldown foram consumidos normalmente.',
    }
    indicators.push({
      id: report.id,
      counterReport: true,
      name: `Counter: ${counterName}`,
      image: counterSkill?.image,
      lines: [
        `Habilidade counterada: ${counteredSkill?.name ?? report.counteredSkillId} de ${counteredName}.`,
        `Counter aplicado por: ${counterName} de ${sourceDefinition?.name ?? 'personagem'} · ${playerName(report.counterPlayerId)}.`,
        `Alvo original: ${affectedDefinition?.name ?? 'personagem'}${affectedOwner ? ` · ${playerName(affectedOwner.id)}` : ''}.`,
        outcomes[report.outcome],
      ],
      duration: battle.phase === 'finished' ? 'Counter ocorrido nesta partida.' : 'acaba esse turno',
      sourceCharacterId: report.counterCharacterId,
      sourceSkillName: counterSkill?.name ?? null,
      origin: report.counterPlayerId === viewerId ? 'ally' : 'enemy',
      planned: false,
      order: report.appliedAt,
    })
  }
  for (const [index, action] of queue.entries()) {
    if (!getPlannedTargets(battle, action).some((target) => target.instanceId === member.instanceId)) continue
    const skill = skillForAction(battle, action)
    const source = members.find((entry) => entry.instanceId === action.characterInstanceId)
    const sourceDefinition = characters.find((entry) => entry.id === source?.characterId)
    indicators.push({
      id: `planned:${action.characterInstanceId}`,
      name: skill?.name ?? 'Habilidade',
      image: skill?.image,
      lines: [`Origem: ${sourceDefinition?.name ?? 'personagem'} · ${playerName(action.playerId)}.`, 'Ação atribuída a este personagem, ainda não executada.'],
      duration: 'Será executada ao confirmar o turno.',
      sourceCharacterId: action.characterInstanceId,
      sourceSkillName: skill?.name ?? null,
      origin: action.playerId === viewerId ? 'ally' : 'enemy',
      planned: true,
      order: { turn: battle.turnNumber, action: index, effect: 0 },
    })
  }
  // Aliado/inimigo é apenas uma marca: nunca altera a posição cronológica.
  return indicators.sort((left, right) =>
    Number(left.planned) - Number(right.planned) ||
    left.order.turn - right.order.turn ||
    left.order.action - right.order.action ||
    left.order.effect - right.order.effect)
}
