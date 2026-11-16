import PlayerProfileCard from '../player/PlayerProfileCard'
import AccountLinks from './AccountLinks'
import { useAccount } from './useAccount'
import './Account.css'

export default function AccountPage({ inline = false }: { inline?: boolean }) {
  const { account, profile } = useAccount()

  return <section className={`account-page${inline ? ' account-inline' : ''}`}>
    <h1>{account ? 'Minha conta' : 'Perfil'}</h1>
    <PlayerProfileCard profile={profile} />
    <AccountLinks />
    {account ? <>
      <dl className="account-details"><div><dt>Nome permanente</dt><dd>{account.username}</dd></div><div><dt>E-mail privado</dt><dd>{account.email}</dd></div><div><dt>Cadastro</dt><dd>{new Date(account.createdAt).toLocaleDateString('pt-BR')}</dd></div></dl>
      <a href="#settings">Configurações · Editar avatar</a>
    </> : <p>Crie uma conta para salvar sua equipe e seu avatar no servidor.</p>}
    {!inline && <a href="#game">Voltar ao jogo</a>}
  </section>
}
