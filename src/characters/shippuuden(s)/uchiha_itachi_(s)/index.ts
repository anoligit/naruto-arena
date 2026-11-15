// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Uchiha Itachi (S)",
  "description": "Uchiha Itachi is a member of Akatsuki, and the brother of Uchiha Sasuke. He has mastered the sharingan completely.",
  "descriptionBR": "Uchiha Itachi é um membro da Akatsuki e irmão de Uchiha Sasuke. Ele dominou completamente o sharingan.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "uchiha_itachi_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Amaterasu Field",
      "file": "uchiha_itachi_(s)_skill_1_(amaterasu_field).jpg",
      "description": "Itachi creates a field around his team using Amaterasu. For 1 turn, any enemy that uses a new skill on Itachi or his allies will be dealt 5 affliction damage permanently*. This skill is invisible and is replaced by 'Mangekyou Overexertion' for 1 turn.",
      "descriptionBR": "Itachi cria um campo ao redor de sua equipe usando Amaterasu. Por 1 turno, qualquer inimigo que usar uma nova habilidade em Itachi ou em seus aliados receberá 5 de dano affliction permanentemente*. Esta habilidade é invisível e é substituída por 'Mangekyou Overexertion' por 1 turno.",
      "descriptionRaw": "Itachi creates a field around his team using Amaterasu. For 1 turn, any enemy<Effects> that uses a new skill on Itachi or his allies<Effects> will be dealt <Damage>5 affliction damage<Damage> permanently*. This skill is <Invisible>invisible<Invisible> and <Effects>is replaced by<Effects> <SkillName>'Mangekyou Overexertion'<SkillName> for 1 turn.",
      "descriptionBRRaw": "Itachi cria um campo ao redor de sua equipe usando Amaterasu. Por 1 turno, qualquer inimigo <Effects>que usar uma nova habilidade em Itachi ou em seus aliados<Effects> receberá <Damage>5 de dano affliction<Damage> permanentemente*. Esta habilidade é <Invisible>invisível<Invisible> e é<Effects> substituída por<Effects> <SkillName>'Mangekyou Overexertion'<SkillName> por 1 turno.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged*"
      ],
      "cooldown": 1,
      "ruleDescription": "Itachi creates a field around his team using Amaterasu. For 1 turn, any enemy that uses a new skill on Itachi or his allies will be dealt 5 affliction damage permanently*. This skill is invisible and is replaced by 'Mangekyou Overexertion' for 1 turn. Chakra cost: 1 Nin. Catalog classes: Affliction, Instant, Ranged*. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Itachi cria um campo ao redor de sua equipe usando Amaterasu. Por 1 turno, qualquer inimigo que usar uma nova habilidade em Itachi ou em seus aliados receberá 5 de dano affliction permanentemente*. Esta habilidade é invisível e é substituída por 'Mangekyou Overexertion' por 1 turno. Custo de chakra: 1 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged*. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Crow Genjutsu",
      "file": "uchiha_itachi_(s)_skill_2_(crow_genjutsu).jpg",
      "description": "Itachi places a genjutsu on one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered. If successful, the countered enemy's skills will cost 1 additional random chakra until they use a new skill. This skill is invisible and is replaced by 'Mangekyou Overexertion' for 1 turn.",
      "descriptionBR": "Itachi coloca um genjutsu em um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva, ela será counterada. Se for bem-sucedido, as habilidades do inimigo counterado custarão 1 chakra aleatório adicional até que ele use uma nova habilidade. Esta habilidade é invisível e é substituída por 'Mangekyou Overexertion' por 1 turno.",
      "descriptionRaw": "Itachi places a genjutsu on one enemy. For 1 turn, <Effects>if that enemy uses a new <Classes>harmful skill<Classes><Effects> they will be <Effects>countered<Effects>. If successful, the countered enemy's skills <Effects>will cost 1 additional random chakra until they use a new skill<Effects>. This skill is <Invisible>invisible<Invisible> and <Effects>is replaced by<Effects> <SkillName>'Mangekyou Overexertion'<SkillName> for 1 turn.",
      "descriptionBRRaw": "Itachi coloca um genjutsu em um inimigo. Por 1 turno, <Effects>se esse inimigo usar uma nova<Effects> <Classes>habilidade ofensiva<Classes>, ela será <Effects>counterada<Effects>. Se for bem-sucedido, as habilidades do inimigo counterado <Effects>custarão 1 chakra aleatório adicional até que ele use uma nova habilidade<Effects>. Esta habilidade é <Invisible>invisível<Invisible> e <Effects>é substituída por<Effects> <SkillName>'Mangekyou Overexertion'<SkillName> por 1 turno.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Itachi places a genjutsu on one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered. If successful, the countered enemy's skills will cost 1 additional random chakra until they use a new skill. This skill is invisible and is replaced by 'Mangekyou Overexertion' for 1 turn. Chakra cost: 1 Gen. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Itachi coloca um genjutsu em um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva, ela será counterada. Se for bem-sucedido, as habilidades do inimigo counterado custarão 1 chakra aleatório adicional até que ele use uma nova habilidade. Esta habilidade é invisível e é substituída por 'Mangekyou Overexertion' por 1 turno. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Mastered Mangekyou Sharingan",
      "file": "uchiha_itachi_(s)_skill_3_(mastered_mangekyou_sharingan).jpeg",
      "description": "Itachi uses his mastered Mangekyou Sharingan to deceive an enemy. For 1 turn, the first new skill used by that enemy will be reflected to a random different enemy. This skill is invisible,  ignores invulnerability and is replaced by 'Mangekyou Overexertion' for 1 turn.",
      "descriptionBR": "Itachi usa seu mangekyou sharingan dominado para enganar um inimigo. Por 1 turno, a primeira nova habilidade usada por esse inimigo será refletida para um inimigo aleatório diferente. Esta habilidade é invisível, ignora invulnerabilidade e é substituída por 'Mangekyou Overexertion' por 1 turno.",
      "descriptionRaw": "Itachi uses his mastered Mangekyou Sharingan to deceive an enemy. For 1 turn, the first new skill used by that enemy<Effects> will be reflected to a random different enemy<Effects>. This skill is <Invisible>invisible<Invisible>,  ignores <Defense>invulnerability<Defense> and <Effects>is replaced by<Effects> <SkillName>'Mangekyou Overexertion'<SkillName> for 1 turn.",
      "descriptionBRRaw": "Itachi usa seu mangekyou sharingan dominado para enganar um inimigo. Por 1 turno, a primeira nova habilidade usada por esse inimigo <Effects>será refletida para um inimigo aleatório diferente<Effects>. Esta habilidade é <Invisible>invisível<Invisible>, ignora <Defense>invulnerabilidade<Defense> e<Effects> é substituída por<Effects> <SkillName>'Mangekyou Overexertion'<SkillName> por 1 turno.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Itachi uses his mastered Mangekyou Sharingan to deceive an enemy. For 1 turn, the first new skill used by that enemy will be reflected to a random different enemy. This skill is invisible,  ignores invulnerability and is replaced by 'Mangekyou Overexertion' for 1 turn. Chakra cost: 1 Blood, 1 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Itachi usa seu mangekyou sharingan dominado para enganar um inimigo. Por 1 turno, a primeira nova habilidade usada por esse inimigo será refletida para um inimigo aleatório diferente. Esta habilidade é invisível, ignora invulnerabilidade e é substituída por 'Mangekyou Overexertion' por 1 turno. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Clone Genjutsu",
      "file": "uchiha_itachi_(s)_skill_4_(clone_genjutsu).jpg",
      "description": "This skill makes Uchiha Itachi (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Uchiha Itachi (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Uchiha Itachi (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Uchiha Itachi (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Uchiha Itachi (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Mental, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Uchiha Itachi (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Mangekyou Overexertion",
      "file": "uchiha_itachi_(s)_skill_5_(mangekyou_overexertion).png",
      "description": "By pushing his Mangekyou Sharingan beyond its natural limits, Itachi deals 20 damage to one enemy. If this skill is available through: 'Amaterasu Field', the enemy will take 5 additional damage from 'Amaterasu Field' permanently; 'Crow Genjutsu', Itachi is healed for 15 health; 'Mastered Mangekyou Sharingan', Itachi removes all harmful skills from himself.",
      "descriptionBR": "Ao forçar seu Mangekyou Sharingan para além do limite, Itachi causa 20 damage a um inimigo. Se essa habilidade estiver disponível por: 'Amaterasu Field', o inimigo receberá 5 de dano adicional de 'Amaterasu Field' permanentemente; 'Crow Genjutsu', Itachi será curado em 15 de vida; 'Mastered Mangekyou Sharingan', Itachi removerá todas as habilidades ofensivas de si mesmo.",
      "descriptionRaw": "By pushing his Mangekyou Sharingan beyond its natural limits, Itachi deals <Damage>20 damage<Damage> to one enemy. If this skill is available through: <SkillName>'Amaterasu Field'<SkillName>, the enemy will<Improvements> take 5 additional damage<Improvements> from <SkillName>'Amaterasu Field'<SkillName> permanently; <SkillName>'Crow Genjutsu'<SkillName>, Itachi is <Effects>healed for 15 health<Effects>; <SkillName>'Mastered Mangekyou Sharingan'<SkillName>, Itachi <Effects>removes all <Classes>harmful skills<Classes> from himself<Effects>.",
      "descriptionBRRaw": "Ao forçar seu Mangekyou Sharingan para além do limite, Itachi causa <Damage>20 damage<Damage> a um inimigo. Se essa habilidade estiver disponível por: <SkillName>'Amaterasu Field'<SkillName>, o inimigo receberá<Improvements> 5 de dano adicional<Improvements> de <SkillName>'Amaterasu Field'<SkillName> permanentemente; <SkillName>'Crow Genjutsu'<SkillName>, Itachi será <Effects>curado em 15 de vida<Effects>; <SkillName>'Mastered Mangekyou Sharingan'<SkillName>, Itachi <Effects>removerá todas as <Classes>habilidades ofensivas<Classes> de si mesmo<Effects>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "By pushing his Mangekyou Sharingan beyond its natural limits, Itachi deals 20 damage to one enemy. If this skill is available through: 'Amaterasu Field', the enemy will take 5 additional damage from 'Amaterasu Field' permanently; 'Crow Genjutsu', Itachi is healed for 15 health; 'Mastered Mangekyou Sharingan', Itachi removes all harmful skills from himself. Chakra cost: 1 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Ao forçar seu Mangekyou Sharingan para além do limite, Itachi causa 20 damage a um inimigo. Se essa habilidade estiver disponível por: 'Amaterasu Field', o inimigo receberá 5 de dano adicional de 'Amaterasu Field' permanentemente; 'Crow Genjutsu', Itachi será curado em 15 de vida; 'Mastered Mangekyou Sharingan', Itachi removerá todas as habilidades ofensivas de si mesmo. Custo de chakra: 1 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
