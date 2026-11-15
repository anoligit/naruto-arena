// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Sai (S)",
  "description": "A current member of the elite ANBU Root, Sai(s) is an unparalleled artist who uses chakra to bring his images to life.",
  "descriptionBR": "Membro atual do elite ANBU Root, Sai(s) é um artista incomparável que usa chakra para dar vida às suas imagens.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "sai_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Great Beast Painting: Lions",
      "file": "sai_(s)_skill_1_(great_beast_painting_lions).jpg",
      "description": "Sai creates a number of ink lions to attack one enemy dealing 30 damage to them, and for 1 turn, Sai will gain 15 points of destructible defense.",
      "descriptionBR": "Sai cria vários leões de tinta para atacar um inimigo, causando 30 de dano, e por 1 turno, Sai ganhará 15 pontos de destructible defense.",
      "descriptionRaw": "Sai creates a number of ink lions to attack one enemy <Damage>dealing 30 damage<Damage> to them, and for 1 turn, Sai will gain 15 points of <Defense>destructible defense<Defense>.",
      "descriptionBRRaw": "Sai cria vários leões de tinta para atacar um inimigo, <Damage>causando 30 de dano<Damage>, e por 1 turno, Sai ganhará 15 pontos de <Defense>destructible defense<Defense>.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Sai creates a number of ink lions to attack one enemy dealing 30 damage to them, and for 1 turn, Sai will gain 15 points of destructible defense. Chakra cost: 1 Gen, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sai cria vários leões de tinta para atacar um inimigo, causando 30 de dano, e por 1 turno, Sai ganhará 15 pontos de destructible defense. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Great Beast Painting: Snake",
      "file": "sai_(s)_skill_2_(great_beast_painting_snake).jpg",
      "description": "Sai creates a snake made of ink to trap one enemy. stunning their physical and chakra skills for 1 turn. During this time, that enemy will be unable to reduce damage or become invulnerable. This skill ignores invulnerability.",
      "descriptionBR": "Sai cria uma cobra feita de tinta para prender um inimigo, atordoando suas habilidades physical e chakra por 1 turno. Durante esse tempo, o inimigo não poderá reduzir dano nem ficar invulnerável. Esta habilidade ignora invulnerabilidade.",
      "descriptionRaw": "Sai creates a snake made of ink to trap one enemy. <Effects>stunning<Effects> their <Classes>physical and chakra<Classes> skills for 1 turn. During this time, that enemy will be unable to <Defense>reduce damage<Defense> or become <Defense>invulnerable<Defense>. This skill ignores invulnerability.",
      "descriptionBRRaw": "Sai cria uma cobra feita de tinta para prender um inimigo, <Effects>atordoando<Effects> suas habilidades <Classes>physical e chakra<Classes> por 1 turno. Durante esse tempo, o inimigo não poderá <Defense>reduzir dano<Defense> nem ficar <Defense>invulnerável<Defense>. Esta habilidade <Classes>ignora invulnerabilidade<Classes>.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Sai creates a snake made of ink to trap one enemy. stunning their physical and chakra skills for 1 turn. During this time, that enemy will be unable to reduce damage or become invulnerable. This skill ignores invulnerability. Chakra cost: 1 Gen. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sai cria uma cobra feita de tinta para prender um inimigo, atordoando suas habilidades physical e chakra por 1 turno. Durante esse tempo, o inimigo não poderá reduzir dano nem ficar invulnerável. Esta habilidade ignora invulnerabilidade. Custo de chakra: 1 genjutsu. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Adaptive Painting",
      "file": "sai_(s)_skill_3_(adaptive_painting).jpg",
      "description": "For 3 turns, any ally that is stunned will become invulnerable for 1 turn; Any ally that has chakra removed/stolen will gain 1 random ; For each enemy non-affliction skill that damages Sai or his allies will increase Sai's damage by 10 for 1 turn. The following 3 turns, 'Great Beast Painting: Snake' will be replaced.",
      "descriptionBR": "Por 3 turnos, qualquer aliado que for atordoado ficará invulnerável por 1 turno; qualquer aliado que tiver seu chakra removido/roubado ganhará 1 chakra aleatório; Qualquer habilidade não-affliction inimiga que causar dano em Sai ou seus aliados aumentará o dano de Sai em 10 por 1 turno. Nos próximos 3 turnos, 'Great Beast Painting: Snake' será substituído.",
      "descriptionRaw": "For 3 turns, any ally that is <Effects>stunned<Effects> will become <Defense>invulnerable<Defense> for 1 turn; Any ally that has <Effects>chakra removed/stolen will gain 1 random <Effects>; For each enemy non-affliction skill that <Damage>damages<Damage> Sai or his allies will <Improvements>increase<Improvements> Sai's <Improvements>damage by 10 for 1 turn<Improvements>. The following 3 turns, <SkillName>'Great Beast Painting: Snake'<SkillName> will be <Improvements>replaced<Improvements>.",
      "descriptionBRRaw": "Por 3 turnos, qualquer aliado que for <Effects>atordoado<Effects> ficará <Defense>invulnerável<Defense> por 1 turno; qualquer aliado que tiver seu <Effects>chakra removido/roubado ganhará 1 chakra aleatório<Effects>; Qualquer habilidade não-affliction inimiga que <Damage>causar dano<Damage> em Sai ou seus aliados <Improvements>aumentará o dano<Improvements> de Sai <Improvements>em 10 por 1 turno<Improvements>. Nos próximos 3 turnos, <SkillName>'Great Beast Painting: Snake'<SkillName> será <Improvements>substituído<Improvements>.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "For 3 turns, any ally that is stunned will become invulnerable for 1 turn; Any ally that has chakra removed/stolen will gain 1 random ; For each enemy non-affliction skill that damages Sai or his allies will increase Sai's damage by 10 for 1 turn. The following 3 turns, 'Great Beast Painting: Snake' will be replaced. Chakra cost: 2 Random. Catalog classes: Mental, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 3 turnos, qualquer aliado que for atordoado ficará invulnerável por 1 turno; qualquer aliado que tiver seu chakra removido/roubado ganhará 1 chakra aleatório; Qualquer habilidade não-affliction inimiga que causar dano em Sai ou seus aliados aumentará o dano de Sai em 10 por 1 turno. Nos próximos 3 turnos, 'Great Beast Painting: Snake' será substituído. Custo de chakra: 2 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Ink Clone",
      "file": "sai_(s)_skill_4_(ink_clone).jpg",
      "description": "This skill makes Sai (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Sai (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Sai (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Sai (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Sai (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Sai (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Great Beast Painting: Bird",
      "file": "sai_(s)_skill_5_(great_beast_painting_bird).png",
      "description": "Sai creates a giant ink bird that crashes into one enemy, dealing 25 damage to them and stunning their physical and chakra skills for 1 turn.",
      "descriptionBR": "Sai cria um pássaro gigante de tinta que atinge um inimigo, causando 25 de dano e atordoando suas habilidades physical e chakra por 1 turno.",
      "descriptionRaw": "Sai creates a giant ink bird that crashes into one enemy, <Damage>dealing 25 damage<Damage> to them and <Effects>stunning<Effects> their <Classes>physical and chakra<Classes> skills for 1 turn.",
      "descriptionBRRaw": "Sai cria um pássaro gigante de tinta que atinge um inimigo, <Damage>causando 25 de dano<Damage> e <Effects>atordoando<Effects> suas habilidades <Classes>physical e chakra<Classes> por 1 turno.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Sai creates a giant ink bird that crashes into one enemy, dealing 25 damage to them and stunning their physical and chakra skills for 1 turn. Chakra cost: 1 Gen. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sai cria um pássaro gigante de tinta que atinge um inimigo, causando 25 de dano e atordoando suas habilidades physical e chakra por 1 turno. Custo de chakra: 1 genjutsu. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
