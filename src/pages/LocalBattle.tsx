import { useFitTurnReview } from './useFitTurnReview'
import TurnConfirmationContent from './TurnConfirmationContent'
import BattleTurnControls from './BattleTurnControls'
import { useMobileBattle } from './useMobileBattle'
import BattlePlayerHeader from './BattlePlayerHeader'
import { createBattleProfile } from '../player/battleProfiles'
import type { BattleProfiles } from '../player/battleProfiles'
import type { RemoteBattle } from '../multiplayer/protocol'
import { shouldPulseTargets } from './battleTargeting'
import { runComputerTurn } from '../game/training/computer'
import { trainingRules } from '../game/training/config'
import BattleHealthBar from '../components/BattleHealthBar'
import { previewTurnHealth } from '../game/healthPreview'
import { energyLabels } from '../game/energy/index'
import EffectIndicator from '../components/EffectIndicator'
import { formatRemainingCooldown } from '../game/cooldown'
import EnergyToken from '../components/EnergyToken'
import { imageUrl } from '../utils/imageUrl'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { characters } from '../data/characters'
import { createEmptyEnergyPool, energyTotal, energyDisplayOrder as energyTypes, energyDefinitions, energyRules } from '../game/energy/index'
import { getCharacterIndicators } from '../game/effects/indicators'
import { getRemainingTurnSeconds } from '../game/turnTimer'
import { cancelPlannedAction, appendAction, applyExchange, confirmSession, createLocalSession, tickSession } from '../game/localBattleSession'
import type { BattleMode, LocalBattleSession } from '../game/localBattleSession'
import { getQueueBudget, skillForAction } from '../game/plannedActions'
import type { PlannedAction } from '../game/plannedActions'
import { getBattleSkillNames } from '../game/skillCatalog'
import { getSkillAvailability } from '../game/skillAvailability'
import type { BattleCharacter, BattleState, EnergyPool, PlayerId } from '../game/types'
import BattleInspectionPanel from './BattleInspection'
import type { BattleInspection } from './BattleInspection'
import '../Battle.css'

