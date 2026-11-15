// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Tsunade (S)",
  "description": "No longer just a Sannin, Tsunade is the new Kage of Konoha, and has taken a large amount of responsibility on her shoulders. Knowing that holding back is no longer an option, Tsunade taps into her seal to gain an impressive power over her foes.",
  "descriptionBR": "Tsunade não é mais apenas uma Sannin; agora é a nova Kage de Konoha, e assumiu uma grande responsabilidade sobre seus ombros. Sabendo que recuar não é mais uma opção, Tsunade libera o poder do seu selo para obter uma força impressionante contra seus inimigos.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "tsunade_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Heavenly Spear Kick",
      "file": "tsunade_(s)_skill_1_(heavenly_spear_kick).jpg",
      "description": "Tsunade spears one enemy with her foot, destroying all their destructible defense and dealing 20 piercing damage to them. For 1 turn, that enemy's physical skills will deal 15 less non-affliction damage. While empowered, this skill will deal 40 piercing damage instead.",
      "descriptionBR": "Tsunade acerta um inimigo com um chute, destruindo toda sua defesa destrutível e causando 20 de dano perfurante. Por 1 turno, as habilidades physical desse inimigo causarão 15 a menos dano de dano não-affliction. Quando estiver fortalecida, esta habilidade causará 40 de dano perfurante.",
      "descriptionRaw": "Tsunade spears one enemy with her foot, <Defense>destroying all their destructible defense<Defense> and <Damage>dealing 20 piercing damage<Damage> to them. For 1 turn, that enemy's <Classes>physical skills<Classes> will <Effects>deal 15 less non-affliction damage<Effects>. While <Improvements>empowered<Improvements>, this skill will <Damage>deal 40 piercing damage<Damage> instead.",
      "descriptionBRRaw": "Tsunade acerta um inimigo com um chute, <Defense>destruindo toda sua defesa destrutível<Defense> e <Damage>causando 20 de dano perfurante<Damage>. Por 1 turno, as habilidades <Classes>physical<Classes> desse inimigo <Effects>causarão 15 a menos dano de dano não-affliction<Effects>. Quando estiver <Improvements>fortalecida<Improvements>, esta habilidade <Damage>causará 40 de dano perfurante<Damage>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Tsunade spears one enemy with her foot, destroying all their destructible defense and dealing 20 piercing damage to them. For 1 turn, that enemy's physical skills will deal 15 less non-affliction damage. While empowered, this skill will deal 40 piercing damage instead. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tsunade acerta um inimigo com um chute, destruindo toda sua defesa destrutível e causando 20 de dano perfurante. Por 1 turno, as habilidades physical desse inimigo causarão 15 a menos dano de dano não-affliction. Quando estiver fortalecida, esta habilidade causará 40 de dano perfurante. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Enhanced Healing Palm",
      "file": "tsunade_(s)_skill_2_(enhanced_healing_palm).png",
      "description": "Tsunade pours chakra into one ally, healing them for 30 health. Additionally, that character will heal an additional 10 health for 2 turns. If empowered, this skill will heal 40 health and the secondary effect will last an additional 1 turn.",
      "descriptionBR": "Tsunade canaliza chakra em um aliado, curando-o em 30 de vida. Além disso, esse personagem curará mais 10 de vida por 2 turnos. Se estiver fortalecida, esta habilidade curará 40 de vida e o efeito secundário durará 1 turno adicional.",
      "descriptionRaw": "Tsunade pours chakra into one ally, healing them for 30 health. Additionally, that character will heal an additional 10 health for 2 turns. If empowered, this skill will heal 40 health and the secondary effect will last an additional 1 turn.",
      "descriptionBRRaw": "Tsunade canaliza chakra em um aliado, curando-o em 30 de vida. Além disso, esse personagem curará mais 10 de vida por 2 turnos. Se estiver fortalecida, esta habilidade curará 40 de vida e o efeito secundário durará 1 turno adicional.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Tsunade pours chakra into one ally, healing them for 30 health. Additionally, that character will heal an additional 10 health for 2 turns. If empowered, this skill will heal 40 health and the secondary effect will last an additional 1 turn. Chakra cost: 1 Nin, 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tsunade canaliza chakra em um aliado, curando-o em 30 de vida. Além disso, esse personagem curará mais 10 de vida por 2 turnos. Se estiver fortalecida, esta habilidade curará 40 de vida e o efeito secundário durará 1 turno adicional. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Tsunade: Strength of a Hundred Seal",
      "file": "tsunade_(s)_skill_3_(tsunade_strength_of_a_hundred_seal).jpg",
      "description": "Tsunade taps into her seal. If Tsunade has 75 health or less, she will instantly heal 15 health. The next time Tsunade uses a skill, it will be empowered. If this skill is used while empowered, it will heal Tsunade 50 health and grant her 2 random chakra.",
      "descriptionBR": "Tsunade libera o poder do seu selo. Se ela estiver com 75 de vida ou menos, curará instantaneamente 15 de vida. Na próxima vez que usar uma habilidade, ela será fortalecida. Se esta habilidade for usada enquanto estiver fortalecida, Tsunade curará 50 de vida e receberá 2 chakras aleatórios.",
      "descriptionRaw": "Tsunade taps into her seal. If Tsunade has 75 health or less, she will instantly heal 15 health. The next time Tsunade uses a skill, it will be empowered. If this skill is used while empowered, it will heal Tsunade 50 health and grant her 2 random chakra.",
      "descriptionBRRaw": "Tsunade libera o poder do seu selo. Se ela estiver com 75 de vida ou menos, curará instantaneamente 15 de vida. Na próxima vez que usar uma habilidade, ela será fortalecida. Se esta habilidade for usada enquanto estiver fortalecida, Tsunade curará 50 de vida e receberá 2 chakras aleatórios.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Tsunade taps into her seal. If Tsunade has 75 health or less, she will instantly heal 15 health. The next time Tsunade uses a skill, it will be empowered. If this skill is used while empowered, it will heal Tsunade 50 health and grant her 2 random chakra. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tsunade libera o poder do seu selo. Se ela estiver com 75 de vida ou menos, curará instantaneamente 15 de vida. Na próxima vez que usar uma habilidade, ela será fortalecida. Se esta habilidade for usada enquanto estiver fortalecida, Tsunade curará 50 de vida e receberá 2 chakras aleatórios. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Tsunade Protection",
      "file": "tsunade_(s)_skill_4_(tsunade_protection).jpg",
      "description": "This skill makes Tsunade (S) invulnerable for 1 turn. This skill is not affected by 'Tsunade: Strength of a Hundred Seal'.",
      "descriptionBR": "Essa habilidade faz Tsunade (S) invulnerável por 1 turno. Essa habilidade não é afetada por 'Tsunade: Strength of a Hundred Seal'.",
      "descriptionRaw": "This skill makes Tsunade (S) <Defense>invulnerable<Defense> for 1 turn. This skill is not affected by <SkillName>'Tsunade: Strength of a Hundred Seal'<SkillName>.",
      "descriptionBRRaw": "Essa habilidade faz Tsunade (S) <Defense>invulnerável<Defense> por 1 turno. Essa habilidade não é afetada por <SkillName>'Tsunade: Strength of a Hundred Seal'<SkillName>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Tsunade (S) invulnerable for 1 turn. This skill is not affected by 'Tsunade: Strength of a Hundred Seal'. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Tsunade (S) invulnerável por 1 turno. Essa habilidade não é afetada por 'Tsunade: Strength of a Hundred Seal'. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
