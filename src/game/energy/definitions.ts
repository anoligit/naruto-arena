// Cadastro único dos quatro tipos que podem existir na reserva de energia.
// Paleta da referência, convertida de Display P3 para sRGB (cores CSS).
export const energyDefinitions = {
  bloodline: { name: 'Bloodline', color: '#f0000a' },
  ninjutsu: { name: 'Ninjutsu', color: '#01a9d5' },
  taijutsu: { name: 'Taijutsu', color: '#06dd2d' },
  genjutsu: { name: 'Genjutsu', color: '#ffffff' },
} as const

// Mantém a ordem usada pelo sorteio de energia.
export const energyTypes = Object.keys(energyDefinitions) as (keyof typeof energyDefinitions)[]

// Ordem dos indicadores e das opções de pagamento na interface.
export const energyDisplayOrder = [
  'taijutsu',
  'bloodline',
  'ninjutsu',
  'genjutsu',
] as const satisfies readonly (keyof typeof energyDefinitions)[]

// Random é um custo pago com qualquer tipo; não é um quinto tipo de energia.
export const randomEnergy = {
  name: 'Qualquer',
  color: '#111111',
} as const