const playerName = (id: PlayerId) => id === 'player-1' ? 'Jogador 1' : 'Jogador 2'
const definitionOf = (member: BattleCharacter) => characters.find((entry) => entry.id === member.characterId)
const errors: Record<string, string> = {
  'not-your-turn': 'Não é a vez deste jogador.', 'turn-expired': 'O tempo do turno acabou.',
  'character-defeated': 'Personagem derrotado.', 'already-acted': 'Este personagem já agiu neste turno.',
  'skill-replaced': 'Esta habilidade foi substituída por outra enquanto o efeito estiver ativo.',
  'already-queued': 'Ação já atribuída. Cancele-a no espaço ao lado do personagem para escolher outra.',
  stunned: 'Esta habilidade está bloqueada por stun de uma das suas classes.', cooldown: 'Habilidade em recarga.',
  'requirements-not-met': 'Os requisitos descritos nesta habilidade ainda não foram atendidos.',
  'invalid-target': 'Alvo não permitido.', 'target-defeated': 'O alvo foi derrotado.',
  'target-already-affected': 'Este alvo já está afetado por esta habilidade.',
  'target-invulnerable': 'O alvo está invulnerável.', 'confirmation-open': 'Finalize ou cancele a confirmação.',
  'no-valid-target': 'Não há alvos válidos.', 'skill-not-found': 'Regras ainda não cadastradas. Consulta disponível.',
  'battle-finished': 'A partida terminou.', 'invalid-payment': energyLabels.insufficient,
  'choose-random-energy': energyLabels.chooseRandomError,
}
function availabilityText(reason: string | null, cooldown: number) {
  return reason === 'cooldown' ? formatRemainingCooldown(cooldown) : reason ? errors[reason] ?? reason : 'Clique num retrato dourado para atribuir a habilidade.'
}
function dialogKeys(event: KeyboardEvent<HTMLElement>, cancel?: () => void) {
  if (event.key === 'Escape') { cancel?.(); return }
  if (event.key !== 'Tab') return
  const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), select:not([disabled]), input:not([disabled])'))
  const first = controls[0], last = controls[controls.length - 1]
  if (!first || !last) return
  const focused = document.activeElement as HTMLElement
  if (!controls.includes(focused) || (event.shiftKey && focused === first) || (!event.shiftKey && focused === last)) {
    event.preventDefault()
    if (event.shiftKey) last.focus(); else first.focus()
  }
}
function Portrait({ member }: { member: BattleCharacter }) {
  const definition = definitionOf(member)
  const [failed, setFailed] = useState(false)
  if (member.health <= 0) return <span className="portrait-defeated" aria-hidden="true" />
  return <>{definition?.image && !failed
    ? <img src={imageUrl(definition.image)} alt="" draggable={false} onError={() => setFailed(true)} />
    : <span className="portrait-placeholder" aria-hidden="true">?</span>}</>
}
function SkillImage({ image, name }: { image?: string; name: string }) {
  return image ? <img src={imageUrl(image)} alt="" draggable={false} /> : <span>{name}</span>
}
function SkillButton({ battle, queue, member, ownerId, skillName, pending, now, readOnly = false, onChoose }: {
  battle: BattleState; queue: PlannedAction[]; member: BattleCharacter; ownerId: PlayerId; skillName: string
  pending: LocalBattleSession['pending']; now: number
  readOnly?: boolean
  onChoose: (member: BattleCharacter, owner: PlayerId, name: string) => void
}) {
  const definition = definitionOf(member)
  const skill = definition?.skillDefinitions?.find((entry) => entry.name === skillName)
  const availability = readOnly
    ? { usable: false, reason: 'not-your-turn', cooldown: 0, targetInstanceIds: [] }
    : getSkillAvailability(battle, queue, ownerId, member.instanceId, skill?.id ?? '', now)
  const armed = pending?.characterInstanceId === member.instanceId && pending.skillId === skill?.id
  const blocked = availability.cooldown > 0 ? ' on-cooldown' : readOnly ? ' use-blocked' : availability.reason === 'invalid-payment' ? ' insufficient-energy' : availability.usable ? '' : ' use-blocked'
  return <button type="button" className={`battle-skill${blocked}${armed ? ' armed' : ''}`}
    title={`${skillName} · ${readOnly ? 'Habilidade do adversário · somente consulta.' : availabilityText(availability.reason, availability.cooldown)}`}
    aria-label={`${skillName} · ${playerName(ownerId)}`} aria-pressed={armed}
    data-use-available={!readOnly && availability.usable} data-block-reason={readOnly ? 'not-your-turn' : availability.reason ?? ''}
    onClick={() => onChoose(member, ownerId, skillName)}>
    <SkillImage image={skill?.image} name={skillName} />
    {availability.cooldown > 0 && <strong>CD {availability.cooldown}</strong>}
  </button>
}
function AllocationPicker({ available, value, required, onChange }: {
  available: EnergyPool; value: EnergyPool; required: number; onChange: (next: EnergyPool) => void
}) {
  const chosen = energyTotal(value)
  return <div className="allocation-picker" role="group" aria-label={energyLabels.allocationGroup}>
    <div className="allocation-head"><span>{energyLabels.left}</span><span>{energyLabels.selected}</span></div>
    {energyTypes.map((type) => <div className="allocation-row" key={type}>
      <span className="allocation-label"><EnergyToken type={type} /><span className="sr-only">{energyDefinitions[type].name}</span></span>
      <output aria-label={`${energyDefinitions[type].name} restante`}>{available[type] - value[type]}</output>
      <button aria-label={`Retirar ${energyDefinitions[type].name}`} disabled={value[type] === 0} onClick={() => onChange({ ...value, [type]: value[type] - 1 })}>−</button>
      <button aria-label={`Escolher ${energyDefinitions[type].name}`} disabled={chosen >= required || value[type] >= available[type]} onClick={() => onChange({ ...value, [type]: value[type] + 1 })}>+</button>
      <span className="allocation-label"><EnergyToken type={type} /><span className="sr-only">{energyDefinitions[type].name}</span></span>
      <output aria-label={`${energyDefinitions[type].name} escolhido`}>{value[type]}</output>
    </div>)}
    <small className="allocation-total" role="status">{chosen}/{required} selecionado(s)</small>
  </div>
}
function CharacterIndicators({ battle, queue, member, viewerId, inspect }: {
  battle: BattleState
  queue: PlannedAction[]
  viewerId: PlayerId
  member: BattleCharacter
  inspect: (instanceId: string, skillName: string | null) => void
}) {
  const indicators = getCharacterIndicators(battle, queue, member, viewerId)
  if (!indicators.length) return null
  return <div className="character-indicators" aria-label={`Indicadores de ${definitionOf(member)?.name}`}>
    {indicators.map((indicator) => <EffectIndicator
      key={indicator.id}
      name={indicator.name}
      image={indicator.image}
      lines={indicator.lines}
      duration={indicator.duration}
      origin={indicator.origin}
      planned={indicator.planned}
      record={indicator.counterReport}
      onConsult={() => inspect(indicator.sourceCharacterId, indicator.sourceSkillName)}
    />)}
  </div>
}

