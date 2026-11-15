// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Zabuza (S)",
  "description": "Edo Tensei Zabuza (S) has been summoned from the dead against his will. His unique abilities will surely be put to use on the battlefield. Pics by: Pain_Alagoano",
  "descriptionBR": "Edo Tensei Zabuza (S) foi invocado dos mortos contra sua vontade. Suas habilidades únicas certamente serão usadas no campo de batalha. Imagens por: Pain_Alagoano",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_zabuza_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Demon Shroud",
      "file": "edo_tensei_zabuza_(s)_skill_1_(demon_shroud).jpeg",
      "description": "Zabuza emantes shroud putting pressure in the battlefield. For 1 turn, all enemies will have the cost of their harmful skills increased by 1 random chakra. Afterwards, any enemy affected by this skill will receive 5 additional damage from Zabuza's skills permanently. This effect stacks.",
      "descriptionBR": "Zabuza emana uma névoa demoníaca, pressionando o campo de batalha. Por 1 turno, todos os inimigos terão o custo de suas habilidades ofensivas aumentado em 1 chakra aleatório. Depois disso, qualquer inimigo afetado por essa habilidade receberá 5 de dano adicional permanentemente das habilidades de Zabuza. Este efeito acumula.",
      "descriptionRaw": "Zabuza emantes shroud putting pressure in the battlefield. For 1 turn, all enemies will have the cost of their harmful skills increased by 1 random chakra. Afterwards, any enemy affected by this skill will receive 5 additional damage from Zabuza's skills permanently. This effect stacks.",
      "descriptionBRRaw": "Zabuza emana uma névoa demoníaca, pressionando o campo de batalha. Por 1 turno, todos os inimigos terão o custo de suas habilidades ofensivas aumentado em 1 chakra aleatório. Depois disso, qualquer inimigo afetado por essa habilidade receberá 5 de dano adicional permanentemente das habilidades de Zabuza. Este efeito acumula.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Zabuza emantes shroud putting pressure in the battlefield. For 1 turn, all enemies will have the cost of their harmful skills increased by 1 random chakra. Afterwards, any enemy affected by this skill will receive 5 additional damage from Zabuza's skills permanently. This effect stacks. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Zabuza emana uma névoa demoníaca, pressionando o campo de batalha. Por 1 turno, todos os inimigos terão o custo de suas habilidades ofensivas aumentado em 1 chakra aleatório. Depois disso, qualquer inimigo afetado por essa habilidade receberá 5 de dano adicional permanentemente das habilidades de Zabuza. Este efeito acumula. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Executioner Strike",
      "file": "edo_tensei_zabuza_(s)_skill_2_(executioner_strike).jpeg",
      "description": "Zabuza executes one enemy dealing 20 piercing damage to them. For 1 turn, that enemy's skills will have 1 additional cooldown.",
      "descriptionBR": "Zabuza executa um inimigo, causando 20 de dano perfurante. Por 1 turno, as habilidades desse inimigo terão 1 de recarga adicional.",
      "descriptionRaw": "Zabuza executes one enemy dealing 20 piercing damage to them. For 1 turn, that enemy's skills will have 1 additional cooldown.",
      "descriptionBRRaw": "Zabuza executa um inimigo, causando 20 de dano perfurante. Por 1 turno, as habilidades desse inimigo terão 1 de recarga adicional.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Zabuza executes one enemy dealing 20 piercing damage to them. For 1 turn, that enemy's skills will have 1 additional cooldown. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Zabuza executa um inimigo, causando 20 de dano perfurante. Por 1 turno, as habilidades desse inimigo terão 1 de recarga adicional. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Executioner Blade Absorption",
      "file": "edo_tensei_zabuza_(s)_skill_3_(executioner_blade_absorption).jpeg",
      "description": "Zabuza steals 10 health from one enemy and for 1 turn, that enemy's harmful skills will cost 1 additional bloodline chakra.",
      "descriptionBR": "Zabuza rouba 10 de vida de um inimigo e, por 1 turno, as habilidades ofensivas desse inimigo custarão 1 chakra do tipo Bloodline adicional.",
      "descriptionRaw": "Zabuza steals 10 health from one enemy and for 1 turn, that enemy's harmful skills will cost 1 additional bloodline chakra.",
      "descriptionBRRaw": "Zabuza rouba 10 de vida de um inimigo e, por 1 turno, as habilidades ofensivas desse inimigo custarão 1 chakra do tipo Bloodline adicional.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Zabuza steals 10 health from one enemy and for 1 turn, that enemy's harmful skills will cost 1 additional bloodline chakra. Chakra cost: 1 Gen. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Zabuza rouba 10 de vida de um inimigo e, por 1 turno, as habilidades ofensivas desse inimigo custarão 1 chakra do tipo Bloodline adicional. Custo de chakra: 1 genjutsu. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Demon Insight",
      "file": "edo_tensei_zabuza_(s)_skill_4_(demon_insight).jpeg",
      "description": "This skill makes Edo Tensei Zabuza (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Zabuza (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Zabuza (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Zabuza (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Zabuza (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Zabuza (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
