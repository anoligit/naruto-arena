import { togglePreselection } from '../preselection'
import { energyTotal } from '../energy'
import { characters } from '../../data/characters'
import { energyDisplayOrder, createEmptyEnergyPool } from '../energy'
import { getActiveStatuses } from '../effects'
import { getAppliedModifiers } from '../effects/appliedModifiers'
import { visibleBattleForPreview } from '../healthPreview'
import { buildConfirmedActions, getQueueBudget } from '../plannedActions'
import type { PlannedAction } from '../plannedActions'
import { getBattleSkills } from '../skillCatalog'
import { getSkillAvailability } from '../skillAvailability'
import { resolveTurn } from '../resolveTurn'
import { createLocalSession, tickSession } from '../localBattleSession'
import type { LocalBattleSession } from '../localBattleSession'
import type { BattleCharacter, BattleState, EnergyPool, StatusModifier } from '../types'
import { trainingRules } from './config'

function choosePayment(battle: BattleState, queue: readonly PlannedAction[]): EnergyPool | null {
  const budget = getQueueBudget(battle, queue)
  if (!budget) return null
  const payment = createEmptyEnergyPool()
  let needed = budget.randomRequired
  // Reserva os custos específicos antes de escolher os tipos aleatórios.
  const order = [...energyDisplayOrder].sort((left, right) => budget.afterSpecific[right] - budget.afterSpecific[left])
  for (const type of order) {
    payment[type] = Math.min(budget.afterSpecific[type], needed)
    needed -= payment[type]
  }
  return needed === 0 ? payment : null
}

// Valor aproximado para decisões da IA; não altera nenhuma regra do combate.
function modifierValue(modifier: StatusModifier): number {
  switch (modifier.type) {
    case 'on-harmful-skill-heal-source': return -modifier.amount * .5
    case 'on-source-harmful-hit': return -6
    case 'skill-cost-increase': return -modifier.random * 6
    case 'outgoing-damage-reduction-percent': return -modifier.percent * .1
    case 'isolated': return 6
    case 'life-link': return -8
    case 'healing-bonus': return modifier.amount * .4
    case 'incoming-damage-cap': return 8
    case 'cooldown-reduction': return modifier.amount * 4
    case 'heal-on-new-skill-damage': return modifier.amount * .4
    case 'revive-on-death': return 20
    case 'forced-target': return -5
    case 'delay-next-harmful': return -8
    case 'energy-removal-reduction': return -modifier.amount * 3
    case 'on-allied-damage': return -modifier.amount
    case 'intercept-target': return 8
    case 'counter-damage-shield': return 10
    case 'random-harmful-target': return -5
    case 'harmful-skills-heal': return -20
    case 'cooldown-increase': return -modifier.amount * 4
    case 'ignore-healing': return -5
    case 'skill-cost-reduction': return modifier.random * 5
    case 'on-targeted-harmful': return 6
    case 'counter-skill-use': return -8
    case 'ignore-defenses': return -12
    case 'cannot-die': return 10
    case 'reveal-enemy-invisible': return 5
    case 'on-skill-use': return -5
    case 'on-ally-targeted-hit': return -4
    case 'on-source-skill-use-heal': return modifier.amount * .4
    case 'on-enemy-target-team': return modifier.amount * .8
    case 'stun': return -10
    case 'counter-first-harmful': return 8
    case 'destructible-defense': return modifier.amount * .3
    case 'on-harmful-skill': return -4
    case 'outgoing-damage-bonus': return modifier.amount * .5
    case 'outgoing-damage-reduction': return -modifier.amount
    case 'periodic-damage': return -modifier.amount
    case 'prevent-damage-reduction': return -4
    case 'prevent-invulnerability': return -5
    case 'invulnerable': return 6
    case 'reflect': return 7
    case 'on-new-skill-damage': return 6
    case 'damage-immunity': return 10
    case 'harmful-effect-immunity': return 8
    case 'stun-immunity': return 4
    case 'damage-reduction': return modifier.amount * 0.3
    case 'damage-reduction-percent': return modifier.percent * 0.2
    case 'damage-multiplier': return Math.max(0, modifier.multiplier - 1) * 8
    case 'damage-taken-multiplier': return -Math.max(0, modifier.multiplier - 1) * 8
    case 'damage-taken-bonus': return -modifier.amount * 0.5
    case 'on-skill-use-damage': return -modifier.amount
    case 'enemy-skill-cost-increase': return modifier.random * 6
    default: { const unsupported: never = modifier; return unsupported }
  }
}

function statusValue(battle: BattleState, member: BattleCharacter): number {
  const skills = characters.find((character) => character.id === member.characterId)?.skillDefinitions ?? []
  return getActiveStatuses(battle, member).reduce((total, active) => {
    const skillChange = skills.some((skill) => skill.targetExpansion?.whenUserHasStatus === active.statusId ||
      skill.enhancement?.whenUserHasStatus === active.statusId || skill.replacement?.whenStatusId === active.statusId)
    return total + getAppliedModifiers(active).reduce((sum, modifier) => sum + modifierValue(modifier), 0) + (skillChange ? 8 : 0)
  }, 0)
}

