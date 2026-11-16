// O catálogo acompanha os arquivos da pasta, separado dos personagens jogáveis.
const images = import.meta.glob<string>('./avatares/*.{jpg,jpeg,png,webp,gif}', { eager: true, import: 'default' })
export const avatars = Object.entries(images).map(([path, image]) => {
  const id = path.split('/').at(-1)!.replace(/\.[^.]+$/, '')
  return { id, image, label: `Avatar ${id.replace(/^avatar_/, '')}` }
}).sort((a, b) => a.id.localeCompare(b.id, 'pt-BR', { numeric: true }))
export const avatarIds = avatars.map(avatar => avatar.id)
export const avatarImage = (id: string | null | undefined) => avatars.find(avatar => avatar.id === id)?.image
