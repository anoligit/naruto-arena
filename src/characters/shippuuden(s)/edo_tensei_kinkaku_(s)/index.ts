// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Kinkaku (S)",
  "description": "Edo Tensei Kinkaku (S) is one half of the Gold and Silver brothers, said to have been swallowed by Kyuubi and gaining its' Chakra, Kinkaku uses his chakra and legendary tools to fight.",
  "descriptionBR": "Edo Tensei Kinkaku (S) é metade dos irmãos Ouro e Prata, dito ter sido engolido pelo Kyuubi e ganhando seu Chakra, Kinkaku usa seu chakra e ferramentas lendárias para lutar.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_kinkaku_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Bashousen: Assault",
      "file": "edo_tensei_kinkaku_(s)_skill_1_(bashousen_assault).png",
      "description": "Kinaku assaults an enemy with his treasured tool, dealing 25 affliction damage to them. For 1 turn, any enemy that uses a new non-mental skill on Kinkaku will take 10 affliction damage.",
      "descriptionBR": "Kinaku ataca um inimigo com sua ferramenta preciosa, causando 25 de dano de aflição a eles. Por 1 turno, qualquer inimigo que usar uma nova habilidade non-mental em Kinkaku irá receber 10 de dano afltiivo.",
      "descriptionRaw": "Kinaku assaults an enemy with his treasured tool, dealing 25 affliction damage to them. For 1 turn, any enemy that uses a new non-mental skill on Kinkaku will take 10 affliction damage.",
      "descriptionBRRaw": "Kinaku ataca um inimigo com sua ferramenta preciosa, causando 25 de dano de aflição a eles. Por 1 turno, qualquer inimigo que usar uma nova habilidade non-mental em Kinkaku irá receber 10 de dano afltiivo.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Kinaku assaults an enemy with his treasured tool, dealing 25 affliction damage to them. For 1 turn, any enemy that uses a new non-mental skill on Kinkaku will take 10 affliction damage. Chakra cost: 1 Nin. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kinaku ataca um inimigo com sua ferramenta preciosa, causando 25 de dano de aflição a eles. Por 1 turno, qualquer inimigo que usar uma nova habilidade non-mental em Kinkaku irá receber 10 de dano afltiivo. Custo de chakra: 1 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Bashosen: Coil of Fire",
      "file": "edo_tensei_kinkaku_(s)_skill_2_(bashosen_coil_of_fire).png",
      "description": "Kinkaku uses his treasured tool to generate a wave of flames, dealing 15 affliction damage to all enemies permanently. During this time, they will have the cooldown of their skills increased by 2 turns. This skill will end on an enemy when they use any new skill.",
      "descriptionBR": "Kinkaku usa sua ferramenta preciosa para gerar uma onda de chamas, causando 15 de dano de aflição a todos os inimigos permanentemente. Durante esse tempo, eles terão o tempo de recarga de suas habilidades aumentado em 2 turnos. Esta habilidade terminará em um inimigo quando ele usar qualquer nova habilidade.",
      "descriptionRaw": "Kinkaku uses his treasured tool to generate a wave of flames, dealing 15 affliction damage to all enemies permanently. During this time, they will have the cooldown of their skills increased by 2 turns. This skill will end on an enemy when they use any new skill.",
      "descriptionBRRaw": "Kinkaku usa sua ferramenta preciosa para gerar uma onda de chamas, causando 15 de dano de aflição a todos os inimigos permanentemente. Durante esse tempo, eles terão o tempo de recarga de suas habilidades aumentado em 2 turnos. Esta habilidade terminará em um inimigo quando ele usar qualquer nova habilidade.",
      "energy": [
        "Nin",
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "Kinkaku uses his treasured tool to generate a wave of flames, dealing 15 affliction damage to all enemies permanently. During this time, they will have the cooldown of their skills increased by 2 turns. This skill will end on an enemy when they use any new skill. Chakra cost: 2 Nin. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kinkaku usa sua ferramenta preciosa para gerar uma onda de chamas, causando 15 de dano de aflição a todos os inimigos permanentemente. Durante esse tempo, eles terão o tempo de recarga de suas habilidades aumentado em 2 turnos. Esta habilidade terminará em um inimigo quando ele usar qualquer nova habilidade. Custo de chakra: 2 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Koukinjou Counter",
      "file": "edo_tensei_kinkaku_(s)_skill_3_(koukinjou_counter).png",
      "description": "Kinkaku targets an enemy for 1 turn. If that enemy uses a new harmful skill, they will be countered and dealt 35 damage. If successful, that enemy will also receive 10 additional damage from 'Bashousen: Assault' for 1 turn. This skill is invisible.",
      "descriptionBR": "Kinkaku mira um inimigo por 1 turno. Se esse inimigo usar uma nova habilidade ofensiva, ele será counterado e receberá 35 de dano. Se for bem-sucedido, esse inimigo também receberá 10 de dano adicional de 'Bashousen: Assault' por 1 turno. Esta habilidade é invisível.",
      "descriptionRaw": "Kinkaku targets an enemy for 1 turn. If that enemy uses a new harmful skill, they will be countered and dealt 35 damage. If successful, that enemy will also receive 10 additional damage from 'Bashousen: Assault' for 1 turn. This skill is invisible.",
      "descriptionBRRaw": "Kinkaku mira um inimigo por 1 turno. Se esse inimigo usar uma nova habilidade ofensiva, ele será counterado e receberá 35 de dano. Se for bem-sucedido, esse inimigo também receberá 10 de dano adicional de 'Bashousen: Assault' por 1 turno. Esta habilidade é invisível.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Kinkaku targets an enemy for 1 turn. If that enemy uses a new harmful skill, they will be countered and dealt 35 damage. If successful, that enemy will also receive 10 additional damage from 'Bashousen: Assault' for 1 turn. This skill is invisible. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kinkaku mira um inimigo por 1 turno. Se esse inimigo usar uma nova habilidade ofensiva, ele será counterado e receberá 35 de dano. Se for bem-sucedido, esse inimigo também receberá 10 de dano adicional de 'Bashousen: Assault' por 1 turno. Esta habilidade é invisível. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Koukinjou Block",
      "file": "edo_tensei_kinkaku_(s)_skill_4_(koukinjou_block).png",
      "description": "This skill makes Edo Tensei Kinkaku (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Kinkaku (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Kinkaku (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Kinkaku (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Kinkaku (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Kinkaku (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
