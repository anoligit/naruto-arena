// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Susanoo Sasuke (S)",
  "description": "Sasuke takes control of the powerful Susano'o, achieving a high level of strength with an unimaginable impenetrable defense. He can also still use other techniques of his Mangekyo Sharingan.",
  "descriptionBR": "Sasuke assume o controle do poderoso Susano'o, alcançando um nível elevado de força com uma defesa impenetrável inimaginável. Ele ainda pode usar outras habilidades do seu Mangekyo Sharingan.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "susanoo_sasuke_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Sasuke Susano'o",
      "file": "susanoo_sasuke_(s)_skill_1_(sasuke_susano'o).png",
      "description": "Using his Susanoo, Sasuke gains 50 points of destructible defense permanent and may use his skills. During this time, this skill is replaced and Sasuke will ignore any effects that destroy destructible defense. When this defense is destroyed, Sasuke will be stunned for 2 turns.",
      "descriptionBR": "Usando seu Susanoo, Sasuke ganha 50 pontos de defesa destrutível permanente e pode usar suas habilidades. Durante esse tempo, essa habilidade é substituída e Sasuke irá ignorar quaisquer efeitos que destruam defesa destrutível. Quando essa defesa for destruída, Sasuke será atordoado por 2 turnos.",
      "descriptionRaw": "Using his Susanoo, Sasuke gains 50 points of destructible defense permanent and may use his skills. During this time, this skill is replaced and Sasuke will ignore any effects that destroy destructible defense. When this defense is destroyed, Sasuke will be stunned for 2 turns.",
      "descriptionBRRaw": "Usando seu Susanoo, Sasuke ganha 50 pontos de defesa destrutível permanente e pode usar suas habilidades. Durante esse tempo, essa habilidade é substituída e Sasuke irá ignorar quaisquer efeitos que destruam defesa destrutível. Quando essa defesa for destruída, Sasuke será atordoado por 2 turnos.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Using his Susanoo, Sasuke gains 50 points of destructible defense permanent and may use his skills. During this time, this skill is replaced and Sasuke will ignore any effects that destroy destructible defense. When this defense is destroyed, Sasuke will be stunned for 2 turns. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando seu Susanoo, Sasuke ganha 50 pontos de defesa destrutível permanente e pode usar suas habilidades. Durante esse tempo, essa habilidade é substituída e Sasuke irá ignorar quaisquer efeitos que destruam defesa destrutível. Quando essa defesa for destruída, Sasuke será atordoado por 2 turnos. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Susano'o Arrow",
      "file": "susanoo_sasuke_(s)_skill_2_(susano'o_arrow).png",
      "description": "Using his Susano'o bow, Sasuke destroys all destructible defense of one enemy and deals 20 piercing damage and an additional 5 damage for each 10 points of destructible defense that 'Sasuke Susano'o' currently has. This skill requires 'Sasuke Susano'o'.",
      "descriptionBR": "Usando o arco de seu Susano'o, Sasuke destrói toda a defesa destrutível de um inimigo e causa 20 de dano perfurante e 5 de dano adicional para cada 10 pontos de defesa destrutível que 'Sasuke Susano'o' possuir. Esta habilidade requer 'Sasuke Susano'o'.",
      "descriptionRaw": "Using his Susano'o bow, Sasuke destroys all destructible defense of one enemy and deals 20 piercing damage and an additional 5 damage for each 10 points of destructible defense that 'Sasuke Susano'o' currently has. This skill requires 'Sasuke Susano'o'.",
      "descriptionBRRaw": "Usando o arco de seu Susano'o, Sasuke destrói toda a defesa destrutível de um inimigo e causa 20 de dano perfurante e 5 de dano adicional para cada 10 pontos de defesa destrutível que 'Sasuke Susano'o' possuir. Esta habilidade requer 'Sasuke Susano'o'.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Using his Susano'o bow, Sasuke destroys all destructible defense of one enemy and deals 20 piercing damage and an additional 5 damage for each 10 points of destructible defense that 'Sasuke Susano'o' currently has. This skill requires 'Sasuke Susano'o'. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando o arco de seu Susano'o, Sasuke destrói toda a defesa destrutível de um inimigo e causa 20 de dano perfurante e 5 de dano adicional para cada 10 pontos de defesa destrutível que 'Sasuke Susano'o' possuir. Esta habilidade requer 'Sasuke Susano'o'. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Spreading Amaterasu",
      "file": "susanoo_sasuke_(s)_skill_3_(spreading_amaterasu).png",
      "description": "Susanoo Sasuke deals 2 affliction damage to one enemy permanently. This skill will double its damage everytime that enemy uses a new skill. This skill cannot be removed and it requires 'Sasuke Susano'o'. This skill will have its cooldown reset if the enemy target is killed.",
      "descriptionBR": "Susanoo Sasuke causa 2 de dano affliction a um inimigo permanentemente. Esta habilidade dobrará seu dano toda vez que o inimigo usar uma nova habilidade. Esta habilidade não pode ser removida e requer 'Sasuke Susano'o'. O tempo de recarga será reiniciado se o inimigo for morto.",
      "descriptionRaw": "Susanoo Sasuke deals 2 affliction damage to one enemy permanently. This skill will double its damage everytime that enemy uses a new skill. This skill cannot be removed and it requires 'Sasuke Susano'o'. This skill will have its cooldown reset if the enemy target is killed.",
      "descriptionBRRaw": "Susanoo Sasuke causa 2 de dano affliction a um inimigo permanentemente. Esta habilidade dobrará seu dano toda vez que o inimigo usar uma nova habilidade. Esta habilidade não pode ser removida e requer 'Sasuke Susano'o'. O tempo de recarga será reiniciado se o inimigo for morto.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 5,
      "ruleDescription": "Susanoo Sasuke deals 2 affliction damage to one enemy permanently. This skill will double its damage everytime that enemy uses a new skill. This skill cannot be removed and it requires 'Sasuke Susano'o'. This skill will have its cooldown reset if the enemy target is killed. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 5. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Susanoo Sasuke causa 2 de dano affliction a um inimigo permanentemente. Esta habilidade dobrará seu dano toda vez que o inimigo usar uma nova habilidade. Esta habilidade não pode ser removida e requer 'Sasuke Susano'o'. O tempo de recarga será reiniciado se o inimigo for morto. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 5. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Mangekyo Insight",
      "file": "susanoo_sasuke_(s)_skill_4_(mangekyo_insight).png",
      "description": "This skill makes Susanoo Sasuke (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Susanoo Sasuke (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Susanoo Sasuke (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Susanoo Sasuke (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Susanoo Sasuke (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Susanoo Sasuke (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Sasuke Mangekyo Sharingan",
      "file": "susanoo_sasuke_(s)_skill_5_(sasuke_mangekyo_sharingan).png",
      "description": "Sasuke activates his Mangekyou Sharingan and gains 25% unpierceable damage reduction until 'Sasuke Susano'o' destructible defense is destroyed. When this skill is used, the cooldown of 'Spreading Amaterasu' is reset.",
      "descriptionBR": "Sasuke ativa seu Mangekyou Sharingan e ganha 25% de redução de dano inpenetrável até que a defesa destrutível de 'Sasuke Susano'o' seja destruída. Quando esta habilidade for usada, o tempo de recarga de 'Spreading Amaterasu' será reiniciado.",
      "descriptionRaw": "Sasuke activates his Mangekyou Sharingan and gains 25% unpierceable damage reduction until 'Sasuke Susano'o' destructible defense is destroyed. When this skill is used, the cooldown of 'Spreading Amaterasu' is reset.",
      "descriptionBRRaw": "Sasuke ativa seu Mangekyou Sharingan e ganha 25% de redução de dano inpenetrável até que a defesa destrutível de 'Sasuke Susano'o' seja destruída. Quando esta habilidade for usada, o tempo de recarga de 'Spreading Amaterasu' será reiniciado.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Sasuke activates his Mangekyou Sharingan and gains 25% unpierceable damage reduction until 'Sasuke Susano'o' destructible defense is destroyed. When this skill is used, the cooldown of 'Spreading Amaterasu' is reset. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasuke ativa seu Mangekyou Sharingan e ganha 25% de redução de dano inpenetrável até que a defesa destrutível de 'Sasuke Susano'o' seja destruída. Quando esta habilidade for usada, o tempo de recarga de 'Spreading Amaterasu' será reiniciado. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
