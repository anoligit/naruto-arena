import { saveMatch, type Recovery } from './recovery'
import { useAccount } from '../account/useAccount'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Character } from '../characters/definition'
import LocalBattle from '../pages/LocalBattle'
import { multiplayerVersion } from './version'
import type { BattleCommand, ClientMessage, RoomSnapshot, ServerMessage } from './protocol'
import './OnlineRoom.css'
import { invitationCode, invitationUrl } from './invitation'
import { avatars } from '../account/avatarCatalog'
import { createBattleProfile } from '../player/battleProfiles'
import type { BattleProfiles } from '../player/battleProfiles'

function serverUrl(): string | null {
  const configured = import.meta.env.VITE_MULTIPLAYER_URL?.trim()
  if (configured) return configured
  if (window.location.hostname.endsWith('.github.io')) return null
  if (['localhost', '127.0.0.1'].includes(window.location.hostname) && ['5173', '4173'].includes(window.location.port)) return `ws://${window.location.hostname}:3001/play`
  return `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.host}/play`
}

export default function OnlineRoom({ team, recovery, onBack }: { team: Character[]; recovery?: Recovery | null; onBack: () => void }) {
  const { account, refresh } = useAccount()
  const [name, setName] = useState(account?.username ?? '')
  const [avatarId, setAvatarId] = useState(account?.avatarId ?? avatars[0].id)
  const [code, setCode] = useState(invitationCode)
  const [join, setJoin] = useState(() => Boolean(invitationCode()))
  const [snapshot, setSnapshot] = useState<RoomSnapshot | null>(null)
  const [status, setStatus] = useState<'idle' | 'connecting' | 'connected' | 'closed'>('idle')
  const [error, setError] = useState('')
  const socket = useRef<WebSocket | null>(null)
  const latest = useRef<RoomSnapshot | null>(null)
  const seq = useRef(0)
  const proof = useRef<Recovery | null>(recovery ?? null)
  const failures = useRef(0)
  const ready = useRef(false)
  const [canRetry,setCanRetry] = useState(!!recovery)
  const [attempt, setAttempt] = useState(0)
  const [intent, setIntent] = useState<ClientMessage | null>(() => recovery ? { type:'resume', ...recovery, version:multiplayerVersion } : null)
  async function leave() { saveMatch(null, account?.id); if(account)await refresh(); onBack() }

  const receivedAt = useRef(0)
  const [elapsed, setElapsed] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setElapsed(Math.max(0,Date.now()-receivedAt.current)),250)
    return () => window.clearInterval(timer)
  }, [])

  const send = useCallback((command: BattleCommand) => {
    const connection = socket.current, state = latest.current
    if (!ready.current || connection?.readyState !== WebSocket.OPEN || !state?.session) { setError('A conexão com a partida foi encerrada.'); return }
    setError('')
    connection.send(JSON.stringify({ type: 'command', seq: ++seq.current, turn: state.session.battle.turnNumber, command } satisfies ClientMessage))
  }, [])

  function connect() {
    proof.current = null; failures.current = 0
    setStatus('connecting'); setError('')
    const hello = { name: account?.username ?? name.trim(), avatarId: account?.avatarId ?? avatarId, team: team.map(character => character.id), version: multiplayerVersion }
    setIntent(join ? { ...hello, type: 'join', code: code.trim().toUpperCase() } : { ...hello, type: 'create' })
  }
  useEffect(() => {
    if (!intent) return
    let connection: WebSocket | null = null, stopped = false, terminal = false, accepted = false
    let retry: number | undefined, timeout: number | undefined
    const schedule = () => {
      if (stopped || terminal || latest.current?.session?.battle.phase === 'finished') return
      if (!proof.current) { setStatus('closed'); return }
      if (failures.current >= 6) { setStatus('closed'); setError('Não foi possível retornar à sala. Confira sua conexão e tente novamente.'); return }
      setStatus('connecting')
      retry = window.setTimeout(() => setAttempt(value => value + 1), Math.min(10000, 1000 * 2 ** Math.min(failures.current++, 4)))
    }
    const start = window.setTimeout(() => {
      const url = serverUrl()
      if (!url) { setStatus('closed'); setError('O servidor de partidas ainda não está configurado para este site.'); return }
      setStatus('connecting'); ready.current=false
      try {
        const endpoint = new URL(url), hello: ClientMessage = proof.current ? { type:'resume', ...proof.current, version:multiplayerVersion } : intent
        if (hello.type === 'join' || hello.type === 'resume') endpoint.searchParams.set('room', hello.code)
        if (hello.type === 'resume') endpoint.searchParams.set('resume', '1')
        connection = new WebSocket(endpoint.href)
        const current = connection
        socket.current = current; seq.current = 0
        timeout = window.setTimeout(() => current.close(), 12000)
        current.onopen = () => current.send(JSON.stringify(hello))
        current.onmessage = event => {
          if (stopped) return
          try {
            const message = JSON.parse(event.data) as ServerMessage
            if (message.type === 'resume-info') {
              proof.current = { code: message.code, ...(message.token ? {token:message.token}:{}) }
              saveMatch(proof.current, account?.id); setCanRetry(true)
            } else if (message.type === 'state') {
              window.clearTimeout(timeout); failures.current = 0; accepted = true; ready.current=true
              latest.current = message.snapshot; receivedAt.current = Date.now()
              setElapsed(0); setSnapshot(message.snapshot); setStatus('connected'); setError('')
            } else if (message.type === 'error' || message.type === 'closed') {
              setError(message.message)
              if (!accepted || message.type === 'closed') { terminal=true; ready.current=false; setCanRetry(false); saveMatch(null,account?.id); proof.current=null; setStatus('closed'); current.close() }
            } else throw new Error('Resposta inválida')
          } catch { terminal=true; setStatus('closed'); setError('O servidor enviou uma resposta inválida.'); current.close() }
        }
        current.onerror = () => { if (!stopped) setError('Conexão interrompida. Tentando retornar à partida...') }
        current.onclose = event => {
          window.clearTimeout(timeout); ready.current=false
          if (stopped) return
          if (event.code === 4001) { terminal=true; ready.current=false; setCanRetry(false); saveMatch(null,account?.id); proof.current=null; setStatus('closed'); setError('Esta partida foi aberta em outra janela.'); return }
          if (!terminal) schedule()
        }
      } catch { setError('Não foi possível conectar ao servidor de partidas.'); schedule() }
    }, 0)
    const wake = () => { if (!stopped && !terminal && proof.current && latest.current?.session?.battle.phase !== 'finished') { window.clearTimeout(retry); failures.current=0; setAttempt(value => value + 1) } }
    let hiddenAt=0
    const visibility=()=>{ if(document.visibilityState==='hidden') hiddenAt=Date.now(); else if(hiddenAt && Date.now()-hiddenAt>3000) wake() }
    window.addEventListener('online',wake)
    document.addEventListener('visibilitychange',visibility)
    return () => {
      stopped = true; ready.current=false; window.clearTimeout(start); window.clearTimeout(retry); window.clearTimeout(timeout)
      window.removeEventListener('online',wake)
      document.removeEventListener('visibilitychange',visibility)
      if (socket.current === connection) socket.current = null
      connection?.close()
    }
  }, [intent, attempt, account?.id])

  if (snapshot?.session) {
    const names = Object.fromEntries(snapshot.players.map(player => [player.id, player.name])) as Record<'player-1' | 'player-2', string>
    const profiles = Object.fromEntries(snapshot.players.map(player => [player.id, { ...createBattleProfile(player.name, player.avatarId), ...player.profile }])) as BattleProfiles
    return <>
      {status !== 'connected' && <div className="online-recovery" role="status">{status === 'closed' ? 'Conexão encerrada.': 'Reconectando... O relógio continua.'}{status === 'closed' && canRetry && <button onClick={() => { failures.current=0; setAttempt(value=>value+1) }}>Tentar novamente</button>}{status === 'closed' && <button onClick={leave}>Voltar à seleção</button>}</div>}
      {snapshot.session.battle.phase !== 'finished' && status === 'connected' && snapshot.players.some(player => player.id !== snapshot.you && player.connected === false) && <div className="online-recovery" role="status">Oponente desconectado. Aguardando retorno; o relógio continua.</div>}
      {snapshot.session.battle.phase !== 'finished' && status === 'connected' && snapshot.players.some(player => player.id === snapshot.you && (player.missedTurns ?? 0) > 0) && <div className="online-recovery" role="status">Você perdeu uma vez. Finalize sua próxima vez para evitar a derrota.</div>}
      {error && <div className="online-error" role="alert">{error}<button onClick={() => setError('')} aria-label="Fechar mensagem">×</button></div>}
      <LocalBattle initialState={snapshot.session.battle} mode={snapshot.mode ?? 'private'} onContinue={leave}
        remote={{ playerId: snapshot.you, session: { ...snapshot.session, now: snapshot.session.now + elapsed }, send, names, profiles, code: snapshot.code }} />
    </>
  }
  return <main className="online-room">
    <h1>Partida privada online</h1>
    {error && <p role="alert">{error}</p>}
    {status === 'closed' && canRetry && <button onClick={() => { failures.current=0; setAttempt(value=>value+1) }}>Retornar à partida</button>}
    {status === 'connecting' && <p role="status">{recovery ? 'Retornando à partida...' : 'Conectando...'}</p>}
    {snapshot ? <>
      <p>Seu código de sala:</p><strong className="room-code">{snapshot.code}</strong>
      <label>Link de convite<input aria-label="Link de convite" readOnly value={invitationUrl(snapshot.code)} onFocus={event => event.target.select()} /></label>
      <button onClick={() => { if (!navigator.clipboard) { setError('Selecione e copie o link de convite.'); return } navigator.clipboard.writeText(invitationUrl(snapshot.code)).catch(() => setError('Selecione e copie o link de convite.')) }}>Copiar convite</button>
      <p>Envie o convite ao outro jogador. Ele escolhe três personagens e entra em Partida privada online. A partida começa quando ele entrar.</p>
      <p>Você está jogando como {snapshot.players.find(player => player.id === snapshot.you)?.name}.</p>
    </> : team.length === 3 ? <form onSubmit={event => { event.preventDefault(); connect() }}>
      <label>Seu nome<input readOnly={!!account} value={account?.username ?? name} onChange={event => setName(event.target.value)} maxLength={24} required autoComplete="nickname" /></label>
      {account && <p>Usando sua conta. <a href="#settings">Alterar avatar</a></p>}
      {!account && <label>Avatar temporário<select value={avatarId} onChange={event => setAvatarId(event.target.value)}>
        {avatars.map(avatar => <option key={avatar.id} value={avatar.id}>{avatar.label}</option>)}
      </select></label>}
      <div className="online-options">
        <label><input type="radio" name="room-mode" checked={!join} onChange={() => setJoin(false)} /> Criar sala</label>
        <label><input type="radio" name="room-mode" checked={join} onChange={() => setJoin(true)} /> Entrar por código</label>
      </div>
      {join && <label>Código da sala<input value={code} onChange={event => setCode(event.target.value.toUpperCase())} pattern="[A-Z2-9]{6}" maxLength={6} required autoComplete="off" /></label>}
      <p>Seu time: {team.map(character => character.name).join(', ')}.</p>
      <button disabled={status === 'connecting'}>{status === 'connecting' ? 'Conectando...' : join ? 'Entrar na sala' : 'Criar sala'}</button>
    </form> : null}
    <p>Partidas privadas sem ranking ou progresso de missões. Se duas vezes suas terminarem seguidas sem confirmação, você perde a partida. Uma queda não pausa o relógio.</p>
    <button onClick={leave}>Voltar à seleção</button>
  </main>
}
