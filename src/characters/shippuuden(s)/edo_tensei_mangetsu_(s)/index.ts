// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Mangetsu (S)",
  "description": "Reanimated by Kabuto during the Fourth Shinobi World War as one of the Seven Swordsmen of the Mist, Mangetsu was widely feared as the 'Second Coming of the Demon'. The older brother of Suigetsu, Mangetsu primarily used the Twin Sword, Hiramekarei, though he was famously a master of all seven blades.",
  "descriptionBR": "Reanimado por Kabuto durante a Quarta Guerra Ninja como um dos Sete Espadachins da Névoa, Mangetsu era amplamente temido como a 'Segunda Vinda do Demônio'. Irmão mais velho de Suigetsu, Mangetsu usava principalmente a Espada Gêmea, Hiramekarei, embora fosse notoriamente mestre das sete lâminas.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_mangetsu_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Hydrification Technique",
      "file": "edo_tensei_mangetsu_(s)_skill_1_(hydrification_technique).png",
      "description": "ET Mangetsu steals 20 health points from one enemy. For 1 turn, a random skill class will be chosen, and ET Mangetsu will ignore all enemy skills of that class, or none if no class is chosen.",
      "descriptionBR": "ET Mangetsu rouba 20 de vida de um inimigo. Por 1 turno, uma classe de habilidade aleatória será escolhida, e ET Mangetsu ignorará todas as habilidades inimigas dessa classe, ou nenhuma se nenhuma classe for escolhida.",
      "descriptionRaw": "ET Mangetsu steals 20 health points from one enemy. For 1 turn, a random skill class will be chosen, and ET Mangetsu will ignore all enemy skills of that class, or none if no class is chosen.",
      "descriptionBRRaw": "ET Mangetsu rouba 20 de vida de um inimigo. Por 1 turno, uma classe de habilidade aleatória será escolhida, e ET Mangetsu ignorará todas as habilidades inimigas dessa classe, ou nenhuma se nenhuma classe for escolhida.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee",
        "$_"
      ],
      "cooldown": 0,
      "ruleDescription": "ET Mangetsu steals 20 health points from one enemy. For 1 turn, a random skill class will be chosen, and ET Mangetsu will ignore all enemy skills of that class, or none if no class is chosen. Chakra cost: 1 Gen, 1 Random. Catalog classes: Affliction, Instant, Melee, $_. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "ET Mangetsu rouba 20 de vida de um inimigo. Por 1 turno, uma classe de habilidade aleatória será escolhida, e ET Mangetsu ignorará todas as habilidades inimigas dessa classe, ou nenhuma se nenhuma classe for escolhida. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Affliction, Instant, Melee, $_. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Impure World Regeneration",
      "file": "edo_tensei_mangetsu_(s)_skill_2_(impure_world_regeneration).png",
      "description": "When this skill is used, ET Mangetsu will heal 2 health every turn for the rest of the game. This skill stacks and may only be used 5 times.",
      "descriptionBR": "Quando esta habilidade for usada, ET Mangetsu irá recuperar 2 de vida a cada turno até o fim da partida. Este efeito acumula e pode ser usado no máximo 5 vezes.",
      "descriptionRaw": "When this skill is used, ET Mangetsu will heal 2 health every turn for the rest of the game. This skill stacks and may only be used 5 times.",
      "descriptionBRRaw": "Quando esta habilidade for usada, ET Mangetsu irá recuperar 2 de vida a cada turno até o fim da partida. Este efeito acumula e pode ser usado no máximo 5 vezes.",
      "energy": [],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "When this skill is used, ET Mangetsu will heal 2 health every turn for the rest of the game. This skill stacks and may only be used 5 times. Chakra cost: no chakra cost listed. Catalog classes: Mental, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Quando esta habilidade for usada, ET Mangetsu irá recuperar 2 de vida a cada turno até o fim da partida. Este efeito acumula e pode ser usado no máximo 5 vezes. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Mist Sword Summoning",
      "file": "edo_tensei_mangetsu_(s)_skill_3_(mist_sword_summoning).png",
      "description": "Mangetsu randomly summons one of the Seven Swords, granting 'Hydrification Technique' a random unique effect every turn. Hiramekarei: Steals 10 additional health. / Kubikiribocho: Grants 10 permanent destructible defense. / Sameheada: Steals 1 random chakra from the target. / Nuibari: Stuns non-mental skills for 1 turn. / Shibuki: Deals 5 permanent affliction damage. / Kabutowari: Destroys destructible defense and deals 15 piercing damage. / Kiba: Deals 20 affliction damage to all other enemies.",
      "descriptionBR": "Mangetsu invoca aleatoriamente uma das Sete Espadas, concedendo um efeito único e aleatório à 'Hydrification Technique' a cada turno. Hiramekarei: Rouba 10 de vida adicional. / Kubikiribocho: Concede 10 de defesa destrutível permanente. / Samehada: Rouba 1 chakra aleatório do inimigo. / Nuibari: Atordoa habilidades não-mentais por 1 turno. / Shibuki: Causa 5 de dano dano affliction permanente. / Kabutowari: Destrói a defesa destrutível e causa 15 de dano perfurante. / Kiba: Causa 20 de dano affliction a todos os outros inimigos.",
      "descriptionRaw": "Mangetsu randomly summons one of the Seven Swords, granting 'Hydrification Technique' a random unique effect every turn. Hiramekarei: Steals 10 additional health. / Kubikiribocho: Grants 10 permanent destructible defense. / Sameheada: Steals 1 random chakra from the target. / Nuibari: Stuns non-mental skills for 1 turn. / Shibuki: Deals 5 permanent affliction damage. / Kabutowari: Destroys destructible defense and deals 15 piercing damage. / Kiba: Deals 20 affliction damage to all other enemies.",
      "descriptionBRRaw": "Mangetsu invoca aleatoriamente uma das Sete Espadas, concedendo um efeito único e aleatório à 'Hydrification Technique' a cada turno. Hiramekarei: Rouba 10 de vida adicional. / Kubikiribocho: Concede 10 de defesa destrutível permanente. / Samehada: Rouba 1 chakra aleatório do inimigo. / Nuibari: Atordoa habilidades não-mentais por 1 turno. / Shibuki: Causa 5 de dano dano affliction permanente. / Kabutowari: Destrói a defesa destrutível e causa 15 de dano perfurante. / Kiba: Causa 20 de dano affliction a todos os outros inimigos.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Mangetsu randomly summons one of the Seven Swords, granting 'Hydrification Technique' a random unique effect every turn. Hiramekarei: Steals 10 additional health. / Kubikiribocho: Grants 10 permanent destructible defense. / Sameheada: Steals 1 random chakra from the target. / Nuibari: Stuns non-mental skills for 1 turn. / Shibuki: Deals 5 permanent affliction damage. / Kabutowari: Destroys destructible defense and deals 15 piercing damage. / Kiba: Deals 20 affliction damage to all other enemies. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Mangetsu invoca aleatoriamente uma das Sete Espadas, concedendo um efeito único e aleatório à 'Hydrification Technique' a cada turno. Hiramekarei: Rouba 10 de vida adicional. / Kubikiribocho: Concede 10 de defesa destrutível permanente. / Samehada: Rouba 1 chakra aleatório do inimigo. / Nuibari: Atordoa habilidades não-mentais por 1 turno. / Shibuki: Causa 5 de dano dano affliction permanente. / Kabutowari: Destrói a defesa destrutível e causa 15 de dano perfurante. / Kiba: Causa 20 de dano affliction a todos os outros inimigos. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Mangetsu Block",
      "file": "edo_tensei_mangetsu_(s)_skill_4_(mangetsu_block).png",
      "description": "This skill makes Edo Tensei Mangetsu (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Mangetsu (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Mangetsu (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Mangetsu (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Mangetsu (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Mangetsu (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
