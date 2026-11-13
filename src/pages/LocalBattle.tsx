import { useCallback, useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { characters } from '../data/characters'
import { createEmptyChakraPool } from '../game/chakra'
import { statuses } from '../game/statuses'
import { getRemainingTurnSeconds } from '../game/turnTimer'
import { appendAction, applyExchange, confirmSession, createLocalSession, tickSession } from '../game/localBattleSession'
import type { BattleMode, LocalBattleSession } from '../game/localBattleSession'
import { chakraTotal, chakraTypes, getQueueBudget, skillForAction } from '../game/plannedActions'
import type { PlannedAction } from '../game/plannedActions'
import { getBattleSkillNames } from '../game/skillCatalog'
import { getSkillAvailability } from '../game/skillAvailability'
import type { BattleCharacter, BattleState, ChakraPool, ChakraType, PlayerId } from '../game/types'
import BattleInspectionPanel from './BattleInspection'
import type { BattleInspection } from './BattleInspection'
import '../Battle.css'

const playerName = (id: PlayerId) => id === 'player-1' ? 'Jogador 1' : 'Jogador 2'
const definitionOf = (member: BattleCharacter) => characters.find((entry) => entry.id === member.characterId)
const allMembers = (battle: BattleState) => Object.values(battle.players).flatMap((owner) => owner.team)
const errors: Record<string, string> = {
  'not-your-turn': 'Não é a vez deste jogador.', 'turn-expired': 'O tempo do turno acabou.',
  'character-defeated': 'Personagem derrotado.', 'already-acted': 'Este personagem já agiu neste turno.',
  'skill-replaced': 'Esta habilidade foi substituída por outra enquanto o efeito estiver ativo.',
  'already-queued': 'Ação já atribuída. Cancele-a no espaço ao lado do personagem para escolher outra.',
  stunned: 'Esta habilidade está bloqueada por stun de uma das suas classes.', cooldown: 'Habilidade em recarga.',
  'requirements-not-met': 'Os requisitos descritos nesta habilidade ainda não foram atendidos.',
  'invalid-target': 'Alvo não permitido.', 'target-defeated': 'O alvo foi derrotado.',
  'target-invulnerable': 'O alvo está invulnerável.', 'confirmation-open': 'Finalize ou cancele a confirmação.',
  'no-valid-target': 'Não há alvos válidos.', 'skill-not-found': 'Regras ainda não cadastradas. Consulta disponível.',
  'battle-finished': 'A partida terminou.', 'invalid-payment': 'Chakra livre insuficiente.',
  'choose-random-chakra': 'Escolha exatamente a quantidade indicada de chakra qualquer.',
}
function availabilityText(reason: string | null, cooldown: number) {
  return reason === 'cooldown' ? `Recarga: ${cooldown} turno(s). Consulta disponível.` : reason ? errors[reason] ?? reason : 'Clique num retrato dourado para atribuir a habilidade.'
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
  return <>{definition?.image && !failed
    ? <img src={`${import.meta.env.BASE_URL}${definition.image}`} alt="" draggable={false} onError={() => setFailed(true)} />
    : <span className="portrait-placeholder" aria-hidden="true">?</span>}</>
}
function SkillImage({ image, name }: { image?: string; name: string }) {
  return image ? <img src={`${import.meta.env.BASE_URL}${image}`} alt="" draggable={false} /> : <span>{name}</span>
}
function SkillButton({ battle, queue, member, ownerId, skillName, inspection, pending, now, onChoose }: {
  battle: BattleState; queue: PlannedAction[]; member: BattleCharacter; ownerId: PlayerId; skillName: string
  inspection: BattleInspection | null; pending: LocalBattleSession['pending']; now: number
  onChoose: (member: BattleCharacter, owner: PlayerId, name: string) => void
}) {
  const definition = definitionOf(member)
  const skill = definition?.skillDefinitions?.find((entry) => entry.name === skillName)
  const availability = getSkillAvailability(battle, queue, ownerId, member.instanceId, skill?.id ?? '', now)
  const selected = inspection?.characterInstanceId === member.instanceId && inspection.skillName === skillName
  const armed = pending?.characterInstanceId === member.instanceId && pending.skillId === skill?.id
  const blocked = availability.cooldown > 0 ? ' on-cooldown' : availability.reason === 'invalid-payment' ? ' insufficient-chakra' : availability.usable ? '' : ' use-blocked'
  return <button type="button" className={`battle-skill${blocked}${armed ? ' armed' : ''}`}
    title={`${skillName} · ${availabilityText(availability.reason, availability.cooldown)}`}
    aria-label={`${skillName} · ${playerName(ownerId)}`} aria-pressed={selected || armed}
    data-use-available={availability.usable} data-block-reason={availability.reason ?? ''}
    onClick={() => onChoose(member, ownerId, skillName)}>
    <SkillImage image={skill?.image ?? definition?.skillImages?.[skillName]} name={skillName} />
    {availability.cooldown > 0 && <strong>CD {availability.cooldown}</strong>}
  </button>
}
function AllocationPicker({ available, value, required, onChange }: {
  available: ChakraPool; value: ChakraPool; required: number; onChange: (next: ChakraPool) => void
}) {
  const chosen = chakraTotal(value)
  return <div className="allocation-picker" role="group" aria-label="Escolha dos tipos de chakra">
    <div className="allocation-head"><span>CHAKRA LEFT:</span><span>RANDOM CHAKRA:</span></div>
    {chakraTypes.map((type) => <div className="allocation-row" key={type}>
      <span className="allocation-label"><i className={`chakra-token ${type}`} aria-hidden="true" />{type}</span>
      <output aria-label={`${type} restante`}>{available[type] - value[type]}</output>
      <button aria-label={`Retirar ${type}`} disabled={value[type] === 0} onClick={() => onChange({ ...value, [type]: value[type] - 1 })}>−</button>
      <button aria-label={`Escolher ${type}`} disabled={chosen >= required || value[type] >= available[type]} onClick={() => onChange({ ...value, [type]: value[type] + 1 })}>+</button>
      <span className="allocation-label"><i className={`chakra-token ${type}`} aria-hidden="true" />{type}</span>
      <output aria-label={`${type} escolhido`}>{value[type]}</output>
    </div>)}
    <small className="allocation-total" role="status">{chosen}/{required} selecionado(s)</small>
  </div>
}
function QueueStrip({ battle, queue, onMove, onRemove }: {
  battle: BattleState; queue: PlannedAction[]; onMove: (from: number, to: number) => void; onRemove: (instanceId: string) => void
}) {
  return <ol className="turn-queue" aria-label="Ordem das habilidades">{queue.map((action, index) => {
    const skill = skillForAction(battle, action)
    const target = allMembers(battle).find((entry) => entry.instanceId === action.targetInstanceId)
    return <li key={action.characterInstanceId} draggable onDragStart={(event) => event.dataTransfer.setData('queue-index', String(index))}
      onDragOver={(event) => event.preventDefault()} onDrop={(event) => {
        event.preventDefault()
        const from = event.dataTransfer.getData('queue-index')
        if (from !== '' && Number.isInteger(Number(from))) onMove(Number(from), index)
      }}>
      <div className="queue-image" title={`${index + 1}. ${skill?.name} → ${target ? definitionOf(target)?.name : ''}`}>
        <SkillImage image={skill?.image} name={skill?.name ?? action.skillId} /><b>{index + 1}</b>
        <button className="queue-remove" aria-label={`Remover ${skill?.name}`} onClick={() => onRemove(action.characterInstanceId)}>×</button>
      </div>
      <small>{skill?.name}</small>
      <div className="queue-arrows"><button aria-label={`Mover ${skill?.name} para antes`} disabled={index === 0} onClick={() => onMove(index, index - 1)}>‹</button>
        <button aria-label={`Mover ${skill?.name} para depois`} disabled={index === queue.length - 1} onClick={() => onMove(index, index + 1)}>›</button></div>
    </li>
  })}</ol>
}
function CharacterIndicators({ battle, queue, member, inspect }: {
  battle: BattleState; queue: PlannedAction[]; member: BattleCharacter
  inspect: (instanceId: string, skillName: string | null) => void
}) {
  return <div className="character-indicators" aria-label={`Indicadores de ${definitionOf(member)?.name}`}>
    {member.statuses.filter((active) => !statuses.find((entry) => entry.id === active.statusId)?.invisible || active.sourcePlayerId === battle.activePlayerId).map((activeStatus) => {
      const source = allMembers(battle).find((entry) => entry.instanceId === activeStatus.sourceCharacterId)
      const skill = source && definitionOf(source)?.skillDefinitions?.find((entry) => entry.effects.some((effect) => effect.type === 'apply-status' && effect.statusId === activeStatus.statusId))
      const name = statuses.find((entry) => entry.id === activeStatus.statusId)?.name ?? activeStatus.statusId
      return <button key={activeStatus.instanceId} className="effect-icon" title={`Ativo: ${name}`} aria-label={`Consultar efeito ativo: ${name}`} onClick={() => inspect(source?.instanceId ?? member.instanceId, skill?.name ?? null)}><SkillImage image={skill?.image} name={name} /></button>
    })}
    {queue.filter((action) => action.targetInstanceId === member.instanceId).map((action) => {
      const skill = skillForAction(battle, action)
      return <button key={action.characterInstanceId} className="effect-icon planned-icon" title={`Planejado: ${skill?.name}. Será executado ao confirmar o turno.`} aria-label={`Consultar ação planejada: ${skill?.name}`} onClick={() => inspect(action.characterInstanceId, skill?.name ?? null)}><SkillImage image={skill?.image} name={skill?.name ?? ''} /></button>
    })}
  </div>
}

export default function LocalBattle({ initialState, mode, onContinue }: { initialState: BattleState; mode: BattleMode; onContinue: () => void }) {
  const [inspection, setInspection] = useState<BattleInspection | null>(null)
  const [session, setSession] = useState(() => createLocalSession(initialState, Date.now()))
  const current = useRef(session)
  const dialogHeading = useRef<HTMLHeadingElement>(null)
  const commit = useCallback((next: LocalBattleSession) => { current.current = next; setSession(next) }, [])
  useEffect(() => {
    if (session.battle.phase === 'finished') return
    const refresh = () => commit(tickSession(current.current, Date.now()))
    const timer = window.setInterval(refresh, 250)
    document.addEventListener('visibilitychange', refresh); window.addEventListener('focus', refresh)
    return () => { window.clearInterval(timer); document.removeEventListener('visibilitychange', refresh); window.removeEventListener('focus', refresh) }
  }, [commit, session.battle.phase])
  useEffect(() => {
    if (session.battle.phase === 'confirmation' || session.battle.phase === 'finished' || session.surrenderPending || session.exchangeOpen) dialogHeading.current?.focus()
  }, [session.battle.phase, session.surrenderPending, session.exchangeOpen])
  const activeSession = useCallback(() => {
    const before = current.current, fresh = tickSession(before, Date.now())
    if (fresh.battle !== before.battle) { commit(fresh); return null }
    return fresh.battle.phase === 'finished' ? null : fresh
  }, [commit])

  const { battle, queue, pending } = session
  const active = battle.players[battle.activePlayerId]
  const enemy = battle.players[active.id === 'player-1' ? 'player-2' : 'player-1']
  const budget = getQueueBudget(battle, queue)
  const available = budget?.afterSpecific ?? createEmptyChakraPool()
  const randomRequired = budget?.randomRequired ?? 0
  const remaining = getRemainingTurnSeconds(battle, session.now)
  const pendingAvailability = pending ? getSkillAvailability(battle, queue, active.id, pending.characterInstanceId, pending.skillId, session.now) : null
  const inspectedOwner = Object.values(battle.players).find((owner) => owner.team.some((entry) => entry.instanceId === inspection?.characterInstanceId))
  const inspectedMember = inspectedOwner?.team.find((entry) => entry.instanceId === inspection?.characterInstanceId)
  const inspectedSkill = inspectedMember && definitionOf(inspectedMember)?.skillDefinitions?.find((entry) => entry.name === inspection?.skillName)
  const inspectedAvailability = inspectedMember && inspectedOwner && inspection?.skillName ? getSkillAvailability(battle, queue, inspectedOwner.id, inspectedMember.instanceId, inspectedSkill?.id ?? '', session.now) : null
  const modalOpen = battle.phase !== 'planning' || session.surrenderPending || session.exchangeOpen

  const inspect = useCallback((instanceId: string, skillName: string | null) => setInspection({ characterInstanceId: instanceId, skillName }), [])
  const chooseSkill = useCallback((member: BattleCharacter, ownerId: PlayerId, skillName: string) => {
    inspect(member.instanceId, skillName)
    const fresh = tickSession(current.current, Date.now())
    const skill = definitionOf(member)?.skillDefinitions?.find((entry) => entry.name === skillName)
    const usable = getSkillAvailability(fresh.battle, fresh.queue, ownerId, member.instanceId, skill?.id ?? '', fresh.now).usable
    commit({ ...fresh, error: '', notice: '', pending: usable && skill ? { characterInstanceId: member.instanceId, skillId: skill.id } : null })
  }, [commit, inspect])
  const chooseCharacter = useCallback((member: BattleCharacter) => {
    const fresh = activeSession()
    if (!fresh?.pending) { inspect(member.instanceId, null); return }
    const availability = getSkillAvailability(fresh.battle, fresh.queue, fresh.battle.activePlayerId, fresh.pending.characterInstanceId, fresh.pending.skillId, fresh.now)
    if (!availability.targetInstanceIds.includes(member.instanceId)) { inspect(member.instanceId, null); return }
    const action: PlannedAction = { ...fresh.pending, playerId: fresh.battle.activePlayerId, targetInstanceId: member.instanceId }
    const result = appendAction(fresh.battle, fresh.queue, action, fresh.now)
    if (!result.ok) { commit({ ...fresh, error: result.reason }); return }
    commit({ ...fresh, queue: result.queue, pending: null, randomPayment: createEmptyChakraPool(), error: '', notice: 'Ação atribuída. Clique no espaço da ação para cancelar ou confirme o turno.' })
  }, [activeSession, commit, inspect])
  const removeAction = useCallback((instanceId: string) => {
    const fresh = activeSession()
    if (fresh) commit({ ...fresh, queue: fresh.queue.filter((entry) => entry.characterInstanceId !== instanceId), randomPayment: createEmptyChakraPool(), error: '', notice: 'Ação cancelada. Chakra reservado liberado.' })
  }, [activeSession, commit])
  const moveAction = useCallback((from: number, to: number) => {
    const fresh = activeSession()
    if (!fresh || from < 0 || from >= fresh.queue.length || to < 0 || to >= fresh.queue.length) return
    const next = [...fresh.queue], [action] = next.splice(from, 1)
    next.splice(to, 0, action); commit({ ...fresh, queue: next, error: '' })
  }, [activeSession, commit])
  const openConfirmation = useCallback(() => {
    const fresh = activeSession()
    if (fresh?.battle.phase === 'planning') commit({ ...fresh, pending: null, exchangeOpen: false, randomPayment: createEmptyChakraPool(), error: '', notice: '', battle: { ...fresh.battle, phase: 'confirmation' } })
  }, [activeSession, commit])
  const closeDialog = useCallback(() => {
    const fresh = activeSession()
    if (fresh) commit({ ...fresh, exchangeOpen: false, surrenderPending: false, error: '', randomPayment: createEmptyChakraPool(), battle: { ...fresh.battle, phase: 'planning' } })
  }, [activeSession, commit])
  const changeAllocation = useCallback((value: ChakraPool) => {
    const fresh = activeSession()
    if (fresh) commit({ ...fresh, error: '', ...(fresh.exchangeOpen ? { sacrificed: value } : { randomPayment: value }) })
  }, [activeSession, commit])
  const applyTrade = useCallback(() => {
    const fresh = activeSession()
    if (!fresh) return
    const next = applyExchange(fresh.battle, fresh.queue, fresh.sacrificed, fresh.chosenType, fresh.now)
    if (!next) { commit({ ...fresh, error: 'A troca exige cinco chakras e deve preservar o pagamento das ações atribuídas.' }); return }
    commit({ ...fresh, battle: next, sacrificed: createEmptyChakraPool(), error: '', notice: 'Troca aplicada. Ela permanece mesmo se o turno terminar sem ações.' })
  }, [activeSession, commit])
  const surrender = useCallback(() => {
    const fresh = activeSession()
    if (fresh) commit({ ...fresh, surrenderPending: true, pending: null })
  }, [activeSession, commit])
  const confirmSurrender = useCallback(() => {
    const fresh = activeSession()
    if (!fresh?.surrenderPending) return
    commit({ ...fresh, queue: [], pending: null, surrenderPending: false, battle: { ...fresh.battle, phase: 'finished', turnEndsAt: null, winnerId: fresh.battle.activePlayerId === 'player-1' ? 'player-2' : 'player-1' } })
  }, [activeSession, commit])

  function memberRow(member: BattleCharacter, ownerId: PlayerId, isAlly: boolean) {
    const definition = definitionOf(member)
    const assigned = queue.find((action) => action.characterInstanceId === member.instanceId)
    const assignedSkill = assigned && skillForAction(battle, assigned)
    const eligible = pendingAvailability?.targetInstanceIds.includes(member.instanceId) ?? false
    const percentage = member.health / member.maxHealth * 100
    return <article key={member.instanceId} className={`combat-member ${isAlly ? 'ally-member' : 'enemy-member'} ${member.health <= 0 ? 'defeated' : ''}`}>
      <div className="combat-portrait-block">
        <button className={`target-button ${eligible ? 'target-eligible' : ''}`} aria-label={`Consultar ${definition?.name}, ${playerName(ownerId)}${eligible ? ' · alvo válido' : ''}`} title={eligible ? 'Clique para atribuir a habilidade' : 'Clique para consultar'} onClick={() => chooseCharacter(member)}>
          <Portrait member={member} />
        </button>
        <div className="combat-health" role="progressbar" aria-label={`Vida de ${definition?.name}, ${playerName(ownerId)}`} aria-valuenow={member.health} aria-valuemin={0} aria-valuemax={member.maxHealth}>
          <span style={{ width: `${percentage}%`, background: percentage > 50 ? '#16d33b' : percentage > 20 ? '#f4d51e' : '#e63d30' }} /><b>{member.health}/{member.maxHealth}</b>
        </div>
        <small className="combat-name">{definition?.name}</small>
      </div>
      <CharacterIndicators battle={battle} queue={queue} member={member} inspect={inspect} />
      {isAlly && <div className="skill-scroll">
        <button className={`assigned-skill ${assigned ? 'has-assignment' : ''}`} disabled={!assigned} title={assigned ? `Cancelar ${assignedSkill?.name}` : 'Nenhuma ação atribuída'} aria-label={assigned ? `Cancelar ação de ${definition?.name}` : `Nenhuma ação de ${definition?.name}`} onClick={() => removeAction(member.instanceId)}>
          {assigned ? <><SkillImage image={assignedSkill?.image} name={assignedSkill?.name ?? ''} /><span className="assignment-cancel">×</span></> : '?'}
        </button>
        <div className="battle-skills">{getBattleSkillNames(battle, member).map((skillName) => <SkillButton key={skillName} battle={battle} queue={queue} member={member} ownerId={ownerId} skillName={skillName} inspection={inspection} pending={pending} now={session.now} onChoose={chooseSkill} />)}</div>
      </div>}
    </article>
  }

  return <div className="local-battle">
    <div className="combat-screen" inert={modalOpen}>
      <header className="battle-header">
        <div className="player-card"><strong>{playerName(active.id)}</strong><small>SUA VEZ · {mode.toUpperCase()} LOCAL</small><small>Turno {battle.turnNumber}</small></div>
        <div className="turn-center">
          <button className="ready-button" disabled={battle.phase !== 'planning'} onClick={openConfirmation}>PRESS WHEN READY</button>
          <div className="turn-meter"><progress max={60} value={remaining} aria-label="Tempo restante do turno" /><span role="timer" aria-label="Segundos restantes">{remaining}s</span></div>
          <div className="chakra-reserve" aria-label="Chakra após custos específicos">
            {chakraTypes.map((type) => <span key={type} title={type}><i className={`chakra-token ${type}`} aria-hidden="true" /><span className="sr-only">{type}: </span>× {available[type]}</span>)}
            <span title="Total de chakra livre, contando cada unidade independentemente do tipo"><i className="chakra-token random" aria-hidden="true" />× {budget?.freeTotal ?? 0}</span>
            <b title="Custos qualquer reservados: escolha os tipos ao finalizar">A escolher: {randomRequired}</b>
          </div>
          <button className="exchange-link" onClick={() => {
            const fresh = activeSession(); if (fresh) commit({ ...fresh, pending: null, exchangeOpen: true, sacrificed: createEmptyChakraPool(), error: '' })
          }}>EXCHANGE CHAKRA</button>
        </div>
        <div className="player-card enemy-player"><strong>{playerName(enemy.id)}</strong><small>EQUIPE ADVERSÁRIA</small><small>Teste local · equipe espelhada</small></div>
      </header>

      <main className="combat-field" aria-label="Campo de batalha">
        <section className="combat-team allies" aria-label={`Equipe do ${playerName(active.id)}`}>{active.team.map((member) => memberRow(member, active.id, true))}</section>
        <section className="combat-team enemies" aria-label={`Equipe do ${playerName(enemy.id)}`}>{enemy.team.map((member) => memberRow(member, enemy.id, false))}</section>
      </main>

      <footer className="combat-bottom">
        <aside className="battle-tools">
          <button className="scroll-button" onClick={surrender}>SURRENDER</button>
          <div className="turn-help" role={session.error ? 'alert' : 'status'}>
            {session.error ? errors[session.error] ?? session.error : pending ? 'Clique em um alvo dourado para atribuir a habilidade.' : session.notice || 'Clique em um personagem ou habilidade para consultar.'}
          </div>
          <small className="queue-summary">Ações atribuídas: {queue.length}/3 · Qualquer reservado: {randomRequired}</small>
          <details className="battle-history"><summary>Histórico</summary><ul>{session.log.map((entry, index) => <li key={`${index}:${entry}`}>{entry}</li>)}</ul></details>
        </aside>
        <div className="inspection-area">
          <div className="inspection-toolbar"><span>{inspection ? 'PERSONAGEM / HABILIDADE' : 'CLICK ON A SKILL'}</span>
            {inspectedMember && inspectedOwner && <div className="inspection-shortcuts">{getBattleSkillNames(battle, inspectedMember).map((skillName) => <SkillButton key={skillName} battle={battle} queue={queue} member={inspectedMember} ownerId={inspectedOwner.id} skillName={skillName} inspection={inspection} pending={pending} now={session.now} onChoose={chooseSkill} />)}</div>}
          </div>
          <BattleInspectionPanel battle={battle} inspection={inspection} onCharacter={(instanceId) => inspect(instanceId, null)} onSkill={inspect} />
          {inspectedAvailability && <div className="skill-use-status">{availabilityText(inspectedAvailability.reason, inspectedAvailability.cooldown)}</div>}
        </div>
      </footer>
    </div>

    {battle.phase === 'confirmation' && <div className="battle-overlay"><section className="battle-dialog chakra-dialog" role="dialog" aria-modal="true" aria-labelledby="confirmation-title" onKeyDown={(event) => dialogKeys(event, closeDialog)}>
      <h2 id="confirmation-title" ref={dialogHeading} tabIndex={-1}>CHOOSE <em>{randomRequired}</em> RANDOM CHAKRA(S)</h2>
      <AllocationPicker available={available} value={session.randomPayment} required={randomRequired} onChange={changeAllocation} />
      <QueueStrip battle={battle} queue={queue} onMove={moveAction} onRemove={removeAction} />
      {queue.length === 0 && <p className="dialog-note">O turno será encerrado sem habilidades.</p>}
      {session.error && <p className="dialog-error" role="alert">{errors[session.error] ?? session.error}</p>}
      <div className="dialog-actions"><button disabled={!budget || chakraTotal(session.randomPayment) !== randomRequired} onClick={() => commit(confirmSession(current.current, Date.now()))}>OK</button><button onClick={closeDialog}>CANCEL</button></div>
      <small className="dialog-clock">Tempo restante: {remaining}s · arraste os ícones para ordenar</small>
    </section></div>}

    {session.exchangeOpen && <div className="battle-overlay"><section className="battle-dialog chakra-dialog" role="dialog" aria-modal="true" aria-labelledby="exchange-title" onKeyDown={(event) => dialogKeys(event, closeDialog)}>
      <h2 id="exchange-title" ref={dialogHeading} tabIndex={-1}>EXCHANGE <em>5</em> CHAKRAS FOR <em>1</em></h2>
      <AllocationPicker available={available} value={session.sacrificed} required={5} onChange={changeAllocation} />
      <label className="receive-chakra">Receber <select value={session.chosenType} onChange={(event) => commit({ ...current.current, chosenType: event.target.value as ChakraType })}>{chakraTypes.map((type) => <option key={type} value={type}>{type}</option>)}</select></label>
      {session.error && <p className="dialog-error" role="alert">{errors[session.error] ?? session.error}</p>}
      <div className="dialog-actions"><button disabled={chakraTotal(session.sacrificed) !== 5} onClick={applyTrade}>APPLY</button><button onClick={closeDialog}>CANCEL</button></div>
      <small className="dialog-clock">Após Apply, a troca é irreversível. Tempo: {remaining}s</small>
    </section></div>}

    {session.surrenderPending && <div className="battle-overlay"><section className="battle-dialog" role="dialog" aria-modal="true" aria-labelledby="surrender-title" onKeyDown={(event) => dialogKeys(event, closeDialog)}>
      <h2 id="surrender-title" ref={dialogHeading} tabIndex={-1}>Desistir da batalha?</h2><p>{playerName(active.id)}, a outra equipe será declarada vencedora.</p>
      <div className="dialog-actions"><button onClick={confirmSurrender}>Confirmar desistência</button><button onClick={closeDialog}>Voltar à batalha</button></div>
    </section></div>}
    {battle.phase === 'finished' && <div className="battle-overlay"><section className="battle-dialog result-dialog" role="dialog" aria-modal="true" aria-labelledby="result-title" onKeyDown={dialogKeys}>
      <h2 id="result-title" ref={dialogHeading} tabIndex={-1}>{battle.winnerId ? 'WINNER' : 'EMPATE'}</h2><p>{battle.winnerId ? `${playerName(battle.winnerId)} venceu a batalha local.` : 'As duas equipes foram derrotadas.'}</p><p>Teste local · sem alterações de ranking ou missões.</p><button className="continue-button" onClick={onContinue}>CONTINUE · Voltar à seleção</button>
    </section></div>}
  </div>
}
