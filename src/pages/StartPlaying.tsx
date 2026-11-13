import PlayerProfileCard from '../player/PlayerProfileCard'
import { playerProfile } from '../player/profile'
import CharacterDetailsPanel from './selection/CharacterDetailsPanel'
import { imageUrl } from '../utils/imageUrl'

import { useState } from 'react'
import type { Dispatch, SetStateAction, DragEvent } from 'react'
import { characters } from '../data/characters'
import type { Character } from '../data/characters'
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
  const [localBattle, setLocalBattle] = useState<{ state: BattleState; mode: BattleMode } | null>(null)
  const completeTeam = getCompleteTeam(team)
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  function addToTeam(character: Character) {
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
  setSelectedSkill(null)
  setSelectedCharacter((current) =>
    current?.id === character.id ? null : character
  )
}

  function startBattle(mode: BattleMode) {
    const readyTeam = getCompleteTeam(team)
    if (!readyTeam) return
    // Local mirror match only; online modes will use a separate opponent later.
    const state = createBattle(readyTeam, readyTeam, 'player-1', 100)
    setLocalBattle({ state, mode })
  }

  if (localBattle) {
    return <LocalBattle initialState={localBattle.state} mode={localBattle.mode} onContinue={() => {
      setLocalBattle(null)
      setSelectedCharacter(null)
      setSelectedSkill(null)
    }} />
  }

  return (
    <div
  className="game"
  onClick={(event) => {
    const target = event.target as HTMLElement

    if (
      target.closest(
        'button, a, input, select, textarea, .character-details'
      )
    ) {
      return
    }

    setSelectedSkill(null)
    setSelectedCharacter(null)
  }}
>
      <p className="selection-help">Clique esquerdo: consultar. Clique novamente para fechar. Clique duplo ou direito: adicionar ao time ou remover dele. Arraste com o botão esquerdo entre o catálogo e o time.</p>
      <CharacterDetailsPanel character={selectedCharacter} selectedSkill={selectedSkill} onSkillChange={setSelectedSkill} />


      <nav className="game-menu">
        <span>{completeTeam ? 'Time pronto · batalha local' : 'Selecione 3 personagens diferentes para jogar'}</span>
        <button disabled={!completeTeam} title="Local test · no ranking" onClick={() => startBattle('ladder')}>Start Ladder Game</button>
        <button disabled={!completeTeam} title="Local test · two players on this computer" onClick={() => startBattle('quick')}>Start Quick Game</button>
        <button disabled={!completeTeam} title="Local test · no online room yet" onClick={() => startBattle('private')}>Start Private Game</button>
      </nav>

      <section className="selection-panel">
        <div
          className="character-grid"
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleReturnToCatalog}
        >
          {characters.map((character) => {
            const isInTeam = team.some(
              (member) => member?.id === character.id
            )

            return (
              <button
                key={character.id}
                className={`character ${isInTeam ? 'in-team' : ''}`}
                aria-pressed={selectedCharacter?.id === character.id}
                draggable={!isInTeam}
                onMouseDown={(event) => {
                  if (event.button !== 0) event.preventDefault()
                }}
                onClick={(event) => {
  if (event.detail === 1) toggleCharacterDetails(character)
}}
onDoubleClick={() => {
  setSelectedSkill(null)
  setSelectedCharacter(character)
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
            )
          })}
          {Array.from({ length: Math.max(0, 21 - characters.length) }, (_, index) => (
            <div key={`empty:${index}`} className="character-placeholder" aria-hidden="true" />
          ))}
        </div>

        <aside className="team-panel">
          <PlayerProfileCard profile={playerProfile} />
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
                title={member ? 'Click to view skills. Double-click or right-click to remove. Drag to the catalog to remove.' : 'Drop a character here'}
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
          <p className="team-readiness" role="status">
            {completeTeam ? 'Seu time está pronto para jogar' : `Selecione 3 personagens (${team.filter(Boolean).length}/3)`}
          </p>
          <button className="add-character" onClick={() => { if (selectedCharacter) addToTeam(selectedCharacter) }}
            disabled={!selectedCharacter || team.every(Boolean) || team.some((member) => member?.id === selectedCharacter.id)}>
            Adicionar ao time
          </button>
        </aside>
      </section>
    </div>
  )
}

export default StartPlaying
