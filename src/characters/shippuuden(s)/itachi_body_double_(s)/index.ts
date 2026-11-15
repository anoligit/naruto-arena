// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Itachi Body Double (S)",
  "description": "By using one of Pein's techniques a Sand Nin spy for Akatsuki is changed to look like Itachi. The body double is controlled by Itachi but only has a third of his chakra.",
  "descriptionBR": "Usando uma das técnicas de Pein, um espião da Areia para a Akatsuki é transformado para se parecer com Itachi. O corpo duplo é controlado por Itachi, mas possui apenas um terço de seu chakra.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "itachi_body_double_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Finger Genjutsu",
      "file": "itachi_body_double_(s)_skill_1_(finger_genjutsu).jpg",
      "description": "Itachi affects one enemy with Finger Genjutsu for 1 turn. If the affected enemy uses any skill on Itachi Body Double (S) or his allies that skill will be countered and that enemy will take 10 damage and Itachi Body Double (S) will gain 1 genjutsu chakra. The target of this skill is invisible.",
      "descriptionBR": "Itachi afeta um inimigo com o Genjutsu do Dedo por 1 turno. Se o inimigo afetado usar qualquer habilidade em Itachi Body Double (S) ou em seus aliados, essa habilidade será counterada, o inimigo receberá 10 de dano e Itachi ganhará 1 chakra de genjutsu. O alvo dessa habilidade é invisível.",
      "descriptionRaw": "Itachi affects one enemy with Finger Genjutsu for 1 turn. If the affected enemy uses any skill on Itachi Body Double (S) or his allies that skill will be countered and that enemy will take 10 damage and Itachi Body Double (S) will gain 1 genjutsu chakra. The target of this skill is invisible.",
      "descriptionBRRaw": "Itachi afeta um inimigo com o Genjutsu do Dedo por 1 turno. Se o inimigo afetado usar qualquer habilidade em Itachi Body Double (S) ou em seus aliados, essa habilidade será counterada, o inimigo receberá 10 de dano e Itachi ganhará 1 chakra de genjutsu. O alvo dessa habilidade é invisível.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Itachi affects one enemy with Finger Genjutsu for 1 turn. If the affected enemy uses any skill on Itachi Body Double (S) or his allies that skill will be countered and that enemy will take 10 damage and Itachi Body Double (S) will gain 1 genjutsu chakra. The target of this skill is invisible. Chakra cost: 1 Gen. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Itachi afeta um inimigo com o Genjutsu do Dedo por 1 turno. Se o inimigo afetado usar qualquer habilidade em Itachi Body Double (S) ou em seus aliados, essa habilidade será counterada, o inimigo receberá 10 de dano e Itachi ganhará 1 chakra de genjutsu. O alvo dessa habilidade é invisível. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Genjutsu Reversal",
      "file": "itachi_body_double_(s)_skill_2_(genjutsu_reversal).jpg",
      "description": "For 2 turns, the first harmful skill used on Itachi Body Double (S) each turn will be reflected back onto the enemy who used it. This skill is invisible.",
      "descriptionBR": "Por 2 turnos, a primeira habilidade ofensiva usada em Itachi Body Double (S) a cada turno será refletida de volta ao inimigo que a usou. Esta habilidade é invisível.",
      "descriptionRaw": "For 2 turns, the first <Classes>harmful skill<Classes> used on Itachi Body Double (S) each turn will be <Defense>reflected<Defense> back onto the enemy who used it. This skill is <Invisible>invisible<Invisible>.",
      "descriptionBRRaw": "Por 2 turnos, a primeira <Classes>habilidade ofensiva<Classes> usada em Itachi Body Double (S) a cada turno será <Defense>refletida<Defense> de volta ao inimigo que a usou. Esta habilidade é <Invisible>invisível<Invisible>.",
      "energy": [
        "Blood",
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "For 2 turns, the first harmful skill used on Itachi Body Double (S) each turn will be reflected back onto the enemy who used it. This skill is invisible. Chakra cost: 1 Blood, 1 Gen. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 2 turnos, a primeira habilidade ofensiva usada em Itachi Body Double (S) a cada turno será refletida de volta ao inimigo que a usou. Esta habilidade é invisível. Custo de chakra: 1 linhagem sanguínea, 1 genjutsu. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Goukakyuu no Jutsu",
      "file": "itachi_body_double_(s)_skill_3_(goukakyuu_no_jutsu).jpg",
      "description": "Itachi Body Double (S) creates a large fireball that scorches the battlefield, dealing 20 affliction damage to one enemy. The following turn, all enemies will take 10 affliction damage.*",
      "descriptionBR": "Itachi Body Double (S) cria uma grande bola de fogo que incendeia o campo de batalha, causando 20 de dano affliction a um inimigo. No turno seguinte, todos os inimigos receberão 10 de dano affliction.*",
      "descriptionRaw": "Itachi Body Double (S) creates a large fireball that scorches the battlefield, <Damage>dealing 20 affliction damage<Damage> to one enemy. The following turn, all enemies will <Damage>take 10 affliction damage<Damage>.*",
      "descriptionBRRaw": "Itachi Body Double (S) cria uma grande bola de fogo que incendeia o campo de batalha, <Damage>causando 20 de dano affliction<Damage> a um inimigo. No turno seguinte, todos os inimigos <Damage>receberão 10 de dano affliction<Damage>.*",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Itachi Body Double (S) creates a large fireball that scorches the battlefield, dealing 20 affliction damage to one enemy. The following turn, all enemies will take 10 affliction damage.* Chakra cost: 1 Nin. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Itachi Body Double (S) cria uma grande bola de fogo que incendeia o campo de batalha, causando 20 de dano affliction a um inimigo. No turno seguinte, todos os inimigos receberão 10 de dano affliction.* Custo de chakra: 1 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Illusionary Raven Bunshin",
      "file": "itachi_body_double_(s)_skill_4_(illusionary_raven_bunshin).jpg",
      "description": "This skill makes Itachi Body Double (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Itachi Body Double (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Itachi Body Double (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Itachi Body Double (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Itachi Body Double (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Itachi Body Double (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
