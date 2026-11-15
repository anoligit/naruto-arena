// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Izumo and Kotetsu (S)",
  "description": "Part of the Nijuu Shoutai, Izumo and Kotetsu are almost always found together and work together excellently as a combat team.",
  "descriptionBR": "Parte do Nijuu Shoutai, Izumo e Kotetsu quase sempre aparecem juntos e trabalham em equipe com excelência no combate.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "izumo_and_kotetsu_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Mace Crush",
      "file": "izumo_and_kotetsu_(s)_skill_1_(mace_crush).jpg",
      "description": "Kotetsu summons a giant mace and slams it against one enemy, dealing 30 damage to them. This skill will deal 10 more damage if the enemy has been stunned by the 'Starch Syrup Capturing Field'.",
      "descriptionBR": "Kotetsu invoca um enorme porrete e o golpeia contra um inimigo, causando 30 de dano. Esta habilidade causará 10 de dano adicional se o inimigo estiver atordoado pelo 'Starch Syrup Capturing Field'.",
      "descriptionRaw": "Kotetsu summons a giant mace and slams it against one enemy, <Damage>dealing 30 damage<Damage> to them. This skill will <Improvements>deal 10 more damage<Improvements> if the enemy has been <Effects>stunned<Effects> by the <SkillName>'Starch Syrup Capturing Field'<SkillName>.",
      "descriptionBRRaw": "Kotetsu invoca um enorme porrete e o golpeia contra um inimigo, <Damage>causando 30 de dano<Damage>. Esta habilidade <Improvements>causará 10 de dano adicional<Improvements> se o inimigo estiver <Effects>atordoado<Effects> pelo <SkillName>'Starch Syrup Capturing Field'<SkillName>.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Kotetsu summons a giant mace and slams it against one enemy, dealing 30 damage to them. This skill will deal 10 more damage if the enemy has been stunned by the 'Starch Syrup Capturing Field'. Chakra cost: 2 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kotetsu invoca um enorme porrete e o golpeia contra um inimigo, causando 30 de dano. Esta habilidade causará 10 de dano adicional se o inimigo estiver atordoado pelo 'Starch Syrup Capturing Field'. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Starch Syrup Capturing Field",
      "file": "izumo_and_kotetsu_(s)_skill_2_(starch_syrup_capturing_field).jpg",
      "description": "Izumo Spits out a field of sticky skyrup making it harder for the enemy team to move around. For 2 turns, any enemy that uses a new non-mental skill will have that specif class of skill stunned for 1 turn.",
      "descriptionBR": "Izumo cospe um campo de xarope pegajoso dificultando o movimento do time inimigo. Por 2 turnos, qualquer inimigo que usar uma nova habilidade não-mental terá a classe específica da habilidade atordoada por 1 turno.",
      "descriptionRaw": "Izumo Spits out a field of sticky skyrup making it harder for the enemy team to move around. For 2 turns, any enemy that <Classes>uses a new non-mental skill<Classes> will have that specif class of skill <Effects>stunned<Effects> for 1 turn.",
      "descriptionBRRaw": "Izumo cospe um campo de xarope pegajoso dificultando o movimento do time inimigo. Por 2 turnos, qualquer inimigo que <Classes>usar uma nova habilidade não-mental<Classes> terá a classe específica da habilidade <Effects>atordoada<Effects> por 1 turno.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Izumo Spits out a field of sticky skyrup making it harder for the enemy team to move around. For 2 turns, any enemy that uses a new non-mental skill will have that specif class of skill stunned for 1 turn. Chakra cost: 1 Nin. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Izumo cospe um campo de xarope pegajoso dificultando o movimento do time inimigo. Por 2 turnos, qualquer inimigo que usar uma nova habilidade não-mental terá a classe específica da habilidade atordoada por 1 turno. Custo de chakra: 1 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Devastate",
      "file": "izumo_and_kotetsu_(s)_skill_3_(devastate).jpg",
      "description": "Izumo moves to hit an enemy from the left. For the next 3 turns, if 'Annihilate' is used on that target, they will take 65 damage.",
      "descriptionBR": "Izumo se move para golpear um inimigo pela esquerda. Nos próximos 3 turnos, se 'Annihilate' for usado nesse alvo, ele receberá 65 de dano.",
      "descriptionRaw": "Izumo moves to hit an enemy from the left. For the next 3 turns, if <SkillName>'Annihilate'<SkillName> is used on that target, they will <Damage>take 65 damage<Damage>.",
      "descriptionBRRaw": "Izumo se move para golpear um inimigo pela esquerda. Nos próximos 3 turnos, se <SkillName>'Annihilate'<SkillName> for usado nesse alvo, ele <Damage>receberá 65 de dano<Damage>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Izumo moves to hit an enemy from the left. For the next 3 turns, if 'Annihilate' is used on that target, they will take 65 damage. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Izumo se move para golpear um inimigo pela esquerda. Nos próximos 3 turnos, se 'Annihilate' for usado nesse alvo, ele receberá 65 de dano. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Tag Team",
      "file": "izumo_and_kotetsu_(s)_skill_4_(tag_team).jpg",
      "description": "Izumo swap, exchanging his health points for Kotetsu's. If Izumo or Kotetsu is killed during this time, the other will take permanent control. During this period, 'Devastate' will be replaced by 'Annihilate'. This skill can be used again to exchange health points. This skill cannot be ignored or removed.",
      "descriptionBR": "Izumo troca seus pontos de vida pelos de Kotetsu. Se Izumo ou Kotetsu morrer durante esse período, o outro assumirá o controle permanente. Durante esse tempo, 'Devastate' será substituído por 'Annihilate'. Esta habilidade pode ser usada novamente para trocar pontos de vida. Esta habilidade não pode ser ignorada ou removida.",
      "descriptionRaw": "Izumo swap, exchanging his <Defense>health points<Defense> for Kotetsu's. If Izumo or Kotetsu is <Classes>killed<Classes> during this time, the other will take permanent control. During this period, <SkillName>'Devastate'<SkillName> will be replaced by <SkillName>'Annihilate'<SkillName>. This skill can be used again to <Classes>exchange<Classes> <Defense>health points<Defense>. This skill cannot be <Classes>ignored<Classes> or <Classes>removed<Classes>.",
      "descriptionBRRaw": "Izumo troca seus <Defense>pontos de vida<Defense> pelos de Kotetsu. Se Izumo ou Kotetsu <Classes>morrer<Classes> durante esse período, o outro assumirá o controle permanente. Durante esse tempo, <SkillName>'Devastate'<SkillName> será substituído por <SkillName>'Annihilate'<SkillName>. Esta habilidade pode ser usada novamente para <Classes>trocar<Classes> <Defense>pontos de vida<Defense>. Esta habilidade não pode ser <Classes>ignorada<Classes> ou <Classes>removida<Classes>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Instant",
        "CanOnlyBeStunnedByHelpfulStuns"
      ],
      "cooldown": 0,
      "ruleDescription": "Izumo swap, exchanging his health points for Kotetsu's. If Izumo or Kotetsu is killed during this time, the other will take permanent control. During this period, 'Devastate' will be replaced by 'Annihilate'. This skill can be used again to exchange health points. This skill cannot be ignored or removed. Chakra cost: 1 Random. Catalog classes: Instant, CanOnlyBeStunnedByHelpfulStuns. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Izumo troca seus pontos de vida pelos de Kotetsu. Se Izumo ou Kotetsu morrer durante esse período, o outro assumirá o controle permanente. Durante esse tempo, 'Devastate' será substituído por 'Annihilate'. Esta habilidade pode ser usada novamente para trocar pontos de vida. Esta habilidade não pode ser ignorada ou removida. Custo de chakra: 1 aleatório. Classes no catálogo: Instant, CanOnlyBeStunnedByHelpfulStuns. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Annihilate",
      "file": "izumo_and_kotetsu_(s)_skill_5_(annihilate).png",
      "description": "Kotetsu moves to hit an enemy from the right. For the next 3 turns, if 'Devastate' is used on that target, they will take 65 damage.",
      "descriptionBR": "Kotetsu se move para golpear um inimigo pela direita. Nos próximos 3 turnos, se 'Devastate' for usado nesse alvo, ele receberá 65 de dano.",
      "descriptionRaw": "Kotetsu moves to hit an enemy from the right. For the next 3 turns, if <SkillName>'Devastate'<SkillName> is used on that target, they will <Damage>take 65 damage<Damage>.",
      "descriptionBRRaw": "Kotetsu se move para golpear um inimigo pela direita. Nos próximos 3 turnos, se <SkillName>'Devastate'<SkillName> for usado nesse alvo, ele <Damage>receberá 65 de dano<Damage>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Kotetsu moves to hit an enemy from the right. For the next 3 turns, if 'Devastate' is used on that target, they will take 65 damage. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kotetsu se move para golpear um inimigo pela direita. Nos próximos 3 turnos, se 'Devastate' for usado nesse alvo, ele receberá 65 de dano. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