export default function LocalBattle({ initialState, mode, onContinue, remote }: { initialState: BattleState; mode: BattleMode; onContinue: () => void; remote?: RemoteBattle }) {
  const mobileLayout = useMobileBattle()
  useLayoutEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) }, [])
  const training = mode === 'training'
  const online = remote !== undefined
  const [inspection, setInspection] = useState<BattleInspection | null>(null)
  const [localSession, setSession] = useState(() => createLocalSession(initialState, Date.now()))
  const session = remote?.session ?? localSession
  const current = useRef(session)
  const dialogHeading = useRef<HTMLHeadingElement>(null)
  const dockRef = useRef<HTMLDivElement>(null)
  const reviewRef = useRef<HTMLElement>(null)
  useFitTurnReview(dockRef, mobileLayout && session.battle.phase === 'confirmation', true)
  useFitTurnReview(reviewRef, !mobileLayout && session.battle.phase === 'confirmation', false)
  const commit = useCallback((next: LocalBattleSession) => { current.current = next; setSession(next) }, [])
  useEffect(() => {
    if (online || session.battle.phase === 'finished') return
    const refresh = () => commit(tickSession(current.current, Date.now()))
    const timer = window.setInterval(refresh, 250)
    document.addEventListener('visibilitychange', refresh); window.addEventListener('focus', refresh)
    return () => { window.clearInterval(timer); document.removeEventListener('visibilitychange', refresh); window.removeEventListener('focus', refresh) }
  }, [commit, session.battle.phase, online])
  useEffect(() => {
    if (session.battle.phase === 'confirmation' || session.battle.phase === 'finished' || session.surrenderPending || session.exchangeOpen) dialogHeading.current?.focus()
  }, [session.battle.phase, session.surrenderPending, session.exchangeOpen])
  const activeSession = useCallback((allowOpponentTurn = false) => {
    if (online) return null
    const before = current.current, fresh = tickSession(before, Date.now())
    if (fresh.battle !== before.battle) { commit(fresh); return null }
    if (training && !allowOpponentTurn && fresh.battle.activePlayerId !== trainingRules.humanPlayerId) return null
    return fresh.battle.phase === 'finished' ? null : fresh
  }, [commit, training, online])

  const { battle, queue, pending } = session
  const viewerId = remote?.playerId ?? (training ? trainingRules.humanPlayerId : battle.activePlayerId)
  const computerTurn = training && battle.activePlayerId === trainingRules.computerPlayerId
  const opponentTurn = computerTurn || (online && battle.activePlayerId !== viewerId)
  const healthPreview = useMemo(() => previewTurnHealth(battle, queue, viewerId, session.now), [battle, queue, viewerId, session.now])
  const active = battle.players[viewerId]
  const enemy = battle.players[active.id === 'player-1' ? 'player-2' : 'player-1']
  const localNames = {
    'player-1': training ? 'Você · Jogador 1' : playerName('player-1'),
    'player-2': training ? 'Adversário · Jogador 2' : playerName('player-2'),
  }
  const profiles: BattleProfiles = {
    'player-1': remote?.profiles?.['player-1'] ?? createBattleProfile(remote?.names['player-1'] ?? localNames['player-1'], battle.players['player-1'].team[0].characterId),
    'player-2': remote?.profiles?.['player-2'] ?? createBattleProfile(remote?.names['player-2'] ?? localNames['player-2'], battle.players['player-2'].team[0].characterId),
  }
  const budget = opponentTurn ? null : getQueueBudget(battle, queue)
  const available = opponentTurn ? active.energy : budget?.afterSpecific ?? createEmptyEnergyPool()
  const remaining = getRemainingTurnSeconds(battle, session.now)
  const pendingAvailability = pending ? getSkillAvailability(battle, queue, active.id, pending.characterInstanceId, pending.skillId, session.now) : null
  const pulseTargets = shouldPulseTargets(battle, active.id, pending, pendingAvailability)
  const modalOpen = battle.phase === 'finished' || (battle.phase === 'confirmation' && !mobileLayout) || session.surrenderPending || session.exchangeOpen

  useEffect(() => {
    if (!training || battle.activePlayerId !== trainingRules.computerPlayerId || battle.phase !== 'planning' || session.surrenderPending || session.exchangeOpen) return
    const turn = battle.turnNumber
    const timer = window.setTimeout(() => {
      const fresh = current.current
      if (fresh.battle.turnNumber !== turn || fresh.battle.activePlayerId !== trainingRules.computerPlayerId) return
      commit(runComputerTurn(fresh, Date.now()))
    }, trainingRules.thinkingTimeMs)
    return () => window.clearTimeout(timer)
  }, [training, battle.activePlayerId, battle.phase, battle.turnNumber, session.surrenderPending, session.exchangeOpen, commit])

  const inspect = useCallback((instanceId: string, skillName: string | null) => setInspection({ characterInstanceId: instanceId, skillName }), [])
  const chooseSkill = useCallback((member: BattleCharacter, ownerId: PlayerId, skillName: string) => {
    inspect(member.instanceId, skillName)
    if (remote) {
      if (ownerId === remote.playerId && remote.session.battle.activePlayerId === remote.playerId && remote.session.battle.phase === 'planning' && !remote.session.exchangeOpen) remote.send({ type: 'select-skill', characterInstanceId: member.instanceId, skillId: definitionOf(member)?.skillDefinitions.find((skill) => skill.name === skillName)?.id ?? '' })
      return
    }
    if (training && (ownerId !== trainingRules.humanPlayerId || current.current.battle.activePlayerId !== trainingRules.humanPlayerId)) return
    const fresh = tickSession(current.current, Date.now())
    const skill = definitionOf(member)?.skillDefinitions?.find((entry) => entry.name === skillName)
    const usable = getSkillAvailability(fresh.battle, fresh.queue, ownerId, member.instanceId, skill?.id ?? '', fresh.now).usable
    commit({ ...fresh, error: '', notice: '', pending: usable && skill ? { characterInstanceId: member.instanceId, skillId: skill.id } : null })
  }, [commit, inspect, training, remote])
  const chooseCharacter = useCallback((member: BattleCharacter) => {
    if (remote) {
      const selection = remote.session.pending
      const valid = selection && getSkillAvailability(remote.session.battle, remote.session.queue, remote.playerId, selection.characterInstanceId, selection.skillId, remote.session.now).targetInstanceIds.includes(member.instanceId)
      if (valid) remote.send({ type: 'select-target', targetInstanceId: member.instanceId })
      else inspect(member.instanceId, null)
      return
    }
    const fresh = activeSession()
    if (!fresh?.pending) { inspect(member.instanceId, null); return }
    const availability = getSkillAvailability(fresh.battle, fresh.queue, fresh.battle.activePlayerId, fresh.pending.characterInstanceId, fresh.pending.skillId, fresh.now)
    if (!availability.targetInstanceIds.includes(member.instanceId)) { inspect(member.instanceId, null); return }
    const action: PlannedAction = { ...fresh.pending, playerId: fresh.battle.activePlayerId, targetInstanceId: member.instanceId }
    const result = appendAction(fresh.battle, fresh.queue, action, fresh.now)
    if (!result.ok) { commit({ ...fresh, error: result.reason }); return }
    commit({ ...fresh, queue: result.queue, pending: null, randomPayment: createEmptyEnergyPool(), error: '', notice: 'Ação atribuída. O trecho claro mostra a alteração prevista na vida. Cancele no espaço da ação ou confirme o turno.' })
  }, [activeSession, commit, inspect, remote])
  const removeAction = useCallback((instanceId: string) => {
    if (remote) { remote.send({ type: 'remove-action', characterInstanceId: instanceId }); return }
    const fresh = activeSession()
    if (fresh) commit({ ...cancelPlannedAction(fresh, instanceId), notice: energyLabels.actionCancelled })
  }, [activeSession, commit, remote])
  const moveAction = useCallback((from: number, to: number) => {
    if (remote) { remote.send({ type: 'move-action', from, to }); return }
    const fresh = activeSession()
    if (!fresh || from < 0 || from >= fresh.queue.length || to < 0 || to >= fresh.queue.length) return
    const next = [...fresh.queue], [action] = next.splice(from, 1)
    next.splice(to, 0, action); commit({ ...fresh, queue: next, error: '' })
  }, [activeSession, commit, remote])
  const openConfirmation = useCallback(() => {
    if (remote) { remote.send({ type: 'open-confirmation' }); return }
    const fresh = activeSession()
    if (fresh?.battle.phase === 'planning') commit({ ...fresh, pending: null, exchangeOpen: false, randomPayment: createEmptyEnergyPool(), error: '', notice: '', battle: { ...fresh.battle, phase: 'confirmation' } })
  }, [activeSession, commit, remote])
  const closeDialog = useCallback(() => {
    if (remote) { remote.send({ type: 'close-dialog' }); return }
    const fresh = activeSession(true)
    if (fresh) commit({ ...fresh, exchangeOpen: false, surrenderPending: false, error: '', randomPayment: createEmptyEnergyPool(), battle: { ...fresh.battle, phase: 'planning' } })
  }, [activeSession, commit, remote])
  const changeAllocation = useCallback((value: EnergyPool) => {
    if (remote) { remote.send({ type: 'allocate', value }); return }
    const fresh = activeSession()
    if (fresh) commit({ ...fresh, error: '', ...(fresh.exchangeOpen ? { sacrificed: value } : { randomPayment: value }) })
  }, [activeSession, commit, remote])
  const applyTrade = useCallback(() => {
    if (remote) { remote.send({ type: 'apply-exchange' }); return }
    const fresh = activeSession()
    if (!fresh) return
    const next = applyExchange(fresh.battle, fresh.queue, fresh.sacrificed, fresh.chosenType, fresh.now)
    if (!next) { commit({ ...fresh, error: energyLabels.exchangeBudgetError(energyRules.exchangeCost) }); return }
    commit({ ...fresh, battle: next, sacrificed: createEmptyEnergyPool(), error: '', notice: 'Troca aplicada. Ela permanece mesmo se o turno terminar sem ações.' })
  }, [activeSession, commit, remote])
  const surrender = useCallback(() => {
    if (remote) { remote.send({ type: 'open-surrender' }); return }
    const fresh = activeSession(true)
    if (fresh) commit({ ...fresh, surrenderPending: true, pending: null })
  }, [activeSession, commit, remote])
  const confirmSurrender = useCallback(() => {
    if (remote) { remote.send({ type: 'confirm-surrender' }); return }
    const fresh = activeSession(true)
    if (!fresh?.surrenderPending) return
    commit({ ...fresh, queue: [], pending: null, surrenderPending: false, battle: { ...fresh.battle, phase: 'finished', turnEndsAt: null, winnerId: training ? trainingRules.computerPlayerId : fresh.battle.activePlayerId === 'player-1' ? 'player-2' : 'player-1' } })
  }, [activeSession, commit, training, remote])

  function memberRow(member: BattleCharacter, ownerId: PlayerId, isAlly: boolean) {
    const definition = definitionOf(member)
    const assigned = queue.find((action) => action.characterInstanceId === member.instanceId)
    const assignedSkill = assigned && skillForAction(battle, assigned)
    const eligible = pendingAvailability?.targetInstanceIds.includes(member.instanceId) ?? false
    return <article key={member.instanceId} className={`combat-member ${isAlly ? 'ally-member' : 'enemy-member'} ${member.health <= 0 ? 'defeated' : ''}`}>
      <div className="combat-portrait-block">
        <button className={`target-button ${eligible ? `target-eligible${pulseTargets ? ' target-choice' : ''}` : ''}`} aria-label={`Consultar ${definition?.name}, ${playerName(ownerId)}${member.health <= 0 ? ' · derrotado' : ''}${eligible ? ' · alvo válido' : ''}`} title={eligible ? 'Clique para atribuir a habilidade' : 'Clique para consultar'} onClick={() => chooseCharacter(member)}>
          <Portrait member={member} />
        </button>
        <BattleHealthBar health={member.health} maxHealth={member.maxHealth}
          projectedHealth={healthPreview?.[member.instanceId]?.after}
          label={`Vida de ${definition?.name}, ${playerName(ownerId)}`} />
      </div>
      <CharacterIndicators battle={battle} queue={queue} member={member} viewerId={viewerId} inspect={inspect} />
      {isAlly && <div className={`skill-scroll${opponentTurn ? ' without-assignment' : ''}`}>
        {!opponentTurn && <button className={`assigned-skill ${assigned ? 'has-assignment' : ''}`} disabled={!assigned}
          title={assigned ? `${assignedSkill?.name} · clique para consultar; clique duplo ou Delete para cancelar` : 'Nenhuma ação atribuída'}
          aria-label={assigned ? `Consultar ação de ${definition?.name}; clique duplo ou Delete para cancelar` : `Nenhuma ação de ${definition?.name}`}
          onClick={() => { if (assigned) inspect(member.instanceId, assignedSkill?.name ?? null) }}
          onDoubleClick={() => removeAction(member.instanceId)}
          onKeyDown={event => { if (assigned && (event.key === 'Delete' || event.key === 'Backspace')) { event.preventDefault(); removeAction(member.instanceId) } }}>
          {assigned ? <SkillImage image={assignedSkill?.image} name={assignedSkill?.name ?? ''} /> : '?'}
        </button>}
        <div className="battle-skills">{getBattleSkillNames(battle, member).map((skillName) => <SkillButton key={skillName} battle={battle} queue={queue} member={member} ownerId={ownerId} skillName={skillName} pending={pending} now={session.now} readOnly={(training || online) && ownerId !== viewerId} onChoose={chooseSkill} />)}</div>
      </div>}
    </article>
  }

  const confirmationContent = (
      <TurnConfirmationContent battle={battle} queue={queue} payment={session.randomPayment} remaining={remaining}
        headingRef={dialogHeading} showTimer={!mobileLayout} error={session.error ? errors[session.error] ?? session.error : undefined}
        onChange={changeAllocation} onMove={moveAction} onCancel={closeDialog}
        onConfirm={() => remote ? remote.send({ type: 'confirm-turn' }) : commit(confirmSession(current.current, Date.now()))} />
  )

  const turnControls = <BattleTurnControls phase={battle.phase} opponentTurn={opponentTurn} mobile={mobileLayout}
    review={mobileLayout && battle.phase === 'confirmation' ? <section className="finish-dialog finish-inline" aria-labelledby="confirmation-title" onKeyDown={event => { if (event.key === 'Escape') closeDialog() }}>{confirmationContent}</section> : undefined}
    remaining={remaining} available={available} freeTotal={budget?.freeTotal ?? 0}
    onReady={battle.phase === 'confirmation' ? closeDialog : openConfirmation} onExchange={() => {
      if (remote) { remote.send({ type: 'open-exchange' }); return }
      const fresh = activeSession()
      if (fresh) commit({ ...fresh, pending: null, exchangeOpen: true, sacrificed: createEmptyEnergyPool(), error: '' })
    }} />

  return <div className="local-battle" onClick={(event) => {
    if (event.target instanceof Element && !event.target.closest('button, a, input, select, textarea, .inspection-area, .finish-inline, [role="dialog"]')) setInspection(null)
  }}>
    <div className="combat-screen" inert={modalOpen}>
      <header className={`battle-header${mobileLayout ? ' mobile-battle-header' : ''}`}>
        <BattlePlayerHeader profile={profiles[active.id]} onInspect={() => setInspection({ playerId: active.id })} />
        {mobileLayout ? <span className="battle-versus" aria-hidden="true">VS</span> : turnControls}
        <BattlePlayerHeader profile={profiles[enemy.id]} opponent onInspect={() => setInspection({ playerId: enemy.id })} />
      </header>

      <main className="combat-field" aria-label="Campo de batalha">
        <section className="combat-team allies" aria-label={`Equipe do ${playerName(active.id)}`}>{active.team.map((member) => memberRow(member, active.id, true))}</section>
        <section className="combat-team enemies" aria-label={`Equipe do ${playerName(enemy.id)}`}>{enemy.team.map((member) => memberRow(member, enemy.id, false))}</section>
      </main>

      <footer className="combat-bottom">
        <aside className="battle-tools">
          <div className="battle-dock" ref={dockRef}>
          {mobileLayout && turnControls}
          <div className="battle-action-buttons" role="group" aria-label="Controles da batalha">
            <button className="scroll-button future-control icon-control audio-control" disabled aria-label="Áudio — em breve" title="Som será implementado em uma próxima etapa">
              <svg className="battle-control-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m11 4-6 5H2v6h3l6 5V4Z" /><path d="M15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14" /></svg>
              <span className="battle-control-label">SOUND <small>Em breve</small></span>
            </button>
            <button className="scroll-button surrender-control" onClick={surrender}>
              <svg className="battle-control-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V3c5-4 9 4 14 0v11c-5 4-9-4-14 0" /></svg>
              <span className="battle-control-label">SURRENDER</span><span className="battle-control-mobile-label">DESISTIR</span>
            </button>
            <button className="scroll-button future-control icon-control missions-control" disabled aria-label="Missões — em breve" title="Missões da partida serão implementadas em uma próxima etapa">
              <svg className="battle-control-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10v3H7zM7 4H4v17h16V4h-3" /><path d="m7 11 1 1 2-2M12 11h5m-10 5 1 1 2-2M12 16h5" /></svg>
              <span className="battle-control-label">MISSÕES <small>Em breve</small></span>
              <span className="battle-control-mobile-label">MISSÕES</span>
            </button>
            <button className="scroll-button future-control icon-control chat-control" disabled aria-label="Chat — em breve" title="Chat será implementado em uma próxima etapa">
              <svg className="battle-control-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v12H9l-5 4V4Z" /><path d="M8 8h8M8 12h6" /></svg>
              <span className="battle-control-label">OPEN CHAT <small>Em breve</small></span>
              <span className="battle-control-mobile-label">CHAT</span>
            </button>

          </div>
          </div>
        </aside>
        {inspection && <div className="inspection-area">
          <BattleInspectionPanel battle={battle} inspection={inspection} profiles={profiles} onCharacter={(instanceId) => inspect(instanceId, null)} onSkill={inspect} />
        </div>}
        {session.error && <p className="battle-use-error" role="alert">{errors[session.error] ?? session.error}</p>}
      </footer>
    </div>

    {battle.phase === 'confirmation' && !mobileLayout && <div className="battle-overlay"><section ref={reviewRef} className="battle-dialog finish-dialog" role="dialog" aria-modal="true" aria-labelledby="confirmation-title" onKeyDown={(event) => dialogKeys(event, closeDialog)}>
      {confirmationContent}
    </section></div>}

    {session.exchangeOpen && <div className="battle-overlay"><section className="battle-dialog energy-dialog" role="dialog" aria-modal="true" aria-labelledby="exchange-title" onKeyDown={(event) => dialogKeys(event, closeDialog)}>
      <h2 id="exchange-title" ref={dialogHeading} tabIndex={-1}>{energyLabels.trade} <em>{energyRules.exchangeCost}</em> {energyLabels.units(energyRules.exchangeCost)} {energyLabels.for} <em>{energyRules.exchangeGain}</em></h2>
      <AllocationPicker available={available} value={session.sacrificed} required={energyRules.exchangeCost} onChange={changeAllocation} />
      <div className="receive-energy" role="radiogroup" aria-label={energyLabels.receiveChoice}>
        <span>{energyLabels.receive}</span>
        {energyTypes.map((type) => <label key={type} className="energy-choice" title={energyDefinitions[type].name}>
          <input type="radio" name="received-energy" value={type} checked={session.chosenType === type}
            onChange={() => remote ? remote.send({ type: 'choose-exchange', energyType: type }) : commit({ ...current.current, chosenType: type })} />
          <EnergyToken type={type} />
          <span className="sr-only">{energyDefinitions[type].name}</span>
        </label>)}
      </div>
      {session.error && <p className="dialog-error" role="alert">{errors[session.error] ?? session.error}</p>}
      <div className="dialog-actions"><button disabled={energyTotal(session.sacrificed) !== energyRules.exchangeCost} onClick={applyTrade}>APPLY</button><button onClick={closeDialog}>CANCEL</button></div>
      <small className="dialog-clock">Após Apply, a troca é irreversível. Tempo: {remaining}s</small>
    </section></div>}

    {session.surrenderPending && <div className="battle-overlay"><section className="battle-dialog" role="dialog" aria-modal="true" aria-labelledby="surrender-title" onKeyDown={(event) => dialogKeys(event, closeDialog)}>
      <h2 id="surrender-title" ref={dialogHeading} tabIndex={-1}>Desistir da batalha?</h2><p>{playerName(active.id)}, a outra equipe será declarada vencedora.</p>
      <div className="dialog-actions"><button onClick={confirmSurrender}>Confirmar desistência</button><button onClick={closeDialog}>Voltar à batalha</button></div>
    </section></div>}
    {battle.phase === 'finished' && <div className="battle-overlay"><section className="battle-dialog result-dialog" role="dialog" aria-modal="true" aria-labelledby="result-title" onKeyDown={dialogKeys}>
      <h2 id="result-title" ref={dialogHeading} tabIndex={-1}>{battle.winnerId ? (training || online) ? battle.winnerId === viewerId ? 'VITÓRIA' : 'DERROTA' : 'WINNER' : 'EMPATE'}</h2><p>{battle.winnerId ? remote ? `${remote.names[battle.winnerId]} venceu a partida privada.` : training ? battle.winnerId === trainingRules.humanPlayerId ? 'Você venceu o treinamento.' : 'O adversário venceu o treinamento.' : `${playerName(battle.winnerId)} venceu a batalha local.` : 'As duas equipes foram derrotadas.'}</p><p>{online ? 'Partida privada' : training ? 'Treinamento' : 'Teste local'} · sem alterações de ranking ou missões.</p><button className="continue-button" onClick={onContinue}>CONTINUE · Voltar à seleção</button>
    </section></div>}
  </div>
}
