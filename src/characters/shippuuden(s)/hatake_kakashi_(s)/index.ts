// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hatake Kakashi (S)",
  "description": "Kakashi(s) has used the last couple years to improve upon his sharingan, giving him access to a new deadly but costly ability.",
  "descriptionBR": "Kakashi(s) usou os últimos anos para aprimorar seu Sharingan, concedendo-lhe acesso a uma habilidade nova, mortal porém custosa.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "hatake_kakashi_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Lightning Beast Fang",
      "file": "hatake_kakashi_(s)_skill_1_(lightning_beast_fang).png",
      "description": "Kakashi forms his raikiri into a lightning dog, dealing 25 piercing damage to one enemy and stunning their skills for 1 turn. The following turn, this skill will be replaced by 'Finishing Raikiri'.",
      "descriptionBR": "Kakashi molda seu raikiri em um cão de relâmpago, causando 25 de dano perfurante a um inimigo e atordando as habilidades dele por 1 turno. No turno seguinte, esta habilidade será substituída por 'Finishing Raikiri'.",
      "descriptionRaw": "Kakashi forms his raikiri into a lightning dog, <Damage>dealing 25 piercing damage<Damage> to one enemy and <Effects>stunning<Effects> their skills for 1 turn. The following turn, this skill will be <Effects>replaced<Effects> by <SkillName>'Finishing Raikiri'<SkillName>.",
      "descriptionBRRaw": "Kakashi molda seu raikiri em um cão de relâmpago, <Damage>causando 25 de dano perfurante<Damage> a um inimigo e <Effects>atordando<Effects> as habilidades dele por 1 turno. No turno seguinte, esta habilidade será <Effects>substituída<Effects> por <SkillName>'Finishing Raikiri'<SkillName>.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged",
        "stun"
      ],
      "cooldown": 0,
      "ruleDescription": "Kakashi forms his raikiri into a lightning dog, dealing 25 piercing damage to one enemy and stunning their skills for 1 turn. The following turn, this skill will be replaced by 'Finishing Raikiri'. Chakra cost: 1 Nin, 1 Random. Catalog classes: Chakra, Instant, Ranged, stun. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kakashi molda seu raikiri em um cão de relâmpago, causando 25 de dano perfurante a um inimigo e atordando as habilidades dele por 1 turno. No turno seguinte, esta habilidade será substituída por 'Finishing Raikiri'. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged, stun. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Kakashi Kamui",
      "file": "hatake_kakashi_(s)_skill_2_(kakashi_kamui).png",
      "description": "If used on an enemy, they will receive 45 piercing damage and for 1 turn the cost of their skills will be increased by 2 random. If used on an ally, all harmful effects on them will be removed and they will become invulnerable for 1 turn. This skill ignores invulnerability.",
      "descriptionBR": "Se usada em um inimigo, ele receberá 45 de dano perfurante e por 1 turno o custo de suas habilidades será aumentado em 2 chakras aleatórios. Se usada em um aliado, todos os efeitos ofensivos nele serão removidos e ele se tornará invulnerável por 1 turno. Esta habilidade ignora invulnerabilidade.",
      "descriptionRaw": "If used on an enemy, they will <Damage>receive 45 piercing damage<Damage> and for 1 turn the <Classes>cost of their skills<Classes> will be <Improvements>increased by 2 random<Improvements>. If used on an ally, all <Damage>harmful effects<Damage> on them will be <Defense>removed<Defense> and they will <Defense>become invulnerable<Defense> for 1 turn. This skill <Invisible>ignores invulnerability<Invisible>.",
      "descriptionBRRaw": "Se usada em um inimigo, ele <Damage>receberá 45 de dano perfurante<Damage> e por 1 turno o <Classes>custo de suas habilidades<Classes> será <Improvements>aumentado em 2 chakras aleatórios<Improvements>. Se usada em um aliado, todos os <Damage>efeitos ofensivos<Damage> nele serão <Defense>removidos<Defense> e ele se <Defense>tornará invulnerável<Defense> por 1 turno. Esta habilidade <Invisible>ignora invulnerabilidade<Invisible>.",
      "energy": [
        "Blood",
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "If used on an enemy, they will receive 45 piercing damage and for 1 turn the cost of their skills will be increased by 2 random. If used on an ally, all harmful effects on them will be removed and they will become invulnerable for 1 turn. This skill ignores invulnerability. Chakra cost: 2 Blood. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Se usada em um inimigo, ele receberá 45 de dano perfurante e por 1 turno o custo de suas habilidades será aumentado em 2 chakras aleatórios. Se usada em um aliado, todos os efeitos ofensivos nele serão removidos e ele se tornará invulnerável por 1 turno. Esta habilidade ignora invulnerabilidade. Custo de chakra: 2 linhagem sanguínea. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Team Tactics",
      "file": "hatake_kakashi_(s)_skill_3_(team_tactics).jpg",
      "description": "For 3 turns, Kakashi and his team will have will have the cooldown of their skills reduced by 1 for 3 turns. The following 3 turns, 'Kakashi Kamui' will be improved and will cost 1 bloodline and 1 random chakra.",
      "descriptionBR": "Por 3 turnos, os aliados de Kakashi terão o cooldown de suas habilidades reduzido em 1 por 3 turnos. Nos próximos 3 turnos, 'Kakashi Kamui' será aprimorada e irá custar 1 bloodline e 1 random chakra.",
      "descriptionRaw": "For 3 turns, <Defense>Kakashi and his team<Defense> will have will have the <Classes>cooldown<Classes> of <Classes>their skills<Classes> <Improvements>reduced by 1<Improvements> for 3 turns. The following 3 turns, <SkillName>'Kakashi Kamui'<SkillName> will be <Improvements>improved<Improvements> and will <Invisible>cost 1 bloodline and 1 random chakra<Invisible>.",
      "descriptionBRRaw": "Por 3 turnos, <Defense>os aliados de Kakashi<Defense> terão o <Classes>cooldown<Classes> de <Classes>suas habilidades<Classes> <Improvements>reduzido em 1<Improvements> por 3 turnos. Nos próximos 3 turnos, <SkillName>'Kakashi Kamui'<SkillName> será <Improvements>aprimorada<Improvements> e irá <Invisible>custar 1 bloodline e 1 random chakra<Invisible>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "For 3 turns, Kakashi and his team will have will have the cooldown of their skills reduced by 1 for 3 turns. The following 3 turns, 'Kakashi Kamui' will be improved and will cost 1 bloodline and 1 random chakra. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 3 turnos, os aliados de Kakashi terão o cooldown de suas habilidades reduzido em 1 por 3 turnos. Nos próximos 3 turnos, 'Kakashi Kamui' será aprimorada e irá custar 1 bloodline e 1 random chakra. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Bunshin Stand-in",
      "file": "hatake_kakashi_(s)_skill_4_(bunshin_stand-in).jpg",
      "description": "This skill makes Hatake Kakashi (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Hatake Kakashi (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Hatake Kakashi (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Hatake Kakashi (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Hatake Kakashi (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Hatake Kakashi (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Finishing Raikiri",
      "file": "hatake_kakashi_(s)_skill_5_(finishing_raikiri).png",
      "description": "Kakashi moves to finish off an enemy, dealing 40 piercing damage to one enemy. This skill will deal an additional 10 damage to that enemy if they are stunned or if 'Lightning Beast Fang' was used on them the previous turn.",
      "descriptionBR": "Kakashi parte para finalizar um inimigo, causando 40 de dano perfurante a ele. Esta habilidade causará 10 de dano adicional a esse inimigo se o inimigo estiver atordoado ou se 'Lightning Beast Fang' tiver sido usada nele no turno anterior.",
      "descriptionRaw": "Kakashi moves to finish off an enemy, <Damage>dealing 40 piercing damage<Damage> to one enemy. This skill will <Improvements>deal an additional 10 damage<Improvements> to that enemy <Classes>if they are stunned<Classes> or if <SkillName>'Lightning Beast Fang'<SkillName> was <Classes>used on them<Classes> the previous turn.",
      "descriptionBRRaw": "Kakashi parte para finalizar um inimigo, <Damage>causando 40 de dano perfurante<Damage> a ele. Esta habilidade <Improvements>causará 10 de dano adicional<Improvements> a esse inimigo <Classes>se o inimigo estiver atordoado<Classes> ou se <SkillName>'Lightning Beast Fang'<SkillName> tiver sido <Classes>usada nele<Classes> no turno anterior.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Kakashi moves to finish off an enemy, dealing 40 piercing damage to one enemy. This skill will deal an additional 10 damage to that enemy if they are stunned or if 'Lightning Beast Fang' was used on them the previous turn. Chakra cost: 1 Nin, 1 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kakashi parte para finalizar um inimigo, causando 40 de dano perfurante a ele. Esta habilidade causará 10 de dano adicional a esse inimigo se o inimigo estiver atordoado ou se 'Lightning Beast Fang' tiver sido usada nele no turno anterior. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
