// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Ginkaku (S)",
  "description": "Edo Tensei Ginkaku (S) is one half of the legendary gold and silver brothers of the Hidden Cloud Village. They were the most notorious criminals in the history of the Hidden Cloud.",
  "descriptionBR": "Edo Tensei Ginkaku (S) é metade dos lendários irmãos de ouro e prata da Vila Oculta da Nuvem. Eles foram os criminosos mais notórios da história da Vila Oculta da Nuvem.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_ginkaku_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Shichiseiken Slash",
      "file": "edo_tensei_ginkaku_(s)_skill_1_(shichiseiken_slash).png",
      "description": "Ginkaku deals 20 piercing damage to one enemy. For this turn, any new stun effects used on that enemy will last 1 additional turn.",
      "descriptionBR": "Ginkaku causa 20 de dano perfurante a um inimigo. Por este turno, qualquer novo efeito de atordoamento usado nesse inimigo durará 1 turno adicional.",
      "descriptionRaw": "Ginkaku deals 20 piercing damage to one enemy. For this turn, any new stun effects used on that enemy will last 1 additional turn.",
      "descriptionBRRaw": "Ginkaku causa 20 de dano perfurante a um inimigo. Por este turno, qualquer novo efeito de atordoamento usado nesse inimigo durará 1 turno adicional.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Ginkaku deals 20 piercing damage to one enemy. For this turn, any new stun effects used on that enemy will last 1 additional turn. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ginkaku causa 20 de dano perfurante a um inimigo. Por este turno, qualquer novo efeito de atordoamento usado nesse inimigo durará 1 turno adicional. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Silence is Golden",
      "file": "edo_tensei_ginkaku_(s)_skill_2_(silence_is_golden).png",
      "description": "Ginkaku politely approaches an enemy, dealing 10 piercing damage to that enemy and stunning their skills for 1 turn. During this time, that enemy will become invulnerable to helpful skills and will receive 5 additional melee damage.",
      "descriptionBR": "Ginkaku se aproxima educadamente de um inimigo, causando 10 de dano perfurante a esse inimigo e atordoando suas habilidades por 1 turno. Durante esse tempo, esse inimigo se tornará invulnerável a habilidades úteis e receberá 5 de dano adicional de ataques corpo a corpo.",
      "descriptionRaw": "Ginkaku politely approaches an enemy, dealing 10 piercing damage to that enemy and stunning their skills for 1 turn. During this time, that enemy will become invulnerable to helpful skills and will receive 5 additional melee damage.",
      "descriptionBRRaw": "Ginkaku se aproxima educadamente de um inimigo, causando 10 de dano perfurante a esse inimigo e atordoando suas habilidades por 1 turno. Durante esse tempo, esse inimigo se tornará invulnerável a habilidades úteis e receberá 5 de dano adicional de ataques corpo a corpo.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Ginkaku politely approaches an enemy, dealing 10 piercing damage to that enemy and stunning their skills for 1 turn. During this time, that enemy will become invulnerable to helpful skills and will receive 5 additional melee damage. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ginkaku se aproxima educadamente de um inimigo, causando 10 de dano perfurante a esse inimigo e atordoando suas habilidades por 1 turno. Durante esse tempo, esse inimigo se tornará invulnerável a habilidades úteis e receberá 5 de dano adicional de ataques corpo a corpo. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Benihisago",
      "file": "edo_tensei_ginkaku_(s)_skill_3_(benihisago).png",
      "description": "Ginkaku targets one enemy, selecting one random skill from that enemy for 3 turns. The next time that enemy uses the selected skill, they will be countered and Shichiseiken Slash will deal 5 additional damage to the countered enemy permanently. The selected skill is invisible.",
      "descriptionBR": "Ginkaku seleciona um inimigo, escolhendo uma habilidade aleatória desse inimigo por 3 turnos. Na próxima vez que esse inimigo usar a habilidade selecionada, ele será contra-atacado e Shichiseiken Slash causará 5 de dano adicional ao inimigo contra-atacado permanentemente. A habilidade selecionada é invisível.",
      "descriptionRaw": "Ginkaku targets one enemy, selecting one random skill from that enemy for 3 turns. The next time that enemy uses the selected skill, they will be countered and Shichiseiken Slash will deal 5 additional damage to the countered enemy permanently. The selected skill is invisible.",
      "descriptionBRRaw": "Ginkaku seleciona um inimigo, escolhendo uma habilidade aleatória desse inimigo por 3 turnos. Na próxima vez que esse inimigo usar a habilidade selecionada, ele será contra-atacado e Shichiseiken Slash causará 5 de dano adicional ao inimigo contra-atacado permanentemente. A habilidade selecionada é invisível.",
      "energy": [],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "Ginkaku targets one enemy, selecting one random skill from that enemy for 3 turns. The next time that enemy uses the selected skill, they will be countered and Shichiseiken Slash will deal 5 additional damage to the countered enemy permanently. The selected skill is invisible. Chakra cost: no chakra cost listed. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ginkaku seleciona um inimigo, escolhendo uma habilidade aleatória desse inimigo por 3 turnos. Na próxima vez que esse inimigo usar a habilidade selecionada, ele será contra-atacado e Shichiseiken Slash causará 5 de dano adicional ao inimigo contra-atacado permanentemente. A habilidade selecionada é invisível. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Shichiseiken Defense",
      "file": "edo_tensei_ginkaku_(s)_skill_4_(shichiseiken_defense).png",
      "description": "This skill makes Edo Tensei Ginkaku (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Ginkaku (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Ginkaku (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Ginkaku (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Ginkaku (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Ginkaku (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
