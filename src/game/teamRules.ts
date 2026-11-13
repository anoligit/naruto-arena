import { characters } from '../data/characters'
import type { Character } from '../data/characters'

export function getCompleteTeam(
  selection: readonly (Character | null)[]
): [Character, Character, Character] | null {
  if (selection.length !== 3 || selection.some((character) => !character)) return null
  const canonical = selection.map((character) => characters.find((entry) => entry.id === character?.id))
  if (canonical.some((character) => !character)) return null
  if (new Set(canonical.map((character) => character!.id)).size !== 3) return null
  return [canonical[0]!, canonical[1]!, canonical[2]!]
}
