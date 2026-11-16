import { useEffect, useRef, useState } from 'react'
import { imageUrl } from '../utils/imageUrl'
import { useAccount } from '../account/useAccount'
import type { Character } from '../characters/definition'
import { multiplayerVersion } from './version'
import OnlineRoom from './OnlineRoom'
import './OnlineRoom.css'

type QueueReply = { status: 'searching' | 'matched' | 'cancelled'; code?: string; error?: string }
async function queueRequest(method: 'POST' | 'DELETE', input: object, signal: AbortSignal, owner: string): Promise<QueueReply> {
  const response = await fetch('/api/quick', { method, credentials: 'same-origin', cache: 'no-store', signal,
    headers: { 'Content-Type': 'application/json', 'X-Arena-Account': owner }, body: JSON.stringify(input) })
  let result: QueueReply
  try { result = await response.json() } catch { throw new Error('O servidor de partidas rápidas não está disponível neste endereço.') }
  if (!response.ok) throw new Error(result.error ?? 'Não foi possível buscar adversário.')
  if (!['searching','matched','cancelled'].includes(result.status) || result.status === 'matched' && !/^[A-Z2-9]{6}$/.test(result.code ?? '')) throw new Error('O servidor enviou uma resposta inválida.')
  return result
}

export default function QuickMatch({ team, onBack }: { team: Character[]; onBack: () => void }) {
  const { account } = useAccount()
  const [searchId] = useState(() => crypto.randomUUID())
  const [code, setCode] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [retry, setRetry] = useState(0)
  const [cancelling, setCancelling] = useState(false)
  const cancelPending = useRef(false)
  const active = useRef<AbortController | null>(null)

  useEffect(() => {
    if (!account || code) return
    let stopped = false, timer: number | undefined
    const poll = async () => {
      if (stopped || cancelPending.current) return
      const controller = new AbortController(); active.current = controller
      const timeout = setTimeout(() => controller.abort(), 10000)
      try {
        const result = await queueRequest('POST', { searchId, version: multiplayerVersion, team: team.map(c => c.id) }, controller.signal, account.id)
        if (stopped || cancelPending.current) return
        if (result.status === 'matched') { setCode(result.code!); return }
        if (result.status === 'cancelled') { onBack(); return }
        setError('')
        timer = window.setTimeout(poll, 2000)
      } catch (reason) {
        if (!stopped && !cancelPending.current) setError(reason instanceof Error ? reason.message : 'Confira sua conexão e tente novamente.')
      } finally { clearTimeout(timeout) }
    }
    timer = window.setTimeout(poll, 0)
    return () => { stopped = true; window.clearTimeout(timer); active.current?.abort() }
  }, [account, code, team, retry, searchId, onBack])

  async function cancel() {
    if (cancelPending.current) return
    cancelPending.current = true; active.current?.abort(); setCancelling(true); setError('')
    try {
      const result = await queueRequest('DELETE', {searchId}, AbortSignal.timeout(10000), account!.id)
      if (result.status === 'matched') setCode(result.code!)
      else onBack()
    } catch { setError('Não foi possível confirmar o cancelamento. Confira a conexão e tente novamente.'); cancelPending.current = false; setCancelling(false) }
  }

  if (code) return <OnlineRoom team={team} recovery={{code}} onBack={onBack} />
  return <main className="online-room quick-match">
    <h1>Partida rápida</h1>
    {!account ? <><p>Entre na sua conta para encontrar um adversário online.</p><a href="#login">Entrar na conta</a></> : <>
      <p role="status">{cancelling ? 'Cancelando busca...' : error ? 'Busca interrompida.' : 'Buscando adversário...'}</p>
      <p>A partida começa automaticamente quando outro jogador entrar na fila.</p>
      <div className="quick-match-team" aria-label="Sua equipe">{team.map(character => <img key={character.id} src={imageUrl(character.image)} alt={character.name} />)}</div>
      {error && <p role="alert">{error}</p>}
      {error && !cancelling && <button onClick={() => { setError(''); setRetry(value => value + 1) }}>Tentar novamente</button>}
      <button disabled={cancelling} onClick={cancel}>{cancelling ? 'Aguarde...' : 'Cancelar busca'}</button>
    </>}
    {!account && <button onClick={onBack}>Voltar à seleção</button>}
  </main>
}
