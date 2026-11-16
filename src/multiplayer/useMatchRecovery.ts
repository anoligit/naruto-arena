import { useEffect, useState } from 'react'
import { savedMatch, type Recovery } from './recovery'
export function useMatchRecovery(accountId?: string) {
  const [recovery, setRecovery] = useState<Recovery | null>(() => savedMatch(accountId))
  const [checking, setChecking] = useState(!!accountId && !recovery)
  useEffect(() => {
    if (!accountId) return
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)
    fetch('/api/match', { credentials: 'same-origin', cache: 'no-store', signal: controller.signal })
      .then(response => response.ok ? response.json() : null)
      .then(result => { if (result?.code && /^[A-Z2-9]{6}$/.test(result.code)) setRecovery({ code: result.code }) })
      .catch(() => {})
      .finally(() => { clearTimeout(timeout); if (!controller.signal.aborted) setChecking(false) })
    controller.signal.addEventListener('abort', () => setChecking(false), { once: true })
    return () => { clearTimeout(timeout); controller.abort() }
  }, [accountId])
  return { recovery, checking, clearRecovery: () => setRecovery(null) }
}
