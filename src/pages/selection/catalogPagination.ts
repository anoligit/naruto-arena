import type { Character } from '../../characters/definition'

// A ordem vem do catálogo; a paginação só escolhe o trecho que será exibido.
export function getCatalogPage(characters: readonly Character[], requestedPage: number, mobile: boolean) {
  const pageSize = mobile ? 20 : 21
  const pageCount = Math.max(1, Math.ceil(characters.length / pageSize))
  const page = Math.max(0, Math.min(Number.isFinite(requestedPage) ? Math.floor(requestedPage) : 0, pageCount - 1))
  return { page, pageSize, pageCount, characters: characters.slice(page * pageSize, (page + 1) * pageSize) }
}
