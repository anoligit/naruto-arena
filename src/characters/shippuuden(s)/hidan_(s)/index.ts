// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hidan (S)",
  "description": "Hidan(s) is a member of Akatsuki and a worshiper of the obscure god Jashin. He is apparently immortal and has perhaps the foulest mouth of the entire criminal organization.",
  "descriptionBR": "Hidan (S) é um membro da Akatsuki e um adorador do obscuro deus Jashin. Ele é aparentemente imortal e talvez tenha a boca mais suja de toda a organização criminosa.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "hidan_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Reaping Scythe",
      "file": "hidan_(s)_skill_1_(reaping_scythe).jpg",
      "description": "Hidan (S) attacks one enemy with his scythe dealing 20 damage to them, ignoring stun for 1 turn and gains 10 permanent destructible defense. 'Curse of Jashin' may be used on the targeted enemy the following turn. This skill cannot be used on an enemy affected by 'Curse of Jashin'.",
      "descriptionBR": "Hidan (S) ataca um inimigo com sua foice causando 20 de dano, ignorando stun por 1 turno e ganha 10 de defesa destrutível permanente. 'Curse of Jashin' poderá ser usada no inimigo atingido no turno seguinte. Esta habilidade não pode ser usada em um inimigo afetado por 'Curse of Jashin'.",
      "descriptionRaw": "Hidan (S) attacks one enemy with his scythe dealing 20 damage to them, ignoring stun for 1 turn and gains 10 permanent destructible defense. 'Curse of Jashin' may be used on the targeted enemy the following turn. This skill cannot be used on an enemy affected by 'Curse of Jashin'.",
      "descriptionBRRaw": "Hidan (S) ataca um inimigo com sua foice causando 20 de dano, ignorando stun por 1 turno e ganha 10 de defesa destrutível permanente. 'Curse of Jashin' poderá ser usada no inimigo atingido no turno seguinte. Esta habilidade não pode ser usada em um inimigo afetado por 'Curse of Jashin'.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Hidan (S) attacks one enemy with his scythe dealing 20 damage to them, ignoring stun for 1 turn and gains 10 permanent destructible defense. 'Curse of Jashin' may be used on the targeted enemy the following turn. This skill cannot be used on an enemy affected by 'Curse of Jashin'. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hidan (S) ataca um inimigo com sua foice causando 20 de dano, ignorando stun por 1 turno e ganha 10 de defesa destrutível permanente. 'Curse of Jashin' poderá ser usada no inimigo atingido no turno seguinte. Esta habilidade não pode ser usada em um inimigo afetado por 'Curse of Jashin'. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Curse of Jashin",
      "file": "hidan_(s)_skill_2_(curse_of_jashin).jpg",
      "description": "Hidan curses an enemy. For 2 turns, all harmful skills used on Hidan will be reflected upon the cursed enemy. During this time, 'Impale' may be used. This skill ignores invulnerability and cannot be countered or reflected.",
      "descriptionBR": "Hidan amaldiçoa um inimigo. Por 2 turnos, todas as habilidades ofensivas usadas em Hidan serão refletidas no inimigo amaldiçoado. Durante esse tempo, 'Impale' poderá ser usada. Esta habilidade ignora invulnerabilidade e não pode ser counterada ou refletida.",
      "descriptionRaw": "Hidan curses an enemy. For 2 turns, all harmful skills used on Hidan will be reflected upon the cursed enemy. During this time, 'Impale' may be used. This skill ignores invulnerability and cannot be countered or reflected.",
      "descriptionBRRaw": "Hidan amaldiçoa um inimigo. Por 2 turnos, todas as habilidades ofensivas usadas em Hidan serão refletidas no inimigo amaldiçoado. Durante esse tempo, 'Impale' poderá ser usada. Esta habilidade ignora invulnerabilidade e não pode ser counterada ou refletida.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Action",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Hidan curses an enemy. For 2 turns, all harmful skills used on Hidan will be reflected upon the cursed enemy. During this time, 'Impale' may be used. This skill ignores invulnerability and cannot be countered or reflected. Chakra cost: 1 Gen. Catalog classes: Mental, Action, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hidan amaldiçoa um inimigo. Por 2 turnos, todas as habilidades ofensivas usadas em Hidan serão refletidas no inimigo amaldiçoado. Durante esse tempo, 'Impale' poderá ser usada. Esta habilidade ignora invulnerabilidade e não pode ser counterada ou refletida. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Action, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Impale",
      "file": "hidan_(s)_skill_3_(impale).jpg",
      "description": "Hidan (S) impales himself with a large metal spike dealing 40 piercing damage to one enemy currently the target of 'Curse of Jashin' and removes 1 bloodline or ninjutsu chakra from them. This skill ignores invulnerability.",
      "descriptionBR": "Hidan (S) empala a si mesmo com uma grande lança de metal, causando 40 de dano perfurante a um inimigo atualmente afetado por 'Curse of Jashin' e remove 1 chakra bloodline ou ninjutsu desse inimigo. Esta habilidade ignora invulnerabilidade.",
      "descriptionRaw": "Hidan (S) impales himself with a large metal spike dealing 40 piercing damage to one enemy currently the target of 'Curse of Jashin' and removes 1 bloodline or ninjutsu chakra from them. This skill ignores invulnerability.",
      "descriptionBRRaw": "Hidan (S) empala a si mesmo com uma grande lança de metal, causando 40 de dano perfurante a um inimigo atualmente afetado por 'Curse of Jashin' e remove 1 chakra bloodline ou ninjutsu desse inimigo. Esta habilidade ignora invulnerabilidade.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Hidan (S) impales himself with a large metal spike dealing 40 piercing damage to one enemy currently the target of 'Curse of Jashin' and removes 1 bloodline or ninjutsu chakra from them. This skill ignores invulnerability. Chakra cost: 1 Tai. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hidan (S) empala a si mesmo com uma grande lança de metal, causando 40 de dano perfurante a um inimigo atualmente afetado por 'Curse of Jashin' e remove 1 chakra bloodline ou ninjutsu desse inimigo. Esta habilidade ignora invulnerabilidade. Custo de chakra: 1 taijutsu. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Immortality",
      "file": "hidan_(s)_skill_4_(immortality).jpg",
      "description": "This skill makes Hidan (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Hidan (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Hidan (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Hidan (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Hidan (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Hidan (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
