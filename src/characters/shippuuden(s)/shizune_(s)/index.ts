// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shizune (S)",
  "description": "Having spent the past few years as the right-hand woman and de facto secretary to the Fifth Hokage, Shizune has matured and become more experienced. Still a top-class medical-nin, Shizune has also become proficient at sealing jutsu, defensive chakra control, and strategically utilizing her summon Katsuyu.",
  "descriptionBR": "Após passar os últimos anos como braço direito e secretária de fato da Quinta Hokage, Shizune amadureceu e se tornou mais experiente. Ainda uma ninja médica de primeira classe, Shizune também se tornou proficiente em jutsus de selamento, controle defensivo de chakra e no uso estratégico de sua invocação, Katsuyu.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shizune_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Full Team Recovery",
      "file": "shizune_(s)_skill_1_(full_team_recovery).png",
      "description": "Shizune instantly heals herself and her allies for 15 health. During 'Chakra Reinforcement', this skill will heal Shizune and her allies for 20 health.",
      "descriptionBR": "Shizune cura instantaneamente a si mesma e seus aliados em 15 de vida. Durante 'Chakra Reinforcement', essa habilidade irá curar Shizune e seus aliados em 20 de vida.",
      "descriptionRaw": "Shizune instantly <Defense>heals<Defense> herself and her allies <Defense>for 15 health<Defense>. During <SkillName>'Chakra Reinforcement'<SkillName>, this skill will <Improvements>heal Shizune and her allies for 20 health<Improvements>.",
      "descriptionBRRaw": "Shizune <Defense>cura<Defense> instantaneamente a si mesma e seus aliados <Defense>em 15 de vida<Defense>. Durante <SkillName>'Chakra Reinforcement'<SkillName>, essa habilidade irá <Improvements>curar Shizune e seus aliados em 20 de vida<Improvements>.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Shizune instantly heals herself and her allies for 15 health. During 'Chakra Reinforcement', this skill will heal Shizune and her allies for 20 health. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shizune cura instantaneamente a si mesma e seus aliados em 15 de vida. Durante 'Chakra Reinforcement', essa habilidade irá curar Shizune e seus aliados em 20 de vida. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Katsuyu Interception",
      "file": "shizune_(s)_skill_2_(katsuyu_interception).png",
      "description": "Shizune calls upon Katsuyu to protect herself or an ally. For 1 turn, the first harmful skill used on the protected ally will be countered. This skill is invisible.",
      "descriptionBR": "Shizune invoca Katsuyu para proteger a si mesma ou um aliado. Por 1 turno, a primeira habilidade ofensiva usada no aliado protegido será counterada. Essa habilidade é invisível.",
      "descriptionRaw": "Shizune calls upon Katsuyu to protect herself or an ally. For 1 turn, the first <Classes>harmful skill<Classes> used on the protected ally will be <Defense>countered<Defense>. This skill is <Invisible>invisible<Invisible>.",
      "descriptionBRRaw": "Shizune invoca Katsuyu para proteger a si mesma ou um aliado. Por 1 turno, a primeira <Classes>habilidade ofensiva<Classes> usada no aliado protegido será <Defense>counterada<Defense>. Essa habilidade é <Invisible>invisível<Invisible>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Shizune calls upon Katsuyu to protect herself or an ally. For 1 turn, the first harmful skill used on the protected ally will be countered. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shizune invoca Katsuyu para proteger a si mesma ou um aliado. Por 1 turno, a primeira habilidade ofensiva usada no aliado protegido será counterada. Essa habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Chakra Reinforcement",
      "file": "shizune_(s)_skill_3_(chakra_reinforcement).png",
      "description": "For 3 turns, Shizune will have 10 points of damage reduction. During this time, 'Full Team Recovery' will be improved. The following 3 turns, this skill will be replaced by 'Four-Corner Sealing Barrier'.",
      "descriptionBR": "Por 3 turnos, Shizune terá 10 pontos de redução de dano. Durante esse tempo, 'Full Team Recovery' será aprimorada. Nos próximos 3 turnos, essa habilidade será substituída por 'Four-Corner Sealing Barrier'.",
      "descriptionRaw": "For 3 turns, Shizune will have 10 <Defense>points of damage reduction<Defense>. During this time, <SkillName>'Full Team Recovery'<SkillName> will be <Improvements>improved<Improvements>. The following 3 turns, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Four-Corner Sealing Barrier'<SkillName>.",
      "descriptionBRRaw": "Por 3 turnos, Shizune terá 10 <Defense>pontos de redução de dano<Defense>. Durante esse tempo, <SkillName>'Full Team Recovery'<SkillName> será <Improvements>aprimorada<Improvements>. Nos próximos 3 turnos, essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Four-Corner Sealing Barrier'<SkillName>.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "For 3 turns, Shizune will have 10 points of damage reduction. During this time, 'Full Team Recovery' will be improved. The following 3 turns, this skill will be replaced by 'Four-Corner Sealing Barrier'. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 3 turnos, Shizune terá 10 pontos de redução de dano. Durante esse tempo, 'Full Team Recovery' será aprimorada. Nos próximos 3 turnos, essa habilidade será substituída por 'Four-Corner Sealing Barrier'. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Sliding Dodge",
      "file": "shizune_(s)_skill_4_(sliding_dodge).png",
      "description": "This skill makes Shizune (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shizune (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shizune (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shizune (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shizune (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shizune (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Four-Corner Sealing Barrier",
      "file": "shizune_(s)_skill_5_(four-corner_sealing_barrier).png",
      "description": "Shizune seals one enemy inside a four-corner barrier, dealing 25 damage to them. Afterwards, Shizune will become invulnerable for 1 turn.",
      "descriptionBR": "Shizune sela um inimigo dentro de uma barreira de quatro cantos, causando 25 de dano a ele. Depois disso, Shizune irá se tornar invulnerável por 1 turno.",
      "descriptionRaw": "Shizune seals one enemy inside a four-corner barrier, <Damage>dealing 25 damage<Damage> to them. Afterwards, Shizune will <Defense>become invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Shizune sela um inimigo dentro de uma barreira de quatro cantos, <Damage>causando 25 de dano<Damage> a ele. Depois disso, Shizune irá <Defense>se tornar invulnerável<Defense> por 1 turno.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Shizune seals one enemy inside a four-corner barrier, dealing 25 damage to them. Afterwards, Shizune will become invulnerable for 1 turn. Chakra cost: 1 Gen. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shizune sela um inimigo dentro de uma barreira de quatro cantos, causando 25 de dano a ele. Depois disso, Shizune irá se tornar invulnerável por 1 turno. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
