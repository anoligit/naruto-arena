// Categorias servem para explicar as classes; não limitam suas combinações.
export const skillClassGroups = {
  nature: 'Natureza',
  distance: 'Alcance',
  persistence: 'Duração e vínculo',
  special: 'Especial',
} as const

type ClassInfo = {
  name: string
  group: keyof typeof skillClassGroups
  description: string
}

export const skillClassDefinitions = {
  physical: {
    name: 'Physical',
    group: 'nature',
    description: 'Técnica cujo resultado é produzido por matéria ou ação física.',
  },
  chakra: {
    name: 'Chakra',
    group: 'nature',
    description: 'Técnica cujo resultado é produzido por energia. Esta classe não define o tipo de energia usado para pagar a habilidade.',
  },
  affliction: {
    name: 'Affliction',
    group: 'nature',
    description: 'Efeito de aflição, como veneno ou chamas. As regras de dano e duração são definidas nos efeitos da habilidade.',
  },
  mental: {
    name: 'Mental',
    group: 'nature',
    description: 'Técnica baseada em pensamento ou energia metafísica. Não concede imunidade a stun por si só.',
  },
  melee: {
    name: 'Melee',
    group: 'distance',
    description: 'Técnica de curto alcance entre o usuário e o alvo.',
  },
  ranged: {
    name: 'Ranged',
    group: 'distance',
    description: 'Técnica executada à distância do alvo.',
  },
  instant: {
    name: 'Instant',
    group: 'persistence',
    description: 'Executa ou aplica seu efeito sem exigir uma conexão contínua com o usuário. Um efeito Instant pode durar vários turnos.',
  },
  action: {
    name: 'Action',
    group: 'persistence',
    description: 'Efeito que depende da atuação do usuário a cada turno. A interrupção da conexão suspende sua atuação enquanto durar o impedimento.',
  },
  control: {
    name: 'Control',
    group: 'persistence',
    description: 'Efeito que exige conexão contínua entre usuário e alvo. Quando essa conexão é interrompida, o efeito termina.',
  },
  unique: {
    name: 'Unique',
    group: 'special',
    description: 'Técnica única, indicada como não copiável. A habilidade ainda precisa definir seus próprios efeitos e restrições.',
  },
} as const satisfies Record<string, ClassInfo>
