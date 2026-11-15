// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Morino Ibiki (S)",
  "description": "Morino Ibiki (S) is a jounin and the designer of the chuunin exams. He is the leader of the Konoha interrogation squad.",
  "descriptionBR": "Morino Ibiki (S) é um jounin e o idealizador dos exames chuunin. Ele é o líder da equipe de interrogatório de Konoha.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "morino_ibiki_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Payback",
      "file": "morino_ibiki_(s)_skill_1_(payback).png",
      "description": "Ibiki deals 5 affliction damage to one enemy permanently. During this time, if that enemy's health drops to 15 or less, they will be instantly killed. While active, Ibiki's other harmful skills will cost 1 less random chakra. This skill ends when Ibiki or the target dies and cannot be used while active.",
      "descriptionBR": "Ibiki causa 5 de dano affliction permanentemente a um inimigo. Durante esse tempo, se a vida desse inimigo cair para 15 ou menos, ele será morto instantaneamente. Enquanto estiver ativa, as outras habilidades ofensivas de Ibiki irão custar 1 chakra aleatório a menos. Essa habilidade termina quando Ibiki ou o alvo morrer e não pode ser usada enquanto estiver ativa.",
      "descriptionRaw": "Ibiki <Damage>deals 5 affliction damage<Damage> to one enemy permanently. During this time, if that enemy's health drops to 15 or less, they will be <Effects>instantly killed<Effects>. While active, Ibiki's other <Classes>harmful skills<Classes> will <Improvements>cost 1 less random chakra<Improvements>. This skill ends when Ibiki or the target dies and <Effects>cannot be used while active<Effects>.",
      "descriptionBRRaw": "Ibiki <Damage>causa 5 de dano affliction<Damage> permanentemente a um inimigo. Durante esse tempo, se a vida desse inimigo cair para 15 ou menos, ele será <Effects>morto instantaneamente<Effects>. Enquanto estiver ativa, as outras <Classes>habilidades ofensivas<Classes> de Ibiki irão <Improvements>custar 1 chakra aleatório a menos<Improvements>. Essa habilidade termina quando Ibiki ou o alvo morrer e <Effects>não pode ser usada enquanto estiver ativa<Effects>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Ibiki deals 5 affliction damage to one enemy permanently. During this time, if that enemy's health drops to 15 or less, they will be instantly killed. While active, Ibiki's other harmful skills will cost 1 less random chakra. This skill ends when Ibiki or the target dies and cannot be used while active. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ibiki causa 5 de dano affliction permanentemente a um inimigo. Durante esse tempo, se a vida desse inimigo cair para 15 ou menos, ele será morto instantaneamente. Enquanto estiver ativa, as outras habilidades ofensivas de Ibiki irão custar 1 chakra aleatório a menos. Essa habilidade termina quando Ibiki ou o alvo morrer e não pode ser usada enquanto estiver ativa. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Summoning: Iron Maiden",
      "file": "morino_ibiki_(s)_skill_2_(summoning_iron_maiden).png",
      "description": "Ibiki summons a giant cat and traps one enemy inside of it, dealing 20 piercing damage to that enemy. For 2 turns, each turn that enemy uses a new harmful skill, they will be dealt 20 piercing damage. Ibiki will also gain 20 destructible defense when this skill is used.",
      "descriptionBR": "Ibiki invoca um gato gigante e aprisiona um inimigo dentro dele, causando 20 de dano perfurante a esse inimigo. Por 2 turnos, a cada turno em que esse inimigo usar uma nova habilidade ofensiva, ele irá receber 20 de dano perfurante. Ibiki também irá ganhar 20 de defesa destrutível quando essa habilidade for usada.",
      "descriptionRaw": "Ibiki summons a giant cat and traps one enemy inside of it, <Damage>dealing 20 piercing damage<Damage> to that enemy. For 2 turns, each turn that enemy uses a new <Classes>harmful skill<Classes>, they will be <Damage>dealt 20 piercing damage<Damage>. Ibiki will also <Defense>gain 20 destructible defense<Defense> when this skill is used.",
      "descriptionBRRaw": "Ibiki invoca um gato gigante e aprisiona um inimigo dentro dele, <Damage>causando 20 de dano perfurante<Damage> a esse inimigo. Por 2 turnos, a cada turno em que esse inimigo usar uma nova <Classes>habilidade ofensiva<Classes>, ele irá <Damage>receber 20 de dano perfurante<Damage>. Ibiki também irá <Defense>ganhar 20 de defesa destrutível<Defense> quando essa habilidade for usada.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 3,
      "ruleDescription": "Ibiki summons a giant cat and traps one enemy inside of it, dealing 20 piercing damage to that enemy. For 2 turns, each turn that enemy uses a new harmful skill, they will be dealt 20 piercing damage. Ibiki will also gain 20 destructible defense when this skill is used. Chakra cost: 1 Gen, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ibiki invoca um gato gigante e aprisiona um inimigo dentro dele, causando 20 de dano perfurante a esse inimigo. Por 2 turnos, a cada turno em que esse inimigo usar uma nova habilidade ofensiva, ele irá receber 20 de dano perfurante. Ibiki também irá ganhar 20 de defesa destrutível quando essa habilidade for usada. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Summoning: Torture Chamber",
      "file": "morino_ibiki_(s)_skill_3_(summoning_torture_chamber).png",
      "description": "Ibiki traps one enemy inside his torture chambers, dealing 20 piercing damage to that enemy. For 2 turns, each turn that enemy does not use a new skill, they will be dealt 20 piercing damage. Ibiki will also gain 20 destructible defense when this skill is used.",
      "descriptionBR": "Ibiki aprisiona um inimigo em suas câmaras de tortura, causando 20 de dano perfurante a esse inimigo. Por 2 turnos, a cada turno em que esse inimigo não usar uma nova habilidade, ele irá receber 20 de dano perfurante. Ibiki também irá ganhar 20 de defesa destrutível quando essa habilidade for usada.",
      "descriptionRaw": "Ibiki traps one enemy inside his torture chambers, <Damage>dealing 20 piercing damage<Damage> to that enemy. For 2 turns, each turn that enemy does not use a new skill, they will be <Damage>dealt 20 piercing damage<Damage>. Ibiki will also <Defense>gain 20 destructible defense<Defense> when this skill is used.",
      "descriptionBRRaw": "Ibiki aprisiona um inimigo em suas câmaras de tortura, <Damage>causando 20 de dano perfurante<Damage> a esse inimigo. Por 2 turnos, a cada turno em que esse inimigo não usar uma nova habilidade, ele irá <Damage>receber 20 de dano perfurante<Damage>. Ibiki também irá <Defense>ganhar 20 de defesa destrutível<Defense> quando essa habilidade for usada.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 3,
      "ruleDescription": "Ibiki traps one enemy inside his torture chambers, dealing 20 piercing damage to that enemy. For 2 turns, each turn that enemy does not use a new skill, they will be dealt 20 piercing damage. Ibiki will also gain 20 destructible defense when this skill is used. Chakra cost: 1 Gen, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ibiki aprisiona um inimigo em suas câmaras de tortura, causando 20 de dano perfurante a esse inimigo. Por 2 turnos, a cada turno em que esse inimigo não usar uma nova habilidade, ele irá receber 20 de dano perfurante. Ibiki também irá ganhar 20 de defesa destrutível quando essa habilidade for usada. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Sliding Evasion",
      "file": "morino_ibiki_(s)_skill_4_(sliding_evasion).jpg",
      "description": "This skill makes Morino Ibiki (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Morino Ibiki (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Morino Ibiki (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Morino Ibiki (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Morino Ibiki (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Morino Ibiki (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