function scorePlan(before: BattleState, after: BattleState): number {
  let score = 0
  for (const player of Object.values(before.players)) {
    const own = player.id === trainingRules.computerPlayerId
    for (const original of player.team) {
      const next = after.players[player.id].team.find((member) => member.instanceId === original.instanceId)!
      const healthChange = next.health - original.health
      // Desempata a favor de uma cura útil, especialmente em aliados feridos.
      score += own ? healthChange * (healthChange > 0 ? 1.25 : 1) : -healthChange
      if (original.health > 0 && next.health === 0) score += own ? -40 : 40
      score += (statusValue(after, next) - statusValue(before, original)) * (own ? 1 : -1)
    }
  }
  return score
}

export type ComputerPlan = { queue: PlannedAction[]; payment: EnergyPool }

export function planComputerTurn(battle: BattleState, now: number): ComputerPlan {
  const empty = { queue: [], payment: createEmptyEnergyPool() }
  if (battle.activePlayerId !== trainingRules.computerPlayerId || battle.phase !== 'planning' || battle.turnEndsAt === null || now >= battle.turnEndsAt) return empty
  // Não consulta counters ou outras informações invisíveis do adversário.
  const visible = visibleBattleForPreview(battle, trainingRules.computerPlayerId)
  let queue: PlannedAction[] = []
  let bestScore = 0
  for (let step = 0; step < trainingRules.maxActions; step++) {
    let bestQueue: PlannedAction[] | null = null
    let nextScore = bestScore
    for (const source of visible.players[trainingRules.computerPlayerId].team) {
      if (source.health <= 0 || queue.some((action) => action.characterInstanceId === source.instanceId)) continue
      for (const skill of getBattleSkills(visible, source)) {
        const availability = getSkillAvailability(visible, queue, trainingRules.computerPlayerId, source.instanceId, skill.id, now)
        for (const targetInstanceId of availability.targetInstanceIds) {
          const candidate = [...queue, { playerId: trainingRules.computerPlayerId, characterInstanceId: source.instanceId, skillId: skill.id, targetInstanceId }]
          const payment = choosePayment(visible, candidate)
          const actions = payment && buildConfirmedActions(visible, candidate, payment)
          if (!actions) continue
          const result = resolveTurn(visible, actions, now, { advanceToNextTurn: false })
          if (!result.ok) continue
          const value = scorePlan(visible, result.state)
          if (value > nextScore) { bestQueue = candidate; nextScore = value }
        }
      }
    }
    if (!bestQueue) break
    queue = bestQueue
    bestScore = nextScore
  }
  return { queue, payment: choosePayment(visible, queue) ?? createEmptyEnergyPool() }
}

export function runComputerTurn(session: LocalBattleSession, now: number): LocalBattleSession {
  const fresh = tickSession(session, now)
  if (fresh.battle.activePlayerId !== trainingRules.computerPlayerId || fresh.battle.phase !== 'planning' || fresh.surrenderPending || fresh.exchangeOpen) return fresh
  // As opções da invocação são escolhas gratuitas, anteriores à ação da IA.
  for (const source of fresh.battle.players[trainingRules.computerPlayerId].team) {
    const summon = getBattleSkills(fresh.battle, source).find(skill => skill.summonSelections)
    if (!summon) continue
    for (const option of getBattleSkills(fresh.battle, source).filter(skill => skill.preselection)) {
      const current = fresh.battle.players[trainingRules.computerPlayerId].team.find(member => member.instanceId === source.instanceId)!
      if (current.selectedOptions?.includes(option.id)) continue
      const needed = Object.values(summon.cost.specific ?? {}).reduce((sum, amount) => sum + amount, 0) + (summon.cost.random ?? 0) + ((current.selectedOptions?.length ?? 0) + 1) * summon.summonSelections!.randomPerOption
      if (needed > energyTotal(fresh.battle.players[trainingRules.computerPlayerId].energy)) break
      const selected = togglePreselection(fresh.battle, trainingRules.computerPlayerId, source.instanceId, option.id, now)
      if (selected) fresh.battle = selected
    }
  }
  const plan = planComputerTurn(fresh.battle, now)
  const actions = buildConfirmedActions(fresh.battle, plan.queue, plan.payment)
  // A execução real respeita inclusive efeitos ocultos. Não tenta novos alvos
  // usando informações de uma falha que a IA não poderia conhecer.
  const attempt = actions ? resolveTurn(fresh.battle, actions, now) : null
  const result = attempt?.ok ? attempt : resolveTurn(fresh.battle, [], now)
  if (!result.ok) return fresh
  return { ...createLocalSession(result.state, now),
    notice: result.state.phase === 'finished' ? 'Treinamento encerrado.' : 'O adversário de treino encerrou o turno. Sua vez.',
    log: [...fresh.log, `Turno ${fresh.battle.turnNumber}: adversário de treino · ${attempt?.ok ? plan.queue.length : 0} habilidade(s).`].slice(-8),
  }
}
