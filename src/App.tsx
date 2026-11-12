import { useEffect, useState } from 'react'
import StartPlaying from './pages/StartPlaying'
import './App.css'

type Page = 'startpage' | 'start-playing'
const readPage = (): Page => window.location.hash === '#start-playing' ? 'start-playing' : 'startpage'

function App() {
  const [page, setPage] = useState<Page>(readPage)

  useEffect(() => {
    const handleNavigation = () => setPage(readPage())
    window.addEventListener('hashchange', handleNavigation)
    return () => window.removeEventListener('hashchange', handleNavigation)
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <aside className="left-column" aria-label="Navigation and account">
        <nav className="main-menu" aria-label="Main navigation">
          <a href="#startpage" aria-current={page === 'startpage' ? 'page' : undefined}>Startpage</a>
          <a href="#start-playing" aria-current={page === 'start-playing' ? 'page' : undefined}>Start Playing</a>
          {['Game Manual', 'Ladders', 'Ninja Missions'].map((label) => <button key={label} disabled title="Coming in a future update">{label}<small>Coming soon</small></button>)}
        </nav>
        <div className="blue-panel">
          <section><h2>Community</h2><p>Community links will be added here.</p></section>
          <section><h2>Users Online</h2><p className="status-label">Offline prototype</p><p>Live player counts are not connected yet.</p></section>
          <section><h2>Account</h2><p>You are browsing as a guest.</p><p>Login and registration will arrive in a future stage. Character selection is available for testing.</p></section>
        </div>
      </aside>

      <aside className="info-column blue-panel" aria-label="Game information">
        <section><h2>Your team awaits</h2><div className="team-preview" aria-hidden="true"><span>1</span><span>2</span><span>3</span></div><p>Choose three ninjas in Start Playing.</p></section>
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
            <article className="news-post"><p className="eyebrow">Project news · Stage 01</p><h2>A new home for your team</h2><p>The first stage of the website is here: a classic three-column layout with shared navigation and a dedicated character selection page.</p><p>Open Start Playing to explore the ninjas and choose your team. You can return here without losing your selection while the site stays open.</p><h3>What is available?</h3><ul><li>Character details and skills.</li><li>A team of three different ninjas.</li><li>Double-click and drag-and-drop selection.</li></ul><p className="development-note">In development: accounts, missions, rankings and battles. Reloading the page resets your team.</p></article>
          </section>
          <section hidden={page !== 'start-playing'} aria-labelledby="playing-title" className="playing-page">
            <h1 id="playing-title">Start Playing</h1><p className="tagline">Select your team</p>
            <StartPlaying />
          </section>
        </main>
        <footer>Fan project · In development</footer>
      </div>
    </div>
  )
}

export default App
