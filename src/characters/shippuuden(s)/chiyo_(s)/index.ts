// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Chiyo (S)",
  "description": "The grandmother of Sasori(s) and elder ninja of the Sand Village, Chiyo is a well known and accomplished puppet master and builder.",
  "descriptionBR": "Avó de Sasori (S) e ninja anciã da Vila da Areia, Chiyo é uma renomada e talentosa mestre de marionetes e construtora.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "chiyo_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "White Secret Attack Rampage",
      "file": "chiyo_(s)_skill_1_(white_secret_attack_rampage).jpg",
      "description": "Chiyo directs her puppets to devastate the battlefield, dealing 20 damage to a random enemy for 1 turn. The following turn, a second random enemy will also be dealt 20 damage. The second target is invisible. The next use of 'Sanbou Kyuukai' will deal 5 aditional damage. This skill stacks.",
      "descriptionBR": "Chiyo direciona seus fantoches para devastar o campo de batalha, causando 20 de dano a um inimigo aleatório por 1 turno. No próximo turno, um segundo inimigo aleatório também irá receber 20 de dano. O segundo alvo é invisível. O próximo uso de 'Sanbou Kyuukai' irá causar 5 de dano adicional. Essa habilidade acumula.",
      "descriptionRaw": "Chiyo directs her puppets to devastate the battlefield, dealing 20 damage to a random enemy for 1 turn. The following turn, a second random enemy will also be dealt 20 damage. The second target is invisible. The next use of 'Sanbou Kyuukai' will deal 5 aditional damage. This skill stacks.",
      "descriptionBRRaw": "Chiyo direciona seus fantoches para devastar o campo de batalha, causando 20 de dano a um inimigo aleatório por 1 turno. No próximo turno, um segundo inimigo aleatório também irá receber 20 de dano. O segundo alvo é invisível. O próximo uso de 'Sanbou Kyuukai' irá causar 5 de dano adicional. Essa habilidade acumula.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Chiyo directs her puppets to devastate the battlefield, dealing 20 damage to a random enemy for 1 turn. The following turn, a second random enemy will also be dealt 20 damage. The second target is invisible. The next use of 'Sanbou Kyuukai' will deal 5 aditional damage. This skill stacks. Chakra cost: 1 Random. Catalog classes: Physical, Action, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Chiyo direciona seus fantoches para devastar o campo de batalha, causando 20 de dano a um inimigo aleatório por 1 turno. No próximo turno, um segundo inimigo aleatório também irá receber 20 de dano. O segundo alvo é invisível. O próximo uso de 'Sanbou Kyuukai' irá causar 5 de dano adicional. Essa habilidade acumula. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Action, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Sanbou Kyuukai",
      "file": "chiyo_(s)_skill_2_(sanbou_kyuukai).jpg",
      "description": "This skill deals 20 piercing damage to one enemy and stuns their physical and chakra skills for 1 turn. Also for 1 turn, that enemy will receive 5 additional damage from all sources. This skill ignores invulnerability.",
      "descriptionBR": "Essa habilidade causa 20 de dano piercing a um inimigo e atordoa as habilidades physical e chakra dele por 1 turno. Também por 1 turno, esse inimigo irá receber 5 de dano adicional de todas as fontes. Essa habilidade ignora invulnerabilidade.",
      "descriptionRaw": "This skill deals 20 piercing damage to one enemy and stuns their physical and chakra skills for 1 turn. Also for 1 turn, that enemy will receive 5 additional damage from all sources. This skill ignores invulnerability.",
      "descriptionBRRaw": "Essa habilidade causa 20 de dano piercing a um inimigo e atordoa as habilidades physical e chakra dele por 1 turno. Também por 1 turno, esse inimigo irá receber 5 de dano adicional de todas as fontes. Essa habilidade ignora invulnerabilidade.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "This skill deals 20 piercing damage to one enemy and stuns their physical and chakra skills for 1 turn. Also for 1 turn, that enemy will receive 5 additional damage from all sources. This skill ignores invulnerability. Chakra cost: 2 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade causa 20 de dano piercing a um inimigo e atordoa as habilidades physical e chakra dele por 1 turno. Também por 1 turno, esse inimigo irá receber 5 de dano adicional de todas as fontes. Essa habilidade ignora invulnerabilidade. Custo de chakra: 2 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Ally Puppetry",
      "file": "chiyo_(s)_skill_3_(ally_puppetry).jpg",
      "description": "Chiyo controls one ally for 3 turns. Each turn, that ally will nullify the first physical or chakra skill used on them. During this time, their non-affliction skills will deal 25% more damage. The following 2 turns, this skill will be replaced.",
      "descriptionBR": "Chiyo controla um aliado por 3 turnos. A cada turno, esse aliado irá anular a primeira habilidade physical ou chakra usada contra ele. Durante esse tempo, suas habilidades não affliction irão causar 25% a mais de dano. Nos próximos 2 turnos, essa habilidade será substituída.",
      "descriptionRaw": "Chiyo controls one ally for 3 turns. Each turn, that ally will nullify the first physical or chakra skill used on them. During this time, their non-affliction skills will deal 25% more damage. The following 2 turns, this skill will be replaced.",
      "descriptionBRRaw": "Chiyo controla um aliado por 3 turnos. A cada turno, esse aliado irá anular a primeira habilidade physical ou chakra usada contra ele. Durante esse tempo, suas habilidades não affliction irão causar 25% a mais de dano. Nos próximos 2 turnos, essa habilidade será substituída.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Action"
      ],
      "cooldown": 2,
      "ruleDescription": "Chiyo controls one ally for 3 turns. Each turn, that ally will nullify the first physical or chakra skill used on them. During this time, their non-affliction skills will deal 25% more damage. The following 2 turns, this skill will be replaced. Chakra cost: 1 Random. Catalog classes: Chakra, Action. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Chiyo controla um aliado por 3 turnos. A cada turno, esse aliado irá anular a primeira habilidade physical ou chakra usada contra ele. Durante esse tempo, suas habilidades não affliction irão causar 25% a mais de dano. Nos próximos 2 turnos, essa habilidade será substituída. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Action. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Chakra Shield",
      "file": "chiyo_(s)_skill_4_(chakra_shield).jpg",
      "description": "This skill makes Chiyo (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Chiyo (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Chiyo (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Chiyo (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Chiyo (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Chiyo (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "One's Own Life Reincarnation",
      "file": "chiyo_(s)_skill_5_(one's_own_life_reincarnation).png",
      "description": "Chiyo selects one ally, giving them all of her current remaining health. Afterwards, Chiyo will instantly die. The chosen ally gains 1 random chakra for the rest of the game. This skill can also be used on dead allies.",
      "descriptionBR": "Chiyo seleciona um aliado, concedendo a ele toda a sua vida restante atual. Depois disso, Chiyo irá morrer instantaneamente. O aliado escolhido ganha 1 chakra aleatório pelo resto do jogo. Essa habilidade também pode ser usada em aliados mortos.",
      "descriptionRaw": "Chiyo selects one ally, giving them all of her current remaining health. Afterwards, Chiyo will instantly die. The chosen ally gains 1 random chakra for the rest of the game. This skill can also be used on dead allies.",
      "descriptionBRRaw": "Chiyo seleciona um aliado, concedendo a ele toda a sua vida restante atual. Depois disso, Chiyo irá morrer instantaneamente. O aliado escolhido ganha 1 chakra aleatório pelo resto do jogo. Essa habilidade também pode ser usada em aliados mortos.",
      "energy": [
        "Random",
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Chiyo selects one ally, giving them all of her current remaining health. Afterwards, Chiyo will instantly die. The chosen ally gains 1 random chakra for the rest of the game. This skill can also be used on dead allies. Chakra cost: 3 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Chiyo seleciona um aliado, concedendo a ele toda a sua vida restante atual. Depois disso, Chiyo irá morrer instantaneamente. O aliado escolhido ganha 1 chakra aleatório pelo resto do jogo. Essa habilidade também pode ser usada em aliados mortos. Custo de chakra: 3 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
