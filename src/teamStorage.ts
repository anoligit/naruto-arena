import { characters } from './data/characters'
import type { Character } from './data/characters'

const TEAM_KEY = 'naruto-arena:team:v1'

export function loadTeam(): (Character | null)[] {
  const emptyTeam = (): (Character | null)[] => [null, null, null]

  try {
    const saved: unknown = JSON.parse(localStorage.getItem(TEAM_KEY) ?? 'null')
    if (!Array.isArray(saved)) return emptyTeam()

    const used = new Set<string>()
    return emptyTeam().map((_, index) => {
      const character = characters.find((item) => item.id === saved[index])
      if (!character || used.has(character.id)) return null
      used.add(character.id)
      return character
    })
  } catch {
    // Storage may be unavailable or contain an invalid previous value.
    return emptyTeam()
  }
}

export function saveTeam(team: (Character | null)[]): void {
  try {
    localStorage.setItem(TEAM_KEY, JSON.stringify(team.map((member) => member?.id ?? null)))
  } catch {
    // Character selection still works when the browser blocks storage.
  }
}
