import { createPortal } from 'react-dom'
import { imageUrl } from '../../utils/imageUrl'
import type { CharacterDragVisual } from './useCharacterDrag'

export default function CharacterDragLayer({ visual }: { visual: CharacterDragVisual | null }) {
  if (!visual) return null
  const { character } = visual.source
  // Fora da grade: o recorte/rolagem do catálogo não pode cortar a peça arrastada.
  return createPortal(<div className={`character-drag-layer${visual.returning ? ' is-returning' : ''}${visual.valid ? ' can-drop' : ''}`}
    aria-hidden="true" style={{ width: visual.width, height: visual.height, transform: `translate3d(${visual.x}px, ${visual.y}px, 0)` }}>
    {character.image ? <img src={imageUrl(character.image)} alt="" draggable={false} /> : character.name}
  </div>, document.body)
}
