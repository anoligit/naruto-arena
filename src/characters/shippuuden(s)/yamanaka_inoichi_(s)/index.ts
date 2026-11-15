// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Yamanaka Inoichi (S)",
  "description": "Yamanaka Inoichi (S) is the father of Ino and the leader of the Yamanaka clan. He is a jounin and a member of the Konoha interrogation squad.",
  "descriptionBR": "Yamanaka Inoichi (S) é o pai da Ino e o líder do clã Yamanaka. Ele é um jounin e membro da equipe de interrogatório de Konoha.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "yamanaka_inoichi_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Mastered Mind Disturbance",
      "file": "yamanaka_inoichi_(s)_skill_1_(mastered_mind_disturbance).png",
      "description": "Inoichi invades an enemy's mind, dealing 10 piercing damage to them and stunning their non-mental skills for 1 turn. If used one turn after 'Mind Shatter', this skill will deal 10 additional damage.",
      "descriptionBR": "Inoichi invade a mente de um inimigo, causando 10 de dano perfurante e atordoando suas habilidades não mentais por 1 turno. Se usada um turno após 'Mind Shatter', essa habilidade irá causar 10 de dano adicional.",
      "descriptionRaw": "Inoichi invades an enemy's mind, <Damage>dealing 10 piercing damage<Damage> to them and <Effects>stunning<Effects> their <Classes>non-mental skills<Classes> for 1 turn. If used one turn after <SkillName>'Mind Shatter'<SkillName>, this skill will <Improvements>deal 10 additional damage<Improvements>.",
      "descriptionBRRaw": "Inoichi invade a mente de um inimigo, <Damage>causando 10 de dano perfurante<Damage> e <Effects>atordoando<Effects> suas <Classes>habilidades não mentais<Classes> por 1 turno. Se usada um turno após <SkillName>'Mind Shatter'<SkillName>, essa habilidade irá <Improvements>causar 10 de dano adicional<Improvements>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Inoichi invades an enemy's mind, dealing 10 piercing damage to them and stunning their non-mental skills for 1 turn. If used one turn after 'Mind Shatter', this skill will deal 10 additional damage. Chakra cost: 1 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Inoichi invade a mente de um inimigo, causando 10 de dano perfurante e atordoando suas habilidades não mentais por 1 turno. Se usada um turno após 'Mind Shatter', essa habilidade irá causar 10 de dano adicional. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Mind Shatter",
      "file": "yamanaka_inoichi_(s)_skill_2_(mind_shatter).png",
      "description": "Inoichi deals 30 piercing damage to one enemy. For 1 turn, that enemy's physical skills will cost 1 additional taijutsu chakra, their chakra skills will cost 1 additional ninjutsu chakra, their mental skills will cost 1 additional genjutsu chakra, and their affliction skills will cost 1 additional bloodline chakra.",
      "descriptionBR": "Inoichi causa 30 de dano perfurante a um inimigo. Por 1 turno, as habilidades físicas desse inimigo irão custar 1 chakra taijutsu adicional, suas habilidades de chakra irão custar 1 chakra ninjutsu adicional, suas habilidades mentais irão custar 1 chakra genjutsu adicional e suas habilidades de affliction irão custar 1 chakra bloodline adicional.",
      "descriptionRaw": "Inoichi <Damage>deals 30 piercing damage<Damage> to one enemy. For 1 turn, that enemy's <Classes>physical skills<Classes> will <Effects>cost 1 additional taijutsu chakra<Effects>, their <Classes>chakra skills<Classes> will <Effects>cost 1 additional ninjutsu chakra<Effects>, their <Classes>mental skills<Classes> will <Effects>cost 1 additional genjutsu chakra<Effects>, and their <Classes>affliction skills<Classes> will <Effects>cost 1 additional bloodline chakra<Effects>.",
      "descriptionBRRaw": "Inoichi <Damage>causa 30 de dano perfurante<Damage> a um inimigo. Por 1 turno, as <Classes>habilidades físicas<Classes> desse inimigo irão <Effects>custar 1 chakra taijutsu adicional<Effects>, suas <Classes>habilidades de chakra<Classes> irão <Effects>custar 1 chakra ninjutsu adicional<Effects>, suas <Classes>habilidades mentais<Classes> irão <Effects>custar 1 chakra genjutsu adicional<Effects> e suas <Classes>habilidades de affliction<Classes> irão <Effects>custar 1 chakra bloodline adicional<Effects>.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Inoichi deals 30 piercing damage to one enemy. For 1 turn, that enemy's physical skills will cost 1 additional taijutsu chakra, their chakra skills will cost 1 additional ninjutsu chakra, their mental skills will cost 1 additional genjutsu chakra, and their affliction skills will cost 1 additional bloodline chakra. Chakra cost: 1 Nin, 1 Random. Catalog classes: Mental, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Inoichi causa 30 de dano perfurante a um inimigo. Por 1 turno, as habilidades físicas desse inimigo irão custar 1 chakra taijutsu adicional, suas habilidades de chakra irão custar 1 chakra ninjutsu adicional, suas habilidades mentais irão custar 1 chakra genjutsu adicional e suas habilidades de affliction irão custar 1 chakra bloodline adicional. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Mental, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Mental Invasion",
      "file": "yamanaka_inoichi_(s)_skill_3_(mental_invasion).png",
      "description": "For 1 turn, if one enemy uses a new harmful skill, that skill will heal instead of dealing damage, and its non-damage effects will be nullified. This skill is invisible.",
      "descriptionBR": "Por 1 turno, se um inimigo usar uma nova habilidade ofensiva, essa habilidade irá curar em vez de causar dano, e seus efeitos que não causam dano serão anulados. Essa habilidade é invisível.",
      "descriptionRaw": "For 1 turn, if one enemy uses a new <Classes>harmful skill<Classes>, that skill will <Defense>heal instead of dealing damage<Defense>, and its <Effects>non-damage effects will be nullified<Effects>. This skill is <Invisible>invisible<Invisible>.",
      "descriptionBRRaw": "Por 1 turno, se um inimigo usar uma nova <Classes>habilidade ofensiva<Classes>, essa habilidade irá <Defense>curar em vez de causar dano<Defense>, e seus <Effects>efeitos que não causam dano serão anulados<Effects>. Essa habilidade é <Invisible>invisível<Invisible>.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "For 1 turn, if one enemy uses a new harmful skill, that skill will heal instead of dealing damage, and its non-damage effects will be nullified. This skill is invisible. Chakra cost: 1 Nin. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 1 turno, se um inimigo usar uma nova habilidade ofensiva, essa habilidade irá curar em vez de causar dano, e seus efeitos que não causam dano serão anulados. Essa habilidade é invisível. Custo de chakra: 1 ninjutsu. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Sensing Water Sphere",
      "file": "yamanaka_inoichi_(s)_skill_4_(sensing_water_sphere).png",
      "description": "This skill makes Yamanaka Inoichi (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Yamanaka Inoichi (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Yamanaka Inoichi (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Yamanaka Inoichi (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Yamanaka Inoichi (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Yamanaka Inoichi (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
