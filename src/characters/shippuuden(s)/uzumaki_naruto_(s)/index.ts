// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Uzumaki Naruto (S)",
  "description": "After nearly three years of secluded training with Jiraiya, Naruto(s) has returned to Konoha with a greatly improved arsenal of ninja skills.",
  "descriptionBR": "Após quase três anos de treinamento isolado com Jiraiya, Naruto (S) retornou a Konoha com um arsenal de habilidades ninja muito mais aprimorado.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "uzumaki_naruto_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Oodama Rasengan",
      "file": "uzumaki_naruto_(s)_skill_1_(oodama_rasengan).png",
      "description": "Naruto uses a greater version of Rasengan, dealing 40 piercing damage to one enemy, ignoring invulnerability. During 'Kyuubi Boost', this skill will stun their non-mental skills for 1 turn. Afterwards, Naruto takes 5 affliction damage*. During 'Passive: Three Tails Release', this skill will be replaced.",
      "descriptionBR": "Naruto usa uma versão maior do Rasengan, causando 40 de dano perfurante a um inimigo, ignorando invulnerabilidade. Durante 'Kyuubi Boost', esta habilidade irá atordoar as habilidades não mentais desse inimigo por 1 turno. Depois, Naruto recebe 5 de dano affliction*. Durante 'Passive: Three Tails Release', esta habilidade será substituída.",
      "descriptionRaw": "Naruto uses a greater version of Rasengan, <Damage>dealing 40 piercing damage<Damage> to one enemy, <Invisible>ignoring invulnerability<Invisible>. During <SkillName>'Kyuubi Boost'<SkillName>, this skill will <Effects>stun<Effects> their <Classes>non-mental skills<Classes> for 1 turn. Afterwards, Naruto <Damage>takes 5 affliction damage<Damage>*. During <SkillName>'Passive: Three Tails Release'<SkillName>, this skill will be <Improvements>replaced<Improvements>.",
      "descriptionBRRaw": "Naruto usa uma versão maior do Rasengan, <Damage>causando 40 de dano perfurante<Damage> a um inimigo, <Invisible>ignorando invulnerabilidade<Invisible>. Durante <SkillName>'Kyuubi Boost'<SkillName>, esta habilidade irá <Effects>atordoar<Effects> as <Classes>habilidades não mentais<Classes> desse inimigo por 1 turno. Depois, Naruto <Damage>recebe 5 de dano affliction<Damage>*. Durante <SkillName>'Passive: Three Tails Release'<SkillName>, esta habilidade será <Improvements>substituída<Improvements>.",
      "energy": [
        "Tai",
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee",
        "Affliction*"
      ],
      "cooldown": 0,
      "ruleDescription": "Naruto uses a greater version of Rasengan, dealing 40 piercing damage to one enemy, ignoring invulnerability. During 'Kyuubi Boost', this skill will stun their non-mental skills for 1 turn. Afterwards, Naruto takes 5 affliction damage*. During 'Passive: Three Tails Release', this skill will be replaced. Chakra cost: 1 Tai, 1 Nin. Catalog classes: Chakra, Instant, Melee, Affliction*. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naruto usa uma versão maior do Rasengan, causando 40 de dano perfurante a um inimigo, ignorando invulnerabilidade. Durante 'Kyuubi Boost', esta habilidade irá atordoar as habilidades não mentais desse inimigo por 1 turno. Depois, Naruto recebe 5 de dano affliction*. Durante 'Passive: Three Tails Release', esta habilidade será substituída. Custo de chakra: 1 taijutsu, 1 ninjutsu. Classes no catálogo: Chakra, Instant, Melee, Affliction*. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Shadow Clones: Rasengan",
      "file": "uzumaki_naruto_(s)_skill_2_(shadow_clones_rasengan).png",
      "description": "The following turn, Naruto will deal 20 piercing damage to one enemy. During this time, Naruto will ignore all harmful effects. During 'Passive: Three Tails Release', this skill will be replaced. The target of this skill is invisible.",
      "descriptionBR": "No turno seguinte, Naruto irá causar 20 de dano perfurante a um inimigo. Durante esse tempo, Naruto irá ignorar todos os efeitos ofensivos. Durante 'Passive: Three Tails Release', esta habilidade será substituída. O alvo desta habilidade é invisível.",
      "descriptionRaw": "The following turn, Naruto will <Damage>deal 20 piercing damage<Damage> to one enemy. During this time, Naruto will <Defense>ignore all harmful effects<Defense>. During <SkillName>'Passive: Three Tails Release'<SkillName>, this skill will be <Improvements>replaced<Improvements>. The target of this skill is <Invisible>invisible<Invisible>.",
      "descriptionBRRaw": "No turno seguinte, Naruto irá <Damage>causar 20 de dano perfurante<Damage> a um inimigo. Durante esse tempo, Naruto irá <Defense>ignorar todos os efeitos ofensivos<Defense>. Durante <SkillName>'Passive: Three Tails Release'<SkillName>, esta habilidade será <Improvements>substituída<Improvements>. O alvo desta habilidade é <Invisible>invisível<Invisible>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Action",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "The following turn, Naruto will deal 20 piercing damage to one enemy. During this time, Naruto will ignore all harmful effects. During 'Passive: Three Tails Release', this skill will be replaced. The target of this skill is invisible. Chakra cost: 1 Random. Catalog classes: Chakra, Action, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "No turno seguinte, Naruto irá causar 20 de dano perfurante a um inimigo. Durante esse tempo, Naruto irá ignorar todos os efeitos ofensivos. Durante 'Passive: Three Tails Release', esta habilidade será substituída. O alvo desta habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Action, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Kyuubi Boost",
      "file": "uzumaki_naruto_(s)_skill_3_(kyuubi_boost).jpg",
      "description": "Naruto loses 10 health* and gains 1 ninjutsu chakra. For 3 turns, he will have 10 points of damage reduction. The following 3 turns, he will ignore stun effects and this skill will be replaced by 'Kyuubi Empowered Rasengan'. Cannot be used during 'Passive: Three Tails Transformation'.",
      "descriptionBR": "Naruto perde 10 de vida* e ganha 1 chakra ninjutsu. Por 3 turnos, ele terá 10 pontos de redução de dano. Nos próximos 3 turnos, ele irá ignorar efeitos de atordoamento e essa habilidade será substituída por 'Kyuubi Empowered Rasengan'. Não pode ser usada durante 'Passive: Three Tails Transformation'.",
      "descriptionRaw": "Naruto <Damage>loses 10 health*<Damage> and <Effects>gains 1 ninjutsu chakra<Effects>. For 3 turns, he will have 10 <Defense>points of damage reduction<Defense>. The following 3 turns, he will <Defense>ignore stun effects<Defense> and this skill will be <Improvements>replaced<Improvements> by <SkillName>'Kyuubi Empowered Rasengan'<SkillName>. Cannot be used during <SkillName>'Passive: Three Tails Transformation'<SkillName>.",
      "descriptionBRRaw": "Naruto <Damage>perde 10 de vida*<Damage> e <Effects>ganha 1 chakra ninjutsu<Effects>. Por 3 turnos, ele terá 10 <Defense>pontos de redução de dano<Defense>. Nos próximos 3 turnos, ele irá <Defense>ignorar efeitos de atordoamento<Defense> e essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Kyuubi Empowered Rasengan'<SkillName>. Não pode ser usada durante <SkillName>'Passive: Three Tails Transformation'<SkillName>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Affliction*"
      ],
      "cooldown": 3,
      "ruleDescription": "Naruto loses 10 health* and gains 1 ninjutsu chakra. For 3 turns, he will have 10 points of damage reduction. The following 3 turns, he will ignore stun effects and this skill will be replaced by 'Kyuubi Empowered Rasengan'. Cannot be used during 'Passive: Three Tails Transformation'. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Affliction*. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naruto perde 10 de vida* e ganha 1 chakra ninjutsu. Por 3 turnos, ele terá 10 pontos de redução de dano. Nos próximos 3 turnos, ele irá ignorar efeitos de atordoamento e essa habilidade será substituída por 'Kyuubi Empowered Rasengan'. Não pode ser usada durante 'Passive: Three Tails Transformation'. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Affliction*. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Shadow Clone Save",
      "file": "uzumaki_naruto_(s)_skill_4_(shadow_clone_save).png",
      "description": "This skill makes Uzumaki Naruto (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Uzumaki Naruto (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Uzumaki Naruto (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Uzumaki Naruto (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Uzumaki Naruto (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Uzumaki Naruto (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Kyuubi Empowered Rasengan",
      "file": "uzumaki_naruto_(s)_skill_5_(kyuubi_empowered_rasengan).png",
      "description": "Naruto uses a Rasengan empowered by the Kyuubi chakra, dealing 25 damage to one enemy and stunning their non-mental skills for 1 turn.",
      "descriptionBR": "Naruto usa um Rasengan fortalecido pelo chakra do Kyuubi, causando 25 de dano a um inimigo e atordoando suas habilidades não mentais por 1 turno.",
      "descriptionRaw": "Naruto uses a Rasengan empowered by the Kyuubi chakra, <Damage>dealing 25 damage<Damage> to one enemy and <Effects>stunning<Effects> their <Classes>non-mental skills<Classes> for 1 turn.",
      "descriptionBRRaw": "Naruto usa um Rasengan fortalecido pelo chakra do Kyuubi, <Damage>causando 25 de dano<Damage> a um inimigo e <Effects>atordoando<Effects> suas <Classes>habilidades não mentais<Classes> por 1 turno.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Naruto uses a Rasengan empowered by the Kyuubi chakra, dealing 25 damage to one enemy and stunning their non-mental skills for 1 turn. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naruto usa um Rasengan fortalecido pelo chakra do Kyuubi, causando 25 de dano a um inimigo e atordoando suas habilidades não mentais por 1 turno. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Passive: Three Tails Release",
      "file": "uzumaki_naruto_(s)_skill_6_(passive_three_tails_release).png",
      "description": "Each time Naruto uses 'Oodama Rasengan' or 'Kyuubi Empowered Rasengan', he will gain 1 Kyuubi Rage stack. At 4 Kyuubi Rage stacks, Kyuubi chakra will be released for 3 turns, removing all harmful skills, granting 50% unpierceable damage reduction, ignoring stun effects, and improving his skills.",
      "descriptionBR": "Cada vez que Naruto usar 'Oodama Rasengan' ou 'Kyuubi Empowered Rasengan', ele irá ganhar 1 stack de Kyuubi Rage. Ao atingir 4 stacks de Kyuubi Rage, o chakra do Kyuubi será liberado por 3 turnos, removendo todas as habilidades ofensivas, concedendo 50% de redução de dano impenetrável, ignorando efeitos de atordoamento e melhorando suas habilidades.",
      "descriptionRaw": "Each time Naruto uses <SkillName>'Oodama Rasengan'<SkillName> or <SkillName>'Kyuubi Empowered Rasengan'<SkillName>, he will <Effects>gain 1 Kyuubi Rage stack<Effects>. At 4 Kyuubi Rage stacks, Kyuubi chakra will be released for 3 turns, <Effects>removing all harmful skills<Effects>, <Defense>granting 50% unpierceable damage reduction<Defense>, <Defense>ignoring stun effects<Defense>, and <Improvements>improving his skills<Improvements>.",
      "descriptionBRRaw": "Cada vez que Naruto usar <SkillName>'Oodama Rasengan'<SkillName> ou <SkillName>'Kyuubi Empowered Rasengan'<SkillName>, ele irá <Effects>ganhar 1 stack de Kyuubi Rage<Effects>. Ao atingir 4 stacks de Kyuubi Rage, o chakra do Kyuubi será liberado por 3 turnos, <Effects>removendo todas as habilidades ofensivas<Effects>, <Defense>concedendo 50% de redução de dano impenetrável<Defense>, <Defense>ignorando efeitos de atordoamento<Defense> e <Improvements>melhorando suas habilidades<Improvements>.",
      "energy": [],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Each time Naruto uses 'Oodama Rasengan' or 'Kyuubi Empowered Rasengan', he will gain 1 Kyuubi Rage stack. At 4 Kyuubi Rage stacks, Kyuubi chakra will be released for 3 turns, removing all harmful skills, granting 50% unpierceable damage reduction, ignoring stun effects, and improving his skills. Chakra cost: no chakra cost listed. Catalog classes: Mental, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Cada vez que Naruto usar 'Oodama Rasengan' ou 'Kyuubi Empowered Rasengan', ele irá ganhar 1 stack de Kyuubi Rage. Ao atingir 4 stacks de Kyuubi Rage, o chakra do Kyuubi será liberado por 3 turnos, removendo todas as habilidades ofensivas, concedendo 50% de redução de dano impenetrável, ignorando efeitos de atordoamento e melhorando suas habilidades. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 7,
      "name": "Three-Tail: Claw Smash",
      "file": "uzumaki_naruto_(s)_skill_7_(three-tail_claw_smash).png",
      "description": "Naruto dashes forward and strikes one enemy with a powerful smash, dealing 40 piercing damage and stunning their non-mental skills for 1 turn. Afterwards, Naruto takes 5 affliction damage. This skill ignores invulnerability.",
      "descriptionBR": "Naruto avança e atinge um inimigo com um golpe poderoso, causando 40 de dano perfurante e atordoando suas habilidades não mentais por 1 turno. Depois, Naruto recebe 5 de dano affliction. Esta habilidade ignora invulnerabilidade.",
      "descriptionRaw": "Naruto dashes forward and strikes one enemy with a powerful smash, <Damage>dealing 40 piercing damage<Damage> and <Effects>stunning<Effects> their <Classes>non-mental skills<Classes> for 1 turn. Afterwards, Naruto <Damage>takes 5 affliction damage<Damage>. This skill <Invisible>ignores invulnerability<Invisible>.",
      "descriptionBRRaw": "Naruto avança e atinge um inimigo com um golpe poderoso, <Damage>causando 40 de dano perfurante<Damage> e <Effects>atordoando<Effects> suas <Classes>habilidades não mentais<Classes> por 1 turno. Depois, Naruto <Damage>recebe 5 de dano affliction<Damage>. Esta habilidade <Invisible>ignora invulnerabilidade<Invisible>.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "Affliction*"
      ],
      "cooldown": 0,
      "ruleDescription": "Naruto dashes forward and strikes one enemy with a powerful smash, dealing 40 piercing damage and stunning their non-mental skills for 1 turn. Afterwards, Naruto takes 5 affliction damage. This skill ignores invulnerability. Chakra cost: 2 Random. Catalog classes: Physical, Instant, Melee, Affliction*. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naruto avança e atinge um inimigo com um golpe poderoso, causando 40 de dano perfurante e atordoando suas habilidades não mentais por 1 turno. Depois, Naruto recebe 5 de dano affliction. Esta habilidade ignora invulnerabilidade. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant, Melee, Affliction*. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 8,
      "name": "Three-Tail: Chakra Shockwave",
      "file": "uzumaki_naruto_(s)_skill_8_(three-tail_chakra_shockwave).png",
      "description": "The following turn, Naruto will deal 20 affliction damage to all enemies. During this time, Naruto will ignore all harmful effects. This skill is invisible.",
      "descriptionBR": "No próximo turno, Naruto irá causar 20 de dano affliction a todos os inimigos. Durante esse tempo, Naruto irá ignorar todos os efeitos ofensivos. Esta habilidade é invisível.",
      "descriptionRaw": "The following turn, Naruto will <Damage>deal 20 affliction damage<Damage> to all enemies. During this time, Naruto will <Defense>ignore all harmful effects<Defense>. This skill is <Invisible>invisible<Invisible>.",
      "descriptionBRRaw": "No próximo turno, Naruto irá <Damage>causar 20 de dano affliction<Damage> a todos os inimigos. Durante esse tempo, Naruto irá <Defense>ignorar todos os efeitos ofensivos<Defense>. Esta habilidade é <Invisible>invisível<Invisible>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Action",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "The following turn, Naruto will deal 20 affliction damage to all enemies. During this time, Naruto will ignore all harmful effects. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Affliction, Action, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "No próximo turno, Naruto irá causar 20 de dano affliction a todos os inimigos. Durante esse tempo, Naruto irá ignorar todos os efeitos ofensivos. Esta habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Action, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
