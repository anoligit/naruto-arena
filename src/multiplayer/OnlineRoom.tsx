import { useCallback, useEffect, useRef, useState } from 'react'
import type { Character } from '../characters/definition'
import LocalBattle from '../pages/LocalBattle'
import { multiplayerVersion } from './version'
import type { BattleCommand, ClientMessage, RoomSnapshot, ServerMessage } from './protocol'
import './OnlineRoom.css'
import { invitationCode, invitationUrl } from './invitation'
import { characters } from '../characters/registry'
import { createBattleProfile } from '../player/battleProfiles'
import type { BattleProfiles } from '../player/battleProfiles'

function serverUrl(): string | null {
  const configured = import.meta.env.VITE_MULTIPLAYER_URL?.trim()
  if (configured) return configured
  if (window.location.hostname.endsWith('.github.io')) return null
  if (['localhost', '127.0.0.1'].includes(window.location.hostname) && ['5173', '4173'].includes(window.location.port)) return `ws://${window.location.hostname}:3001/play`
  return `${window.location.protocol === 'https:' ? 'wss:' : 'ws:'}//${window.location.host}/play`
}

export default function OnlineRoom({ team, onBack }: { team: Character[]; onBack: () => void }) {
  const [name, setName] = useState('')
  const [avatarId, setAvatarId] = useState(team[0].id)
  const [code, setCode] = useState(invitationCode)
  const [join, setJoin] = useState(() => Boolean(invitationCode()))
  const [snapshot, setSnapshot] = useState<RoomSnapshot | null>(null)
  const [status, setStatus] = useState<'idle' | 'connecting' | 'connected' | 'closed'>('idle')
  const [error, setError] = useState('')
  const socket = useRef<WebSocket | null>(null)
  const latest = useRef<RoomSnapshot | null>(null)
  const seq = useRef(0)

  useEffect(() => () => {
    const connection = socket.current
    socket.current = null
    connection?.close()
  }, [])

  const send = useCallback((command: BattleCommand) => {
    const connection = socket.current, state = latest.current
    if (connection?.readyState !== WebSocket.OPEN || !state?.session) { setError('A conexão com a partida foi encerrada.'); return }
    setError('')
    connection.send(JSON.stringify({ type: 'command', seq: ++seq.current, turn: state.session.battle.turnNumber, command } satisfies ClientMessage))
  }, [])

  function connect() {
    const url = serverUrl()
    if (!url) { setError('O servidor de partidas ainda não está configurado para este site.'); return }
    socket.current?.close()
    setStatus('connecting'); setError(''); setSnapshot(null); latest.current = null; seq.current = 0
    let connection: WebSocket
    try { connection = new WebSocket(url) } catch { setStatus('closed'); setError('Não foi possível conectar ao servidor de partidas.'); return }
    socket.current = connection
    const timeout = window.setTimeout(() => {
      if (socket.current === connection && connection.readyState !== WebSocket.OPEN) connection.close()
    }, 12_000)
    connection.onopen = () => {
      if (socket.current !== connection) return
      window.clearTimeout(timeout); setStatus('connected')
      const hello = { name: name.trim(), avatarId, team: team.map(character => character.id), version: multiplayerVersion }
      connection.send(JSON.stringify(join ? { ...hello, type: 'join', code: code.trim().toUpperCase() } : { ...hello, type: 'create' }))
    }
    connection.onmessage = event => {
      if (socket.current !== connection) return
      try {
        const message = JSON.parse(event.data) as ServerMessage
        if (message.type === 'state') { latest.current = message.snapshot; setSnapshot(message.snapshot) }
        else if (message.type === 'error' || message.type === 'closed') { setError(message.message); if (message.type === 'closed') connection.close() }
        else throw new Error('invalid')
      } catch { setError('O servidor enviou uma resposta inválida.'); connection.close() }
    }
    connection.onerror = () => { if (socket.current === connection) setError('Servidor de partidas indisponível. Confira a conexão e tente novamente.') }
    connection.onclose = () => {
      window.clearTimeout(timeout)
      if (socket.current === connection) { setStatus('closed'); setError(previous => previous || 'Conexão encerrada. Volte à seleção para iniciar outra sala.') }
    }
  }

  if (snapshot?.session && status === 'connected') {
    const names = Object.fromEntries(snapshot.players.map(player => [player.id, player.name])) as Record<'player-1' | 'player-2', string>
    const profiles = Object.fromEntries(snapshot.players.map(player => [player.id, createBattleProfile(player.name, player.avatarId)])) as BattleProfiles
    return <>
      {error && <div className="online-error" role="alert">{error}<button onClick={() => setError('')} aria-label="Fechar mensagem">×</button></div>}
      <LocalBattle initialState={snapshot.session.battle} mode="private" onContinue={onBack}
        remote={{ playerId: snapshot.you, session: snapshot.session, send, names, profiles, code: snapshot.code }} />
    </>
  }
  return <main className="online-room">
    <h1>Partida privada online</h1>
    {error && <p role="alert">{error}</p>}
    {snapshot && status === 'connected' ? <>
      <p>Seu código de sala:</p><strong className="room-code">{snapshot.code}</strong>
      <label>Link de convite<input aria-label="Link de convite" readOnly value={invitationUrl(snapshot.code)} onFocus={event => event.target.select()} /></label>
      <button onClick={() => { if (!navigator.clipboard) { setError('Selecione e copie o link de convite.'); return } navigator.clipboard.writeText(invitationUrl(snapshot.code)).catch(() => setError('Selecione e copie o link de convite.')) }}>Copiar convite</button>
      <p>Envie o convite ao outro jogador. Ele escolhe três personagens e entra em Partida privada online. A partida começa quando ele entrar.</p>
      <p>Você está jogando como {snapshot.players.find(player => player.id === snapshot.you)?.name}.</p>
    </> : <form onSubmit={event => { event.preventDefault(); connect() }}>
      <label>Seu nome<input value={name} onChange={event => setName(event.target.value)} maxLength={24} required autoComplete="nickname" /></label>
      <label>Avatar temporário<select value={avatarId} onChange={event => setAvatarId(event.target.value)}>
        {characters.map(character => <option key={character.id} value={character.id}>{character.name}</option>)}
      </select></label>
      <div className="online-options">
        <label><input type="radio" name="room-mode" checked={!join} onChange={() => setJoin(false)} /> Criar sala</label>
        <label><input type="radio" name="room-mode" checked={join} onChange={() => setJoin(true)} /> Entrar por código</label>
      </div>
      {join && <label>Código da sala<input value={code} onChange={event => setCode(event.target.value.toUpperCase())} pattern="[A-Z2-9]{6}" maxLength={6} required autoComplete="off" /></label>}
      <p>Seu time: {team.map(character => character.name).join(', ')}.</p>
      <button disabled={status === 'connecting'}>{status === 'connecting' ? 'Conectando...' : join ? 'Entrar na sala' : 'Criar sala'}</button>
    </form>}
    <p>Partidas privadas sem ranking ou progresso de missões. Fechar a janela durante a partida conta como desistência.</p>
    <button onClick={onBack}>Voltar à seleção</button>
  </main>
}
