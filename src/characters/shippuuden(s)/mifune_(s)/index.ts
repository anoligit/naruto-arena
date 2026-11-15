// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Mifune (S)",
  "description": "Mifune is a samurai and leader of the Land of Iron, and now in the war he is the commander of the fourth division. His unmatched swordsmanship makes him capable of attacking and counterattacking any enemy regardless of how fast their movements are.",
  "descriptionBR": "Mifune é um samurai e líder da Terra do Ferro, e agora na guerra ele é o comandante da quarta divisão. Sua habilidade incomparável com a espada o torna capaz de atacar e anular qualquer inimigo, independentemente da velocidade de seus movimentos.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "mifune_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Samurai Troops",
      "file": "mifune_(s)_skill_1_(samurai_troops).png",
      "description": "By commanding his samurai troops, Mifune deals 5 piercing damage to all enemies and makes them deal 5 less non-affliction damage for 1 turn. Also for 1 turn, all of Mifune's team will deal 5 more damage from melee skills. This skill becomes 'Flash' with a bloodline cost.",
      "descriptionBR": "Ao comandar suas tropas samurais, Mifune causa 5 de dano perfurante a todos os inimigos e faz com que eles causem 5 de dano a menos com habilidades não aflitivas por 1 turno. Além disso, por 1 turno, toda a equipe de Mifune causará 5 de dano a mais com habilidades Melee. Esta habilidade se torna 'Flash' com custo de Bloodline.",
      "descriptionRaw": "By commanding his samurai troops, Mifune deals 5 piercing damage to all enemies and makes them deal 5 less non-affliction damage for 1 turn. Also for 1 turn, all of Mifune's team will deal 5 more damage from melee skills. This skill becomes 'Flash' with a bloodline cost.",
      "descriptionBRRaw": "Ao comandar suas tropas samurais, Mifune causa 5 de dano perfurante a todos os inimigos e faz com que eles causem 5 de dano a menos com habilidades não aflitivas por 1 turno. Além disso, por 1 turno, toda a equipe de Mifune causará 5 de dano a mais com habilidades Melee. Esta habilidade se torna 'Flash' com custo de Bloodline.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 2,
      "ruleDescription": "By commanding his samurai troops, Mifune deals 5 piercing damage to all enemies and makes them deal 5 less non-affliction damage for 1 turn. Also for 1 turn, all of Mifune's team will deal 5 more damage from melee skills. This skill becomes 'Flash' with a bloodline cost. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Ranged, Harmful. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ao comandar suas tropas samurais, Mifune causa 5 de dano perfurante a todos os inimigos e faz com que eles causem 5 de dano a menos com habilidades não aflitivas por 1 turno. Além disso, por 1 turno, toda a equipe de Mifune causará 5 de dano a mais com habilidades Melee. Esta habilidade se torna 'Flash' com custo de Bloodline. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Ranged, Harmful. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Iaito",
      "file": "mifune_(s)_skill_2_(iaito).png",
      "description": "Reacting to one enemy's move, Mifune deals them 15 piercing damage to them and becoming invulnerable to physical skills for 1 turn. This skill becomes 'Flash' with a taijutsu cost.",
      "descriptionBR": "Reagindo para o movimento de um inimigo, Mifune causa 15 de dano perfurante a ele e se torna invulnerável a habilidades Physical por 1 turno. Esta habilidade se torna 'Flash' com custo de Taijutsu.",
      "descriptionRaw": "Reacting to one enemy's move, Mifune deals them 15 piercing damage to them and becoming invulnerable to physical skills for 1 turn. This skill becomes 'Flash' with a taijutsu cost.",
      "descriptionBRRaw": "Reagindo para o movimento de um inimigo, Mifune causa 15 de dano perfurante a ele e se torna invulnerável a habilidades Physical por 1 turno. Esta habilidade se torna 'Flash' com custo de Taijutsu.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Harmful"
      ],
      "cooldown": 2,
      "ruleDescription": "Reacting to one enemy's move, Mifune deals them 15 piercing damage to them and becoming invulnerable to physical skills for 1 turn. This skill becomes 'Flash' with a taijutsu cost. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Melee, Harmful. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Reagindo para o movimento de um inimigo, Mifune causa 15 de dano perfurante a ele e se torna invulnerável a habilidades Physical por 1 turno. Esta habilidade se torna 'Flash' com custo de Taijutsu. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Melee, Harmful. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Raiton Pierce",
      "file": "mifune_(s)_skill_3_(raiton_pierce).png",
      "description": "Mifuse uses a fast lightning chakra to stab to one enemy, dealing them 15 piercing damage to them and makes them invulnerable to new helpful skills. This skill becomes 'Flash' with a genjutsu cost.",
      "descriptionBR": "Mifune utiliza uma espada rápida de chakra relâmpago em um inimigo, causando 15 de dano perfurante nele e tornando-o invulnerável a novas habilidades defensivas. Esta habilidade se torna 'Flash' com custo de Genjutsu.",
      "descriptionRaw": "Mifuse uses a fast lightning chakra to stab to one enemy, dealing them 15 piercing damage to them and makes them invulnerable to new helpful skills. This skill becomes 'Flash' with a genjutsu cost.",
      "descriptionBRRaw": "Mifune utiliza uma espada rápida de chakra relâmpago em um inimigo, causando 15 de dano perfurante nele e tornando-o invulnerável a novas habilidades defensivas. Esta habilidade se torna 'Flash' com custo de Genjutsu.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 2,
      "ruleDescription": "Mifuse uses a fast lightning chakra to stab to one enemy, dealing them 15 piercing damage to them and makes them invulnerable to new helpful skills. This skill becomes 'Flash' with a genjutsu cost. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged, Harmful. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Mifune utiliza uma espada rápida de chakra relâmpago em um inimigo, causando 15 de dano perfurante nele e tornando-o invulnerável a novas habilidades defensivas. Esta habilidade se torna 'Flash' com custo de Genjutsu. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged, Harmful. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Samurai Guard",
      "file": "mifune_(s)_skill_4_(samurai_guard).png",
      "description": "This skill makes Mifune (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Mifune (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Mifune (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Mifune (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Helpful"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Mifune (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Helpful. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Mifune (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Helpful. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Flash",
      "file": "mifune_(s)_skill_5_(flash).png",
      "description": "With his more powerful cut, Mifune deals 30 piercing damage to one enemy and stuns their non-mental skills. This skill costs a specific chakra depending on the skill that is replaced by it.",
      "descriptionBR": "Com um corte mais poderoso, Mifune causa 30 de dano perfurante a um inimigo e atordoa suas habilidades não-mental. Esta habilidade custa um chakra específico dependendo da habilidade que foi substituída por ela.",
      "descriptionRaw": "With his more powerful cut, Mifune deals 30 piercing damage to one enemy and stuns their non-mental skills. This skill costs a specific chakra depending on the skill that is replaced by it.",
      "descriptionBRRaw": "Com um corte mais poderoso, Mifune causa 30 de dano perfurante a um inimigo e atordoa suas habilidades não-mental. Esta habilidade custa um chakra específico dependendo da habilidade que foi substituída por ela.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged",
        "Harmful"
      ],
      "cooldown": 1,
      "ruleDescription": "With his more powerful cut, Mifune deals 30 piercing damage to one enemy and stuns their non-mental skills. This skill costs a specific chakra depending on the skill that is replaced by it. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant, Ranged, Harmful. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Com um corte mais poderoso, Mifune causa 30 de dano perfurante a um inimigo e atordoa suas habilidades não-mental. Esta habilidade custa um chakra específico dependendo da habilidade que foi substituída por ela. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant, Ranged, Harmful. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
