
import { useState } from 'react'
import type { Dispatch, SetStateAction, DragEvent, MouseEvent } from 'react'
import { characters } from '../data/characters'
import type { Character } from '../data/characters'
import '../Game.css'

type StartPlayingProps = {
  team: (Character | null)[]
  setTeam: Dispatch<SetStateAction<(Character | null)[]>>
}

function StartPlaying({ team, setTeam }: StartPlayingProps) {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0])

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

  function handleRightClick(event: MouseEvent<HTMLDivElement>, slotIndex: number) {
    event.preventDefault()
    removeFromTeam(slotIndex)
  }

  return (
    <div className="game">
      <p className="selection-help">Click to view skills. Double-click or drag to add to your team. Right-click a team member to remove.</p>
      <section className="character-details">
  <h2>{selectedCharacter.name}</h2>

  <div className="character-details-top">
    <div className="portrait-slot">
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
    </div>

    <div className="skills">
      {selectedCharacter.skills.map((skill) => (
        <div className="skill" key={skill} title={skill}>
          {selectedCharacter.skillImages?.[skill] ? (
            <img
              src={`${import.meta.env.BASE_URL}${selectedCharacter.skillImages[skill]}`}
              alt={skill}
              draggable={false}
            />
          ) : (
            skill
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      <nav className="game-menu">
        <span>Game modes · Coming soon</span>
        <button disabled title="Battles are not available yet">Start Ladder Game</button>
        <button disabled title="Battles are not available yet">Start Quick Game</button>
        <button disabled title="Battles are not available yet">Start Private Game</button>
      </nav>

      <section className="selection-panel">
        <div className="character-grid">
          {characters.map((character) => {
            const isInTeam = team.some(
              (member) => member?.id === character.id
            )

            return (
              <button
                key={character.id}
                className={`character ${isInTeam ? 'in-team' : ''}`}
                aria-pressed={selectedCharacter.id === character.id}
                draggable={!isInTeam}
                onClick={() => setSelectedCharacter(character)}
                onDoubleClick={() => addToTeam(character)}
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

          <button className="add-character" onClick={() => addToTeam(selectedCharacter)} disabled={team.every(Boolean) || team.some((member) => member?.id === selectedCharacter.id)}>Add selected character</button>
          <div className="team-slots">
            {team.map((member, index) => (
              <div
                key={index}
                className={`team-slot ${member ? 'occupied' : ''}`}
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => handleDrop(event, index)}
                onContextMenu={(event) => handleRightClick(event, index)}
                title={member ? 'Right-click to remove' : 'Drop a character here'}
              >
                {member ? <button className="remove-character" onClick={() => removeFromTeam(index)} aria-label={`Remove ${member.name}`}>{member.image ? (
  <img
    src={`${import.meta.env.BASE_URL}${member.image}`}
    alt={member.name}
    width={50}
    height={50}
    draggable={false}
  />
) : (
  member.name
)}</button> : index + 1}
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  )
}

export default StartPlaying
