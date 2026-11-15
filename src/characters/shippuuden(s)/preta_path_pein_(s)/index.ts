// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Preta Path Pein (S)",
  "description": "Preta Path Pein (S) is one of the six paths of Pein. This path is able to nulify jutsus and is used mostly for defensive tactics.",
  "descriptionBR": "Preta Path Pein (S) é um dos seis caminhos de Pein. Esse caminho é capaz de anular jutsus e é usado principalmente para táticas defensivas.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "preta_path_pein_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Energy Shield",
      "file": "preta_path_pein_(s)_skill_1_(energy_shield).jpg",
      "description": "Preta Path (S) uses Energy Shield on one enemy removing 1 bloodline or Genjutsu chakra. That enemy will be dealt 25 piercing damage.",
      "descriptionBR": "Preta Path (S) usa Energy Shield em um inimigo, removendo 1 chakra Bloodline ou Genjutsu. Esse inimigo receberá 25 de dano perfurante.",
      "descriptionRaw": "Preta Path (S) uses Energy Shield on one enemy <Effects>removing 1 bloodline or Genjutsu chakra<Effects>. That enemy will be <Damage>dealt 25 piercing damage<Damage>.",
      "descriptionBRRaw": "Preta Path (S) usa Energy Shield em um inimigo, <Effects>removendo 1 chakra Bloodline ou Genjutsu<Effects>. Esse inimigo <Damage>receberá 25 de dano<Damage> perfurante.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Preta Path (S) uses Energy Shield on one enemy removing 1 bloodline or Genjutsu chakra. That enemy will be dealt 25 piercing damage. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Preta Path (S) usa Energy Shield em um inimigo, removendo 1 chakra Bloodline ou Genjutsu. Esse inimigo receberá 25 de dano perfurante. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Rinnegan Absorption",
      "file": "preta_path_pein_(s)_skill_2_(rinnegan_absorption).jpg",
      "description": "Preta Path Pein (S) uses Rinnegan Absorption to protect himself. All damage dealt on Preta Path Pein (S) will be ignored and any enemy that uses a new damaging harmful skill on him will lose chakra equal the chakra cost of the skill used (except Random Chakra). This skill is invisible.",
      "descriptionBR": "Preta Path Pein (S) usa Rinnegan Absorption para se proteger. Todo o dano causado a Preta Path Pein (S) será ignorado e qualquer inimigo que usar uma nova habilidade ofensiva de dano nele perderá chakra igual ao custo da habilidade usada (exceto Chakra Aleatório). Esta habilidade é invisível.",
      "descriptionRaw": "Preta Path Pein (S) uses Rinnegan Absorption to protect himself. All <Defense>damage dealt<Defense> on Preta Path Pein (S) will be <Defense>ignored<Defense> and any enemy that uses a <Classes>new damaging harmful skill<Classes> on him will <Effects>lose chakra equal<Effects> the <Effects>chakra cost of the skill used (except Random Chakra)<Effects>. <Invisible>This skill is invisible<Invisible>.",
      "descriptionBRRaw": "Preta Path Pein (S) usa Rinnegan Absorption para se proteger. Todo o <Defense>dano causado<Defense> a Preta Path Pein (S) será <Defense>ignorado<Defense> e qualquer inimigo que usar uma <Classes>nova habilidade ofensiva de dano<Classes> nele <Effects>perderá chakra igual<Effects> ao <Effects>custo da habilidade usada (exceto Chakra Aleatório)<Effects>. <Invisible>Esta habilidade é invisível<Invisible>.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Preta Path Pein (S) uses Rinnegan Absorption to protect himself. All damage dealt on Preta Path Pein (S) will be ignored and any enemy that uses a new damaging harmful skill on him will lose chakra equal the chakra cost of the skill used (except Random Chakra). This skill is invisible. Chakra cost: 1 Nin, 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Preta Path Pein (S) usa Rinnegan Absorption para se proteger. Todo o dano causado a Preta Path Pein (S) será ignorado e qualquer inimigo que usar uma nova habilidade ofensiva de dano nele perderá chakra igual ao custo da habilidade usada (exceto Chakra Aleatório). Esta habilidade é invisível. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Chakra Pin",
      "file": "preta_path_pein_(s)_skill_3_(chakra_pin).jpg",
      "description": "Using Chakra Pin Preta Path Pein (S) stuns one enemy's harmful skills. Preta Path Pein (S) will steal 1 bloodline or genjutsu chakra.",
      "descriptionBR": "Usando Chakra Pin, Preta Path Pein (S) irá atordoar as habilidades ofensivas de um inimigo. Preta Path Pein (S) roubará 1 chakra Bloodline ou Genjutsu.",
      "descriptionRaw": "Using Chakra Pin Preta Path Pein (S) <Effects>stuns<Effects> one enemy's <Classes>harmful<Classes> skills. Preta Path Pein (S) will <Effects>steal 1 bloodline or genjutsu chakra<Effects>.",
      "descriptionBRRaw": "Usando Chakra Pin, Preta Path Pein (S) irá <Effects>atordoar<Effects> as habilidades <Classes>ofensivas<Classes> de um inimigo. Preta Path Pein (S) <Effects>roubará 1 chakra Bloodline ou Genjutsu<Effects>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Using Chakra Pin Preta Path Pein (S) stuns one enemy's harmful skills. Preta Path Pein (S) will steal 1 bloodline or genjutsu chakra. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando Chakra Pin, Preta Path Pein (S) irá atordoar as habilidades ofensivas de um inimigo. Preta Path Pein (S) roubará 1 chakra Bloodline ou Genjutsu. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Agile Dodge",
      "file": "preta_path_pein_(s)_skill_4_(agile_dodge).jpg",
      "description": "This skill makes Preta Path Pein (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Preta Path Pein (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Preta Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Preta Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Preta Path Pein (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Preta Path Pein (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
