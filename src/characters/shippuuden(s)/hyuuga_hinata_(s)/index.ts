// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hyuuga Hinata (S)",
  "description": "Hinata(s) has taken the lessons she learned during the chuunin exam, and Naruto's words of support to heart in the last couple years. She has matured greatly as a ninja, the heir to the Hyuuga clan, and as a woman.",
  "descriptionBR": "Hinata (S) levou a sério as lições aprendidas durante o exame chuunin e as palavras de apoio de Naruto nos últimos anos. Ela amadureceu muito como ninja, como herdeira do clã Hyuuga e como mulher.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "hyuuga_hinata_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Gentle Step Twin Lions Fist",
      "file": "hyuuga_hinata_(s)_skill_1_(gentle_step_twin_lions_fist).png",
      "description": "Hinata creates two chakra lions and attacks an enemy, dealing 30 piercing damage to them and removing 1 taijutsu or ninjutsu chakra from them. The following turn, 'Pressure Point Closure' will stun for 1 turn.",
      "descriptionBR": "Hinata cria dois leões de chakra e ataca um inimigo, causando 30 de dano perfurante e removendo 1 taijutsu ou ninjutsu chakra dele. No turno seguinte, 'Pressure Point Closure' irá atordoar por 1 turno.",
      "descriptionRaw": "Hinata creates two chakra lions and attacks an enemy, dealing <Damage>30 piercing damage<Damage> to them and <Effects>removing 1 taijutsu or ninjutsu chakra<Effects> from them. The following turn, <SkillName>'Pressure Point Closure'<SkillName> will <Effects>stun<Effects> for 1 turn.",
      "descriptionBRRaw": "Hinata cria dois leões de chakra e ataca um inimigo, causando <Damage>30 de dano perfurante<Damage> e <Effects>removendo 1 taijutsu ou ninjutsu chakra<Effects> dele. No turno seguinte, <SkillName>'Pressure Point Closure'<SkillName> irá <Effects>atordoar<Effects> por 1 turno.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Hinata creates two chakra lions and attacks an enemy, dealing 30 piercing damage to them and removing 1 taijutsu or ninjutsu chakra from them. The following turn, 'Pressure Point Closure' will stun for 1 turn. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hinata cria dois leões de chakra e ataca um inimigo, causando 30 de dano perfurante e removendo 1 taijutsu ou ninjutsu chakra dele. No turno seguinte, 'Pressure Point Closure' irá atordoar por 1 turno. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Eight Trigrams Thirty Two Palms",
      "file": "hyuuga_hinata_(s)_skill_2_(eight_trigrams_thirty_two_palms).jpg",
      "description": "Hinata uses a lesser form of eight trigram sixty four palms, dealing 30 piercing damage to one enemy and stunning their non-mental skills for 1 turn. The following turn, 'Pressure Point Closure' will remove 1 taijutsu or ninjutsu chakra.",
      "descriptionBR": "Hinata usa uma forma reduzida dos Oito Trigramas Sessenta e Quatro Palmas, causando 30 de dano perfurante a um inimigo e atordoando suas habilidades não-Mental por 1 turno. No turno seguinte, 'Pressure Point Closure' removerá 1 taijutsu ou ninjutsu chakra.",
      "descriptionRaw": "Hinata uses a lesser form of eight trigram sixty four palms, <Damage>dealing 30 piercing damage<Damage> to one enemy and <Effects>stunning<Effects> their non-mental skills for 1 turn. The following turn, <SkillName>'Pressure Point Closure'<SkillName> will <Effects>remove 1 taijutsu or ninjutsu chakra<Effects>.",
      "descriptionBRRaw": "Hinata usa uma forma reduzida dos Oito Trigramas Sessenta e Quatro Palmas, causando <Damage>30 de dano perfurante<Damage> a um inimigo e <Effects>atordoando<Effects> suas habilidades não-Mental por 1 turno. No turno seguinte, <SkillName>'Pressure Point Closure'<SkillName> <Effects>removerá 1 taijutsu ou ninjutsu chakra<Effects>.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Hinata uses a lesser form of eight trigram sixty four palms, dealing 30 piercing damage to one enemy and stunning their non-mental skills for 1 turn. The following turn, 'Pressure Point Closure' will remove 1 taijutsu or ninjutsu chakra. Chakra cost: 1 Tai, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hinata usa uma forma reduzida dos Oito Trigramas Sessenta e Quatro Palmas, causando 30 de dano perfurante a um inimigo e atordoando suas habilidades não-Mental por 1 turno. No turno seguinte, 'Pressure Point Closure' removerá 1 taijutsu ou ninjutsu chakra. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Pressure Point Closure",
      "file": "hyuuga_hinata_(s)_skill_3_(pressure_point_closure).jpg",
      "description": "Hinata closes an enemy's pressure point, dealing 20 damage to them.",
      "descriptionBR": "Hinata fecha um dos pontos de pressão de um inimigo, causando 20 de dano.",
      "descriptionRaw": "Hinata closes an enemy's pressure point, <Damage>dealing 20 damage<Damage> to them.",
      "descriptionBRRaw": "Hinata fecha um dos pontos de pressão de um inimigo, <Damage>causando 20 de dano<Damage>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Hinata closes an enemy's pressure point, dealing 20 damage to them. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hinata fecha um dos pontos de pressão de um inimigo, causando 20 de dano. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Byakugan Sight",
      "file": "hyuuga_hinata_(s)_skill_4_(byakugan_sight).jpg",
      "description": "This skill makes Hyuuga Hinata (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Hyuuga Hinata (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Hyuuga Hinata (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Hyuuga Hinata (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Hyuuga Hinata (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Hyuuga Hinata (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
