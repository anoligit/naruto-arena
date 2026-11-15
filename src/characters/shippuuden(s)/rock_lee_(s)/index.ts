// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Rock Lee (S)",
  "description": "A member of team Gai; Lee is a genin with no talent at all in ninjutsu or genjutsu, so he has focused his life all on taijutsu. With his powerful hand to hand techniques, Lee can crush any defense with his immense power.",
  "descriptionBR": "Um membro do Time Gai, Lee é um genin sem qualquer talento em ninjutsu ou genjutsu e, por isso, dedicou sua vida inteiramente ao taijutsu. Com suas poderosas técnicas de combate corpo a corpo, Lee pode destruir qualquer defesa com sua imensa força.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "rock_lee_(s)_char_1.jpeg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Leaf Great Whirlwind",
      "file": "rock_lee_(s)_skill_1_(leaf_great_whirlwind).jpeg",
      "description": "Lee gains momentum, dealing 25 piercing damage to one enemy. Afterwards, Lee will take 5 affliction damage*, which cannot kill him. Requires 'Power of Youth'.",
      "descriptionBR": "Lee ganha impulso, causando 25 de dano perfurante a um inimigo. Depois disso, Lee irá receber 5 de dano affliction*, que não pode matá-lo. Requer 'Power of Youth'.",
      "descriptionRaw": "Lee gains momentum, <Damage>dealing 25 piercing damage<Damage> to one enemy. Afterwards, Lee will <Damage>take 5 affliction damage<Damage>*, which <Invisible>cannot kill him<Invisible>. Requires <SkillName>'Power of Youth'<SkillName>.",
      "descriptionBRRaw": "Lee ganha impulso, <Damage>causando 25 de dano perfurante<Damage> a um inimigo. Depois disso, Lee irá <Damage>receber 5 de dano affliction<Damage>*, que <Invisible>não pode matá-lo<Invisible>. Requer <SkillName>'Power of Youth'<SkillName>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Affliction*"
      ],
      "cooldown": 0,
      "ruleDescription": "Lee gains momentum, dealing 25 piercing damage to one enemy. Afterwards, Lee will take 5 affliction damage*, which cannot kill him. Requires 'Power of Youth'. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee, Affliction*. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Lee ganha impulso, causando 25 de dano perfurante a um inimigo. Depois disso, Lee irá receber 5 de dano affliction*, que não pode matá-lo. Requer 'Power of Youth'. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee, Affliction*. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Maximum Force Blast",
      "file": "rock_lee_(s)_skill_2_(maximum_force_blast).png",
      "description": "Mixing the power of his gates, his allies, and everything he fights for, Lee deals 35 piercing damage to one enemy. The following turn, this skill will be replaced by 'Fifth Gate: Final Punch'. Requires 'Power of Youth'.",
      "descriptionBR": "Combinando o poder de seus portões, seus aliados e tudo pelo que luta, Lee causa 35 de dano perfurante a um inimigo. No próximo turno, esta habilidade será substituída por 'Fifth Gate: Final Punch'. Requer 'Power of Youth'.",
      "descriptionRaw": "Mixing the power of his gates, his allies, and everything he fights for, Lee <Damage>deals 35 piercing damage<Damage> to one enemy. The following turn, this skill will be replaced by <SkillName>'Fifth Gate: Final Punch'<SkillName>. Requires <SkillName>'Power of Youth'<SkillName>.",
      "descriptionBRRaw": "Combinando o poder de seus portões, seus aliados e tudo pelo que luta, Lee <Damage>causa 35 de dano perfurante<Damage> a um inimigo. No próximo turno, esta habilidade será substituída por <SkillName>'Fifth Gate: Final Punch'<SkillName>. Requer <SkillName>'Power of Youth'<SkillName>.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Mixing the power of his gates, his allies, and everything he fights for, Lee deals 35 piercing damage to one enemy. The following turn, this skill will be replaced by 'Fifth Gate: Final Punch'. Requires 'Power of Youth'. Chakra cost: 1 Tai, 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Combinando o poder de seus portões, seus aliados e tudo pelo que luta, Lee causa 35 de dano perfurante a um inimigo. No próximo turno, esta habilidade será substituída por 'Fifth Gate: Final Punch'. Requer 'Power of Youth'. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Power of Youth",
      "file": "rock_lee_(s)_skill_3_(power_of_youth).png",
      "description": "Lee pushes himself to fight harder. If a skill that deals damage is used on him, Lee's skills will deal 5 additional damage. While active, this skill be replaced by 'Fiery Spirit'.",
      "descriptionBR": "Lee se esforça para lutar com mais intensidade. Se uma habilidade que cause dano for usada nele, as habilidades de Lee causarão 5 de dano adicional. Enquanto estiver ativa, esta habilidade será substituída por 'Fiery Spirit'.",
      "descriptionRaw": "Lee pushes himself to fight harder. If a <Classes>skill<Classes> that <Invisible>deals damage is used<Invisible> on him, <SkillText>Lee's skills<SkillText> will deal 5 additional damage. While active, this skill be replaced by <SkillName>'Fiery Spirit'<SkillName>.",
      "descriptionBRRaw": "Lee se esforça para lutar com mais intensidade. Se uma<Classes> habilidade<Classes> que <Invisible>cause dano for usada<Invisible> nele, <SkillText>as habilidades de Lee<SkillText> causarão 5 de dano adicional. Enquanto estiver ativa, esta habilidade será substituída por <SkillName>'Fiery Spirit'<SkillName>.",
      "energy": [],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Lee pushes himself to fight harder. If a skill that deals damage is used on him, Lee's skills will deal 5 additional damage. While active, this skill be replaced by 'Fiery Spirit'. Chakra cost: no chakra cost listed. Catalog classes: Mental, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Lee se esforça para lutar com mais intensidade. Se uma habilidade que cause dano for usada nele, as habilidades de Lee causarão 5 de dano adicional. Enquanto estiver ativa, esta habilidade será substituída por 'Fiery Spirit'. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Jumping Dodge",
      "file": "rock_lee_(s)_skill_4_(jumping_dodge).jpeg",
      "description": "This skill makes Rock Lee (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Rock Lee (S) ficar invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Rock Lee (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Rock Lee (S) ficar <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Rock Lee (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Rock Lee (S) ficar invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Fifth Gate: Final Punch",
      "file": "rock_lee_(s)_skill_5_(fifth_gate_final_punch).png",
      "description": "Lee opens the Fifth Gate of Closing, dealing 50 piercing damage to one enemy. Afterwards, Lee will take 5 affliction damage*. This skill cannot be countered.",
      "descriptionBR": "Lee abre o Quinto Portão do Encerramento, causando 50 de dano perfurante a um inimigo. Depois disso, Lee irá receber 5 de dano affliction*. Essa habilidade não pode ser counterado.",
      "descriptionRaw": "Lee opens the Fifth Gate of Closing, <Damage>dealing 50 piercing damage<Damage> to one enemy. Afterwards, Lee will <Damage>take 5 affliction damage<Damage>*. This skill <Classes>cannot be countered<Classes>.",
      "descriptionBRRaw": "Lee abre o Quinto Portão do Encerramento, <Damage>causando 50 de dano perfurante<Damage> a um inimigo. Depois disso, Lee irá <Damage>receber 5 de dano affliction<Damage>*. Essa habilidade <Classes>não pode ser counterado<Classes>.",
      "energy": [
        "Tai",
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Affliction*"
      ],
      "cooldown": 0,
      "ruleDescription": "Lee opens the Fifth Gate of Closing, dealing 50 piercing damage to one enemy. Afterwards, Lee will take 5 affliction damage*. This skill cannot be countered. Chakra cost: 2 Tai. Catalog classes: Physical, Instant, Melee, Affliction*. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Lee abre o Quinto Portão do Encerramento, causando 50 de dano perfurante a um inimigo. Depois disso, Lee irá receber 5 de dano affliction*. Essa habilidade não pode ser counterado. Custo de chakra: 2 taijutsu. Classes no catálogo: Physical, Instant, Melee, Affliction*. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Fiery Spirit",
      "file": "rock_lee_(s)_skill_6_(fiery_spirit).jpeg",
      "description": "Lee hypes himself up, gaining 1 taijutsu chakra and healing 10 health and an additional 10 health for each 25 health Lee has lost.",
      "descriptionBR": "Lee se anima, ganhando 1 taijutsu chakra e recuperando 10 de vida e mais 10 de vida a cada 25 de vida que Lee tenha perdido.",
      "descriptionRaw": "Lee hypes himself up, <Effects>gaining 1 taijutsu chakra<Effects> and <Defense>healing 10 health<Defense> and an <Improvements>additional 10 health<Improvements> for each 25 health Lee has lost.",
      "descriptionBRRaw": "Lee se anima, <Effects>ganhando 1 taijutsu chakra<Effects> e <Defense>recuperando 10 de vida<Defense> e <Improvements>mais 10 de vida<Improvements> a cada 25 de vida que Lee tenha perdido.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Lee hypes himself up, gaining 1 taijutsu chakra and healing 10 health and an additional 10 health for each 25 health Lee has lost. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Lee se anima, ganhando 1 taijutsu chakra e recuperando 10 de vida e mais 10 de vida a cada 25 de vida que Lee tenha perdido. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
