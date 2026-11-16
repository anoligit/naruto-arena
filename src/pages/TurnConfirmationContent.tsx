import type { RefObject } from 'react'
import { getOngoingSkills } from '../game/ongoingSkills'
import { characters } from '../data/characters'
import EnergyCost from '../components/EnergyCost'
import EnergyToken from '../components/EnergyToken'
import { createEmptyEnergyPool, energyDisplayOrder, energyDefinitions, energyTotal } from '../game/energy'
import { buildConfirmedActions, getQueueBudget, skillForAction } from '../game/plannedActions'
import type { PlannedAction } from '../game/plannedActions'
import type { BattleState, EnergyPool } from '../game/types'
import { imageUrl } from '../utils/imageUrl'

export default function TurnConfirmationContent({ battle, queue, payment, remaining, headingRef, error, onChange, onMove, onCancel, onConfirm, showTimer = true }: {
  battle: BattleState; queue: PlannedAction[]; payment: EnergyPool; remaining: number
  showTimer?: boolean
  headingRef: RefObject<HTMLHeadingElement | null>; error?: string
  onChange: (payment: EnergyPool) => void; onMove: (from: number, to: number) => void
  onCancel: () => void; onConfirm: () => void
}) {
  const ongoing = getOngoingSkills(battle,battle.activePlayerId)
  const budget = getQueueBudget(battle, queue)
  const available = budget?.afterSpecific ?? createEmptyEnergyPool()
  const required = budget?.randomRequired ?? 0
  const chosen = energyTotal(payment)
  const confirmed = buildConfirmedActions(battle, queue, payment)
  const rows = queue.map((action) => {
    const member = battle.players[action.playerId].team.find(entry => entry.instanceId === action.characterInstanceId)
    const character = characters.find(entry => entry.id === member?.characterId)
    const skill = skillForAction(battle, action)
    const base = character?.skillDefinitions.find(entry => entry.id === action.skillId)
    const cost = skill?.cost ?? {}
    return { action, skill, character, cost, additional: (skill?.cost.random ?? 0) - (base?.cost.random ?? 0) }
  })
  return <>
    <header className="finish-heading">
      <h2 id="confirmation-title" ref={headingRef} tabIndex={-1}>Finalizar turno</h2>
      {showTimer && <span className="finish-clock" role="timer">{remaining}s</span>}
    </header>
    <section className="finish-attacks" aria-label="Ordem e custos dos ataques">
      <h3>Ordem de execução</h3><p className="finish-help">Organize a ordem das habilidades do turno.</p>
      {!queue.length && <p>{ongoing.length ? 'Nenhuma nova habilidade selecionada.' : 'O turno será encerrado sem habilidades.'}</p>}
      <ol className="finish-queue">
        {ongoing.map(row => <li className="finish-ongoing" key={`ongoing:${row.id}`} aria-label={`${row.skill.name} · efeito ${row.suspended ? 'suspenso' : 'ativo'} · sem novo custo`}>
          <b className="finish-ongoing-label">{row.suspended ? 'Pausa' : 'Ativa'}</b>
          {row.skill.image ? <img src={imageUrl(row.skill.image)} alt="" draggable={false} /> : <span aria-hidden="true" />}
          <div className="finish-action-info"><h4>{row.skill.name}</h4><span className="finish-ongoing-note">{row.sourceName} · sem novo custo</span></div>
          {row.stackCount > 1 && <span className="finish-ongoing-count" aria-label={`${row.stackCount} acúmulos`}>×{row.stackCount}</span>}
        </li>)}
        {rows.map(({ action, skill, cost, additional }, index) => <li key={action.characterInstanceId}>
        <b className="finish-order">{index + 1}º</b>
        {skill?.image && <img src={imageUrl(skill.image)} alt="" draggable={false} />}
        <div className="finish-action-info"><h4>{skill?.name}</h4><EnergyCost cost={cost} />
          {additional > 0 && <small>Inclui +{additional} energia qualquer por efeitos ativos.</small>}
        </div>
        <div className="finish-order-controls">
          <button aria-label={`Mover ${skill?.name} para antes`} disabled={!index} onClick={() => onMove(index, index - 1)}>↑</button>
          <button aria-label={`Mover ${skill?.name} para depois`} disabled={index === queue.length - 1} onClick={() => onMove(index, index + 1)}>↓</button>
        </div>
      </li>)}</ol>
    </section>
    <section className="finish-energy" aria-label="Escolha de energias do turno">
      <h3 className="finish-consumption-heading">{`Consumir energia ${chosen}/${required}`}</h3>
      <output className="sr-only" aria-label="Energias escolhidas" role="status">{chosen}/{required}</output>
      {required ? <>
        <p className="finish-help">Escolha a quantidade de cada energia que será utilizada no turno.</p>
        <div className="finish-available-row">
          <span className="finish-row-label">Energias disponíveis</span>
          {energyDisplayOrder.map(type => <span className="finish-available-type" key={type}>
            <EnergyToken type={type} /><span className="sr-only">{energyDefinitions[type].name}: </span>
            <output aria-label={`${energyDefinitions[type].name} disponível`}>×{available[type] - payment[type]}</output>
          </span>)}
        </div>
        <div className="finish-consume-row" role="group" aria-label="Energias a consumir">
          <span className="finish-row-label">Consumir no turno</span>
          {energyDisplayOrder.map(type => <div className="finish-consume-type" key={type}>
            <button aria-label={`Retirar ${energyDefinitions[type].name}`} disabled={!payment[type]} onClick={() => onChange({ ...payment, [type]: payment[type] - 1 })}>−</button>
            <output aria-label={`${energyDefinitions[type].name} escolhido`}>{payment[type]}</output>
            <button aria-label={`Escolher ${energyDefinitions[type].name}`} disabled={chosen >= required || payment[type] >= available[type]} onClick={() => onChange({ ...payment, [type]: payment[type] + 1 })}>+</button>
          </div>)}
        </div>
      </> : <p className="finish-no-choice">Sem energia qualquer a escolher.</p>}
    </section>
    {error && <p className="dialog-error" role="alert">{error}</p>}
    <div className="finish-actions"><button onClick={onCancel}>Cancelar</button><button disabled={!budget || !confirmed} onClick={onConfirm}>Confirmar turno</button></div>
  </>
}
