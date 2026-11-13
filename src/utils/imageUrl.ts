// Imagens importadas do src já têm o endereço gerado pelo Vite.
// Os outros personagens ainda usam caminhos relativos à pasta public.
export function imageUrl(image: string): string {
  if (/^(?:\/|[a-z][a-z\d+.-]*:)/i.test(image)) return image
  return `${import.meta.env.BASE_URL}${image}`
}
