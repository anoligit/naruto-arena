// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hozuki Suigetsu (S)",
  "description": "Hozuki Suigetsu (S) is a native of Kirigakure who was once a captive of Orochimaru. He is a dangerous individual with unique abilities and now follows Uchiha Sasuke.",
  "descriptionBR": "Hozuki Suigetsu (S) é um nativo de Kirigakure que já foi prisioneiro de Orochimaru. Ele é um indivíduo perigoso com habilidades únicas e agora segue Uchiha Sasuke.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "hozuki_suigetsu_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Muscle Expansion",
      "file": "hozuki_suigetsu_(s)_skill_1_(muscle_expansion).jpeg",
      "description": "Suigetsu attacks with his sword, dealing 20 damage to one enemy and gaining 10 permanent destructible defense and 5 points of destructible defense for 1 turn. Afterwards, the next use of 'Hydro Taijutsu' will deal 5 additional damage; This effect stacks.",
      "descriptionBR": "Suigetsu ataca com sua espada, causando 20 de dano a um inimigo e ganhando 10 de defesa destrutível permanente e 5 pontos de defesa destrutível por 1 turno. Após isso, o próximo uso de 'Hydro Taijutsu' irá causar 5 de dano adicional; Esse efeito acumula.",
      "descriptionRaw": "Suigetsu attacks with his sword, <Damage>dealing 20 damage<Damage> to one enemy and <Defense>gaining 10 permanent destructible defense<Defense> and <Defense>5 points of destructible defense<Defense> for 1 turn. Afterwards, the next use of <SkillName>'Hydro Taijutsu' <SkillName>will <Improvements>deal 5 additional damage<Improvements>; This effect stacks.",
      "descriptionBRRaw": "Suigetsu ataca com sua espada, <Damage>causando 20 de dano<Damage> a um inimigo e <Defense>ganhando 10 de defesa destrutível <Defense>permanente e <Defense>5 pontos de defesa destrutível<Defense> por 1 turno. Após isso, o próximo uso de <SkillName>'Hydro Taijutsu'<SkillName> irá <Improvements>causar 5 de dano adicional<Improvements>; Esse efeito acumula.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Suigetsu attacks with his sword, dealing 20 damage to one enemy and gaining 10 permanent destructible defense and 5 points of destructible defense for 1 turn. Afterwards, the next use of 'Hydro Taijutsu' will deal 5 additional damage; This effect stacks. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Suigetsu ataca com sua espada, causando 20 de dano a um inimigo e ganhando 10 de defesa destrutível permanente e 5 pontos de defesa destrutível por 1 turno. Após isso, o próximo uso de 'Hydro Taijutsu' irá causar 5 de dano adicional; Esse efeito acumula. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Hydro Taijutsu",
      "file": "hozuki_suigetsu_(s)_skill_2_(hydro_taijutsu).jpeg",
      "description": "Suigetsu launches an extreme taijutsu attack, dealing 40 piercing damage to one enemy and gaining 15 permanent destructible defense and 10 points of destructible defense for 1 turn.\n",
      "descriptionBR": "Suigetsu usa água para lançar um ataque extremo de taijutsu, causando 40 de dano perfurante a um inimigo e ganhando 15 de defesa destrutível permanente e 10 pontos de defesa destrutível por 1 turno.",
      "descriptionRaw": "Suigetsu launches an extreme taijutsu attack, <Damage>dealing 40 piercing damage<Damage> to one enemy and <Defense>gaining 15 permanent destructible defense<Defense> and <Defense>10 points of destructible defense<Defense> for 1 turn.\n",
      "descriptionBRRaw": "Suigetsu usa água para lançar um ataque extremo de taijutsu, <Damage>causando 40 de dano perfurante<Damage> a um inimigo e <Defense>ganhando 15 de defesa destrutível permanente<Defense> e <Defense>10 pontos de defesa destrutível<Defense> por 1 turno.",
      "energy": [
        "Tai",
        "Nin"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Suigetsu launches an extreme taijutsu attack, dealing 40 piercing damage to one enemy and gaining 15 permanent destructible defense and 10 points of destructible defense for 1 turn.\n Chakra cost: 1 Tai, 1 Nin. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Suigetsu usa água para lançar um ataque extremo de taijutsu, causando 40 de dano perfurante a um inimigo e ganhando 15 de defesa destrutível permanente e 10 pontos de defesa destrutível por 1 turno. Custo de chakra: 1 taijutsu, 1 ninjutsu. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Rehydration",
      "file": "hozuki_suigetsu_(s)_skill_3_(rehydration).jpeg",
      "description": "Suigetsu replenishes his body with water. For 3 turns, he will gain 1 random chakra each turn and grant 10 points of destructible defense to himself.",
      "descriptionBR": "Suigetsu repõe seu corpo com água. Por 3 turnos, ele irá ganhar 1 random chakra cada turno e conceder 10 pontos de defesa destrutível permanente a sí mesmo.",
      "descriptionRaw": "Suigetsu replenishes his body with water. For 3 turns, he will <Effects>gain 1 random chakra<Effects> each turn and <Defense>grant 10 points of destructible defense<Defense> to himself.",
      "descriptionBRRaw": "Suigetsu repõe seu corpo com água. Por 3 turnos, ele irá <Effects>ganhar 1 random chakra<Effects> cada turno e <Defense>conceder 10 pontos de defesa destrutível<Defense> permanente a sí mesmo.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Action"
      ],
      "cooldown": 4,
      "ruleDescription": "Suigetsu replenishes his body with water. For 3 turns, he will gain 1 random chakra each turn and grant 10 points of destructible defense to himself. Chakra cost: 2 Random. Catalog classes: Chakra, Action. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Suigetsu repõe seu corpo com água. Por 3 turnos, ele irá ganhar 1 random chakra cada turno e conceder 10 pontos de defesa destrutível permanente a sí mesmo. Custo de chakra: 2 aleatório. Classes no catálogo: Chakra, Action. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Zanbato Deflection",
      "file": "hozuki_suigetsu_(s)_skill_4_(zanbato_deflection).jpeg",
      "description": "This skill makes Hozuki Suigetsu (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Hozuki Suigetsu (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Hozuki Suigetsu (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Hozuki Suigetsu (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Hozuki Suigetsu (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Hozuki Suigetsu (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
