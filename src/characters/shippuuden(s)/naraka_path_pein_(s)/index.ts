// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Naraka Path Pein (S)",
  "description": "Naraka Path Pein (S) is one of the six paths of Pein. This path is able to interrogate it's enemies at will. Naraka Path Pein (S) can also give life as well as take it.",
  "descriptionBR": "Naraka Path Pein (S) é um dos seis caminhos de Pein. Esse caminho é capaz de interrogar seus inimigos à vontade. Naraka Path Pein (S) também pode dar vida assim como tirá-la.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "naraka_path_pein_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Outer Path",
      "file": "naraka_path_pein_(s)_skill_1_(outer_path).jpg",
      "description": "Naraka Path summons the Outer Path, dealing 10 affliction damage to all enemies for 3 turns. During this time, 'Judgement' can be used.",
      "descriptionBR": "Naraka Path invoca o Outer Path, causando 10 de dano affliction a todos os inimigos por 3 turnos. Durante esse tempo, 'Judgement' pode ser usado.",
      "descriptionRaw": "Naraka Path summons the Outer Path, <Damage>dealing 10 affliction damage<Damage> to all enemies for 3 turns. During this time, <SkillName>'Judgement'<SkillName> can be used.",
      "descriptionBRRaw": "Naraka Path invoca o Outer Path, <Damage>causando 10 de dano affliction<Damage> a todos os inimigos por 3 turnos. Durante esse tempo, <SkillName>'Judgement'<SkillName> pode ser usado.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Action",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Naraka Path summons the Outer Path, dealing 10 affliction damage to all enemies for 3 turns. During this time, 'Judgement' can be used. Chakra cost: 2 Random. Catalog classes: Affliction, Action, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naraka Path invoca o Outer Path, causando 10 de dano affliction a todos os inimigos por 3 turnos. Durante esse tempo, 'Judgement' pode ser usado. Custo de chakra: 2 aleatório. Classes no catálogo: Affliction, Action, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Judgement",
      "file": "naraka_path_pein_(s)_skill_2_(judgement).jpg",
      "description": "Naraka executes an enemy affected by 'Outer Path', stealing 35 health from them. For 1 turn, that enemy will ignore healing effects.",
      "descriptionBR": "Naraka executa um inimigo afetado por 'Outer Path', roubando 35 de vida dele. Por 1 turno, esse inimigo ignorará efeitos de cura.",
      "descriptionRaw": "Naraka executes an enemy affected by <SkillName>'Outer Path'<SkillName>, <Damage>stealing 35 health<Damage> from them. For 1 turn, that enemy will <Defense>ignore healing<Defense> effects.",
      "descriptionBRRaw": "Naraka executa um inimigo afetado por <SkillName>'Outer Path'<SkillName>, <Damage>roubando 35 de vida<Damage> dele. Por 1 turno, esse inimigo <Defense>ignorará<Defense> efeitos de <Defense>cura<Defense>.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Naraka executes an enemy affected by 'Outer Path', stealing 35 health from them. For 1 turn, that enemy will ignore healing effects. Chakra cost: 1 Gen, 1 Random. Catalog classes: Mental, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naraka executa um inimigo afetado por 'Outer Path', roubando 35 de vida dele. Por 1 turno, esse inimigo ignorará efeitos de cura. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Mental, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Rejuvenation",
      "file": "naraka_path_pein_(s)_skill_3_(rejuvenation).jpg",
      "description": "Naraka Path uses Rejuvination on himself or an ally, healing them for 25 health and removing all affliction skills from them. This skill can be used on dead allies. If used on a dead ally, 'Rejuvination' will have its cost increased by 1 genjutsu chakra and heal increased by 15 permanently.",
      "descriptionBR": "Naraka Path Pein (S) usa Rejuvination em si mesmo ou em um aliado, curando-o em 25 de vida e removendo todas as habilidades aflitivas dele. Esta habilidade pode ser usada em aliados mortos. Se usada em um aliado morto, 'Rejuvination' terá seu custo aumentado em 1 chakra Genjutsu e a cura aumentada em 15 permanentemente.",
      "descriptionRaw": "Naraka Path uses Rejuvination on himself or an ally, healing them for 25 health and removing all affliction skills from them. This skill can be used on dead allies. If used on a dead ally, 'Rejuvination' will have its cost increased by 1 genjutsu chakra and heal increased by 15 permanently.",
      "descriptionBRRaw": "Naraka Path Pein (S) usa Rejuvination em si mesmo ou em um aliado, curando-o em 25 de vida e removendo todas as habilidades aflitivas dele. Esta habilidade pode ser usada em aliados mortos. Se usada em um aliado morto, 'Rejuvination' terá seu custo aumentado em 1 chakra Genjutsu e a cura aumentada em 15 permanentemente.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Naraka Path uses Rejuvination on himself or an ally, healing them for 25 health and removing all affliction skills from them. This skill can be used on dead allies. If used on a dead ally, 'Rejuvination' will have its cost increased by 1 genjutsu chakra and heal increased by 15 permanently. Chakra cost: 1 Gen. Catalog classes: Mental, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naraka Path Pein (S) usa Rejuvination em si mesmo ou em um aliado, curando-o em 25 de vida e removendo todas as habilidades aflitivas dele. Esta habilidade pode ser usada em aliados mortos. Se usada em um aliado morto, 'Rejuvination' terá seu custo aumentado em 1 chakra Genjutsu e a cura aumentada em 15 permanentemente. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Chakra Rod Deflection",
      "file": "naraka_path_pein_(s)_skill_4_(chakra_rod_deflection).jpg",
      "description": "This skill makes Naraka Path Pein (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Naraka Path Pein (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Naraka Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Naraka Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Naraka Path Pein (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Naraka Path Pein (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
