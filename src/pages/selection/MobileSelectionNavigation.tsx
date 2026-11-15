export type SelectionTab = 'settings' | 'profile' | 'missions' | 'characters'

const tabs: { id: SelectionTab | 'exit'; label: string; path: string }[] = [
  { id: 'settings', label: 'Config.', path: 'M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0' },
  { id: 'profile', label: 'Perfil', path: 'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M4 21v-2a8 8 0 0 1 16 0v2Z' },
  { id: 'characters', label: 'Personagens', path: 'M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m10 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 21v-3a6 6 0 0 1 12 0v3m0 0v-3a5 5 0 0 1 10 0v3' },
  { id: 'exit', label: 'Sair', path: 'M10 3H3v18h7m5-14 5 5-5 5m-8-5h13' },
]

export default function MobileSelectionNavigation({ active, onChange, onExit }: {
  active: SelectionTab; onChange: (tab: SelectionTab) => void; onExit: () => void
}) {
  return <nav className="selection-navigation" aria-label="Navegação do jogo">
    {tabs.map(tab => <button type="button" key={tab.id}
      aria-current={active === tab.id ? 'page' : undefined}
      aria-label={tab.id === 'settings' ? 'Configurações' : tab.label}
      onClick={() => { if (tab.id === 'exit') onExit(); else onChange(tab.id) }}>
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={tab.path} /></svg>
      <span>{tab.label}</span>
    </button>)}
  </nav>
}
