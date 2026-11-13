import { characters } from '../data/characters'
import { createEmptyChakraPool, paySkillCost } from './chakra'
import { validateSkillUse } from './validateSkillUse'
import type { SkillUseRequest, SkillUseValidation } from './validateSkillUse'
import type { BattleState, ChakraPool, ChakraType } from './types'

export type PlannedAction = Omit<SkillUseRequest, 'randomPayment'>
export const chakraTypes: ChakraType[] = ['taijutsu', 'bloodline', 'ninjutsu', 'genjutsu']
export const chakraTotal = (pool: ChakraPool) => Object.values(pool).reduce((sum, amount) => sum + amount, 0)

export function skillForAction(battle: BattleState, action: PlannedAction) {
  const member = battle.players[action.playerId].team.find((entry) => entry.instanceId === action.characterInstanceId)
  return characters.find((entry) => entry.id === member?.characterId)?.skillDefinitions?.find((entry) => entry.id === action.skillId)
}

export type QueueBudget = {
  afterSpecific: ChakraPool
  randomRequired: number
  freeTotal: number
}

// Reserve all specific costs first. Random costs are a total obligation, never
// a premature choice of chakra types. Reordering cannot change affordability.
export function getQueueBudget(battle: BattleState, queue: readonly PlannedAction[]): QueueBudget | null {
  let afterSpecific = { ...battle.players[battle.activePlayerId].chakra }
  let randomRequired = 0
  const used = new Set<string>()
  for (const action of queue) {
    if (action.playerId !== battle.activePlayerId || used.has(action.characterInstanceId)) return null
    used.add(action.characterInstanceId)
    const skill = skillForAction(battle, action)
    if (!skill) return null
    const random = skill.cost.random ?? 0
    if (!Number.isInteger(random) || random < 0) return null
    const next = paySkillCost(afterSpecific, { specific: skill.cost.specific }, createEmptyChakraPool())
    if (!next) return null
    afterSpecific = next
    randomRequired += random
  }
  const freeTotal = chakraTotal(afterSpecific) - randomRequired
  return freeTotal < 0 ? null : { afterSpecific, randomRequired, freeTotal }
}

export function validatePlannedAction(
  battle: BattleState, queue: readonly PlannedAction[], action: PlannedAction, now: number
): SkillUseValidation {
  const skill = skillForAction(battle, action)
  if (!skill) return { ok: false, reason: 'skill-not-found' }
  const budget = getQueueBudget(battle, [...queue, action])
  if (!budget) return { ok: false, reason: 'invalid-payment' }
  const payment = createEmptyChakraPool()
  let needed = skill.cost.random ?? 0
  for (const type of chakraTypes) {
    payment[type] = Math.min(budget.afterSpecific[type], needed)
    needed -= payment[type]
  }
  // Validation sees only costs of preceding specific reservations; the
  // hypothetical random payment is thrown away and never stored in the queue.
  const preceding = getQueueBudget(battle, queue)!
  return validateSkillUse({
    ...battle,
    players: { ...battle.players, [action.playerId]: { ...battle.players[action.playerId], chakra: preceding.afterSpecific } },
  }, { ...action, randomPayment: payment }, now)
}

export function buildConfirmedActions(
  battle: BattleState, queue: readonly PlannedAction[], chosen: ChakraPool
): SkillUseRequest[] | null {
  const budget = getQueueBudget(battle, queue)
  if (!budget || !paySkillCost(budget.afterSpecific, { random: budget.randomRequired }, chosen)) return null
  const remainingChoice = { ...chosen }
  const actions: SkillUseRequest[] = []
  for (const action of queue) {
    const skill = skillForAction(battle, action)!
    let needed = skill.cost.random ?? 0
    const payment = createEmptyChakraPool()
    for (const type of chakraTypes) {
      payment[type] = Math.min(remainingChoice[type], needed)
      remainingChoice[type] -= payment[type]
      needed -= payment[type]
    }
    if (needed !== 0) return null
    actions.push({ ...action, randomPayment: payment })
  }
  return actions
}
