// Números ordenam por prioridade; { position } move só este personagem para a posição indicada.
export type CharacterOrder = number | { position: number }

export function validCharacterOrder(order: unknown): order is CharacterOrder | undefined {
  if (order === undefined) return true
  if (typeof order === 'number') return Number.isFinite(order) && order > 0
  return typeof order === 'object' && order !== null && 'position' in order
    && Number.isSafeInteger(order.position) && Number(order.position) >= 1
}

export function sortCharacterEntries<T extends { path: string; module: { order?: CharacterOrder } }>(entries: T[]): T[] {
  const priority = (entry: T) => typeof entry.module.order === 'number' ? entry.module.order : Infinity
  const regular = entries.filter(entry => typeof entry.module.order !== 'object')
    .sort((a, b) => priority(a) - priority(b) || a.path.localeCompare(b.path))
  const moved = entries.filter(entry => typeof entry.module.order === 'object')
    .sort((a, b) => (a.module.order as { position: number }).position - (b.module.order as { position: number }).position || a.path.localeCompare(b.path))
  for (const entry of moved) regular.splice(Math.min((entry.module.order as { position: number }).position - 1, regular.length), 0, entry)
  return regular
}
