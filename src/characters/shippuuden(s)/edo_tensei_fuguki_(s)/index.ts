// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Fuguki (S)",
  "description": "Reanimated by Kabuto during the Fourth Shinobi World War as one of the Seven Swordsmen of the Mist, Fuguki used to wield the Shark-Skin Blade, Samehada. A merciless man of few morals, Fuguki uniquely fights using his magnificent mane of red hair as a weapon, dynamically manipulating it to dominate his enemies.",
  "descriptionBR": "Reanimado por Kabuto durante a Quarta Guerra Mundial Shinobi como um dos Sete Espadachins da Névoa, Fuguki costumava empunhar a Lâmina Pele de Tubarão, Samehada. Um homem implacável e sem muitos escrúpulos, Fuguki luta de forma única usando sua magnífica cabeleira vermelha como arma, manipulando-a dinamicamente para dominar seus inimigos.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_fuguki_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Hair Needle Senbon",
      "file": "edo_tensei_fuguki_(s)_skill_1_(hair_needle_senbon).jpeg",
      "description": "ET Fuguki deals 20 piercing damage to one enemy. For 1 turn, any enemy that uses a new skill on ET Fuguki or his allies will gain a stack of 'Hair Spikes'; This skill may only grant 1 stack to an enemy per turn.",
      "descriptionBR": "ET Fuguki causa 20 de dano perfurante a um inimigo. Por 1 turno, qualquer inimigo que use uma nova habilidade em Fuguki ou seus aliados receberá um acúmulo de 'Hair Spikes'; Esta habilidade só pode conceder 1 acúmulo por inimigo por turno.",
      "descriptionRaw": "ET Fuguki deals 20 piercing damage to one enemy. For 1 turn, any enemy that uses a new skill on ET Fuguki or his allies will gain a stack of 'Hair Spikes'; This skill may only grant 1 stack to an enemy per turn.",
      "descriptionBRRaw": "ET Fuguki causa 20 de dano perfurante a um inimigo. Por 1 turno, qualquer inimigo que use uma nova habilidade em Fuguki ou seus aliados receberá um acúmulo de 'Hair Spikes'; Esta habilidade só pode conceder 1 acúmulo por inimigo por turno.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged",
        "$_"
      ],
      "cooldown": 0,
      "ruleDescription": "ET Fuguki deals 20 piercing damage to one enemy. For 1 turn, any enemy that uses a new skill on ET Fuguki or his allies will gain a stack of 'Hair Spikes'; This skill may only grant 1 stack to an enemy per turn. Chakra cost: 1 Nin. Catalog classes: Physical, Instant, Ranged, $_. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "ET Fuguki causa 20 de dano perfurante a um inimigo. Por 1 turno, qualquer inimigo que use uma nova habilidade em Fuguki ou seus aliados receberá um acúmulo de 'Hair Spikes'; Esta habilidade só pode conceder 1 acúmulo por inimigo por turno. Custo de chakra: 1 ninjutsu. Classes no catálogo: Physical, Instant, Ranged, $_. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Hardened Spikes",
      "file": "edo_tensei_fuguki_(s)_skill_2_(hardened_spikes).jpeg",
      "description": "ET Fuguki instantly applies a stack of 'Hair Spikes' to the enemy team, and his team gains 15 points of destructible defense for 2 turns. During this time, any enemy that destroys this destructible defense will gain a stack of 'Hair Spikes'.",
      "descriptionBR": "ET Fuguki aplica instantaneamente um acúmulo de 'Hair Spikes' na equipe inimiga, e sua equipe recebe 15 pontos de defesa destrutível por 2 turnos. Durante esse tempo, qualquer inimigo que destruir essa defesa receberá um acúmulo de 'Hair Spikes'.",
      "descriptionRaw": "ET Fuguki instantly applies a stack of 'Hair Spikes' to the enemy team, and his team gains 15 points of destructible defense for 2 turns. During this time, any enemy that destroys this destructible defense will gain a stack of 'Hair Spikes'.",
      "descriptionBRRaw": "ET Fuguki aplica instantaneamente um acúmulo de 'Hair Spikes' na equipe inimiga, e sua equipe recebe 15 pontos de defesa destrutível por 2 turnos. Durante esse tempo, qualquer inimigo que destruir essa defesa receberá um acúmulo de 'Hair Spikes'.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged",
        "$_"
      ],
      "cooldown": 3,
      "ruleDescription": "ET Fuguki instantly applies a stack of 'Hair Spikes' to the enemy team, and his team gains 15 points of destructible defense for 2 turns. During this time, any enemy that destroys this destructible defense will gain a stack of 'Hair Spikes'. Chakra cost: 2 Random. Catalog classes: Physical, Instant, Ranged, $_. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "ET Fuguki aplica instantaneamente um acúmulo de 'Hair Spikes' na equipe inimiga, e sua equipe recebe 15 pontos de defesa destrutível por 2 turnos. Durante esse tempo, qualquer inimigo que destruir essa defesa receberá um acúmulo de 'Hair Spikes'. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant, Ranged, $_. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Ranged Supression",
      "file": "edo_tensei_fuguki_(s)_skill_3_(ranged_supression).jpeg",
      "description": "For 3 turns, one enemy will be dealt 5 piercing damage, granting them a stack of 'Hair Spikes' each turn, and the other enemies will be dealt 5 piercing damage every turn. During this time, any enemy that uses a new harmful skill will gain a stack of 'Hair Spikes'. This skill ends if Fuguki dies.",
      "descriptionBR": "Por 3 turnos, um inimigo receberá 5 de dano perfurante, ganhando um acúmulo de 'Hair Spikes' a cada turno, enquanto os outros inimigos receberão 5 de dano perfurante por turno. Durante esse tempo, qualquer inimigo que usar uma nova habilidade ofensiva receberá um acúmulo de 'Hair Spikes'. Esta habilidade termina se Fuguki morrer.",
      "descriptionRaw": "For 3 turns, one enemy will be dealt 5 piercing damage, granting them a stack of 'Hair Spikes' each turn, and the other enemies will be dealt 5 piercing damage every turn. During this time, any enemy that uses a new harmful skill will gain a stack of 'Hair Spikes'. This skill ends if Fuguki dies.",
      "descriptionBRRaw": "Por 3 turnos, um inimigo receberá 5 de dano perfurante, ganhando um acúmulo de 'Hair Spikes' a cada turno, enquanto os outros inimigos receberão 5 de dano perfurante por turno. Durante esse tempo, qualquer inimigo que usar uma nova habilidade ofensiva receberá um acúmulo de 'Hair Spikes'. Esta habilidade termina se Fuguki morrer.",
      "energy": [
        "Nin",
        "Nin"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged",
        "$_"
      ],
      "cooldown": 5,
      "ruleDescription": "For 3 turns, one enemy will be dealt 5 piercing damage, granting them a stack of 'Hair Spikes' each turn, and the other enemies will be dealt 5 piercing damage every turn. During this time, any enemy that uses a new harmful skill will gain a stack of 'Hair Spikes'. This skill ends if Fuguki dies. Chakra cost: 2 Nin. Catalog classes: Physical, Instant, Ranged, $_. Catalog cooldown: 5. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 3 turnos, um inimigo receberá 5 de dano perfurante, ganhando um acúmulo de 'Hair Spikes' a cada turno, enquanto os outros inimigos receberão 5 de dano perfurante por turno. Durante esse tempo, qualquer inimigo que usar uma nova habilidade ofensiva receberá um acúmulo de 'Hair Spikes'. Esta habilidade termina se Fuguki morrer. Custo de chakra: 2 ninjutsu. Classes no catálogo: Physical, Instant, Ranged, $_. Recarga (cooldown) no catálogo: 5. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Spiked Hair Defense",
      "file": "edo_tensei_fuguki_(s)_skill_4_(spiked_hair_defense).jpeg",
      "description": "This skill makes Edo Tensei Fuguki (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Fuguki (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Fuguki (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Fuguki (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Fuguki (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Fuguki (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Hair Spikes",
      "file": "edo_tensei_fuguki_(s)_skill_5_(hair_spikes).jpeg",
      "description": "An enemy affected by this skill will be dealt 2 piercing damage every turn for the rest of the game. During this time, that enemy will receive 5 additional damage from 'Hair Needle Senbon'. This skill stacks.",
      "descriptionBR": "Um inimigo afetado por esta habilidade receberá 2 de dano perfurante a cada turno pelo resto da partida. Durante esse tempo, esse inimigo receberá 5 de dano adicional de 'Hair Needle Senbon'. Esta habilidade acumula.",
      "descriptionRaw": "An enemy affected by this skill will be dealt 2 piercing damage every turn for the rest of the game. During this time, that enemy will receive 5 additional damage from 'Hair Needle Senbon'. This skill stacks.",
      "descriptionBRRaw": "Um inimigo afetado por esta habilidade receberá 2 de dano perfurante a cada turno pelo resto da partida. Durante esse tempo, esse inimigo receberá 5 de dano adicional de 'Hair Needle Senbon'. Esta habilidade acumula.",
      "energy": [],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "An enemy affected by this skill will be dealt 2 piercing damage every turn for the rest of the game. During this time, that enemy will receive 5 additional damage from 'Hair Needle Senbon'. This skill stacks. Chakra cost: no chakra cost listed. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Um inimigo afetado por esta habilidade receberá 2 de dano perfurante a cada turno pelo resto da partida. Durante esse tempo, esse inimigo receberá 5 de dano adicional de 'Hair Needle Senbon'. Esta habilidade acumula. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
