// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Juugo (S)",
  "description": "One of Orochimaru's many test subjects, Juugo is the genetic source of the Cursed Seal. A reclusive man who is normally calm and gentle, Juugo suffers from murderous psychotic episodes, and now follows Sasuke as a member of Team Taka, as after the death of Kimimaro, only he can calm his killer impulses.",
  "descriptionBR": "Juugo (S) é a origem do selo amaldiçoado e agora segue Sasuke. Ele pode ser uma pessoa de natureza calma ou um lunático psicótico.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "juugo_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Compression Blast",
      "file": "juugo_(s)_skill_1_(compression_blast).jpg",
      "description": "Juugo absorbs natural energy and expels it in a highly compressed and violent blast, dealing 35 damage to one enemy and stunning their physical and chakra skills. During 'Killer Impulse', this skill will cost 2 random chakra instead.",
      "descriptionBR": "Juugo absorve energia natural e a expele em uma rajada altamente comprimida e violenta, causando 35 de dano a um inimigo e atordoando suas habilidades Physical e Chakra. Durante 'Killer Impulse', esta habilidade irá custar 2 chakras aleatórios.",
      "descriptionRaw": "Juugo absorbs natural energy and expels it in a highly compressed and violent blast, <Damage>dealing 35 damage<Damage> to one enemy and <Effects>stunning<Effects> their <Classes>physical and chakra<Classes> skills. During <SkillName>'Killer Impulse'<SkillName>, this skill will <Improvements>cost 2 random chakra<Improvements> instead.",
      "descriptionBRRaw": "Juugo absorve energia natural e a expele em uma rajada altamente comprimida e violenta, <Damage>causando 35 de dano<Damage> a um inimigo e <Effects>atordoando<Effects> suas habilidades <Classes>Physical e Chakra<Classes>. Durante <SkillName>'Killer Impulse'<SkillName>, esta habilidade irá <Improvements>custar 2 chakras aleatórios<Improvements>.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Juugo absorbs natural energy and expels it in a highly compressed and violent blast, dealing 35 damage to one enemy and stunning their physical and chakra skills. During 'Killer Impulse', this skill will cost 2 random chakra instead. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Juugo absorve energia natural e a expele em uma rajada altamente comprimida e violenta, causando 35 de dano a um inimigo e atordoando suas habilidades Physical e Chakra. Durante 'Killer Impulse', esta habilidade irá custar 2 chakras aleatórios. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Killer Impulse",
      "file": "juugo_(s)_skill_2_(killer_impulse).jpg",
      "description": "For 3 turns, Juugo gains 75% damage reduction. During this time, 3 random enemies will receive 25 piercing damage each turn. While active, 'Compression Blast' will cost 2 random chakra instead. The target enemies are invisible. This skill ignores invulnerability.",
      "descriptionBR": "Por 3 turnos, Juugo ganha 75% de redução de dano. Durante esse tempo, 3 inimigos aleatórios irão receber 25 de dano perfurante a cada turno. Enquanto estiver ativa, 'Compression Blast' irá custar 2 chakras aleatórios. Os inimigos escolhidos são invisíveis. Esta habilidade ignora invulnerabilidade.",
      "descriptionRaw": "For 3 turns, Juugo <Defense>gains 75% damage reduction<Defense>. During this time, 3 random enemies will <Damage>receive 25 piercing damage<Damage> each turn. While active, <SkillName>'Compression Blast'<SkillName> will <Improvements>cost 2 random chakra<Improvements> instead. The target enemies are invisible. This skill <Invisible>ignores invulnerability<Invisible>.",
      "descriptionBRRaw": "Por 3 turnos, Juugo <Defense>ganha 75% de redução de dano<Defense>. Durante esse tempo, 3 inimigos aleatórios irão <Damage>receber 25 de dano perfurante<Damage> a cada turno. Enquanto estiver ativa, <SkillName>'Compression Blast'<SkillName> irá <Improvements>custar 2 chakras aleatórios<Improvements>. Os inimigos escolhidos são <Invisible>invisíveis<Invisible>. Esta habilidade <Effects>ignora invulnerabilidade<Effects>.",
      "energy": [
        "Blood",
        "Blood"
      ],
      "classes": [
        "Physical",
        "Action",
        "Melee"
      ],
      "cooldown": 4,
      "ruleDescription": "For 3 turns, Juugo gains 75% damage reduction. During this time, 3 random enemies will receive 25 piercing damage each turn. While active, 'Compression Blast' will cost 2 random chakra instead. The target enemies are invisible. This skill ignores invulnerability. Chakra cost: 2 Blood. Catalog classes: Physical, Action, Melee. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 3 turnos, Juugo ganha 75% de redução de dano. Durante esse tempo, 3 inimigos aleatórios irão receber 25 de dano perfurante a cada turno. Enquanto estiver ativa, 'Compression Blast' irá custar 2 chakras aleatórios. Os inimigos escolhidos são invisíveis. Esta habilidade ignora invulnerabilidade. Custo de chakra: 2 linhagem sanguínea. Classes no catálogo: Physical, Action, Melee. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Fusion",
      "file": "juugo_(s)_skill_3_(fusion).jpg",
      "description": "Juugo targets one ally, healing 25 health and granting 10 permanent destructible defense to them. Each time Juugo uses this skill, the cooldown of Juugo's skills will be increased by 1.",
      "descriptionBR": "Juugo escolhe um aliado, recuperando 25 de vida e concedendo a ele 10 pontos de defesa destrutível permanente. Cada vez que Juugo usar esta habilidade, o cooldown das habilidades de Juugo será aumentado em 1.",
      "descriptionRaw": "Juugo targets one ally,<Defense> healing 25 health<Defense> and <Defense>granting 10 permanent destructible defense<Defense> to them. Each time Juugo <Classes>uses this skill<Classes>, the <Classes>cooldown<Classes> of <SkillText>Juugo's skills<SkillText> will be <Improvements>increased by 1<Improvements>.",
      "descriptionBRRaw": "Juugo escolhe um aliado, <Defense>recuperando 25 de vida<Defense> e concedendo a ele <Defense>10 pontos de defesa destrutível permanente<Defense>. Cada vez que Juugo usar esta habilidade, o <Classes>cooldown<Classes> das <SkillText>habilidades de Juugo<SkillText> será <Effects>aumentado em 1<Effects>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Juugo targets one ally, healing 25 health and granting 10 permanent destructible defense to them. Each time Juugo uses this skill, the cooldown of Juugo's skills will be increased by 1. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Juugo escolhe um aliado, recuperando 25 de vida e concedendo a ele 10 pontos de defesa destrutível permanente. Cada vez que Juugo usar esta habilidade, o cooldown das habilidades de Juugo será aumentado em 1. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Isolation",
      "file": null,
      "description": "This skill makes Juugo (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Juugo (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Juugo (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Juugo (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Juugo (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Juugo (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas.",
      "unavailable": true
    }
  ]
} as const;

export default character;
