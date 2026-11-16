import { useState } from 'react'
import { useAccount } from './useAccount'
import './Account.css'

export default function AccountForm({ registration }: { registration: boolean }) {
  const { register, login } = useAccount()
  const [visible, setVisible] = useState(false), [busy, setBusy] = useState(false), [error, setError] = useState('')
  return <section className="account-page">
    <h1>{registration ? 'Criar conta' : 'Entrar'}</h1>
    <p>{registration ? 'Todos os campos são obrigatórios.' : 'Entre com seu nome de usuário e sua senha.'}</p>
    <form className="account-form" onReset={() => { setError(''); setVisible(false) }} onSubmit={async event => {
      event.preventDefault(); setError('')
      const data = new FormData(event.currentTarget)
      const username = String(data.get('username') ?? ''), password = String(data.get('password') ?? '')
      const email = String(data.get('email') ?? ''), confirmPassword = String(data.get('confirmPassword') ?? '')
      if (registration && password !== confirmPassword) { setError('As senhas não coincidem.'); return }
      setBusy(true)
      try { if (registration) await register({ username, email, password, confirmPassword }); else await login({ username, password }); window.location.hash = 'game' }
      catch (error) { setError(error instanceof Error ? error.message : 'Não foi possível acessar a conta.'); setBusy(false) }
    }}>
      <label htmlFor="account-username">Nome de usuário</label>
      <input id="account-username" name="username" required minLength={3} maxLength={24} pattern={'[A-Za-z0-9_\\-]{3,24}'} autoComplete="username" autoCapitalize="none" spellCheck={false} aria-describedby={registration ? 'account-username-hint' : undefined} disabled={busy} />
      {registration && <small id="account-username-hint">Nome permanente: de 3 a 24 letras, números, hífens ou sublinhados. Anoli e anoli são o mesmo nome para cadastro e login.</small>}
      {registration && <><label htmlFor="account-email">E-mail</label><input id="account-email" name="email" type="email" required maxLength={254} autoComplete="email" autoCapitalize="none" spellCheck={false} disabled={busy} aria-describedby="account-email-hint" /><small id="account-email-hint">Privado. Será usado para recuperação da conta quando o envio de e-mails estiver disponível.</small></>}
      <label htmlFor="account-password">Senha</label>
      <input id="account-password" name="password" type={visible ? 'text' : 'password'} required minLength={8} maxLength={128} autoComplete={registration ? 'new-password' : 'current-password'} disabled={busy} aria-describedby={registration ? 'account-password-hint' : undefined} />
      {registration && <><small id="account-password-hint">De 8 a 128 caracteres. Símbolos, espaços e acentos são permitidos.</small><label htmlFor="account-confirm">Confirmar senha</label><input id="account-confirm" name="confirmPassword" type={visible ? 'text' : 'password'} required minLength={8} maxLength={128} autoComplete="new-password" disabled={busy} /></>}
      <label className="account-show-password"><input type="checkbox" checked={visible} onChange={event => setVisible(event.target.checked)} /> Mostrar {registration ? 'senhas' : 'senha'}</label>
      {error && <p role="alert" className="account-error">{error}</p>}
      <div className="account-actions"><button type="submit" disabled={busy}>{busy ? 'Aguarde...' : registration ? 'Criar conta' : 'Entrar'}</button>{registration && <button type="reset" disabled={busy}>Limpar</button>}</div>
    </form>
    <nav className="account-actions"><a href={registration ? '#login' : '#register'}>{registration ? 'Já tenho uma conta' : 'Criar uma conta'}</a><a href="#game">Voltar ao jogo</a></nav>
  </section>
}
