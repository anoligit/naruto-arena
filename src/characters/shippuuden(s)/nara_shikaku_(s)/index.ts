// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Nara Shikaku (S)",
  "description": "The father of Nara Shikamaru, and the head of the Nara clan, Shikaku is a cool-headed Jounin of Konoha who will go to any lengths to protect his friends and family. In battle, Shikaku is merciless, combining his impressive shadow imitation skills with his unparalleled intellect to grab victory for his team.",
  "descriptionBR": "Pai de Nara Shikamaru e líder do clã Nara, Shikaku é um jounin de Konoha de cabeça fria, que faz de tudo para proteger seus amigos e família. Em batalha, é implacável, combinando suas habilidades de imitação de sombras com uma inteligência incomparável para garantir a vitória de sua equipe.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "nara_shikaku_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Master Shadow Imitation",
      "file": "nara_shikaku_(s)_skill_1_(master_shadow_imitation).png",
      "description": "Shikaku grabs an enemy with his shadow, forcing their body to do as he pleases. That enemy will take 20 damage and have their non-mental skills stunned for 2 turns. The following turn, this skill will be replaced by 'Shadow Dispersion'.",
      "descriptionBR": "Shikaku prende um inimigo com sua sombra, forçando seu corpo a obedecer. Esse inimigo receberá 20 de dano e terá suas habilidades não-mentais atordoadas por 2 turnos. No turno seguinte, esta habilidade será substituída por 'Shadow Dispersion'.",
      "descriptionRaw": "Shikaku grabs an enemy with his shadow, forcing their body to do as he pleases. That enemy will <Damage>take 20 damage<Damage> and have their <Classes>non-mental skills<Classes> <Effects>stunned<Effects> for 2 turns. The following turn, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Shadow Dispersion'<SkillName>.",
      "descriptionBRRaw": "Shikaku prende um inimigo com sua sombra, forçando seu corpo a obedecer. Esse inimigo <Damage>receberá 20 de dano<Damage> e terá suas habilidades <Classes>não-mentais<Classes> <Effects>atordoadas<Effects> por 2 turnos. No turno seguinte, esta habilidade será <Improvements>substituída<Improvements> por <SkillName>'Shadow Dispersion'<SkillName>.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Control",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Shikaku grabs an enemy with his shadow, forcing their body to do as he pleases. That enemy will take 20 damage and have their non-mental skills stunned for 2 turns. The following turn, this skill will be replaced by 'Shadow Dispersion'. Chakra cost: 1 Gen, 1 Random. Catalog classes: Chakra, Control, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shikaku prende um inimigo com sua sombra, forçando seu corpo a obedecer. Esse inimigo receberá 20 de dano e terá suas habilidades não-mentais atordoadas por 2 turnos. No turno seguinte, esta habilidade será substituída por 'Shadow Dispersion'. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Chakra, Control, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Black Spider Lily",
      "file": "nara_shikaku_(s)_skill_2_(black_spider_lily).png",
      "description": "Shikaku extends his shadows out to his enemies. For 3 turns, Shikaku's skills will deal an additional 10 damage to them, and each time they use a new stun skill, then for 3 turns the next time Shikaku stuns that enemy, they will be stunned for 1 additional turn.",
      "descriptionBR": "Shikaku estende suas sombras até os inimigos. Por 3 turnos, as habilidades de Shikaku causarão 10 de dano adicional a eles e, cada vez que usarem uma nova habilidade de atordoamento, caso sejam atordoados por Shikaku nos próximos 3 turnos, o atordoamento durará 1 turno a mais.",
      "descriptionRaw": "Shikaku extends his shadows out to his enemies. For 3 turns, Shikaku's skills will deal an additional 10 damage to them, and each time they use a new stun skill, then for 3 turns the next time Shikaku stuns that enemy, they will be stunned for 1 additional turn.",
      "descriptionBRRaw": "Shikaku estende suas sombras até os inimigos. Por 3 turnos, as habilidades de Shikaku causarão 10 de dano adicional a eles e, cada vez que usarem uma nova habilidade de atordoamento, caso sejam atordoados por Shikaku nos próximos 3 turnos, o atordoamento durará 1 turno a mais.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "Shikaku extends his shadows out to his enemies. For 3 turns, Shikaku's skills will deal an additional 10 damage to them, and each time they use a new stun skill, then for 3 turns the next time Shikaku stuns that enemy, they will be stunned for 1 additional turn. Chakra cost: 1 Gen. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shikaku estende suas sombras até os inimigos. Por 3 turnos, as habilidades de Shikaku causarão 10 de dano adicional a eles e, cada vez que usarem uma nova habilidade de atordoamento, caso sejam atordoados por Shikaku nos próximos 3 turnos, o atordoamento durará 1 turno a mais. Custo de chakra: 1 genjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Problem Analysis",
      "file": "nara_shikaku_(s)_skill_3_(problem_analysis).png",
      "description": "Shikaku targets himself or one ally for 1 turn, and the first new harmful non-affliction damage skill that is used on them will deal no damage and that ally will gain destructible defense equal to the original damage of that skill. This skill is invisible.",
      "descriptionBR": "Shikaku protege a si mesmo ou um aliado por 1 turno. A primeira nova habilidade ofensiva de dano não-aflitiva usada contra o alvo não causará dano, e o alvo ganhará defesa destrutível igual ao dano original da habilidade. Esta habilidade é invisível.",
      "descriptionRaw": "Shikaku targets himself or one ally for 1 turn, and the first new harmful non-affliction damage skill that is used on them will deal no damage and that ally will gain destructible defense equal to the original damage of that skill. This skill is invisible.",
      "descriptionBRRaw": "Shikaku protege a si mesmo ou um aliado por 1 turno. A primeira nova habilidade ofensiva de dano não-aflitiva usada contra o alvo não causará dano, e o alvo ganhará defesa destrutível igual ao dano original da habilidade. Esta habilidade é invisível.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "Shikaku targets himself or one ally for 1 turn, and the first new harmful non-affliction damage skill that is used on them will deal no damage and that ally will gain destructible defense equal to the original damage of that skill. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Shikaku protege a si mesmo ou um aliado por 1 turno. A primeira nova habilidade ofensiva de dano não-aflitiva usada contra o alvo não causará dano, e o alvo ganhará defesa destrutível igual ao dano original da habilidade. Esta habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Human Barricade",
      "file": "nara_shikaku_(s)_skill_4_(human_barricade).png",
      "description": "This skill makes Nara Shikaku (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Nara Shikaku (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Nara Shikaku (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Nara Shikaku (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Nara Shikaku (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Nara Shikaku (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Shadow Dispersion",
      "file": "nara_shikaku_(s)_skill_5_(shadow_dispersion).png",
      "description": "Nara Shikaku targets all enemies not affected by 'Master Shadow Imitation', stunning their non-mental skills for 1 turn and dealing 20 damage to them.",
      "descriptionBR": "Nara Shikaku atinge todos os inimigos que não estão afetados por 'Master Shadow Imitation', atordoando suas habilidades não-mentais por 1 turno e causando 20 de dano a eles.",
      "descriptionRaw": "Nara Shikaku targets all enemies not affected by <SkillName>'Master Shadow Imitation'<SkillName>, <Effects>stunning<Effects> their <Classes>non-mental skills<Classes> for 1 turn and <Damage>dealing 20 damage<Damage> to them.",
      "descriptionBRRaw": "Nara Shikaku atinge todos os inimigos que não estão afetados por <SkillName>'Master Shadow Imitation'<SkillName>, <Effects>atordoando<Effects> suas habilidades <Classes>não-mentais<Classes> por 1 turno e <Damage>causando 20 de dano<Damage> a eles.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Nara Shikaku targets all enemies not affected by 'Master Shadow Imitation', stunning their non-mental skills for 1 turn and dealing 20 damage to them. Chakra cost: 1 Gen. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Nara Shikaku atinge todos os inimigos que não estão afetados por 'Master Shadow Imitation', atordoando suas habilidades não-mentais por 1 turno e causando 20 de dano a eles. Custo de chakra: 1 genjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
