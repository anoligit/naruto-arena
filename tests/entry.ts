export * from '../src/characters/registry'
export * from '../src/characters/definition'
export * from '../src/game/effects'
export * from '../src/missions'
export { collectCharacterModules } from '../src/characters/registration'
export { createBattle } from '../src/game/createBattle'
export { resolveTurn } from '../src/game/resolveTurn'
export { validateSkillUse } from '../src/game/validateSkillUse'
export { getBattleSkills, getEffectiveSkill } from '../src/game/skillCatalog'
export { getQueueBudget, buildConfirmedActions, skillForAction } from '../src/game/plannedActions'
export { appendAction, applyExchange, createLocalSession, confirmSession, tickSession } from '../src/game/localBattleSession'
export { getSkillAvailability } from '../src/game/skillAvailability'
export { getEnemyCostEffects, getEffectiveEnergyCost } from '../src/game/energy/skillCost'
export { loadTeam, saveTeam } from '../src/teamStorage'
export { teamReducer } from '../src/teamState'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import LocalBattle from '../src/pages/LocalBattle'
import type { BattleMode } from '../src/game/localBattleSession'
import type { BattleState } from '../src/game/types'
export function renderBattle(state: BattleState, mode: BattleMode = 'quick') {
  return renderToStaticMarkup(createElement(LocalBattle, { initialState: state, mode, onContinue: () => {} }))
}
import CharacterDetailsPanel from '../src/pages/selection/CharacterDetailsPanel'
import type { Character } from '../src/characters/definition'
export function renderDetails(character: Character, skill: string | null = null) {
  return renderToStaticMarkup(createElement(CharacterDetailsPanel, { character, selectedSkill: skill, onSkillChange: () => {} }))
}
export { getPlannedTargets } from '../src/game/plannedActions'
export { cancelPlannedAction } from '../src/game/localBattleSession'
export { previewTurnHealth, visibleBattleForPreview } from '../src/game/healthPreview'
import BattleHealthBar from '../src/components/BattleHealthBar'
export function renderHealthBar(health: number, maxHealth: number, projectedHealth?: number) {
  return renderToStaticMarkup(createElement(BattleHealthBar, { health, maxHealth, projectedHealth, label: 'Vida de teste' }))
}
export { getCharacterIndicators } from '../src/game/effects/indicators'
export { getAppliedModifiers } from '../src/game/effects/appliedModifiers'
export { createTrainingBattle } from '../src/game/training/createTrainingBattle'
export { planComputerTurn, runComputerTurn } from '../src/game/training/computer'
import StartPlaying from '../src/pages/StartPlaying'
export function renderSelection(team: (Character | null)[]) {
  return renderToStaticMarkup(createElement(StartPlaying, { team, setTeam: () => {} }))
}
