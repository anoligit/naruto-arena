// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Asura Path Pein (S)",
  "description": "Asura Path Pein (S) is one of the six paths of Pein. His body style is similar to a puppet filled with hidden weapons.",
  "descriptionBR": "Asura Path Pein (S) é um dos seis caminhos de Pein. Seu corpo se assemelha a uma marionete repleta de armas ocultas.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "asura_path_pein_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Chakra Burst",
      "file": "asura_path_pein_(s)_skill_1_(chakra_burst).png",
      "description": "Asura prevents one enemy from becoming invulnerable or reducing damage, then deals 20 damage for 1 turn. During this time, any enemy that uses a new skill on him will take 10 damage. This skill will be replaced permanently.",
      "descriptionBR": "Asura impede um inimigo de se tornar invulnerável ou reduzir dano e, então, causa 20 de dano por 1 turno. Durante esse tempo, qualquer inimigo que usar uma nova habilidade contra ele irá receber 10 de dano. Essa habilidade será substituída permanentemente.",
      "descriptionRaw": "Asura prevents one enemy from <Defense>becoming invulnerable<Defense> or <Defense>reducing damage<Defense>, then <Damage>deals 20 damage<Damage> for 1 turn. During this time, any enemy that uses a new skill on him will <Damage>take 10 damage<Damage>. This skill will be <Improvements>replaced permanently<Improvements>.",
      "descriptionBRRaw": "Asura impede um inimigo de <Defense>se tornar invulnerável<Defense> ou <Defense>reduzir dano<Defense> e, então, <Damage>causa 20 de dano<Damage> por 1 turno. Durante esse tempo, qualquer inimigo que usar uma nova habilidade contra ele irá <Damage>receber 10 de dano<Damage>. Essa habilidade será <Improvements>substituída permanentemente<Improvements>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Asura prevents one enemy from becoming invulnerable or reducing damage, then deals 20 damage for 1 turn. During this time, any enemy that uses a new skill on him will take 10 damage. This skill will be replaced permanently. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Asura impede um inimigo de se tornar invulnerável ou reduzir dano e, então, causa 20 de dano por 1 turno. Durante esse tempo, qualquer inimigo que usar uma nova habilidade contra ele irá receber 10 de dano. Essa habilidade será substituída permanentemente. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Cluster Bombs",
      "file": "asura_path_pein_(s)_skill_2_(cluster_bombs).jpg",
      "description": "Asura Path bombs all enemies, dealing 20 piercing damage to them. For 1 turn, any enemy that uses a new harmful physical or chakra skill will be dealt 10 piercing damage.",
      "descriptionBR": "Asura Path bombardeia todos os inimigos, causando 20 de dano perfurante a eles. Por 1 turno, qualquer inimigo que usar uma nova habilidade ofensiva física ou de chakra irá receber 10 de dano perfurante.",
      "descriptionRaw": "Asura Path bombs all enemies, <Damage>dealing 20 piercing damage<Damage> to them. For 1 turn, any enemy that uses a new <Classes>harmful physical or chakra skill<Classes> will be <Damage>dealt 10 piercing damage<Damage>.",
      "descriptionBRRaw": "Asura Path bombardeia todos os inimigos, <Damage>causando 20 de dano perfurante<Damage> a eles. Por 1 turno, qualquer inimigo que usar uma nova <Classes>habilidade ofensiva física ou de chakra<Classes> irá <Damage>receber 10 de dano perfurante<Damage>.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Asura Path bombs all enemies, dealing 20 piercing damage to them. For 1 turn, any enemy that uses a new harmful physical or chakra skill will be dealt 10 piercing damage. Chakra cost: 2 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Asura Path bombardeia todos os inimigos, causando 20 de dano perfurante a eles. Por 1 turno, qualquer inimigo que usar uma nova habilidade ofensiva física ou de chakra irá receber 10 de dano perfurante. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Heat Seeker",
      "file": "asura_path_pein_(s)_skill_3_(heat_seeker).jpg",
      "description": "Asura Path uses Heat Seeker on one enemy. After 3 turns, that enemy will take 25 piercing damage. This skill is invisible until triggered. This skill stacks.",
      "descriptionBR": "Asura Path Pein (S) usa Heat Seeker em um inimigo. Após 3 turnos, esse inimigo irá receber 25 de dano perfurante. Essa habilidade é invisível até ser ativada. Essa habilidade acumula.",
      "descriptionRaw": "Asura Path uses Heat Seeker on one enemy. After 3 turns, that enemy will <Damage>take 25 piercing damage<Damage>. This skill is <Invisible>invisible<Invisible> until triggered. This skill <Effects>stacks<Effects>.",
      "descriptionBRRaw": "Asura Path Pein (S) usa Heat Seeker em um inimigo. Após 3 turnos, esse inimigo irá <Damage>receber 25 de dano perfurante<Damage>. Essa habilidade é <Invisible>invisível<Invisible> até ser ativada. Essa habilidade <Effects>acumula<Effects>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Asura Path uses Heat Seeker on one enemy. After 3 turns, that enemy will take 25 piercing damage. This skill is invisible until triggered. This skill stacks. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Asura Path Pein (S) usa Heat Seeker em um inimigo. Após 3 turnos, esse inimigo irá receber 25 de dano perfurante. Essa habilidade é invisível até ser ativada. Essa habilidade acumula. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Rinnegan Evasion",
      "file": "asura_path_pein_(s)_skill_4_(rinnegan_evasion).jpg",
      "description": "This skill makes Asura Path Pein (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Asura Path Pein (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Asura Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Asura Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Asura Path Pein (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Asura Path Pein (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Crown Shockwave",
      "file": "asura_path_pein_(s)_skill_5_(crown_shockwave).png",
      "description": "Asura Path deals 20 damage to all enemies. The following turn, they will be dealt 5 affliction damage. This skill becomes 'Chakra Burst' after being used.",
      "descriptionBR": "Asura Path Pein (S) causa 20 de dano a todos os inimigos. No próximo turno, eles irão receber 5 de dano affliction. Essa habilidade se torna 'Chakra Burst' após ser usada.",
      "descriptionRaw": "Asura Path <Damage>deals 20 damage<Damage> to all enemies. The following turn, they will be <Damage>dealt 5 affliction damage<Damage>. This skill becomes <SkillName>'Chakra Burst'<SkillName> after being used.",
      "descriptionBRRaw": "Asura Path Pein (S) <Damage>causa 20 de dano<Damage> a todos os inimigos. No próximo turno, eles irão <Damage>receber 5 de dano affliction<Damage>. Essa habilidade se torna <SkillName>'Chakra Burst'<SkillName> após ser usada.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Asura Path deals 20 damage to all enemies. The following turn, they will be dealt 5 affliction damage. This skill becomes 'Chakra Burst' after being used. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Asura Path Pein (S) causa 20 de dano a todos os inimigos. No próximo turno, eles irão receber 5 de dano affliction. Essa habilidade se torna 'Chakra Burst' após ser usada. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
