// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Kankuro (S)",
  "description": "In the last couple years Kankuro(s) has become a Jounin and has created a new puppet. He is now able to harness three puppets at once and is a more versatile combatant.",
  "descriptionBR": "Nos últimos anos, Kankuro (S) se tornou um Jounin e criou uma nova marionete. Ele agora é capaz de controlar três marionetes ao mesmo tempo e se tornou um combatente mais versátil.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "kankuro_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Kuroari Trap",
      "file": "kankuro_(s)_skill_1_(kuroari_trap).jpg",
      "description": "Kankuro traps one enemy for 1 turn. If that enemy uses a new harmful skill, they will be countered and receive 15 additional damage from 'Karasu Knives'. This skill is invisible.",
      "descriptionBR": "Kankuro cria uma armadilha contra um inimigo por 1 turno. Se esse inimigo usar uma nova habilidade ofensiva, ela será counterada e ele irá receber 15 de dano adicional de 'Karasu Knives'. Essa habilidade é invisível.",
      "descriptionRaw": "Kankuro traps one enemy for 1 turn. If that enemy uses a new harmful skill, they will be countered and receive 15 additional damage from 'Karasu Knives'. This skill is invisible.",
      "descriptionBRRaw": "Kankuro cria uma armadilha contra um inimigo por 1 turno. Se esse inimigo usar uma nova habilidade ofensiva, ela será counterada e ele irá receber 15 de dano adicional de 'Karasu Knives'. Essa habilidade é invisível.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Kankuro traps one enemy for 1 turn. If that enemy uses a new harmful skill, they will be countered and receive 15 additional damage from 'Karasu Knives'. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kankuro cria uma armadilha contra um inimigo por 1 turno. Se esse inimigo usar uma nova habilidade ofensiva, ela será counterada e ele irá receber 15 de dano adicional de 'Karasu Knives'. Essa habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Karasu Knives",
      "file": "kankuro_(s)_skill_2_(karasu_knives).jpg",
      "description": "Kankuro assaults one enemy with poisoned knives, dealing 25 damage to them and that enemy will take 10 affliction damage the following turn*. For 1 turn, this skill will be replaced by 'Karasu: Finishing Knive'.",
      "descriptionBR": "Kankuro ataca um inimigo com facas envenenadas, causando 25 de dano a ele e esse inimigo irá receber 10 de dano affliction no próximo turno*. Por 1 turno, essa habilidade será substituída por 'Karasu: Finishing Knive'.",
      "descriptionRaw": "Kankuro assaults one enemy with poisoned knives, dealing 25 damage to them and that enemy will take 10 affliction damage the following turn*. For 1 turn, this skill will be replaced by 'Karasu: Finishing Knive'.",
      "descriptionBRRaw": "Kankuro ataca um inimigo com facas envenenadas, causando 25 de dano a ele e esse inimigo irá receber 10 de dano affliction no próximo turno*. Por 1 turno, essa habilidade será substituída por 'Karasu: Finishing Knive'.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Affliction*",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Kankuro assaults one enemy with poisoned knives, dealing 25 damage to them and that enemy will take 10 affliction damage the following turn*. For 1 turn, this skill will be replaced by 'Karasu: Finishing Knive'. Chakra cost: 2 Random. Catalog classes: Physical, Affliction*, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kankuro ataca um inimigo com facas envenenadas, causando 25 de dano a ele e esse inimigo irá receber 10 de dano affliction no próximo turno*. Por 1 turno, essa habilidade será substituída por 'Karasu: Finishing Knive'. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Affliction*, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Sanshouo Shield",
      "file": "kankuro_(s)_skill_3_(sanshouo_shield).jpg",
      "description": "Kankuro uses Sanshouo to block enemy attacks. For 3 turns, Kankuro and his allies gain 5 points of damage reduction and are immune to affliction damage. During this time, this skill will be replaced by 'Salamander Puppet'. This skill ends if Kankuro dies.",
      "descriptionBR": "Kankuro usa Sanshouo para bloquear ataques inimigos. Por 3 turnos, Kankuro e seus aliados ganham 5 pontos de redução de dano e ficam imunes a dano affliction. Durante esse tempo, essa habilidade será substituída por 'Salamander Puppet'. Essa habilidade termina se Kankuro morrer.",
      "descriptionRaw": "Kankuro uses Sanshouo to block enemy attacks. For 3 turns, Kankuro and his allies gain 5 points of damage reduction and are immune to affliction damage. During this time, this skill will be replaced by 'Salamander Puppet'. This skill ends if Kankuro dies.",
      "descriptionBRRaw": "Kankuro usa Sanshouo para bloquear ataques inimigos. Por 3 turnos, Kankuro e seus aliados ganham 5 pontos de redução de dano e ficam imunes a dano affliction. Durante esse tempo, essa habilidade será substituída por 'Salamander Puppet'. Essa habilidade termina se Kankuro morrer.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "Kankuro uses Sanshouo to block enemy attacks. For 3 turns, Kankuro and his allies gain 5 points of damage reduction and are immune to affliction damage. During this time, this skill will be replaced by 'Salamander Puppet'. This skill ends if Kankuro dies. Chakra cost: 2 Random. Catalog classes: Physical, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kankuro usa Sanshouo para bloquear ataques inimigos. Por 3 turnos, Kankuro e seus aliados ganham 5 pontos de redução de dano e ficam imunes a dano affliction. Durante esse tempo, essa habilidade será substituída por 'Salamander Puppet'. Essa habilidade termina se Kankuro morrer. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Puppet Distraction",
      "file": "kankuro_(s)_skill_4_(puppet_distraction).jpg",
      "description": "This skill makes Kankuro (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Kankuro (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Kankuro (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Kankuro (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Kankuro (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Kankuro (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Karasu: Finishing Knive",
      "file": "kankuro_(s)_skill_5_(karasu_finishing_knive).png",
      "description": "This skill deals 20 piercing damage to one enemy.",
      "descriptionBR": "Essa habilidade causa 20 de dano perfurante a um inimigo.",
      "descriptionRaw": "This skill deals 20 piercing damage to one enemy.",
      "descriptionBRRaw": "Essa habilidade causa 20 de dano perfurante a um inimigo.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "This skill deals 20 piercing damage to one enemy. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade causa 20 de dano perfurante a um inimigo. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Salamander Puppet",
      "file": "kankuro_(s)_skill_6_(salamander_puppet).png",
      "description": "Kankuro protects himself or an ally for 1 turn, that ally will gain 20 points of unpierceable damage reduction.",
      "descriptionBR": "Kankuro protege a si mesmo ou um aliado por 1 turno, esse aliado ganhará 20 pontos de redução de dano impenetrável.",
      "descriptionRaw": "Kankuro protects himself or an ally for 1 turn, that ally will gain 20 points of unpierceable damage reduction.",
      "descriptionBRRaw": "Kankuro protege a si mesmo ou um aliado por 1 turno, esse aliado ganhará 20 pontos de redução de dano impenetrável.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Kankuro protects himself or an ally for 1 turn, that ally will gain 20 points of unpierceable damage reduction. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kankuro protege a si mesmo ou um aliado por 1 turno, esse aliado ganhará 20 pontos de redução de dano impenetrável. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
