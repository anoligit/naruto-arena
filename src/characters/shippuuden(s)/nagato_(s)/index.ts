// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Nagato (S)",
  "description": "Nagato is the leader of Akatsuki and is also known as Pein. He is in control of the six paths of Pein and was a former student of Jiraiya. Nagato possess the rinnegan and may be the strongest ninja in the shinobi world.",
  "descriptionBR": "Nagato é o líder da Akatsuki e também é conhecido como Pein. Ele controla os seis caminhos de Pein e foi um ex-aluno de Jiraiya. Nagato possui o rinnegan e pode ser o ninja mais forte do mundo shinobi.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "nagato_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Demonic Statue Summoning",
      "file": "nagato_(s)_skill_1_(demonic_statue_summoning).jpg",
      "description": "Nagato (S) targets all enemies and deals 15 damage to them. Nagato will gain 10 permanent destructible defense. The following turn, 'Etheral Dragon' will deal an additional 10 damage to enemies affected by this skill.",
      "descriptionBR": "Nagato (S) atinge todos os inimigos e causa 15 de dano a eles. Nagato ganhará 10 de defesa destrutível permanente. No próximo turno, 'Etheral Dragon' causará 10 de dano adicional aos inimigos afetados por esta habilidade.",
      "descriptionRaw": "Nagato (S) targets all enemies and <Damage>deals 15 damage<Damage> to them. Nagato will gain 10 permanent <Defense>destructible defense<Defense>. The following turn, <SkillName>'Etheral Dragon'<SkillName> will <Improvements>deal an additional 10 damage<Improvements> to enemies <Improvements>affected<Improvements> by this skill.",
      "descriptionBRRaw": "Nagato (S) atinge todos os inimigos e <Damage>causa 15 de dano<Damage> a eles. Nagato ganhará 10 de <Defense>defesa destrutível<Defense> permanente. No próximo turno, <SkillName>'Etheral Dragon'<SkillName> <Improvements>causará 10 de dano adicional<Improvements> aos inimigos <Improvements>afetados<Improvements> por esta habilidade.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Nagato (S) targets all enemies and deals 15 damage to them. Nagato will gain 10 permanent destructible defense. The following turn, 'Etheral Dragon' will deal an additional 10 damage to enemies affected by this skill. Chakra cost: 1 Blood. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Nagato (S) atinge todos os inimigos e causa 15 de dano a eles. Nagato ganhará 10 de defesa destrutível permanente. No próximo turno, 'Etheral Dragon' causará 10 de dano adicional aos inimigos afetados por esta habilidade. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Etheral Dragon",
      "file": "nagato_(s)_skill_2_(etheral_dragon).jpg",
      "description": "Using Etheral Dragon, Nagato deals 20 damage to one enemy. If that enemy's health drops to 30 or less, they will have their physical and mental skills stunned for 1 turn.",
      "descriptionBR": "Usando Etheral Dragon, Nagato causa 20 de dano a um inimigo. Se a vida desse inimigo cair para 30 ou menos, ele terá suas habilidades physical e mental atordoado por 1 turno.",
      "descriptionRaw": "Using Etheral Dragon, Nagato <Damage>deals 20 damage<Damage> to one enemy. If that enemy's <Classes>health drops to 30 or less<Classes>, they will have their physical and mental skills <Effects>stunned<Effects> for 1 turn.",
      "descriptionBRRaw": "Usando Etheral Dragon, Nagato <Damage>causa 20 de dano<Damage> a um inimigo. Se a <Classes>vida desse inimigo cair para 30 ou menos<Classes>, ele terá suas habilidades physical e mental <Effects>atordoado<Effects> por 1 turno.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Using Etheral Dragon, Nagato deals 20 damage to one enemy. If that enemy's health drops to 30 or less, they will have their physical and mental skills stunned for 1 turn. Chakra cost: 1 Gen. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando Etheral Dragon, Nagato causa 20 de dano a um inimigo. Se a vida desse inimigo cair para 30 ou menos, ele terá suas habilidades physical e mental atordoado por 1 turno. Custo de chakra: 1 genjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Samsara of Heavenly Life",
      "file": "nagato_(s)_skill_3_(samsara_of_heavenly_life).jpg",
      "description": "Nagato (S) uses Samsara of Heavenly Life to heal all allies for 40 health. Any dead ally on Nagato's team will be revived back to 30 health and will become invulnerable for 1 turn. Nagato will lose 50% of his current health* for each ally revived by this skill.",
      "descriptionBR": "Nagato (S) usa Samsara of Heavenly Life para curar todos os aliados em 40 de vida. Qualquer aliado morto na equipe de Nagato será revivido com 30 de vida e ficará invulnerável por 1 turno. Nagato perderá 50% de sua vida atual* para cada aliado revivido por esta habilidade.",
      "descriptionRaw": "Nagato (S) uses Samsara of Heavenly Life to <Defense>heal all allies for 40 health<Defense>. Any <Classes>dead ally<Classes> on Nagato's team will be <Classes>revived<Classes> back to <Defense>30 health<Defense> and will become <Defense>invulnerable<Defense> for 1 turn. Nagato will <Damage>lose 50% of his current health<Damage>* for each <Classes>ally revived<Classes> by this skill.",
      "descriptionBRRaw": "Nagato (S) usa Samsara of Heavenly Life para <Defense>curar todos os aliados em 40 de vida<Defense>. Qualquer <Classes>aliado morto<Classes> na equipe de Nagato será <Classes>revivido<Classes> com <Defense>30 de vida<Defense> e ficará <Defense>invulnerável<Defense> por 1 turno. Nagato <Damage>perderá 50% de sua vida atual<Damage>* para cada <Classes>aliado revivido<Classes> por esta habilidade.",
      "energy": [
        "Blood",
        "Gen"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Affliction*"
      ],
      "cooldown": 5,
      "ruleDescription": "Nagato (S) uses Samsara of Heavenly Life to heal all allies for 40 health. Any dead ally on Nagato's team will be revived back to 30 health and will become invulnerable for 1 turn. Nagato will lose 50% of his current health* for each ally revived by this skill. Chakra cost: 1 Blood, 1 Gen. Catalog classes: Chakra, Instant, Affliction*. Catalog cooldown: 5. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Nagato (S) usa Samsara of Heavenly Life para curar todos os aliados em 40 de vida. Qualquer aliado morto na equipe de Nagato será revivido com 30 de vida e ficará invulnerável por 1 turno. Nagato perderá 50% de sua vida atual* para cada aliado revivido por esta habilidade. Custo de chakra: 1 linhagem sanguínea, 1 genjutsu. Classes no catálogo: Chakra, Instant, Affliction*. Recarga (cooldown) no catálogo: 5. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Bansho Block",
      "file": "nagato_(s)_skill_4_(bansho_block).jpg",
      "description": "This skill makes Nagato (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Nagato (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Nagato (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Nagato (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Nagato (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Nagato (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
