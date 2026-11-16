import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import type { CharacterDragSource, CharacterDropTarget } from './characterDrop'

type Options = {
  enabled: boolean
  canDrop: (source: CharacterDragSource, target: CharacterDropTarget) => boolean
  onDrop: (source: CharacterDragSource, target: CharacterDropTarget) => void
}
export type CharacterDragVisual = {
  source: CharacterDragSource
  x: number
  y: number
  width: number
  height: number
  returning: boolean
  target: CharacterDropTarget | null
  valid: boolean
}
type Session = {
  source: CharacterDragSource
  pointerId: number
  element: HTMLButtonElement
  startX: number
  startY: number
  offsetX: number
  offsetY: number
  width: number
  height: number
  active: boolean
}

export function useCharacterDrag(options: Options) {
  const rootRef = useRef<HTMLDivElement>(null)
  const latest = useRef(options)
  const session = useRef<Session | null>(null)
  const suppressedUntil = useRef(0)
  const returningTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [visual, setVisual] = useState<CharacterDragVisual | null>(null)
  useLayoutEffect(() => { latest.current = options }, [options])

  useEffect(() => {
    function targetAt(x: number, y: number): CharacterDropTarget | null {
      const node = document.elementFromPoint(x, y)
      if (!node || !rootRef.current?.contains(node)) return null
      const slot = node.closest<HTMLElement>('[data-team-slot]')
      if (slot) return { type: 'team', slot: Number(slot.dataset.teamSlot) }
      return node.closest('[data-character-catalog]') ? { type: 'catalog' } : null
    }
    function release(current: Session) {
      if (current.element.hasPointerCapture(current.pointerId)) current.element.releasePointerCapture(current.pointerId)
    }
    function finish(x: number, y: number, cancelled = false) {
      const current = session.current
      if (!current) return
      session.current = null
      release(current)
      document.documentElement.classList.remove('dragging-character')
      if (!current.active) return
      // O clique gerado pelo soltar não deve abrir descrição nem adicionar outra vez.
      suppressedUntil.current = performance.now() + 350
      const target = cancelled || !latest.current.enabled ? null : targetAt(x, y)
      if (target && latest.current.canDrop(current.source, target)) {
        latest.current.onDrop(current.source, target)
        setVisual(null)
        return
      }
      const origin = current.element.getBoundingClientRect()
      setVisual({ source: current.source, x: origin.left, y: origin.top, width: current.width, height: current.height, returning: true, target: null, valid: false })
      const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 160
      returningTimer.current = setTimeout(() => { returningTimer.current = null; setVisual(null) }, delay)
    }
    function move(event: globalThis.PointerEvent) {
      const current = session.current
      if (!current || current.pointerId !== event.pointerId) return
      if (!latest.current.enabled) { finish(event.clientX, event.clientY, true); return }
      if (!current.active && Math.hypot(event.clientX - current.startX, event.clientY - current.startY) < 5) return
      current.active = true
      event.preventDefault()
      document.documentElement.classList.add('dragging-character')
      const target = targetAt(event.clientX, event.clientY)
      setVisual({ source: current.source, x: event.clientX - current.offsetX, y: event.clientY - current.offsetY,
        width: current.width, height: current.height, returning: false, target, valid: !!target && latest.current.canDrop(current.source, target) })
    }
    function up(event: globalThis.PointerEvent) {
      if (session.current?.pointerId === event.pointerId) finish(event.clientX, event.clientY)
    }
    function cancel(event: globalThis.PointerEvent) {
      if (session.current?.pointerId === event.pointerId) finish(event.clientX, event.clientY, true)
    }
    function escape(event: KeyboardEvent) { if (event.key === 'Escape') finish(0, 0, true) }
    const blur = () => finish(0, 0, true)
    window.addEventListener('pointermove', move, { passive: false })
    window.addEventListener('pointerup', up)
    window.addEventListener('pointercancel', cancel)
    window.addEventListener('keydown', escape)
    window.addEventListener('blur', blur)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointercancel', cancel)
      window.removeEventListener('keydown', escape)
      window.removeEventListener('blur', blur)
      if (session.current) release(session.current)
      session.current = null
      if (returningTimer.current) clearTimeout(returningTimer.current)
      document.documentElement.classList.remove('dragging-character')
    }
  }, [])

  function begin(event: PointerEvent<HTMLButtonElement>, source: CharacterDragSource) {
    if (!latest.current.enabled || event.button !== 0 || !event.isPrimary || event.pointerType === 'touch' || session.current || returningTimer.current) return
    const bounds = event.currentTarget.getBoundingClientRect()
    session.current = { source, pointerId: event.pointerId, element: event.currentTarget, startX: event.clientX, startY: event.clientY,
      offsetX: event.clientX - bounds.left, offsetY: event.clientY - bounds.top, width: bounds.width, height: bounds.height, active: false }
    event.currentTarget.setPointerCapture(event.pointerId)
  }
  const suppressClick = () => performance.now() < suppressedUntil.current
  const attachRoot = useCallback((node: HTMLDivElement | null) => { rootRef.current = node }, [])
  return { attachRoot, visual, begin, suppressClick }
}
