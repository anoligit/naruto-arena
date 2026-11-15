// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Young Yahiko (S)",
  "description": "The Rain Orphans were three children who lost their parents due to the Hidden Rain Village's involvement in the Second Shinobi World War. Yahiko is a stoic boy who leads his team in the fight for survival during the war.",
  "descriptionBR": "Os Órfãos da Chuva eram três crianças que perderam seus pais devido ao envolvimento da Vila Oculta da Chuva na Segunda Guerra Mundial Shinobi. Yahiko é um garoto estoico que lidera sua equipe na luta pela sobrevivência durante a guerra.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "young_yahiko_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Water Style: Wild Water Wave",
      "file": "young_yahiko_(s)_skill_1_(water_style_wild_water_wave).png",
      "description": "Yahiko spews water in a waterfall-like fashion, dealing 30 piercing damage to one enemy and 20 chakra damage to all others.",
      "descriptionBR": "Yahiko expele água como uma cachoeira, causando 30 de dano perfurante a um inimigo e 20 de dano chakra a todos os outros.",
      "descriptionRaw": "Yahiko spews water in a waterfall-like fashion, <Damage>dealing 30 piercing damage<Damage> to one enemy and <Damage>20 chakra damage<Damage> to all others.",
      "descriptionBRRaw": "Yahiko expele água como uma cachoeira, <Damage>causando 30 de dano perfurante<Damage> a um inimigo e <Damage>20 de dano chakra<Damage> a todos os outros.",
      "energy": [
        "Random",
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Yahiko spews water in a waterfall-like fashion, dealing 30 piercing damage to one enemy and 20 chakra damage to all others. Chakra cost: 3 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yahiko expele água como uma cachoeira, causando 30 de dano perfurante a um inimigo e 20 de dano chakra a todos os outros. Custo de chakra: 3 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Lateral Kick",
      "file": "young_yahiko_(s)_skill_2_(lateral_kick).png",
      "description": "Yahiko assaults one enemy with a lateral kick, dealing 20 damage to them and stunning their non-mental skills for 1 turn. The following turn, 'Water Style: Wild Water Wave' will cost 1 less random chakra.",
      "descriptionBR": "Yahiko ataca um inimigo com um chute lateral, causando 20 de dano a ele e atordoando suas habilidades não-mental por 1 turno. No próximo turno, 'Water Style: Wild Water Wave' irá custar 1 chakra aleatório a menos.",
      "descriptionRaw": "Yahiko assaults one enemy with a lateral kick, <Damage>dealing 20 damage<Damage> to them and <Effects>stunning <Effects>their<Effects> <Classes>non-mental skills<Classes><Effects> for 1 turn. The following turn, <SkillName>'Water Style: Wild Water Wave'<SkillName> will <Improvements>cost 1 less random chakra<Improvements>.",
      "descriptionBRRaw": "Yahiko ataca um inimigo com um chute lateral, <Damage>causando 20 de dano<Damage> a ele e <Effects>atordoando <Effects>suas<Effects> <Classes>habilidades não-mental<Classes><Effects> por 1 turno. No próximo turno, <SkillName>'Water Style: Wild Water Wave'<SkillName> irá <Improvements>custar 1 chakra aleatório a menos<Improvements>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Yahiko assaults one enemy with a lateral kick, dealing 20 damage to them and stunning their non-mental skills for 1 turn. The following turn, 'Water Style: Wild Water Wave' will cost 1 less random chakra. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yahiko ataca um inimigo com um chute lateral, causando 20 de dano a ele e atordoando suas habilidades não-mental por 1 turno. No próximo turno, 'Water Style: Wild Water Wave' irá custar 1 chakra aleatório a menos. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Descending Fist",
      "file": "young_yahiko_(s)_skill_3_(descending_fist).png",
      "description": "Yahiko assaults one enemy with a descending fist, dealing 20 piercing damage to them and removing 1 taijutsu or bloodline chakra. The following turn, 'Water Style: Wild Water Wave' will cost 1 less random chakra.",
      "descriptionBR": "Yahiko ataca um inimigo com um golpe descendente, causando 20 de dano perfurante a ele e removendo 1 chakra taijutsu ou bloodline. No próximo turno, 'Water Style: Wild Water Wave' irá custar 1 chakra aleatório a menos.",
      "descriptionRaw": "Yahiko assaults one enemy with a descending fist, <Damage>dealing 20 piercing damage<Damage> to them and <Effects>removing 1 taijutsu or bloodline chakra<Effects>. The following turn, <SkillName>'Water Style: Wild Water Wave'<SkillName> will <Improvements>cost 1 less random chakra<Improvements>.",
      "descriptionBRRaw": "Yahiko ataca um inimigo com um golpe descendente, <Damage>causando 20 de dano perfurante<Damage> a ele e <Effects>removendo 1 chakra taijutsu ou bloodline<Effects>. No próximo turno, <SkillName>'Water Style: Wild Water Wave'<SkillName> irá <Improvements>custar 1 chakra aleatório a menos<Improvements>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Yahiko assaults one enemy with a descending fist, dealing 20 piercing damage to them and removing 1 taijutsu or bloodline chakra. The following turn, 'Water Style: Wild Water Wave' will cost 1 less random chakra. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Yahiko ataca um inimigo com um golpe descendente, causando 20 de dano perfurante a ele e removendo 1 chakra taijutsu ou bloodline. No próximo turno, 'Water Style: Wild Water Wave' irá custar 1 chakra aleatório a menos. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Magnificent Frog Disguise",
      "file": "young_yahiko_(s)_skill_4_(magnificent_frog_disguise).png",
      "description": "This skill makes Young Yahiko (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Young Yahiko (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Young Yahiko (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Young Yahiko (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Young Yahiko (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Young Yahiko (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
