
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

  const skillDetails = selectedCharacter?.skillDefinitions?.find(
  (skill) => skill.name === selectedSkill
)

const chakraCost = skillDetails
  ? [
      ...Object.entries(skillDetails.cost.specific ?? {}).map(
        ([type, amount]) => `${amount} ${type}`
      ),
      ...(skillDetails.cost.random
        ? [`${skillDetails.cost.random} qualquer`]
        : []),
    ].join(' + ') || 'Sem custo'
  : ''

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
        'button, a, input, select, textarea, .skill, .portrait-slot'
      )
    ) {
      return
    }

    setSelectedSkill(null)
    setSelectedCharacter(null)
  }}
>
      <p className="selection-help">Left-click to view skills. Double-click or right-click to add from the catalog or remove from your team. Drag with the left button between the catalog and your team to add or remove.</p>
      <section
  className="character-details"
  style={{ visibility: selectedCharacter ? 'visible' : 'hidden' }}
>
  {selectedCharacter && (
    <>
      <h2>{selectedCharacter.name}</h2>

      <div className="character-details-top">
        <button
          type="button"
          className="portrait-slot"
          aria-label={`View description for ${selectedCharacter.name}`}
          aria-pressed={selectedSkill === null}
          onClick={() => setSelectedSkill(null)}
        >
          {selectedCharacter.image ? (
            <img
              src={`${import.meta.env.BASE_URL}${selectedCharacter.image}`}
              alt={selectedCharacter.name}
              className="character-portrait"
              draggable={false}
            />
          ) : (
            <span>{selectedCharacter.name}</span>
          )}
        </button>

        <div className="skills">
          {selectedCharacter.skills.map((skill) => (
            <button
              type="button"
              className="skill"
              key={skill}
              title={skill}
              aria-pressed={selectedSkill === skill}
              onClick={() => {
                setSelectedSkill((current) => current === skill ? null : skill)
              }}
            >
              {selectedCharacter.skillImages?.[skill] ? (
                <img
                  src={`${import.meta.env.BASE_URL}${selectedCharacter.skillImages[skill]}`}
                  alt={skill}
                  draggable={false}
                />
              ) : (
                skill
              )}
            </button>
          ))}
        </div>
            </div>

      <div className={`character-description${selectedSkill ? ' has-skill-image' : ''}`}>
        {selectedSkill && (
          <div className="description-image-slot">
            {selectedCharacter.skillImages?.[selectedSkill] ? (
              <img
                src={`${import.meta.env.BASE_URL}${selectedCharacter.skillImages[selectedSkill]}`}
                alt={selectedSkill}
                width={120}
                height={120}
                draggable={false}
              />
            ) : (
              <span>{selectedSkill}</span>
            )}
          </div>
        )}

        <div className="description-text">
          <h3>{selectedSkill ?? selectedCharacter.name}</h3>
          <p>
            {selectedSkill
              ? selectedCharacter.skillDescriptions?.[selectedSkill] ??
                'Descrição desta habilidade ainda não disponível.'
              : selectedCharacter.description ??
                'Descrição ainda não disponível.'}
          </p>
          {skillDetails && (
  <dl className="skill-facts">
    <div>
      <dt>Chakra</dt>
      <dd>{chakraCost}</dd>
    </div>

    <div>
      <dt>Recarga</dt>
      <dd>
        {skillDetails.cooldown === 0
          ? 'Nenhuma'
          : `${skillDetails.cooldown} ${
              skillDetails.cooldown === 1 ? 'turno' : 'turnos'
            }`}
      </dd>
    </div>

    <div>
      <dt>Classes</dt>
      <dd>{skillDetails.classes.join(', ')}</dd>
    </div>
  </dl>
)}
          {skillDetails && selectedCharacter.skillDefinitions?.filter((candidate) => candidate.replacement?.skillId === skillDetails.id).map((candidate) => (
            <button key={candidate.id} className="alternative-skill-link" onClick={() => setSelectedSkill(candidate.name)}>
              Consultar habilidade alternativa: {candidate.name}
            </button>
          ))}
          {skillDetails?.replacement && (
            <button className="alternative-skill-link" onClick={() => setSelectedSkill(selectedCharacter.skillDefinitions?.find((candidate) => candidate.id === skillDetails.replacement?.skillId)?.name ?? null)}>
              Voltar à habilidade original
            </button>
          )}
        </div>
      </div>
    </>
  )}
</section>


      <nav className="game-menu">
        <span>{completeTeam ? 'Team ready · Local battle' : 'Select 3 different characters to play'}</span>
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
                    src={`${import.meta.env.BASE_URL}${character.image}`}
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
        </div>

        <aside className="team-panel">
          <h3>Your Team</h3>
          <p>
            {team.filter(Boolean).length}/3 characters selected
          </p>

         <button
  className="add-character"
  onClick={() => {
    if (selectedCharacter) addToTeam(selectedCharacter)
  }}
  disabled={
    !selectedCharacter ||
    team.every(Boolean) ||
    team.some((member) => member?.id === selectedCharacter?.id)
  }
>
  Add selected character
</button>

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
                        src={`${import.meta.env.BASE_URL}${member.image}`}
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
        </aside>
      </section>
    </div>
  )
}

export default StartPlaying
