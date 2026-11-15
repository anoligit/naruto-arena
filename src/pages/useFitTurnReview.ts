import { useLayoutEffect } from 'react'
import type { RefObject } from 'react'

// Deixa o painel usar sua altura natural. Só ajusta a escala quando a tela
// realmente não comporta todo o conteúdo, preservando timer e botões visíveis.
export function useFitTurnReview(ref: RefObject<HTMLElement | null>, active: boolean, mobile: boolean) {
  useLayoutEffect(() => {
    const element = ref.current
    if (!active || !element) return
    const fit = () => {
      const viewport = window.visualViewport?.height ?? window.innerHeight
      const bottom = mobile ? parseFloat(getComputedStyle(element).bottom) || 0 : 8
      const available = Math.max(1, viewport - bottom - 8)
      const scale = element.offsetHeight > 0 ? Math.min(1, available / element.offsetHeight) : 1
      element.style.setProperty('--review-scale', String(scale))
    }
    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(element)
    window.addEventListener('resize', fit)
    window.visualViewport?.addEventListener('resize', fit)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', fit)
      window.visualViewport?.removeEventListener('resize', fit)
      element.style.removeProperty('--review-scale')
    }
  }, [ref, active, mobile])
}
