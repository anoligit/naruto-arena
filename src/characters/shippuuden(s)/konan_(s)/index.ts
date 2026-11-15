// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Konan (S)",
  "description": "Konan (S) is a member of Akatsuki and a master of origami ninjutsu, earning her the title God's Angel in Amegakure. Able to turn her body into thick sheets of paper, she is capable of multiple forms of attack.",
  "descriptionBR": "Konan (S) é uma membro da Akatsuki e mestre do origami ninjutsu, ganhando o título de Anjo de Deus em Amegakure. Capaz de transformar seu corpo em grossas folhas de papel, ela é capaz de realizar múltiplas formas de ataque.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "konan_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Sword of Paper",
      "file": "konan_(s)_skill_1_(sword_of_paper).jpg",
      "description": "Using a sword made of paper, Konan deals 25 piercing damage to one enemy. If that enemy's health drops to 5 or less, they will be instantly killed. This skill will deal 10 additional damage to a stunned enemy.",
      "descriptionBR": "Usando uma espada feita de papel, Konan causa 25 de dano perfurante a um inimigo. Se a vida desse inimigo cair para 5 ou menos, ele será morto instantaneamente. Esta habilidade causará 10 de dano adicional a esse inimigo se o inimigo estiver atordoado.",
      "descriptionRaw": "Using a sword made of paper, Konan <Damage>deals 25 piercing damage<Damage> to one enemy. If that enemy's <Classes>health drops to 5 or less<Classes>, they will be instantly <Effects>killed<Effects>. This skill will <Improvements>deal 10 additional damage<Improvements> to a stunned enemy.",
      "descriptionBRRaw": "Usando uma espada feita de papel, Konan <Damage>causa 25 de dano<Damage> perfurante a um inimigo. Se a vida desse inimigo <Classes>cair para 5 ou menos<Classes>, ele será <Improvements>morto instantaneamente<Improvements>. Esta habilidade <Improvements>causará 10 de dano adicional<Improvements> a esse inimigo <Classes>se o inimigo estiver atordoado<Classes>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Using a sword made of paper, Konan deals 25 piercing damage to one enemy. If that enemy's health drops to 5 or less, they will be instantly killed. This skill will deal 10 additional damage to a stunned enemy. Chakra cost: 1 Blood. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando uma espada feita de papel, Konan causa 25 de dano perfurante a um inimigo. Se a vida desse inimigo cair para 5 ou menos, ele será morto instantaneamente. Esta habilidade causará 10 de dano adicional a esse inimigo se o inimigo estiver atordoado. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Origami Blanket",
      "file": "konan_(s)_skill_2_(origami_blanket).jpg",
      "description": "Konan covers one enemy in paper, dealing 15 damage to them for 2 turns. Each turn, that enemy will have their harmful skills stunned and become invulnerable to helpful skills for 1 turn.",
      "descriptionBR": "Konan cobre um inimigo com papel, causando 15 de dano a ele por 2 turnos. A cada turno, esse inimigo terá as habilidades ofensivas dele atordoadas e ficará invulnerável a habilidades defensivas.",
      "descriptionRaw": "Konan covers one enemy in paper, <Damage>dealing 15 damage<Damage> to them for 2 turns. Each turn, that enemy will have their <Classes>harmful<Classes> skills <Effects>stunned<Effects> and become <Defense>invulnerable<Defense> to <Classes>helpful skills<Classes> for 1 turn.",
      "descriptionBRRaw": "Konan cobre um inimigo com papel, <Damage>causando 15 de dano<Damage> a ele por 2 turnos. A cada turno, esse inimigo terá as <Classes>habilidades ofensivas<Classes> dele <Effects>atordoadas<Effects> e ficará <Defense>invulnerável<Defense> a <Classes>habilidades defensivas<Classes>.",
      "energy": [
        "Blood",
        "Gen"
      ],
      "classes": [
        "Physical",
        "Control",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Konan covers one enemy in paper, dealing 15 damage to them for 2 turns. Each turn, that enemy will have their harmful skills stunned and become invulnerable to helpful skills for 1 turn. Chakra cost: 1 Blood, 1 Gen. Catalog classes: Physical, Control, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Konan cobre um inimigo com papel, causando 15 de dano a ele por 2 turnos. A cada turno, esse inimigo terá as habilidades ofensivas dele atordoadas e ficará invulnerável a habilidades defensivas. Custo de chakra: 1 linhagem sanguínea, 1 genjutsu. Classes no catálogo: Physical, Control, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Dance Of The Shikigami",
      "file": "konan_(s)_skill_3_(dance_of_the_shikigami).jpg",
      "description": "Konan transforms her body into countless sheets of paper and strikes her enemies, dealing 25 damage to one enemy and 25 damage to a different random enemy. Afterwards, Konan becomes invulnerable for 1 turn.",
      "descriptionBR": "Konan transforma seu corpo em incontáveis folhas de papel e ataca seus inimigos, causando 25 de dano a um inimigo e 25 de dano a outro inimigo aleatório. Depois disso, Konan ficará invulnerável por 1 turno.",
      "descriptionRaw": "Konan transforms her body into countless sheets of paper and strikes her enemies, <Damage>dealing 25 damage<Damage> to one enemy and <Damage>25 damage<Damage> to a different random enemy. Afterwards, Konan <Defense>becomes invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Konan transforma seu corpo em incontáveis folhas de papel e ataca seus inimigos, <Damage>causando 25 de dano<Damage> a um inimigo e <Damage>25 de dano<Damage> a outro inimigo aleatório. Depois disso, Konan ficará invulnerável por 1 turno.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Konan transforms her body into countless sheets of paper and strikes her enemies, dealing 25 damage to one enemy and 25 damage to a different random enemy. Afterwards, Konan becomes invulnerable for 1 turn. Chakra cost: 1 Gen, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Konan transforma seu corpo em incontáveis folhas de papel e ataca seus inimigos, causando 25 de dano a um inimigo e 25 de dano a outro inimigo aleatório. Depois disso, Konan ficará invulnerável por 1 turno. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Onmyoji Dodge",
      "file": "konan_(s)_skill_4_(onmyoji_dodge).jpg",
      "description": "This skill makes Konan (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Konan (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Konan (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Konan (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Konan (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Konan (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
