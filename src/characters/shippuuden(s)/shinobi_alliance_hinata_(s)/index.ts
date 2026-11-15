// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Hinata (S)",
  "description": "Hinata will also take part in the war. Together with her allies, she will destroy any enemy that tries to attack using her new technique, Gentle Step Twin Lion Fists, along with her Byakugan.",
  "descriptionBR": "Hinata também participará da guerra. Junto com seus aliados, ela destruirá qualquer inimigo que tentar atacar usando sua nova técnica, Golpes Gêmeos do Leão Passo Suave, junto com seu Byakugan.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_hinata_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Sixty-Four Palms",
      "file": "shinobi_alliance_hinata_(s)_skill_1_(sixty-four_palms).png",
      "description": "Hinata delivers a series of attacks to one enemy, dealing 25 piercing damage to them and stunning their chakra skills for 1 turn. While improved, this skill will stun non-mental skills for 1 turn instead.",
      "descriptionBR": "Hinata desfere uma série de ataques em um inimigo, causando 25 de dano perfurante a ele e atordoando suas habilidades chakra por 1 turno. Quando aprimorada, essa habilidade irá atordoar habilidades não-mental por 1 turno em vez disso.",
      "descriptionRaw": "Hinata delivers a series of attacks to one enemy, dealing 25 piercing damage to them and stunning their chakra skills for 1 turn. While improved, this skill will stun non-mental skills for 1 turn instead.",
      "descriptionBRRaw": "Hinata desfere uma série de ataques em um inimigo, causando 25 de dano perfurante a ele e atordoando suas habilidades chakra por 1 turno. Quando aprimorada, essa habilidade irá atordoar habilidades não-mental por 1 turno em vez disso.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Hinata delivers a series of attacks to one enemy, dealing 25 piercing damage to them and stunning their chakra skills for 1 turn. While improved, this skill will stun non-mental skills for 1 turn instead. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hinata desfere uma série de ataques em um inimigo, causando 25 de dano perfurante a ele e atordoando suas habilidades chakra por 1 turno. Quando aprimorada, essa habilidade irá atordoar habilidades não-mental por 1 turno em vez disso. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Gentle Step Twin Lion Fists",
      "file": "shinobi_alliance_hinata_(s)_skill_2_(gentle_step_twin_lion_fists).png",
      "description": "Hinata assaults one enemy with her twin lion fists, dealing 30 piercing and removing 1 taijutsu or ninjutsu chakra from them. The following 2 turns, this skill will be replaced by 'Chakra Lion Attack'. While improved, this skill will deal 35 piercing damage and remove 1 random chakra instead.",
      "descriptionBR": "Hinata ataca um inimigo com seus punhos de leão gêmeos, causando 30 de dano perfurante e removendo 1 taijutsu ou ninjutsu chakra dele. Nos próximos 2 turnos, essa habilidade será substituída por 'Chakra Lion Attack'. Quando aprimorada, essa habilidade causará 35 de dano perfurante e removerá 1 chakra aleatório em vez disso.",
      "descriptionRaw": "Hinata assaults one enemy with her twin lion fists, dealing 30 piercing and removing 1 taijutsu or ninjutsu chakra from them. The following 2 turns, this skill will be replaced by 'Chakra Lion Attack'. While improved, this skill will deal 35 piercing damage and remove 1 random chakra instead.",
      "descriptionBRRaw": "Hinata ataca um inimigo com seus punhos de leão gêmeos, causando 30 de dano perfurante e removendo 1 taijutsu ou ninjutsu chakra dele. Nos próximos 2 turnos, essa habilidade será substituída por 'Chakra Lion Attack'. Quando aprimorada, essa habilidade causará 35 de dano perfurante e removerá 1 chakra aleatório em vez disso.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Hinata assaults one enemy with her twin lion fists, dealing 30 piercing and removing 1 taijutsu or ninjutsu chakra from them. The following 2 turns, this skill will be replaced by 'Chakra Lion Attack'. While improved, this skill will deal 35 piercing damage and remove 1 random chakra instead. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Hinata ataca um inimigo com seus punhos de leão gêmeos, causando 30 de dano perfurante e removendo 1 taijutsu ou ninjutsu chakra dele. Nos próximos 2 turnos, essa habilidade será substituída por 'Chakra Lion Attack'. Quando aprimorada, essa habilidade causará 35 de dano perfurante e removerá 1 chakra aleatório em vez disso. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Byakugan: Enhanced Vision",
      "file": "shinobi_alliance_hinata_(s)_skill_3_(byakugan_enhanced_vision).png",
      "description": "For 4 turns, Hinata's non-damage effects cannot be ignored and her skills will be improved. During this time, Hinata will use her Byakugan to reveal any invisible skill used by the enemy team.",
      "descriptionBR": "Por 4 turnos, os efeitos que não causam dano das habilidades de Hinata não podem ser ignorados e suas habilidades serão aprimoradas. Durante esse tempo, Hinata usará seu Byakugan para revelar qualquer habilidade invisível usada pelo time inimigo.",
      "descriptionRaw": "For 4 turns, Hinata's non-damage effects cannot be ignored and her skills will be improved. During this time, Hinata will use her Byakugan to reveal any invisible skill used by the enemy team.",
      "descriptionBRRaw": "Por 4 turnos, os efeitos que não causam dano das habilidades de Hinata não podem ser ignorados e suas habilidades serão aprimoradas. Durante esse tempo, Hinata usará seu Byakugan para revelar qualquer habilidade invisível usada pelo time inimigo.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 4,
      "ruleDescription": "For 4 turns, Hinata's non-damage effects cannot be ignored and her skills will be improved. During this time, Hinata will use her Byakugan to reveal any invisible skill used by the enemy team. Chakra cost: 1 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 4 turnos, os efeitos que não causam dano das habilidades de Hinata não podem ser ignorados e suas habilidades serão aprimoradas. Durante esse tempo, Hinata usará seu Byakugan para revelar qualquer habilidade invisível usada pelo time inimigo. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Byakugan: Focus",
      "file": "shinobi_alliance_hinata_(s)_skill_4_(byakugan_focus).png",
      "description": "This skill makes Shinobi Alliance Hinata (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shinobi Alliance Hinata (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Hinata (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shinobi Alliance Hinata (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Hinata (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shinobi Alliance Hinata (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Chakra Lion Attack",
      "file": "shinobi_alliance_hinata_(s)_skill_5_(chakra_lion_attack).png",
      "description": "This skill deals 25 piercing damage to one enemy and removes 1 taijutsu or ninjutsu chakra. While improved, this skill will remove 1 random chakra instead.",
      "descriptionBR": "Essa habilidade causa 25 de dano perfurante a um inimigo e remove 1 taijutsu ou ninjutsu chakra. Quando aprimorada, essa habilidade removerá 1 chakra aleatório em vez disso.",
      "descriptionRaw": "This skill deals 25 piercing damage to one enemy and removes 1 taijutsu or ninjutsu chakra. While improved, this skill will remove 1 random chakra instead.",
      "descriptionBRRaw": "Essa habilidade causa 25 de dano perfurante a um inimigo e remove 1 taijutsu ou ninjutsu chakra. Quando aprimorada, essa habilidade removerá 1 chakra aleatório em vez disso.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "This skill deals 25 piercing damage to one enemy and removes 1 taijutsu or ninjutsu chakra. While improved, this skill will remove 1 random chakra instead. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade causa 25 de dano perfurante a um inimigo e remove 1 taijutsu ou ninjutsu chakra. Quando aprimorada, essa habilidade removerá 1 chakra aleatório em vez disso. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
