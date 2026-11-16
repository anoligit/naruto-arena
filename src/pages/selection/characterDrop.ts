import type { Character } from '../../characters/definition'

export type CharacterDragSource = { character: Character; fromSlot: number | null }
export type CharacterDropTarget = { type: 'team'; slot: number } | { type: 'catalog' }

// Esta função altera apenas a equipe escolhida, nunca o catálogo ou os index.ts.
export function applyCharacterDrop(
  team: (Character | null)[], source: CharacterDragSource, target: CharacterDropTarget, unlocked: boolean
): (Character | null)[] {
  const { character, fromSlot } = source
  if (fromSlot !== null && (!Number.isInteger(fromSlot) || fromSlot < 0 || fromSlot >= team.length || team[fromSlot]?.id !== character.id)) return team
  if (target.type === 'catalog') {
    if (fromSlot === null) return team
    return team.map((member, index) => index === fromSlot ? null : member)
  }
  if (!unlocked || !Number.isInteger(target.slot) || target.slot < 0 || target.slot >= team.length) return team
  if (fromSlot === null) {
    if (team[target.slot] || team.some(member => member?.id === character.id)) return team
    return team.map((member, index) => index === target.slot ? character : member)
  }
  if (fromSlot === target.slot) return team
  // Dentro da equipe, dois retratos trocam de espaço; nenhum personagem desaparece.
  const next = [...team]
  next[fromSlot] = next[target.slot]
  next[target.slot] = character
  return next
}

export function canDropCharacter(
  team: (Character | null)[], source: CharacterDragSource, target: CharacterDropTarget, unlocked: boolean
): boolean {
  if (target.type === 'team' && source.fromSlot === target.slot) return unlocked && team[target.slot]?.id === source.character.id
  return applyCharacterDrop(team, source, target, unlocked) !== team
}
