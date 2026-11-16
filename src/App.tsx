import MissionsPage from './missions/MissionsPage'
import AccountForm from './account/AccountForm'
import AccountPage from './account/AccountPage'
import AccountSettings from './account/AccountSettings'
import AccountLinks from './account/AccountLinks'
import { useAccount } from './account/useAccount'
import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { useTeam } from './useTeam'
import StartPlaying from './pages/StartPlaying'
import './App.css'

type Page = 'startpage' | 'start-playing' | 'game' | 'login' | 'register' | 'account' | 'settings' | 'missions'
const readPage = (): Page => {
  const accountPage = window.location.hash.slice(1)
  if (accountPage === 'login' || accountPage === 'register' || accountPage === 'account' || accountPage === 'settings' || accountPage === 'missions') return accountPage
  if (window.location.hash.split('?')[0] === '#game') return 'game'
  if (window.location.hash === '#start-playing') return 'start-playing'
  return 'startpage'
}

function ArenaApp() {
  const [team, setTeam] = useTeam()
  const [page, setPage] = useState<Page>(readPage)
  const [popupError, setPopupError] = useState('')

  function openGame(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const url = new URL(window.location.href)
    url.hash = 'game'
    const popup = window.open(
      url.href,
      'narutoArenaGame',
      'popup=yes,width=1220,height=890,resizable=yes,scrollbars=yes'
    )
    if (!popup) {
      setPopupError('O navegador bloqueou a janela do jogo. Permita popups para este site e tente novamente.')
      return
    }
    setPopupError('')
    popup.focus()
  }

  useEffect(() => {
    const handleNavigation = () => setPage(readPage())
    window.addEventListener('hashchange', handleNavigation)
    return () => window.removeEventListener('hashchange', handleNavigation)
  }, [])

  if (page === 'missions') return <main className="account-page missions-account-page"><MissionsPage /><a href="#game">Voltar ao jogo</a></main>

  if (page === 'game') {
    return <StartPlaying team={team} setTeam={setTeam} />
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <aside className="left-column" aria-label="Navigation and account">
        <nav className="main-menu" aria-label="Main navigation">
          <a href="#startpage" aria-current={page === 'startpage' ? 'page' : undefined}>Startpage</a>
          <a href="#game" onClick={openGame}>Start Playing</a>
          <a href="#account">Minha conta</a>

          {['Game Manual', 'Ladders', 'Ninja Missions'].map((label) => <button key={label} disabled title="Coming in a future update">{label}<small>Coming soon</small></button>)}
        </nav>
        <div className="blue-panel">
          <section><h2>Community</h2><p>Community links will be added here.</p></section>
          <section><h2>Users Online</h2><p className="status-label">Offline prototype</p><p>Live player counts are not connected yet.</p></section>
          <section><h2>Conta</h2><AccountLinks /></section>
        </div>
      </aside>

      <aside className="info-column blue-panel" aria-label="Game information">
        <section aria-labelledby="team-preview-title">
          <h2 id="team-preview-title">Your Team</h2>
          <ol className="team-preview" aria-label="Selected team">
            {team.map((member, index) => <li key={index} className={member ? 'filled' : ''} aria-label={`Slot ${index + 1}: ${member?.name ?? 'Empty'}`}>{member?.name ?? index + 1}</li>)}
          </ol>
          <p aria-live="polite">{team.filter(Boolean).length}/3 characters selected</p>
          <a href="#start-playing">{team.some(Boolean) ? 'Edit your team »' : 'Choose your team »'}</a>
        </section>
        <section><h2>First time playing?</h2><p>Inspect each ninja’s skills, then build your team of three different characters.</p><a href="#start-playing">Try character selection »</a></section>
        <section><h2>Season</h2><p>No active season. Seasons will be available when online battles are implemented.</p></section>
        <section><h2>Rankings</h2><p>No rankings yet. Your future results will appear here.</p></section>
      </aside>

      <div className="content-column">
        <header className="site-header"><p className="site-wordmark">Naruto-Arena</p><p>Your ninja journey starts here</p></header>
        <main id="main-content" tabIndex={-1}>
          <section hidden={page !== 'startpage'} aria-labelledby="home-title" className="home-page">
            <h1 id="home-title">Naruto Arena</h1>
            <p className="tagline">Build your team. Find your ninja way.</p>
            <div className="welcome-banner"><strong>Welcome to the arena</strong><span>A classic experience, one step at a time.</span><a className="play-link" href="#start-playing">Start Playing »</a></div>
            <article className="news-post"><p className="eyebrow">Project news · Stage 01</p><h2>A new home for your team</h2><p>The first stage of the website is here: a classic three-column layout with shared navigation and a dedicated character selection page.</p><p>Open Start Playing to explore the ninjas and choose your team. You can return here without losing your selection while the site stays open.</p><h3>What is available?</h3><ul><li>Character details and skills.</li><li>A team of three different ninjas.</li><li>Double-click and drag-and-drop selection.</li></ul><p className="development-note">Cadastre-se para salvar sua equipe e avatar no servidor. Missões e rankings continuam em desenvolvimento.</p></article>
          </section>
          <section hidden={page !== 'start-playing'} aria-labelledby="playing-title" className="playing-page">
            <h1 id="playing-title">Start Playing</h1>
            <p className="tagline">O jogo abre em uma janela própria.</p>
            <p>Abra o jogo para escolher seu time, treinar ou jogar uma partida privada online.</p>
            <a className="play-link" href="#game" onClick={openGame}>Abrir jogo em nova janela</a>
          </section>
          {(page === 'login' || page === 'register') && <AccountForm key={page} registration={page === 'register'} />}
          {page === 'account' && <AccountPage />}
          {page === 'settings' && <AccountSettings />}
          {popupError && <p role="alert">{popupError}</p>}
        </main>
        <footer>Fan project · In development</footer>
      </div>
    </div>
  )
}

export default function App() {
  const { account, status } = useAccount()
  if (status === 'loading') return <div className="account-page" role="status">Carregando conta...</div>
  return <ArenaApp key={account?.id ?? 'guest'} />
}
