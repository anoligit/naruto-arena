// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Aburame Torune (S)",
  "description": "A member of the Aburame clan, and a member of Anbu Root, Torune can almost be said to have no personality of his own, other than his undying loyalty to Danzo. Unlike other members of his clan, Torune employs a unique type of bug that lets him outright destroy both flesh and chakra.",
  "descriptionBR": "Membro do clã Aburame e da Raiz da Anbu, pode-se dizer que Torune quase não possui personalidade própria além de sua lealdade inabalável a Danzo. Diferentemente dos outros membros de seu clã, Torune utiliza um tipo único de inseto que lhe permite destruir completamente tanto a carne quanto o chakra.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "aburame_torune_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Armor of Venom",
      "file": "aburame_torune_(s)_skill_1_(armor_of_venom).png",
      "description": "Torune applies one 'Venom Beetle' to one enemy and gains 15 destructible defense. During this time, Torune can use this skill again for 1 random chakra to apply a 'Venom Beetle' to one enemy. The enemy that destroys this destructible defense will have a 'Venom Beetle' applied to them.",
      "descriptionBR": "Torune aplica um 'Venom Beetle' a um inimigo e ganha 15 de defesa destrutível. Durante esse tempo, Torune poderá usar essa habilidade novamente por 1 chakra aleatório para aplicar um 'Venom Beetle' a um inimigo. O inimigo que destruir essa defesa destrutível terá um 'Venom Beetle' aplicado a ele.",
      "descriptionRaw": "Torune <Effects>applies one<Effects> <SkillName>'Venom Beetle'<SkillName> to one enemy and <Defense>gains 15 destructible defense<Defense>. During this time, Torune can use this skill again for 1 random chakra to <Effects>apply a<Effects> <SkillName>'Venom Beetle'<SkillName> to one enemy. The enemy that destroys this <Defense>destructible defense<Defense> will have a <SkillName>'Venom Beetle'<SkillName> <Effects>applied<Effects> to them.",
      "descriptionBRRaw": "Torune <Effects>aplica um<Effects> <SkillName>'Venom Beetle'<SkillName> a um inimigo e <Defense>ganha 15 de defesa destrutível<Defense>. Durante esse tempo, Torune poderá usar essa habilidade novamente por 1 chakra aleatório para <Effects>aplicar um<Effects> <SkillName>'Venom Beetle'<SkillName> a um inimigo. O inimigo que destruir essa <Defense>defesa destrutível<Defense> terá um <SkillName>'Venom Beetle'<SkillName> <Effects>aplicado<Effects> a ele.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Torune applies one 'Venom Beetle' to one enemy and gains 15 destructible defense. During this time, Torune can use this skill again for 1 random chakra to apply a 'Venom Beetle' to one enemy. The enemy that destroys this destructible defense will have a 'Venom Beetle' applied to them. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Torune aplica um 'Venom Beetle' a um inimigo e ganha 15 de defesa destrutível. Durante esse tempo, Torune poderá usar essa habilidade novamente por 1 chakra aleatório para aplicar um 'Venom Beetle' a um inimigo. O inimigo que destruir essa defesa destrutível terá um 'Venom Beetle' aplicado a ele. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Jar of Poison",
      "file": "aburame_torune_(s)_skill_2_(jar_of_poison).png",
      "description": "Torune applies one 'Venom Beetle' to each enemy and gains 35 destructible defense. During this time, Torune can use this skill again for 2 random chakra to apply a 'Venom Beetle' to each enemy. The enemy that destroys this destructible defense will have a 'Venom Beetle' applied to them.",
      "descriptionBR": "Torune aplica um 'Venom Beetle' a cada inimigo e ganha 35 de defesa destrutível. Durante esse tempo, Torune poderá usar essa habilidade novamente por 2 chakras aleatórios para aplicar um 'Venom Beetle' a cada inimigo. O inimigo que destruir essa defesa destrutível terá um 'Venom Beetle' aplicado a ele.",
      "descriptionRaw": "Torune <Effects>applies one<Effects> <SkillName>'Venom Beetle'<SkillName> to each enemy and <Defense>gains 35 destructible defense<Defense>. During this time, Torune can use this skill again for 2 random chakra to <Effects>apply a<Effects> <SkillName>'Venom Beetle'<SkillName> to each enemy. The enemy that destroys this <Defense>destructible defense<Defense> will have a <SkillName>'Venom Beetle'<SkillName> <Effects>applied<Effects> to them.",
      "descriptionBRRaw": "Torune <Effects>aplica um<Effects> <SkillName>'Venom Beetle'<SkillName> a cada inimigo e <Defense>ganha 35 de defesa destrutível<Defense>. Durante esse tempo, Torune poderá usar essa habilidade novamente por 2 chakras aleatórios para <Effects>aplicar um<Effects> <SkillName>'Venom Beetle'<SkillName> a cada inimigo. O inimigo que destruir essa <Defense>defesa destrutível<Defense> terá um <SkillName>'Venom Beetle'<SkillName> <Effects>aplicado<Effects> a ele.",
      "energy": [
        "Blood",
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Torune applies one 'Venom Beetle' to each enemy and gains 35 destructible defense. During this time, Torune can use this skill again for 2 random chakra to apply a 'Venom Beetle' to each enemy. The enemy that destroys this destructible defense will have a 'Venom Beetle' applied to them. Chakra cost: 2 Blood. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Torune aplica um 'Venom Beetle' a cada inimigo e ganha 35 de defesa destrutível. Durante esse tempo, Torune poderá usar essa habilidade novamente por 2 chakras aleatórios para aplicar um 'Venom Beetle' a cada inimigo. O inimigo que destruir essa defesa destrutível terá um 'Venom Beetle' aplicado a ele. Custo de chakra: 2 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Venom Explosion",
      "file": "aburame_torune_(s)_skill_3_(venom_explosion).jpeg",
      "description": "Torune targets any enemy affected by at least one 'Venom Beetle', removing 1 random chakra from them for each 'Venom Beetle' on them.",
      "descriptionBR": "Torune alveja qualquer inimigo afetado por pelo menos um 'Venom Beetle', removendo 1 chakra aleatório dele para cada 'Venom Beetle' aplicado.",
      "descriptionRaw": "Torune targets any enemy affected by at least one <SkillName>'Venom Beetle'<SkillName>, <Effects>removing 1 random chakra<Effects> from them for each <SkillName>'Venom Beetle'<SkillName> on them.",
      "descriptionBRRaw": "Torune alveja qualquer inimigo afetado por pelo menos um <SkillName>'Venom Beetle'<SkillName>, <Effects>removendo 1 chakra aleatório<Effects> dele para cada <SkillName>'Venom Beetle'<SkillName> aplicado.",
      "energy": [
        "Blood",
        "Blood",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Torune targets any enemy affected by at least one 'Venom Beetle', removing 1 random chakra from them for each 'Venom Beetle' on them. Chakra cost: 2 Blood, 1 Random. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Torune alveja qualquer inimigo afetado por pelo menos um 'Venom Beetle', removendo 1 chakra aleatório dele para cada 'Venom Beetle' aplicado. Custo de chakra: 2 linhagem sanguínea, 1 aleatório. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Super Leap",
      "file": "aburame_torune_(s)_skill_4_(super_leap).png",
      "description": "This skill makes Aburame Torune (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Aburame Torune (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Aburame Torune (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Aburame Torune (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Aburame Torune (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Aburame Torune (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Venom Beetle",
      "file": "aburame_torune_(s)_skill_5_(venom_beetle).png",
      "description": "This skill deals 5 affliction damage permanently.",
      "descriptionBR": "Essa habilidade causa 5 de dano affliction permanentemente.",
      "descriptionRaw": "This skill <Damage>deals 5 affliction damage<Damage> permanently.",
      "descriptionBRRaw": "Essa habilidade <Damage>causa 5 de dano affliction<Damage> permanentemente.",
      "energy": [],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "This skill deals 5 affliction damage permanently. Chakra cost: no chakra cost listed. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade causa 5 de dano affliction permanentemente. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
