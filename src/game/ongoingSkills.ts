import { getCharacterIndicators } from './effects/indicators'
import { findSourceSkill } from './effects/origin'
import { characters } from '../data/characters'
import type { BattleState, PlayerId, SkillDefinition } from './types'

type OngoingSkill = {
  id: string
  skill: SkillDefinition
  sourceName: string
  stackCount: number
  suspended: boolean
  order: { turn: number; action: number; effect: number }
}
const compare = (a: OngoingSkill, b: OngoingSkill) => a.order.turn-b.order.turn || a.order.action-b.order.action || a.order.effect-b.order.effect

// Somente apresentação. Estes registros nunca entram na fila de ações ou no orçamento.
export function getOngoingSkills(battle: BattleState, viewerId: PlayerId): OngoingSkill[] {
  const own = battle.players[viewerId].team
  const result = new Map<string, OngoingSkill>()
  for (const member of Object.values(battle.players).flatMap(player=>player.team)) {
    if (member.health <= 0) continue
    for (const indicator of getCharacterIndicators(battle, [], member, viewerId)) {
      if (indicator.planned || indicator.counterReport || indicator.origin!=='ally') continue
      const source=own.find(source=>source.instanceId===indicator.sourceCharacterId)
      const skill=findSourceSkill(source,indicator.sourceSkillId)
      if (!source || !skill || skill.passive || skill.battleStart) continue
      const row: OngoingSkill = {id:JSON.stringify([source.instanceId,skill.id]),skill,
        sourceName:characters.find(character=>character.id===source.characterId)?.name ?? '',
        stackCount:indicator.stackCount ?? 1,suspended:!!indicator.suspended,order:indicator.order}
      const previous=result.get(row.id)
      if (!previous) result.set(row.id,row)
      else {
        previous.stackCount=Math.max(previous.stackCount,row.stackCount)
        previous.suspended=previous.suspended && row.suspended
        if (compare(row,previous)<0) previous.order=row.order
      }
    }
  }
  return [...result.values()].sort(compare)
}
