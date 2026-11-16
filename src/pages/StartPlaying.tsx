import MissionsPage from '../missions/MissionsPage'
import { canUseCharacter, characterUnlockText } from '../missions/progression'
import MobileSelectionNavigation, { type SelectionTab } from './selection/MobileSelectionNavigation'
import CharacterInspectionContent from './CharacterInspectionContent'
import CharacterDetailsPanel from './selection/CharacterDetailsPanel'
import { useMobileBattle } from './useMobileBattle'
import OnlineRoom from '../multiplayer/OnlineRoom'
import QuickMatch from '../multiplayer/QuickMatch'
import TrainingMatch from '../multiplayer/TrainingMatch'
import { useMatchRecovery } from '../multiplayer/useMatchRecovery'
import { invitationCode } from '../multiplayer/invitation'
import PlayerProfileCard from '../player/PlayerProfileCard'
import AccountPage from '../account/AccountPage'
import AccountSettings from '../account/AccountSettings'
import AccountLinks from '../account/AccountLinks'
import { useAccount } from '../account/useAccount'
import { imageUrl } from '../utils/imageUrl'

import { Fragment, useEffect, useLayoutEffect, useId, useRef, useState } from 'react'
import type { Dispatch, SetStateAction, DragEvent } from 'react'
import { characters as registeredCharacters } from '../data/characters'
import { orderCharacterCatalog } from '../characters/catalogOrder'
import type { Character } from '../data/characters'
import { createTrainingBattle } from '../game/training/createTrainingBattle'
import { createBattle } from '../game/createBattle'
import { getCompleteTeam } from '../game/teamRules'
import type { BattleState } from '../game/types'
import type { BattleMode } from '../game/localBattleSession'
import LocalBattle from './LocalBattle'
import '../Game.css'

type StartPlayingProps = {
  team: (Character | null)[]
  setTeam: Dispatch<SetStateAction<(Character | null)[]>>
}

