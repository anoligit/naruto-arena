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
import type { LocalBattleSession } from '../src/game/localBattleSession'
import type { PlayerId } from '../src/game/types'
export { publicSessionFor } from '../src/multiplayer/publicSession'
export { multiplayerVersion } from '../src/multiplayer/version'
export function renderRemoteBattle(session: LocalBattleSession, playerId: PlayerId) {
  return renderToStaticMarkup(createElement(LocalBattle, { initialState: session.battle, mode: 'private', onContinue: () => {},
    remote: { playerId, session, send: () => {}, names: { 'player-1': 'Ana', 'player-2': 'Bruno' }, code: 'ABC234' },
  }))
}

import BattleInspectionPanel from '../src/pages/BattleInspection'
import type { BattleInspection } from '../src/pages/BattleInspection'
import type { BattleProfiles } from '../src/player/battleProfiles'
export { createBattleProfile } from '../src/player/battleProfiles'
export function renderBattleInspection(state: BattleState, inspection: BattleInspection, profiles: BattleProfiles) {
  return renderToStaticMarkup(createElement(BattleInspectionPanel, { battle: state, inspection, profiles, onCharacter: () => {}, onSkill: () => {} }))
}

import BattleTurnControls from '../src/pages/BattleTurnControls'
export function renderTurnControls(opponentTurn: boolean, remaining: number, mobile = false) {
  return renderToStaticMarkup(createElement(BattleTurnControls, { phase: 'planning', opponentTurn, remaining, mobile,
    available: { taijutsu: 2, bloodline: 1, ninjutsu: 0, genjutsu: 3 }, freeTotal: 6, onReady: () => {}, onExchange: () => {},
  }))
}

import TurnConfirmationContent from '../src/pages/TurnConfirmationContent'
export function renderTurnConfirmation(battle: BattleState, queue: PlannedAction[], payment: EnergyPool) {
  return renderToStaticMarkup(createElement(TurnConfirmationContent, { battle, queue, payment, remaining: 42,
    headingRef: { current: null }, onChange: () => {}, onMove: () => {}, onCancel: () => {}, onConfirm: () => {},
  }))
}

export function renderMobileConfirmation(battle: BattleState) {
  const empty = { taijutsu: 0, ninjutsu: 0, bloodline: 0, genjutsu: 0 }
  const review = createElement(TurnConfirmationContent, { battle, queue: [], payment: empty, remaining: 42,
    showTimer: false, headingRef: { current: null }, onChange: () => {}, onMove: () => {}, onCancel: () => {}, onConfirm: () => {},
  })
  return renderToStaticMarkup(createElement(BattleTurnControls, { phase: 'confirmation', opponentTurn: false,
    remaining: 42, mobile: true, available: empty, freeTotal: 0, review, onReady: () => {}, onExchange: () => {},
  }))
}

export { expireTurn } from '../src/game/turnTimer'
