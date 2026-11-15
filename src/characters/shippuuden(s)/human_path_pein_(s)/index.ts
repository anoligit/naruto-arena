// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Human Path Pein (S)",
  "description": "Human Path Pein (S) is one of the six paths of Pein. This path is a mind reader and gathers intel for the other paths.",
  "descriptionBR": "Human Path Pein (S) é um dos seis caminhos de Pein. Este caminho é um leitor de mentes e coleta informações para os outros caminhos.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "human_path_pein_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Mind Invasion",
      "file": "human_path_pein_(s)_skill_1_(mind_invasion).jpg",
      "description": "Human Path deals 20 piercing damage to one enemy and stuns their harmful skills for 1 turn. The following turn, this skill becomes 'Soul Steal'.",
      "descriptionBR": "Human Path causa 20 de dano perfurante a um inimigo e atordoa as habilidades ofensiva dele por 1 turno. No próximo turno, essa habilidade se torna 'Soul Steal'.",
      "descriptionRaw": "Human Path deals 20 piercing damage to one enemy and stuns their harmful skills for 1 turn. The following turn, this skill becomes 'Soul Steal'.",
      "descriptionBRRaw": "Human Path causa 20 de dano perfurante a um inimigo e atordoa as habilidades ofensiva dele por 1 turno. No próximo turno, essa habilidade se torna 'Soul Steal'.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Human Path deals 20 piercing damage to one enemy and stuns their harmful skills for 1 turn. The following turn, this skill becomes 'Soul Steal'. Chakra cost: 1 Gen. Catalog classes: Mental, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Human Path causa 20 de dano perfurante a um inimigo e atordoa as habilidades ofensiva dele por 1 turno. No próximo turno, essa habilidade se torna 'Soul Steal'. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Brain Plunder",
      "file": "human_path_pein_(s)_skill_2_(brain_plunder).png",
      "description": "Human Path steals 10 HP from one enemy, makes them unable to reduce damage or become invulnerable for 1 turn, and reveals their invisible skills for 3 turns. Next turn, if Human uses a new harmful skill, that enemy will have their helpful skills stunned for 1 turn.",
      "descriptionBR": "Human Path rouba 10 de vida de um inimigo, faz com que ele fique incapaz de reduzir dano ou se tornar invulnerável por 1 turno, e revela as habilidades invisíveis dele por 3 turnos. No próximo turno, se Human usar uma nova habilidade ofensiva, esse inimigo terá suas habilidades defensivas atordoadas por 1 turno.",
      "descriptionRaw": "Human Path steals 10 HP from one enemy, makes them unable to reduce damage or become invulnerable for 1 turn, and reveals their invisible skills for 3 turns. Next turn, if Human uses a new harmful skill, that enemy will have their helpful skills stunned for 1 turn.",
      "descriptionBRRaw": "Human Path rouba 10 de vida de um inimigo, faz com que ele fique incapaz de reduzir dano ou se tornar invulnerável por 1 turno, e revela as habilidades invisíveis dele por 3 turnos. No próximo turno, se Human usar uma nova habilidade ofensiva, esse inimigo terá suas habilidades defensivas atordoadas por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Human Path steals 10 HP from one enemy, makes them unable to reduce damage or become invulnerable for 1 turn, and reveals their invisible skills for 3 turns. Next turn, if Human uses a new harmful skill, that enemy will have their helpful skills stunned for 1 turn. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Human Path rouba 10 de vida de um inimigo, faz com que ele fique incapaz de reduzir dano ou se tornar invulnerável por 1 turno, e revela as habilidades invisíveis dele por 3 turnos. No próximo turno, se Human usar uma nova habilidade ofensiva, esse inimigo terá suas habilidades defensivas atordoadas por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Sneak Attack",
      "file": "human_path_pein_(s)_skill_3_(sneak_attack).jpg",
      "description": "Human Path Pein (S) launches a sneak attack dealing 25 piercing damage to one enemy. This skill ignores invulnerability.",
      "descriptionBR": "Human Path Pein (S) realiza um ataque furtivo, causando 25 de dano perfurante a um inimigo. Esta habilidade ignora invulnerabilidade.",
      "descriptionRaw": "Human Path Pein (S) launches a sneak attack dealing 25 piercing damage to one enemy. This skill ignores invulnerability.",
      "descriptionBRRaw": "Human Path Pein (S) realiza um ataque furtivo, causando 25 de dano perfurante a um inimigo. Esta habilidade ignora invulnerabilidade.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Human Path Pein (S) launches a sneak attack dealing 25 piercing damage to one enemy. This skill ignores invulnerability. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Human Path Pein (S) realiza um ataque furtivo, causando 25 de dano perfurante a um inimigo. Esta habilidade ignora invulnerabilidade. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Rinnegan Awareness",
      "file": "human_path_pein_(s)_skill_4_(rinnegan_awareness).png",
      "description": "This skill makes Human Path Pein (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Human Path Pein (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Human Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Human Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Human Path Pein (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Human Path Pein (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Soul Steal",
      "file": "human_path_pein_(s)_skill_5_(soul_steal).jpg",
      "description": "Human Path rips the soul of an enemy affected by 'Mind Invasion', stealing 20 HP from them and dealing 15 affliction damage. If that enemy's health drops to 5 or less health, they will be instantly killed. This skill ignores invulnerability.",
      "descriptionBR": "Human Path arranca a alma de um inimigo afetado por 'Mind Invasion', roubando 20 de vida dele e causando 15 de dano aflição. Se a vida desse inimigo cair para 5 ou menos, ele será morto instantaneamente. Essa habilidade ignora invulnerabilidade.",
      "descriptionRaw": "Human Path rips the soul of an enemy affected by 'Mind Invasion', stealing 20 HP from them and dealing 15 affliction damage. If that enemy's health drops to 5 or less health, they will be instantly killed. This skill ignores invulnerability.",
      "descriptionBRRaw": "Human Path arranca a alma de um inimigo afetado por 'Mind Invasion', roubando 20 de vida dele e causando 15 de dano aflição. Se a vida desse inimigo cair para 5 ou menos, ele será morto instantaneamente. Essa habilidade ignora invulnerabilidade.",
      "energy": [
        "Tai",
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Human Path rips the soul of an enemy affected by 'Mind Invasion', stealing 20 HP from them and dealing 15 affliction damage. If that enemy's health drops to 5 or less health, they will be instantly killed. This skill ignores invulnerability. Chakra cost: 1 Tai, 1 Gen. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Human Path arranca a alma de um inimigo afetado por 'Mind Invasion', roubando 20 de vida dele e causando 15 de dano aflição. Se a vida desse inimigo cair para 5 ou menos, ele será morto instantaneamente. Essa habilidade ignora invulnerabilidade. Custo de chakra: 1 taijutsu, 1 genjutsu. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