function StartPlaying({ team, setTeam }: StartPlayingProps) {
  const { profile: playerProfile, account } = useAccount()
  const characters = orderCharacterCatalog(registeredCharacters)
  const unlocked = (character: Character) => canUseCharacter(character.id,account?.progression)
  const { recovery, checking, clearRecovery } = useMatchRecovery(account?.id)
  const [localBattle, setLocalBattle] = useState<{ state: BattleState; mode: BattleMode } | null>(null)
  const [trainingTeam, setTrainingTeam] = useState<Character[] | null>(null)
  const [quickTeam, setQuickTeam] = useState<Character[] | null>(null)
  const [onlineTeam, setOnlineTeam] = useState<Character[] | null>(null)
  const completeTeam = team.every(character=>character && unlocked(character)) ? getCompleteTeam(team) : null
  const mobile = useMobileBattle()
  const [tab, setTab] = useState<SelectionTab>('characters')
  const [search, setSearch] = useState('')
  const [catalogPage, setCatalogPage] = useState(0)
  const playMenuId = useId()
  const [playMenuOpen, setPlayMenuOpen] = useState(false)
  const catalogTap = useRef<{ id: string; time: number; timer: ReturnType<typeof setTimeout> } | null>(null)
  useEffect(() => () => { if (catalogTap.current) clearTimeout(catalogTap.current.timer) }, [])
  const normalize = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const filteredCharacters = mobile ? characters.filter(character => normalize(character.name).includes(normalize(search))) : characters
  const pageCount = Math.max(1, Math.ceil(filteredCharacters.length / 20))
  const currentPage = Math.min(catalogPage, pageCount - 1)
  const visibleCharacters = mobile ? filteredCharacters.slice(currentPage * 20, (currentPage + 1) * 20) : filteredCharacters
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const catalogScroll = useRef<HTMLDivElement>(null)
  const inspectionSlot = useRef<HTMLDivElement>(null)
  const [descriptionAbove, setDescriptionAbove] = useState(false)
  const descriptionDirection = useRef(false)

  // A altura anima entre os tamanhos reais, inclusive ao trocar de habilidade.
  // A fileira de origem tem prioridade sobre a centralização da descrição.
  useLayoutEffect(() => {
    const scroller = catalogScroll.current, panel = inspectionSlot.current
    const content = panel?.querySelector<HTMLElement>('.selection-description-overlay')
    if (!mobile || !selectedCharacter || !scroller || !panel || !content) return
    let frame = 0, until = 0
    const anchor = () => {
      const icon = [...scroller.querySelectorAll<HTMLButtonElement>('.character')]
        .find(button => button.dataset.characterId === selectedCharacter.id)
      if (!icon) { panel.classList.remove('has-character-anchor'); return }
      panel.classList.add('has-character-anchor')
      const bounds = scroller.getBoundingClientRect(), box = panel.getBoundingClientRect(), row = icon.getBoundingClientRect()
      panel.style.setProperty('--pointer-x', `${Math.max(14, Math.min(box.width - 14, row.left + row.width / 2 - box.left))}px`)
      const top = Math.min(box.top, row.top), bottom = Math.max(box.bottom, row.bottom)
      const fits = bottom - top <= bounds.height - 12
      const visibleTop = fits ? top : row.top, visibleBottom = fits ? bottom : row.bottom
      if (visibleBottom > bounds.bottom - 6) scroller.scrollTop += visibleBottom - bounds.bottom + 6
      else if (visibleTop < bounds.top + 6) scroller.scrollTop += visibleTop - bounds.top - 6
    }
    const follow = () => {
      anchor()
      if (performance.now() < until) frame = requestAnimationFrame(follow)
    }
    const resize = () => {
      panel.style.height = `${content.getBoundingClientRect().height + 16}px`
      until = performance.now() + 300
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(follow)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(content)
    // Deixa a altura inicial zero ser desenhada antes de expandir o balão.
    frame = requestAnimationFrame(resize)
    const viewportObserver = new ResizeObserver(resize)
    viewportObserver.observe(scroller)
    return () => { observer.disconnect(); viewportObserver.disconnect(); cancelAnimationFrame(frame) }
  }, [mobile, selectedCharacter, selectedSkill, tab])

  function chooseDescriptionDirection(button: HTMLButtonElement) {
    const bounds = catalogScroll.current?.getBoundingClientRect()
    if (!mobile || !bounds) return
    const character = button.getBoundingClientRect()
    descriptionDirection.current = (character.top + character.bottom) / 2 > (bounds.top + bounds.bottom) / 2
  }


  function addToTeam(character: Character) {
    if (!unlocked(character)) return
    setTeam((currentTeam) => {
      if (currentTeam.some((member) => member?.id === character.id)) {
        return currentTeam
      }

      const emptySlot = currentTeam.indexOf(null)

      if (emptySlot === -1) {
        return currentTeam
      }

      const newTeam = [...currentTeam]
      newTeam[emptySlot] = character

      return newTeam
    })
  }

  function placeInSlot(character: Character, slotIndex: number) {
    if (!unlocked(character)) return
    setTeam((currentTeam) => {
      if (currentTeam.some((member) => member?.id === character.id)) {
        return currentTeam
      }

      if (currentTeam[slotIndex] !== null) {
        return currentTeam
      }

      const newTeam = [...currentTeam]
      newTeam[slotIndex] = character

      return newTeam
    })
  }

  function removeFromTeam(slotIndex: number) {
    setPlayMenuOpen(false)
    setTeam((currentTeam) => {
      const newTeam = [...currentTeam]
      newTeam[slotIndex] = null

      return newTeam
    })
  }

  function handleDragStart(event: DragEvent<HTMLButtonElement>, character: Character) {
    event.dataTransfer.setData('characterId', character.id)
    event.dataTransfer.effectAllowed = 'move'
  }

  function handleDrop(event: DragEvent<HTMLDivElement>, slotIndex: number) {
    event.preventDefault()

    const characterId = event.dataTransfer.getData('characterId')
    const character = characters.find((item) => item.id === characterId)

    if (character) {
      placeInSlot(character, slotIndex)
    }
  }

  function handleReturnToCatalog(event: DragEvent<HTMLDivElement>) {
    event.preventDefault()
    const characterId = event.dataTransfer.getData('teamCharacterId')
    if (!characterId) return

    setTeam((currentTeam) => currentTeam.map((member) =>
      member?.id === characterId ? null : member
    ))
  }

  function toggleCharacterDetails(character: Character) {
  setDescriptionAbove(descriptionDirection.current)
  setSelectedSkill(null)
  setSelectedCharacter((current) =>
    current?.id === character.id ? null : character
  )
}

  function startBattle(mode: BattleMode) {
    const readyTeam = getCompleteTeam(team)
    if (!readyTeam || readyTeam.some(character=>!unlocked(character))) return
    if (mode === 'training' && account) { setTrainingTeam(readyTeam); return }
    // Local mirror match only; online modes will use a separate opponent later.
    const state = mode === 'training' ? createTrainingBattle(readyTeam) : createBattle(readyTeam, readyTeam, 'player-1', 100)
    setLocalBattle({ state, mode })
  }

  if (onlineTeam || recovery) return <OnlineRoom team={onlineTeam ?? []} recovery={recovery} onBack={() => { setOnlineTeam(null); clearRecovery() }} />
  if (trainingTeam) return <TrainingMatch team={trainingTeam} onBack={() => setTrainingTeam(null)} />
  if (quickTeam) return <QuickMatch team={quickTeam} onBack={() => setQuickTeam(null)} />
  if (checking) return <main className="online-room" role="status">Verificando partida em andamento...</main>

  if (localBattle) {
    return <LocalBattle initialState={localBattle.state} mode={localBattle.mode} onContinue={() => {
      setLocalBattle(null)
      setSelectedCharacter(null)
      setSelectedSkill(null)
    }} />
  }

  function cancelCatalogTap() {
    if (catalogTap.current) clearTimeout(catalogTap.current.timer)
    catalogTap.current = null
  }

  function selectCatalogCharacter(character: Character, detail: number, timestamp: number) {
    if (!mobile) { if (detail <= 1) toggleCharacterDetails(character); return }
    if (detail === 0) { toggleCharacterDetails(character); return }
    const previous = catalogTap.current
    if (detail > 1 || (previous?.id === character.id && timestamp - previous.time < 350)) {
      cancelCatalogTap()
      setSelectedCharacter(null)
      setSelectedSkill(null)
      addToTeam(character)
      return
    }
    cancelCatalogTap()
    catalogTap.current = { id: character.id, time: timestamp, timer: setTimeout(() => {
      catalogTap.current = null
      toggleCharacterDetails(character)
    }, 350) }
  }

  function changeCatalogPage(page: number) {
    cancelCatalogTap()
    setSelectedCharacter(null)
    setSelectedSkill(null)
    setCatalogPage(page)
  }

  const mobileDescription = selectedCharacter && <div key={selectedCharacter.id} ref={inspectionSlot}
    className={`selection-description-slot ${descriptionAbove ? 'opens-above' : 'opens-below'}`}>
    <div className="selection-description-reveal"><div className="selection-description-overlay">
    <CharacterInspectionContent definition={selectedCharacter}
      skill={selectedCharacter.skillDefinitions.find(entry => entry.name === selectedSkill)}
      skillName={selectedSkill} onSkill={setSelectedSkill} showUnlock unlockText={characterUnlockText(selectedCharacter.id,account?.progression)} />
  </div></div></div>
  const selectedIndex = visibleCharacters.findIndex(character => character.id === selectedCharacter?.id)
  const descriptionBeforeIndex = Math.floor(selectedIndex / 4) * 4
  const descriptionAfterIndex = Math.min(Math.floor(selectedIndex / 4) * 4 + 3, visibleCharacters.length - 1)

  const selectionMenu = (
      <nav className="game-menu" aria-label="Modos de partida">
        {!mobile && <span className="selection-mode-status">{invitationCode() ? `Sala ${invitationCode()} · ${completeTeam ? 'Time pronto: entre em Partida privada online' : 'Selecione 3 personagens para entrar'}` : completeTeam ? 'Time pronto para jogar' : 'Selecione 3 personagens diferentes para jogar'}</span>}
        <button disabled={!completeTeam} title="Local test · no ranking" onClick={() => startBattle('ladder')}>{mobile ? 'Ranqueada' : 'Start Ladder Game'}</button>
        <button disabled={!completeTeam} title="Encontrar um adversário online" onClick={() => { if (completeTeam) setQuickTeam(completeTeam) }}>{mobile ? 'Rápida' : 'Start Quick Game'}</button>
        <button disabled={!completeTeam} title="Criar ou entrar numa sala privada para dois jogadores" onClick={() => { if (completeTeam) setOnlineTeam(completeTeam) }}>{mobile ? 'Privada' : 'Partida privada online'}</button>
        <button disabled={!completeTeam} title="Enfrente o adversário controlado pelo jogo" onClick={() => startBattle('training')}>Treinamento</button>
      </nav>
  )
  return (
    <div className={`game${mobile ? ` mobile-selection tab-${tab}` : ''}`}
      onClick={(event) => {
        const target = event.target as HTMLElement
        if (!target.closest('.selection-play-anchor')) setPlayMenuOpen(false)
        if (target.closest('button, a, input, select, textarea, .selection-character-details, .character-details, .selection-description-overlay')) return
        setSelectedSkill(null)
        setSelectedCharacter(null)
      }} onKeyDown={event => { if (event.key === 'Escape') setPlayMenuOpen(false) }}>
      {!mobile && <CharacterDetailsPanel character={selectedCharacter} selectedSkill={selectedSkill}
        onSkillChange={setSelectedSkill}
        unlockText={selectedCharacter ? characterUnlockText(selectedCharacter.id,account?.progression) : undefined} />}
      {!mobile && selectionMenu}
      {mobile && tab !== 'characters' && <section className="selection-tab-page">
        {tab === 'profile' ? <AccountPage inline /> : tab === 'settings' ? <AccountSettings inline /> : <MissionsPage />}
      </section>}
      {mobile && <MobileSelectionNavigation active={tab} onChange={next => { cancelCatalogTap(); setPlayMenuOpen(false); setTab(next) }} onExit={() => {
        if (window.confirm('Deseja realmente sair do jogo?')) window.location.hash = 'startpage'
      }} />}

      <section className="selection-panel" hidden={mobile && tab !== 'characters'}>
        <div className="selection-catalog">
        {mobile && <div className="selection-filters" aria-label="Filtros de personagens">
          <div className="selection-filter-fields"><div className="selection-filter-options"><span>Filtros</span><button type="button" aria-pressed="true">Todos</button><button disabled title="Em breve">Em breve</button></div>
          <input type="search" aria-label="Buscar personagem" placeholder="Buscar personagem" value={search} onChange={event => { cancelCatalogTap(); setSearch(event.target.value); setCatalogPage(0) }} /></div>
          <button className="selection-filter-missions" onClick={() => setTab('missions')}>Missões</button>
        </div>}
        <div ref={catalogScroll}
          className="character-grid"
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleReturnToCatalog}
        >
          {mobile && selectedIndex < 0 && mobileDescription}
          {visibleCharacters.map((character, catalogIndex) => {
            const isLocked = !unlocked(character)
            const isInTeam = team.some(
              (member) => member?.id === character.id
            )

            return (
              <Fragment key={character.id}>
              {mobile && selectedIndex >= 0 && descriptionAbove && catalogIndex === descriptionBeforeIndex && mobileDescription}
              <button
                title={`${character.name}${isLocked ? ' · Bloqueado' : ''}`}
                aria-label={character.name}
                data-character-id={character.id}
                className={`character ${isInTeam ? 'in-team' : ''} ${isLocked ? 'is-locked' : ''}`}
                aria-pressed={selectedCharacter?.id === character.id}
                draggable={!isInTeam && !isLocked}
                onMouseDown={(event) => {
                  if (event.button !== 0) event.preventDefault()
                }}
                onClick={(event) => { chooseDescriptionDirection(event.currentTarget); selectCatalogCharacter(character, event.detail, event.timeStamp) }}
                onDoubleClick={() => {
                  cancelCatalogTap()
                  setSelectedSkill(null)
                  setSelectedCharacter(mobile ? null : character)
                  addToTeam(character)
                }}
                onContextMenu={(event) => {
                  event.preventDefault()
                  addToTeam(character)
                }}
                onDragStart={(event) => handleDragStart(event, character)}
              >
                {character.image ? (
                  <img
                    src={imageUrl(character.image)}
                    alt={character.name}
                    width={48}
                    height={48}
                    draggable={false}
                  />
                ) : (
                  character.name
                )}
              </button>
              {mobile && selectedIndex >= 0 && !descriptionAbove && catalogIndex === descriptionAfterIndex && mobileDescription}
              </Fragment>
            )
          })}
          {!mobile && Array.from({ length: Math.max(0, 21 - characters.length) }, (_, index) => (
            <div key={`empty:${index}`} className="character-placeholder" aria-hidden="true" />
          ))}
        </div>
        {mobile && !visibleCharacters.length && <p role="status">Nenhum personagem encontrado.</p>}
        </div>
        <aside className="team-panel">
          {!mobile && <><PlayerProfileCard profile={playerProfile} /><AccountLinks /></>}
          {mobile && <nav className="selection-pagination" aria-label="Páginas de personagens">
            <button type="button" disabled={currentPage === 0} onClick={() => changeCatalogPage(currentPage - 1)}>← Anterior</button>
            <button type="button" disabled={currentPage === pageCount - 1} onClick={() => changeCatalogPage(currentPage + 1)}>Próxima →</button>
          </nav>}
          <div className="selection-team-summary">
          <div className="selection-team-actions">
            <div className="selection-team-heading">Equipe</div>
            {mobile && <button className="add-character selection-team-add" aria-label="Adicionar personagem consultado ao time"
              onClick={() => { if (selectedCharacter) addToTeam(selectedCharacter) }}
              disabled={!selectedCharacter || !unlocked(selectedCharacter) || team.every(Boolean) || team.some(member => member?.id === selectedCharacter.id)}>+</button>}
          </div>
          <div className="team-slots">
            {team.map((member, index) => (
              <div
                key={index}
                className={`team-slot ${member ? 'occupied' : ''}`}
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => handleDrop(event, index)}
                onContextMenu={(event) => {
                  event.preventDefault()
                  if (member) removeFromTeam(index)
                }}
                title={member?.name ?? `Espaço ${index + 1}`}
              >
                {member ? (
                  <button
                    className="remove-character"
                    aria-label={`View skills for ${member.name}`}
                    onClick={(event) => {
  if (event.detail === 1) toggleCharacterDetails(member)
}}
onDoubleClick={() => {
  setSelectedSkill(null)
  setSelectedCharacter(member)
  removeFromTeam(index)
}}
                    draggable
                    onDragStart={(event) => {
                      handleDragStart(event, member)
                      event.dataTransfer.setData('teamCharacterId', member.id)
                    }}
                    onMouseDown={(event) => {
                      if (event.button !== 0) event.preventDefault()
                    }}
                  >
                    {member.image ? (
                      <img
                        src={imageUrl(member.image)}
                        alt={member.name}
                        width={75}
                        height={75}
                        draggable={false}
                      />
                    ) : member.name}
                  </button>
                ) : index + 1}
              </div>
            ))}
          </div>
          {mobile ? <div className="selection-play-anchor">
            <button className="selection-team-play" disabled={!completeTeam} aria-expanded={playMenuOpen && !!completeTeam} aria-controls={playMenuId}
              onClick={() => setPlayMenuOpen(open => !open)}>Jogar</button>
            {playMenuOpen && completeTeam && <div id={playMenuId} className="selection-play-list">{selectionMenu}</div>}
          </div> : <p className="team-readiness" role="status">
            {completeTeam ? 'Seu time está pronto para jogar' : `Selecione 3 personagens (${team.filter(Boolean).length}/3)`}
          </p>}
          {!mobile && <button className="add-character" onClick={() => { if (selectedCharacter) addToTeam(selectedCharacter) }}
            disabled={!selectedCharacter || !unlocked(selectedCharacter) || team.every(Boolean) || team.some((member) => member?.id === selectedCharacter.id)}>
            Adicionar ao time
          </button>}
          </div>
        </aside>
      </section>
    </div>
  )
}

export default StartPlaying
