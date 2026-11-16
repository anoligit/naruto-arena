import { useState } from 'react'
import { useAccount } from './useAccount'
import './Account.css'

export default function AccountLinks() {
  const { account, logout, syncError } = useAccount()
  const [busy, setBusy] = useState(false), [error, setError] = useState('')
  return <div className="account-links"><a href="#missions">Missões</a>
    {account ? <><a href="#account">{account.username} · Minha conta</a><a href="#settings">Configurações</a><button disabled={busy} onClick={async () => {
      setBusy(true); setError('')
      try { await logout() } catch (error) { setError(error instanceof Error ? error.message : 'Não foi possível sair.') } finally { setBusy(false) }
    }}>{busy ? 'Saindo...' : 'Sair da conta'}</button></> : <><a href="#login">Entrar</a><a href="#register">Criar conta</a></>}
    {(error || syncError) && <p role="alert">{error || syncError}</p>}
    {syncError && account && <button onClick={() => window.dispatchEvent(new Event('arena:retry-team-save'))}>Tentar salvar a equipe novamente</button>}
  </div>
}
