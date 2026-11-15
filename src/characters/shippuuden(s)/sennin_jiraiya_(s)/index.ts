// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Sennin Jiraiya (S)",
  "description": "Sennin Jiraiya (S) uses sage chakra to improve his speed, strength, and skills. The only downfall is that it alters his appearance similar to that of a toad and makes him unappealing to women, which makes it a last resort for the pervy sage.",
  "descriptionBR": "Sennin Jiraiya (S) usa chakra sábio para melhorar sua velocidade, força e habilidades. A única desvantagem é que isso altera sua aparência, tornando-o semelhante a um sapo e o deixando pouco atraente para as mulheres, o que faz dessa técnica um último recurso para o sábio tarado.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "sennin_jiraiya_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Bath of Burning Oil",
      "file": "sennin_jiraiya_(s)_skill_1_(bath_of_burning_oil).png",
      "description": "Using a mixture of wind, oil, and fire, Jiraiya deals 20 piercing damage and 15 damage to one enemy. For 1 turn, counter skills used by that enemy will last 1 turn less. The following turn, 'Chou Oodama Rasengan' will cost 1 ninjutsu and 1 random chakra.",
      "descriptionBR": "Usando uma mistura de vento, óleo e fogo, Jiraiya causa 20 de dano perfurante e 15 de dano a um inimigo. Por 1 turno, habilidades de counterar usadas por esse inimigo durarão 1 turno a menos. No próximo turno, 'Chou Oodama Rasengan' irá custar 1 ninjutsu e 1 random chakra.",
      "descriptionRaw": "Using a mixture of wind, oil, and fire, Jiraiya deals 20 piercing damage and 15 damage to one enemy. For 1 turn, counter skills used by that enemy will last 1 turn less. The following turn, 'Chou Oodama Rasengan' will cost 1 ninjutsu and 1 random chakra.",
      "descriptionBRRaw": "Usando uma mistura de vento, óleo e fogo, Jiraiya causa 20 de dano perfurante e 15 de dano a um inimigo. Por 1 turno, habilidades de counterar usadas por esse inimigo durarão 1 turno a menos. No próximo turno, 'Chou Oodama Rasengan' irá custar 1 ninjutsu e 1 random chakra.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Using a mixture of wind, oil, and fire, Jiraiya deals 20 piercing damage and 15 damage to one enemy. For 1 turn, counter skills used by that enemy will last 1 turn less. The following turn, 'Chou Oodama Rasengan' will cost 1 ninjutsu and 1 random chakra. Chakra cost: 1 Nin, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando uma mistura de vento, óleo e fogo, Jiraiya causa 20 de dano perfurante e 15 de dano a um inimigo. Por 1 turno, habilidades de counterar usadas por esse inimigo durarão 1 turno a menos. No próximo turno, 'Chou Oodama Rasengan' irá custar 1 ninjutsu e 1 random chakra. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Kebari Senbon",
      "file": "sennin_jiraiya_(s)_skill_2_(kebari_senbon).png",
      "description": "Jiraiya turns his hair into needles, dealing 15 piercing damage to all enemies. For 1 turn, Jiraiya becomes invulnerable to harmful non-mental damage skills. The following turn, 'Chou Oodama Rasengan' will cost 1 taijutsu and 1 random chakra.",
      "descriptionBR": "Jiraiya transforma seu cabelo em agulhas, causando 15 de dano perfurante a todos os inimigos. Por 1 turno, Jiraiya se torna invulnerável a habilidades ofensivas non-mental que causam dano. No próximo turno, 'Chou Oodama Rasengan' irá custar 1 taijutsu e 1 random chakra.",
      "descriptionRaw": "Jiraiya turns his hair into needles, dealing 15 piercing damage to all enemies. For 1 turn, Jiraiya becomes invulnerable to harmful non-mental damage skills. The following turn, 'Chou Oodama Rasengan' will cost 1 taijutsu and 1 random chakra.",
      "descriptionBRRaw": "Jiraiya transforma seu cabelo em agulhas, causando 15 de dano perfurante a todos os inimigos. Por 1 turno, Jiraiya se torna invulnerável a habilidades ofensivas non-mental que causam dano. No próximo turno, 'Chou Oodama Rasengan' irá custar 1 taijutsu e 1 random chakra.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Jiraiya turns his hair into needles, dealing 15 piercing damage to all enemies. For 1 turn, Jiraiya becomes invulnerable to harmful non-mental damage skills. The following turn, 'Chou Oodama Rasengan' will cost 1 taijutsu and 1 random chakra. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Jiraiya transforma seu cabelo em agulhas, causando 15 de dano perfurante a todos os inimigos. Por 1 turno, Jiraiya se torna invulnerável a habilidades ofensivas non-mental que causam dano. No próximo turno, 'Chou Oodama Rasengan' irá custar 1 taijutsu e 1 random chakra. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Chou Oodama Rasengan",
      "file": "sennin_jiraiya_(s)_skill_3_(chou_oodama_rasengan).png",
      "description": "Creating a massive rasengan, Jiraiya makes one enemy unable to reduce damage or become ivnulnerable, then deals 45 damage to them for 1 turn.",
      "descriptionBR": "Criando um rasengan massivo, Jiraiya faz um inimigo incapaz de reduzir dano ou se tornar invulnerável, e então causa a ele 45 de dano por 1 turno.",
      "descriptionRaw": "Creating a massive rasengan, Jiraiya makes one enemy unable to reduce damage or become ivnulnerable, then deals 45 damage to them for 1 turn.",
      "descriptionBRRaw": "Criando um rasengan massivo, Jiraiya faz um inimigo incapaz de reduzir dano ou se tornar invulnerável, e então causa a ele 45 de dano por 1 turno.",
      "energy": [
        "Tai",
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Creating a massive rasengan, Jiraiya makes one enemy unable to reduce damage or become ivnulnerable, then deals 45 damage to them for 1 turn. Chakra cost: 1 Tai, 1 Nin. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Criando um rasengan massivo, Jiraiya faz um inimigo incapaz de reduzir dano ou se tornar invulnerável, e então causa a ele 45 de dano por 1 turno. Custo de chakra: 1 taijutsu, 1 ninjutsu. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Arm Block",
      "file": "sennin_jiraiya_(s)_skill_4_(arm_block).png",
      "description": "This skill makes Sennin Jiraiya (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Sennin Jiraiya (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Sennin Jiraiya (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Sennin Jiraiya (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Sennin Jiraiya (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Sennin Jiraiya (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
