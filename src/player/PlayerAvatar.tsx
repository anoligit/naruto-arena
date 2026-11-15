import { useState } from 'react'
import { imageUrl } from '../utils/imageUrl'
import type { PlayerProfile } from './profile'

export default function PlayerAvatar({ profile }: { profile: PlayerProfile }) {
  const [failedImage, setFailedImage] = useState<string | undefined>()
  if (profile.image && profile.image !== failedImage) {
    return <img src={imageUrl(profile.image)} alt={`Ícone de ${profile.name}`} draggable={false} onError={() => setFailedImage(profile.image)} />
  }
  return <svg viewBox="0 0 100 100" role="img" aria-label={`Ícone de ${profile.name}`}>
    <circle cx="50" cy="35" r="18" />
    <path d="M17 91c0-23 13-35 33-35s33 12 33 35" />
  </svg>
}
