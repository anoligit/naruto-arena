import { useState } from 'react'
import { avatars, avatarImage } from './avatarCatalog'
import { useAccount } from './useAccount'
import AccountLinks from './AccountLinks'
import PlayerAvatar from '../player/PlayerAvatar'
import { imageUrl } from '../utils/imageUrl'
import './Account.css'

export default function AccountSettings({ inline = false }: { inline?: boolean }) {
  const { account, profile, preferences } = useAccount()
  const [selected, setSelected] = useState<string | null>(account?.avatarId ?? null)
  const [busy, setBusy] = useState(false), [message, setMessage] = useState(''), [error, setError] = useState('')
  const valid = selected === null || avatars.some(avatar => avatar.id === selected)
  const preview = { ...profile, image: selected === account?.avatarId ? profile.image : avatarImage(selected) }
  return <section className={`account-page account-settings${inline ? ' account-inline' : ''}`}>
    <h1>Configurações</h1><AccountLinks />
    <form onSubmit={async event => {
      event.preventDefault()
      if (!account || !valid || busy) return
      setBusy(true); setMessage(''); setError('')
      try { await preferences({avatarId:selected}); setMessage('Avatar salvo.') }
      catch (reason) { setError(reason instanceof Error ? reason.message : 'Não foi possível salvar o avatar.') }
      finally { setBusy(false) }
    }}>
      <h2>Editar avatar</h2>
      <div className="avatar-preview"><div className="avatar-preview-image"><PlayerAvatar profile={preview} /></div>
        <div><strong>{profile.name}</strong><p>{avatars.find(avatar => avatar.id === selected)?.label ?? (selected ? 'Avatar atual' : 'Ícone padrão')}</p>
        <button type="button" disabled={busy} onClick={() => {setSelected(null);setMessage('');setError('')}}>Usar ícone padrão</button></div>
      </div>
      <fieldset className="avatar-options" disabled={busy}><legend>Escolha seu avatar</legend>
        <div className="avatar-grid" role="radiogroup" aria-label="Avatares disponíveis">
          {avatars.map(avatar => <label key={avatar.id} className="avatar-option">
            <input type="radio" name="account-avatar" value={avatar.id} checked={selected === avatar.id}
              onChange={() => {setSelected(avatar.id);setMessage('');setError('')}} />
            <img src={imageUrl(avatar.image)} alt="" loading="lazy" draggable={false} /><span>{avatar.label}</span>
          </label>)}
        </div>
      </fieldset>
      {!account && <p>Entre na sua conta para salvar o avatar escolhido.</p>}
      <div className="avatar-save"><button type="submit" disabled={!account || !valid || busy}>{busy ? 'Salvando...' : 'Salvar avatar'}</button>
        {message && <p role="status">{message}</p>}{error && <p className="account-error" role="alert">{error}</p>}
      </div>
    </form>
    {!inline && <a href="#game">Voltar ao jogo</a>}
  </section>
}
