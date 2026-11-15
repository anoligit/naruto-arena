// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Uchiha Shisui (S)",
  "description": "A member of the prestigious Uchiha clan, and the best friend of Uchiha Itachi; Shisui is a highly trained ninja that is utterly devoted to Konoha. Shisui is one of the few known ninjas capable of using one the most powerful genjutsu: Koto Amatsukami.",
  "descriptionBR": "Um membro do prestigiado clã Uchiha e melhor amigo de Uchiha Itachi, Shisui é um ninja altamente treinado e completamente devoto a Konoha. Shisui é um dos poucos ninjas conhecidos capazes de usar um dos genjutsus mais poderosos: Koto Amatsukami.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "uchiha_shisui_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Shisui: Susanoo",
      "file": "uchiha_shisui_(s)_skill_1_(shisui_susanoo).png",
      "description": "Shisui activates his still immature Susanoo, gaining 45 destructible defense. During this time, this skill will be replaced by 'Tsukumo'. Using this skill will reset the stacks of 'Tsukumo'.",
      "descriptionBR": "Shisui ativa seu Susanoo ainda imaturo, recebendo 45 de defesa destrutível. Durante esse tempo, esta habilidade será substituída por 'Tsukumo'. Usar esta habilidade reiniciará os stacks de 'Tsukumo'.",
      "descriptionRaw": "Shisui activates his still immature Susanoo, <Defense>gaining 45 destructible defense<Defense>. During this time, this skill will be <Effects>replaced<Effects> by <SkillName>'Tsukumo'<SkillName>. Using this skill will <Classes>reset<Classes> the stacks of <SkillName>'Tsukumo'<SkillName>.",
      "descriptionBRRaw": "Shisui ativa seu Susanoo ainda imaturo, <Defense>recebendo 45 de defesa destrutível<Defense>. Durante esse tempo, esta habilidade será <Effects>substituída<Effects> por <SkillName>'Tsukumo'<SkillName>. Usar esta habilidade <Classes>reiniciará<Classes> os stacks de <SkillName>'Tsukumo'<SkillName>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "Shisui activates his still immature Susanoo, gaining 45 destructible defense. During this time, this skill will be replaced by 'Tsukumo'. Using this skill will reset the stacks of 'Tsukumo'. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shisui ativa seu Susanoo ainda imaturo, recebendo 45 de defesa destrutível. Durante esse tempo, esta habilidade será substituída por 'Tsukumo'. Usar esta habilidade reiniciará os stacks de 'Tsukumo'. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Body Flicker",
      "file": "uchiha_shisui_(s)_skill_2_(body_flicker).png",
      "description": "For 2 turns, if a new harmful skill is used on Shisui, he will become invulnerable to all other skills for the rest of that turn and will deal 15 damage to the enemy that used the harmful skill. This skill is invisible.",
      "descriptionBR": "Por 2 turnos, se uma nova habilidade ofensiva for usada contra Shisui, ele se tornará invulnerável a todas as outras habilidades pelo restante daquele turno e irá causar 15 de dano ao inimigo que usou a habilidade ofensiva. Essa habilidade é invisível.",
      "descriptionRaw": "For 2 turns, if a <Classes>new harmful skill is used<Classes> on Shisui, he will become <Defense>invulnerable<Defense> to all other skills for the <Classes>rest of that turn<Classes> and will <Damage>deal 15 damage<Damage> to the enemy that used the harmful skill. <Invisible>This skill is invisible<Invisible>.",
      "descriptionBRRaw": "Por 2 turnos, se <Classes>uma nova habilidade ofensiva<Classes> for usada contra Shisui, ele se tornará <Defense>invulnerável<Defense> a todas as outras habilidades pelo <Classes>restante daquele turno<Classes> e irá <Damage>causar 15 de dano<Damage> ao inimigo que usou a habilidade ofensiva. <Invisible>Essa habilidade é invisível<Invisible>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "For 2 turns, if a new harmful skill is used on Shisui, he will become invulnerable to all other skills for the rest of that turn and will deal 15 damage to the enemy that used the harmful skill. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 2 turnos, se uma nova habilidade ofensiva for usada contra Shisui, ele se tornará invulnerável a todas as outras habilidades pelo restante daquele turno e irá causar 15 de dano ao inimigo que usou a habilidade ofensiva. Essa habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Kotoamatsukami",
      "file": "uchiha_shisui_(s)_skill_3_(kotoamatsukami).png",
      "description": "Shisui activates one of the most powerful genjutsu and targets one enemy. For 1 turn, the first harmful skill used by that enemy will also be applied on a random member of that enemy's team. The following turn, the target will be dealt 25 piercing damage. This skill is invisible and ignores invulnerability.",
      "descriptionBR": "Shisui ativa um dos genjutsus mais poderosos e marca um inimigo. Por 1 turno, a primeira habilidade ofensiva usada por esse inimigo também será aplicada a um membro aleatório do time inimigo. No próximo turno, o alvo irá receber 25 de dano perfurante. Essa habilidade é invisível e ignora invulnerabilidade.",
      "descriptionRaw": "Shisui activates one of the most powerful genjutsu and targets one enemy. For 1 turn, the first <Classes>harmful skill used<Classes> by that enemy will also be <Effects>applied<Effects> on a <Classes>random member<Classes> of that enemy's team. The following turn, the target will be <Damage>dealt 25 piercing damage<Damage>. <Invisible>This skill is invisible<Invisible> and <Classes>ignores invulnerability<Classes>.",
      "descriptionBRRaw": "Shisui ativa um dos genjutsus mais poderosos e marca um inimigo. Por 1 turno, a primeira <Classes>habilidade ofensiva usada<Classes> por esse inimigo também será <Effects>aplicada<Effects> a um <Classes>membro aleatório<Classes> do time inimigo. No próximo turno, o alvo irá <Damage>receber 25 de dano perfurante<Damage>. <Invisible>Essa habilidade é invisível<Invisible> e <Classes>ignora invulnerabilidade<Classes>.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Shisui activates one of the most powerful genjutsu and targets one enemy. For 1 turn, the first harmful skill used by that enemy will also be applied on a random member of that enemy's team. The following turn, the target will be dealt 25 piercing damage. This skill is invisible and ignores invulnerability. Chakra cost: 1 Gen, 1 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shisui ativa um dos genjutsus mais poderosos e marca um inimigo. Por 1 turno, a primeira habilidade ofensiva usada por esse inimigo também será aplicada a um membro aleatório do time inimigo. No próximo turno, o alvo irá receber 25 de dano perfurante. Essa habilidade é invisível e ignora invulnerabilidade. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Shisui Intercept",
      "file": "uchiha_shisui_(s)_skill_4_(shisui_intercept).png",
      "description": "This skill makes Uchiha Shisui (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Uchiha Shisui (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Uchiha Shisui (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Uchiha Shisui (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Uchiha Shisui (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Uchiha Shisui (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Tsukumo",
      "file": "uchiha_shisui_(s)_skill_5_(tsukumo).png",
      "description": "Shisui activates his Susanoo's power, sending out a barrage of chakra needles dealing 15 damage to all enemies and reducing their non-affliction damage by 5. For each turn that 'Shisui: Susanoo' is activated, the damage reducing effect will last 1 additional turn.",
      "descriptionBR": "Shisui ativa o poder do seu Susanoo, lançando uma rajada de agulhas de chakra que irá causar 15 de dano a todos os inimigos e reduzir em 5 o dano não-affliction deles. Para cada turno que 'Shisui: Susanoo' estiver ativado, o efeito de redução de dano irá durar 1 turno adicional.",
      "descriptionRaw": "Shisui activates his Susanoo's power, sending out a barrage of chakra needles <Damage>dealing 15 damage<Damage> to all enemies and <Effects>reducing<Effects> their <Classes>non-affliction damage<Classes> by 5. For each turn that <SkillName>'Shisui: Susanoo'<SkillName> is activated, the <Effects>damage reducing<Effects> effect will <Improvements>last 1 additional turn<Improvements>.",
      "descriptionBRRaw": "Shisui ativa o poder do seu Susanoo, lançando uma rajada de agulhas de chakra que irá <Damage>causar 15 de dano<Damage> a todos os inimigos e <Effects>reduzir<Effects> em 5 o <Classes>dano não-affliction<Classes> deles. Para cada turno que <SkillName>'Shisui: Susanoo'<SkillName> estiver ativado, o efeito de <Effects>redução de dano<Effects> irá <Improvements>durar 1 turno adicional<Improvements>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Shisui activates his Susanoo's power, sending out a barrage of chakra needles dealing 15 damage to all enemies and reducing their non-affliction damage by 5. For each turn that 'Shisui: Susanoo' is activated, the damage reducing effect will last 1 additional turn. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shisui ativa o poder do seu Susanoo, lançando uma rajada de agulhas de chakra que irá causar 15 de dano a todos os inimigos e reduzir em 5 o dano não-affliction deles. Para cada turno que 'Shisui: Susanoo' estiver ativado, o efeito de redução de dano irá durar 1 turno adicional. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
