// Cadastro único dos quatro tipos que podem existir na reserva de chakra.
export const chakraDefinitions = {
  bloodline: { name: 'Bloodline', color: '#ff0000' },
  ninjutsu: { name: 'Ninjutsu', color: '#00a2cd' },
  taijutsu: { name: 'Taijutsu', color: '#00dc32' },
  genjutsu: { name: 'Genjutsu', color: '#ffffff' },
} as const

// Mantém a ordem usada pelo sorteio de chakra.
export const chakraTypes = Object.keys(chakraDefinitions) as (keyof typeof chakraDefinitions)[]

// Ordem dos indicadores e das opções de pagamento na interface.
export const chakraDisplayOrder = [
  'taijutsu',
  'bloodline',
  'ninjutsu',
  'genjutsu',
] as const satisfies readonly (keyof typeof chakraDefinitions)[]

// Random é um custo pago com qualquer tipo; não é um quinto tipo de chakra.
export const randomChakra = {
  name: 'Qualquer',
  color: '#111111',
} as const
