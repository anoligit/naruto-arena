// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Susanoo Itachi (S)",
  "description": "After using Amaterasu and Tsukuyomi, Itachi awakened his triumph, Susanoo, and became even stronger, both defensively with his Yata Mirror and offensively with his Totsuka Sword capable of sealing an opponent.",
  "descriptionBR": "Após usar Amaterasu e Tsukuyomi, Itachi despertou seu triunfo, Susanoo, e ficou ainda mais forte, tanto defensivamente com seu Espelho Yata quanto ofensivamente com sua Espada Totsuka capaz de selar um oponente.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "susanoo_itachi_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Susanoo Activation",
      "file": "susanoo_itachi_(s)_skill_1_(susanoo_activation).jpg",
      "description": "Uchiha Itachi activates Susanoo, and he takes 20 affliction damage*. Each turn he gains 5 permanent stacking destructible defense and his skills become usable for the rest of the game. This skill cannot be used while it's active.",
      "descriptionBR": "Uchiha Itachi ativa Susanoo e sofre 20 de dano affliction*. A cada turno ele ganha 5 de defesa destrutível permanente que acumula e suas habilidades ficam utilizáveis pelo resto do jogo. Esta habilidade não pode ser usada enquanto estiver ativa.",
      "descriptionRaw": "Uchiha Itachi activates Susanoo, and he takes 20 affliction damage*. Each turn he gains 5 permanent stacking destructible defense and his skills become usable for the rest of the game. This skill cannot be used while it's active.",
      "descriptionBRRaw": "Uchiha Itachi ativa Susanoo e sofre 20 de dano affliction*. A cada turno ele ganha 5 de defesa destrutível permanente que acumula e suas habilidades ficam utilizáveis pelo resto do jogo. Esta habilidade não pode ser usada enquanto estiver ativa.",
      "energy": [],
      "classes": [
        "Affliction",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Uchiha Itachi activates Susanoo, and he takes 20 affliction damage*. Each turn he gains 5 permanent stacking destructible defense and his skills become usable for the rest of the game. This skill cannot be used while it's active. Chakra cost: no chakra cost listed. Catalog classes: Affliction, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Uchiha Itachi ativa Susanoo e sofre 20 de dano affliction*. A cada turno ele ganha 5 de defesa destrutível permanente que acumula e suas habilidades ficam utilizáveis pelo resto do jogo. Esta habilidade não pode ser usada enquanto estiver ativa. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Affliction, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Totsuka Sword",
      "file": "susanoo_itachi_(s)_skill_2_(totsuka_sword).png",
      "description": "Itachi uses the legendary blade of Susanoo, dealing 25 piercing damage to one enemy and removing 1 genjutsu or bloodline chakra from them. This skill requires 'Susanoo Activation'.'",
      "descriptionBR": "Itachi usa a lâmina lendária do Susanoo, causando 25 de dano perfurante a um inimigo e removendo 1 genjutsu ou bloodline chakra dele. Esta habilidade requer 'Susanoo Activation'.",
      "descriptionRaw": "Itachi uses the legendary blade of Susanoo, dealing 25 piercing damage to one enemy and removing 1 genjutsu or bloodline chakra from them. This skill requires 'Susanoo Activation'.'",
      "descriptionBRRaw": "Itachi usa a lâmina lendária do Susanoo, causando 25 de dano perfurante a um inimigo e removendo 1 genjutsu ou bloodline chakra dele. Esta habilidade requer 'Susanoo Activation'.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Itachi uses the legendary blade of Susanoo, dealing 25 piercing damage to one enemy and removing 1 genjutsu or bloodline chakra from them. This skill requires 'Susanoo Activation'.' Chakra cost: 1 Gen. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Itachi usa a lâmina lendária do Susanoo, causando 25 de dano perfurante a um inimigo e removendo 1 genjutsu ou bloodline chakra dele. Esta habilidade requer 'Susanoo Activation'. Custo de chakra: 1 genjutsu. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Yata Mirror",
      "file": "susanoo_itachi_(s)_skill_3_(yata_mirror).png",
      "description": "Using the legendary shield of Susanoo, Itachi (S) ignores all harmful effects used on him for 1 turn. Any enemy that uses a new skill on him will have the cost of their skills increased by 1 random chakra for 1 turn. This skill is invisible and requires 'Susanoo Activation'.",
      "descriptionBR": "Usando o lendário escudo do Susanoo, Itachi (S) ignora todos os efeitos nocivos aplicados a ele por 1 turno. Qualquer inimigo que usar uma nova habilidade contra ele terá o custo de suas habilidades aumentado em 1 chakra aleatório por 1 turno. Esta habilidade é invisível e requer 'Susanoo Activation'.",
      "descriptionRaw": "Using the legendary shield of Susanoo, Itachi (S) ignores all harmful effects used on him for 1 turn. Any enemy that uses a new skill on him will have the cost of their skills increased by 1 random chakra for 1 turn. This skill is invisible and requires 'Susanoo Activation'.",
      "descriptionBRRaw": "Usando o lendário escudo do Susanoo, Itachi (S) ignora todos os efeitos nocivos aplicados a ele por 1 turno. Qualquer inimigo que usar uma nova habilidade contra ele terá o custo de suas habilidades aumentado em 1 chakra aleatório por 1 turno. Esta habilidade é invisível e requer 'Susanoo Activation'.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Using the legendary shield of Susanoo, Itachi (S) ignores all harmful effects used on him for 1 turn. Any enemy that uses a new skill on him will have the cost of their skills increased by 1 random chakra for 1 turn. This skill is invisible and requires 'Susanoo Activation'. Chakra cost: 1 Gen. Catalog classes: Chakra, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando o lendário escudo do Susanoo, Itachi (S) ignora todos os efeitos nocivos aplicados a ele por 1 turno. Qualquer inimigo que usar uma nova habilidade contra ele terá o custo de suas habilidades aumentado em 1 chakra aleatório por 1 turno. Esta habilidade é invisível e requer 'Susanoo Activation'. Custo de chakra: 1 genjutsu. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Susanoo Defense",
      "file": "susanoo_itachi_(s)_skill_4_(susanoo_defense).png",
      "description": "This skill makes Susanoo Itachi (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Susanoo Itachi (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Susanoo Itachi (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Susanoo Itachi (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Susanoo Itachi (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Susanoo Itachi (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
