// Adicione os dois arquivos na pasta assets/fonts. O Vite inclui as fontes
// disponíveis na próxima compilação, sem referências a arquivos inexistentes.
const files = import.meta.glob<string>('../assets/fonts/*.{woff2,woff,ttf,otf}', {
  eager: true, query: '?url', import: 'default',
})

function findFont(stem: string): string | undefined {
  for (const extension of ['woff2', 'woff', 'ttf', 'otf']) {
    const entry = Object.entries(files).find(([path]) => path.endsWith(`/${stem}.${extension}`))
    if (entry) return entry[1]
  }
}

export function installGameFonts(): void {
  if (typeof FontFace === 'undefined') return
  for (const [file, weight] of [['Franklin', '400'], ['FranklinBold', '700']] as const) {
    const url = findFont(file)
    if (!url) continue
    const face = new FontFace('Arena Franklin', `url(${JSON.stringify(url)})`, { weight, display: 'swap' })
    document.fonts.add(face)
    void face.load().catch(() => console.warn(`[Fontes] Não foi possível carregar ${file}.`))
  }
}
