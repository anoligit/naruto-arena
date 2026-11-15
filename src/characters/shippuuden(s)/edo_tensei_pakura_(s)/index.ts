// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Pakura (S)",
  "description": "Edo Tensei Pakura (S) was a revered shinobi of the Hidden Sand in the past. So much so that she was revived against her will to participate in the fourth shinobi world war.",
  "descriptionBR": "Edo Tensei Pakura (S) foi uma shinobi reverenciada da Areia no passado. Tanto que foi revivida contra sua vontade para participar da Quarta Grande Guerra Ninja.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_pakura_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Scorch Release",
      "file": "edo_tensei_pakura_(s)_skill_1_(scorch_release).png",
      "description": "Pakura deals 20 affliction damage to one enemy and stuns their healing skills for 1 turn. During this time, they will ignore healing effects.",
      "descriptionBR": "Pakura causa 20 de dano affliction a um inimigo e atordoa suas habilidades de cura por 1 turno. Durante esse tempo, ele ignorará efeitos de cura.",
      "descriptionRaw": "Pakura <Damage>deals 20 affliction damage<Damage> to one enemy and <Effects>stuns<Effects> their <Classes>healing skills<Classes> for 1 turn. During this time, they will <Defense>ignore healing effects<Defense>.",
      "descriptionBRRaw": "Pakura <Damage>causa 20 de dano affliction<Damage> a um inimigo e <Effects>atordoa<Effects> suas <Classes>habilidades de cura<Classes> por 1 turno. Durante esse tempo, ele <Defense>ignorará efeitos de cura<Defense>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Pakura deals 20 affliction damage to one enemy and stuns their healing skills for 1 turn. During this time, they will ignore healing effects. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Pakura causa 20 de dano affliction a um inimigo e atordoa suas habilidades de cura por 1 turno. Durante esse tempo, ele ignorará efeitos de cura. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Searing Combat",
      "file": "edo_tensei_pakura_(s)_skill_2_(searing_combat).jpeg",
      "description": "Pakura deals 5 affliction damage to all enemies for 3 turns. During this time, all enemies that use a new harmful skill will take 5 affliction damage and 'Scorch Release' will deal 10 additional damage on them.",
      "descriptionBR": "Pakura causa 5 de dano affliction a todos os inimigos por 3 turnos. Durante esse tempo, todos os inimigos que usarem uma nova habilidade ofensiva receberão 5 de dano affliction e 'Scorch Release' causará 10 de dano adicional neles.",
      "descriptionRaw": "Pakura <Damage>deals 5 affliction damage<Damage> to all enemies for 3 turns. During this time, all enemies that <Classes>use a new harmful skill<Classes> will <Damage>take 5 affliction damage<Damage> and <SkillName>'Scorch Release'<SkillName> will <Improvements>deal 10 additional damage<Improvements> on them.",
      "descriptionBRRaw": "Pakura <Damage>causa 5 de dano affliction<Damage> a todos os inimigos por 3 turnos. Durante esse tempo, todos os inimigos que <Classes>usarem uma nova habilidade ofensiva<Classes> <Damage>receberão 5 de dano affliction<Damage> e <SkillName>'Scorch Release'<SkillName> <Improvements>causará 10 de dano adicional<Improvements> neles.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Pakura deals 5 affliction damage to all enemies for 3 turns. During this time, all enemies that use a new harmful skill will take 5 affliction damage and 'Scorch Release' will deal 10 additional damage on them. Chakra cost: 1 Gen. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Pakura causa 5 de dano affliction a todos os inimigos por 3 turnos. Durante esse tempo, todos os inimigos que usarem uma nova habilidade ofensiva receberão 5 de dano affliction e 'Scorch Release' causará 10 de dano adicional neles. Custo de chakra: 1 genjutsu. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Steaming Murder",
      "file": "edo_tensei_pakura_(s)_skill_3_(steaming_murder).png",
      "description": "Pakura deals 35 affliction damage to one enemy and stuns their helpful skills for 1 turn. If they are affected by 'Scorch Release', this will stun for 1 additional turn. If affected by 'Searing Combat', this will deal 5 additional damage. The following turn, Pakura's skills will cost random chakras instead.",
      "descriptionBR": "Pakura causa 35 de dano affliction a um inimigo e atordoa suas habilidades defensivas por 1 turno. Se ele estiver afetado por 'Scorch Release', esta habilidade irá atordoar por 1 turno adicional. Se estiver afetado por 'Searing Combat', esta habilidade irá causar 5 de dano adicional. No próximo turno, as habilidades de Pakura irão custar chakras aleatórios.",
      "descriptionRaw": "Pakura <Damage>deals 35 affliction damage<Damage> to one enemy and <Effects>stuns<Effects> their <Classes>helpful skills<Classes> for 1 turn. If they are affected by <SkillName>'Scorch Release'<SkillName>, this will <Improvements>stun for 1 additional turn<Improvements>. If affected by <SkillName>'Searing Combat'<SkillName>, this will <Improvements>deal 5 additional damage<Improvements>. The following turn, Pakura's skills will <Improvements>cost random chakras instead<Improvements>.",
      "descriptionBRRaw": "Pakura <Damage>causa 35 de dano affliction<Damage> a um inimigo e <Effects>atordoa<Effects> suas <Classes>habilidades defensivas<Classes> por 1 turno. Se ele estiver afetado por <SkillName>'Scorch Release'<SkillName>, esta habilidade irá <Improvements>atordoar por 1 turno adicional<Improvements>. Se estiver afetado por <SkillName>'Searing Combat'<SkillName>, esta habilidade irá <Improvements>causar 5 de dano adicional<Improvements>. No próximo turno, as habilidades de Pakura irão <Improvements>custar chakras aleatórios<Improvements>.",
      "energy": [
        "Blood",
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Pakura deals 35 affliction damage to one enemy and stuns their helpful skills for 1 turn. If they are affected by 'Scorch Release', this will stun for 1 additional turn. If affected by 'Searing Combat', this will deal 5 additional damage. The following turn, Pakura's skills will cost random chakras instead. Chakra cost: 1 Blood, 1 Gen. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Pakura causa 35 de dano affliction a um inimigo e atordoa suas habilidades defensivas por 1 turno. Se ele estiver afetado por 'Scorch Release', esta habilidade irá atordoar por 1 turno adicional. Se estiver afetado por 'Searing Combat', esta habilidade irá causar 5 de dano adicional. No próximo turno, as habilidades de Pakura irão custar chakras aleatórios. Custo de chakra: 1 linhagem sanguínea, 1 genjutsu. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Experienced Defense",
      "file": "edo_tensei_pakura_(s)_skill_4_(experienced_defense).jpeg",
      "description": "This skill makes Edo Tensei Pakura (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Pakura (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Pakura (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Pakura (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Pakura (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Pakura (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
