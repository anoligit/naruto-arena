import { useSyncExternalStore } from 'react'

// A mesma quebra usada em Battle.css. O controle de turno existe uma só vez:
// no cabeçalho do desktop ou na barra inferior do celular.
const query = '(max-width: 720px)'
function subscribe(changed: () => void) {
  const media = window.matchMedia(query)
  media.addEventListener('change', changed)
  return () => media.removeEventListener('change', changed)
}
const read = () => window.matchMedia(query).matches
const serverSnapshot = () => false

export function useMobileBattle(): boolean {
  return useSyncExternalStore(subscribe, read, serverSnapshot)
}
