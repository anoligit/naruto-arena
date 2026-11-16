import type { Character } from './definition'

// O registro já ordena pelos valores de order nos index.ts dos personagens.
// A seleção mantém essa sequência, inclusive para personagens bloqueados e OLD.
export function orderCharacterCatalog(characters: readonly Character[]): Character[] {
  return [...characters]
}
