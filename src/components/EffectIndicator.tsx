import { useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { imageUrl } from '../utils/imageUrl'
import './EffectIndicator.css'

type Props = {
  name: string
  image?: string
  lines: string[]
  duration: string
  planned?: boolean
  record?: boolean
  origin?: 'ally' | 'enemy'
  onConsult: () => void
}

export default function EffectIndicator({ name, image, lines, duration, planned = false, record = false, origin, onConsult }: Props) {
  const tooltipId = useId()
  const button = useRef<HTMLButtonElement>(null)
  const tooltip = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState<{ left: number; top: number } | null>(null)
  const originLabel = origin === 'ally' ? 'Habilidade aliada' : origin === 'enemy' ? 'Habilidade inimiga' : ''
  const contentKey = lines.join('\n') + duration + originLabel

  useLayoutEffect(() => {
    if (!open) return
    function update() {
      if (!button.current || !tooltip.current) return
      const anchor = button.current.getBoundingClientRect()
      const bounds = tooltip.current.getBoundingClientRect()
      const margin = 8
      const left = Math.max(margin, Math.min(anchor.left, window.innerWidth - bounds.width - margin))
      const below = anchor.bottom + 6
      const top = below + bounds.height <= window.innerHeight - margin
        ? below
        : Math.max(margin, anchor.top - bounds.height - 6)
      setPosition({ left, top })
    }
    update()
    window.addEventListener('resize', update)
    window.addEventListener('scroll', update, true)
    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update, true)
    }
  }, [open, contentKey])

  return <>
    <button
      ref={button}
      type="button"
      className={`effect-icon${planned ? ' planned-icon' : ''}`}
      aria-label={`Consultar ${planned ? 'ação atribuída' : record ? 'counter ocorrido' : 'efeito ativo'}: ${name}${originLabel ? ` · ${originLabel}` : ''}`}
      aria-describedby={open ? tooltipId : undefined}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false) }}
      onClick={onConsult}
    >
      {image ? <img src={imageUrl(image)} alt="" draggable={false} /> : <span>{name}</span>}
      {origin && <span className={`effect-origin effect-origin-${origin}`} title={originLabel} aria-hidden="true" />}
    </button>
    {open && createPortal(
      <div
        ref={tooltip}
        id={tooltipId}
        role="tooltip"
        className="effect-tooltip"
        style={{ left: position?.left ?? 0, top: position?.top ?? 0, visibility: position ? 'visible' : 'hidden' }}
      >
        <strong>{name}</strong>
        {record && <small>Registro de counter ocorrido</small>}
        {originLabel && <small>{originLabel}</small>}
        <ul>{lines.map((line, index) => <li key={`${index}:${line}`}>{line}</li>)}</ul>
        <em>{duration}</em>
      </div>,
      document.body
    )}
  </>
}
