// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Yamashiro Aoba (S)",
  "description": "Aoba is one of the special jounins of the Hidden Leaf Village. By summoning crows, he is able to distract enemies, protect allies, and all while disguising himself among them to create openings for stealth attacks. In addition, Aoba is also able to penetrate the minds of his enemies to obtain information.",
  "descriptionBR": "Aoba é um dos jounins especiais da Vila Oculta da Folha. Invocando corvos, ele consegue distrair inimigos, proteger aliados e, ao mesmo tempo, se disfarçar entre eles para criar aberturas para ataques furtivos. Além disso, Aoba também consegue penetrar nas mentes de seus inimigos para obter informações.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "yamashiro_aoba_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Crow Assault",
      "file": "yamashiro_aoba_(s)_skill_1_(crow_assault).png",
      "description": "Aoba deals 5 damage to all enemies for 4 turns. All Aoba team will also gain 5 damage reduction points for 4 turns.",
      "descriptionBR": "Aoba causa 5 de dano a todos os inimigos por 4 turnos. Toda a equipe de Aoba também ganhará 5 pontos de redução de dano por 4 turnos.",
      "descriptionRaw": "Aoba <Damage>deals 5 damage<Damage> to all enemies for 4 turns. All Aoba team will also gain 5 <Defense>damage reduction points<Defense> for 4 turns.",
      "descriptionBRRaw": "Aoba <Damage>causa 5 de dano<Damage> a todos os inimigos por 4 turnos. Toda a equipe de Aoba também ganhará 5 <Defense>pontos de redução de dano<Defense> por 4 turnos.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Action",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Aoba deals 5 damage to all enemies for 4 turns. All Aoba team will also gain 5 damage reduction points for 4 turns. Chakra cost: 1 Gen. Catalog classes: Mental, Action, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Aoba causa 5 de dano a todos os inimigos por 4 turnos. Toda a equipe de Aoba também ganhará 5 pontos de redução de dano por 4 turnos. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Action, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Crow Convergence",
      "file": "yamashiro_aoba_(s)_skill_2_(crow_convergence).png",
      "description": "Aoba targets one enemy, making them unable to reduce damage or become invulnerable and dealing 30 damage to them for 1 turn. For 3 turns, that enemy will take 5 additional mental damage.",
      "descriptionBR": "Aoba primeiro torna um inimigo incapaz de reduzir dano ou ficar invulnerável e causa 30 de dano nele por 1 turno. Por 3 turnos, esse inimigo receberá 5 de dano mental adicional.",
      "descriptionRaw": "Aoba targets one enemy, making them unable to <Defense>reduce damage<Defense> or become <Defense>invulnerable<Defense> and <Damage>dealing 30 damage<Damage> to them for 1 turn. For 3 turns, that enemy will take <Improvements>5 additional mental damage<Improvements>.",
      "descriptionBRRaw": "Aoba primeiro torna um inimigo incapaz de <Defense>reduzir dano<Defense> ou ficar <Defense>invulnerável<Defense> e <Damage>causa 30 de dano<Damage> nele por 1 turno. Por 3 turnos, esse inimigo <Improvements>receberá 5 de dano mental adicional<Improvements>.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 1,
      "ruleDescription": "Aoba targets one enemy, making them unable to reduce damage or become invulnerable and dealing 30 damage to them for 1 turn. For 3 turns, that enemy will take 5 additional mental damage. Chakra cost: 1 Gen, 1 Random. Catalog classes: Mental, Instant, Ranged, Harmful. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Aoba primeiro torna um inimigo incapaz de reduzir dano ou ficar invulnerável e causa 30 de dano nele por 1 turno. Por 3 turnos, esse inimigo receberá 5 de dano mental adicional. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Mental, Instant, Ranged, Harmful. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Chakra Imbued Kunai",
      "file": "yamashiro_aoba_(s)_skill_3_(chakra_imbued_kunai).jpg",
      "description": "Aoba targets one enemy for 2 turns. If a new skill that has counter, reflect, or invulnerability is used on that enemy, they will ignore helpful effects for 1 turn. While active, that enemy will receive 10 additional damage from Aoba's skills. This skill is invisible and ends when triggered.",
      "descriptionBR": "Aoba mira um inimigo por 2 turnos. Se uma nova habilidade de counterar, refletir ou invulnerabilidade for usada nesse inimigo, ele ignorará efeitos benéficos por 1 turno. Enquanto ativa, esse inimigo recebe 10 de dano adicional das habilidades de Aoba. Esta habilidade é invisível e termina quando acionada.",
      "descriptionRaw": "Aoba targets one enemy for 2 turns. If a new skill that has <Defense>counter<Defense>, <Defense>reflect<Defense>, or <Defense>invulnerability<Defense> is used on that enemy, they will <Defense>ignore<Defense> <Classes>helpful<Classes> effects for 1 turn. While active, that enemy will <Improvements>receive 10 additional damage<Improvements> from Aoba's skills. <Invisible>This skill is invisible<Invisible> and <Effects>ends<Effects> when triggered.",
      "descriptionBRRaw": "Aoba mira um inimigo por 2 turnos. Se uma nova habilidade de <Defense>counterar<Defense>, <Defense>refletir<Defense> ou <Defense>invulnerabilidade<Defense> for usada nesse inimigo, ele <Defense>ignorará<Defense> efeitos <Classes>benéficos<Classes> por 1 turno. Enquanto ativa, esse inimigo <Improvements>recebe 10 de dano adicional<Improvements> das habilidades de Aoba. <Invisible>Esta habilidade é invisível<Invisible> e <Effects>termina<Effects> quando acionada.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 1,
      "ruleDescription": "Aoba targets one enemy for 2 turns. If a new skill that has counter, reflect, or invulnerability is used on that enemy, they will ignore helpful effects for 1 turn. While active, that enemy will receive 10 additional damage from Aoba's skills. This skill is invisible and ends when triggered. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged, Harmful. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Aoba mira um inimigo por 2 turnos. Se uma nova habilidade de counterar, refletir ou invulnerabilidade for usada nesse inimigo, ele ignorará efeitos benéficos por 1 turno. Enquanto ativa, esse inimigo recebe 10 de dano adicional das habilidades de Aoba. Esta habilidade é invisível e termina quando acionada. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged, Harmful. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Crow Smoke Screen",
      "file": "yamashiro_aoba_(s)_skill_4_(crow_smoke_screen).jpg",
      "description": "This skill makes Yamashiro Aoba (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Yamashiro Aoba (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Yamashiro Aoba (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Yamashiro Aoba (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Helpful"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Yamashiro Aoba (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant, Helpful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Yamashiro Aoba (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant, Helpful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
