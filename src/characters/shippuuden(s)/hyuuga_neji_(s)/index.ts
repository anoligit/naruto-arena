// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hyuuga Neji (S)",
  "description": "The only one of the original genins to make it to the level of jounin, Neji(s) has greatly increased his ability with both byakugan and gentle fist taijutsu.",
  "descriptionBR": "O único dos genins originais a chegar ao nível de jounin, Neji(s) aumentou muito sua habilidade tanto com byakugan quanto com o taijutsu gentle fist.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "hyuuga_neji_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Eight Trigams Sky Palm",
      "file": "hyuuga_neji_(s)_skill_1_(eight_trigams_sky_palm).jpg",
      "description": "Neji deals 20 damage to one enemy. For 1 turn, if that enemy uses any new skill, they will lose 1 non-taijutsu chakra.",
      "descriptionBR": "Neji causa 20 de dano a um inimigo. Por 1 turno, se esse inimigo usar qualquer habilidade nova, ele perderá 1 chakra não-taijutsu.",
      "descriptionRaw": "Neji deals 20 damage to one enemy. For 1 turn, if that enemy uses any new skill, they will lose 1 non-taijutsu chakra.",
      "descriptionBRRaw": "Neji causa 20 de dano a um inimigo. Por 1 turno, se esse inimigo usar qualquer habilidade nova, ele perderá 1 chakra não-taijutsu.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Neji deals 20 damage to one enemy. For 1 turn, if that enemy uses any new skill, they will lose 1 non-taijutsu chakra. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Neji causa 20 de dano a um inimigo. Por 1 turno, se esse inimigo usar qualquer habilidade nova, ele perderá 1 chakra não-taijutsu. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Mountain Crusher Palm",
      "file": "hyuuga_neji_(s)_skill_2_(mountain_crusher_palm).jpg",
      "description": "Neji destroys all destructible defense of one enemy and deals 30 damage to them, and then removes them 1 taijutsu and 1 genjutsu chakra. For 2 turns, 'Eight Trigams Sky Palm' will deal 10 additional damage to that enemy.",
      "descriptionBR": "Neji destrói toda defesa destrutível de um inimigo e causa 30 de dano a ele, além de remover 1 chakra taijutsu e 1 genjutsu. Por 2 turnos, 'Eight Trigams Sky Palm' causará 10 de dano adicional a esse inimigo.",
      "descriptionRaw": "Neji destroys all destructible defense of one enemy and deals 30 damage to them, and then removes them 1 taijutsu and 1 genjutsu chakra. For 2 turns, 'Eight Trigams Sky Palm' will deal 10 additional damage to that enemy.",
      "descriptionBRRaw": "Neji destrói toda defesa destrutível de um inimigo e causa 30 de dano a ele, além de remover 1 chakra taijutsu e 1 genjutsu. Por 2 turnos, 'Eight Trigams Sky Palm' causará 10 de dano adicional a esse inimigo.",
      "energy": [
        "Tai",
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Neji destroys all destructible defense of one enemy and deals 30 damage to them, and then removes them 1 taijutsu and 1 genjutsu chakra. For 2 turns, 'Eight Trigams Sky Palm' will deal 10 additional damage to that enemy. Chakra cost: 1 Tai, 1 Blood. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Neji destrói toda defesa destrutível de um inimigo e causa 30 de dano a ele, além de remover 1 chakra taijutsu e 1 genjutsu. Por 2 turnos, 'Eight Trigams Sky Palm' causará 10 de dano adicional a esse inimigo. Custo de chakra: 1 taijutsu, 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Reactive Rotation",
      "file": "hyuuga_neji_(s)_skill_3_(reactive_rotation).jpg",
      "description": "Neji target himself or one ally for 1 turn. The first harmful non-mental skill used on the protected character will be countered, and for 3 turns will take 10 additional damage from Neji's skills. This skill is invisible.",
      "descriptionBR": "Neji protege a si mesmo ou um aliado por 1 turno. A primeira habilidade ofensiva não-mental usada no personagem protegido será counterada, e por 3 turnos ele receberá 10 de dano adicional das habilidades de Neji. Esta habilidade é invisível.",
      "descriptionRaw": "Neji target himself or one ally for 1 turn. The first harmful non-mental skill used on the protected character will be countered, and for 3 turns will take 10 additional damage from Neji's skills. This skill is invisible.",
      "descriptionBRRaw": "Neji protege a si mesmo ou um aliado por 1 turno. A primeira habilidade ofensiva não-mental usada no personagem protegido será counterada, e por 3 turnos ele receberá 10 de dano adicional das habilidades de Neji. Esta habilidade é invisível.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Neji target himself or one ally for 1 turn. The first harmful non-mental skill used on the protected character will be countered, and for 3 turns will take 10 additional damage from Neji's skills. This skill is invisible. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Neji protege a si mesmo ou um aliado por 1 turno. A primeira habilidade ofensiva não-mental usada no personagem protegido será counterada, e por 3 turnos ele receberá 10 de dano adicional das habilidades de Neji. Esta habilidade é invisível. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Neji Insight",
      "file": "hyuuga_neji_(s)_skill_4_(neji_insight).jpeg",
      "description": "This skill makes Hyuuga Neji (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Hyuuga Neji (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Hyuuga Neji (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Hyuuga Neji (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Hyuuga Neji (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Hyuuga Neji (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
