// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Tayuya (S)",
  "description": "Edo Tensei Tayuya was resurrected by Kabuto as a cruel battlefield conductor, her malice and arrogance undimmed by death. She uses her cursed flute to summon demonic warriors and unravel enemies through sound-based genjutsu and mental pressure. As the fight drags on, her control tightens, turning chaos into a carefully orchestrated nightmare.",
  "descriptionBR": "Edo Tensei Tayuya foi ressuscitada por Kabuto como uma cruel regente do campo de batalha, com sua malícia e arrogância inabaladas pela morte. Ela usa sua flauta amaldiçoada para invocar guerreiros demoníacos e desestabilizar os inimigos por meio de genjutsus sonoros e pressão mental. Conforme a luta se prolonga, seu controle se intensifica, transformando o caos em um pesadelo cuidadosamente orquestrado.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_tayuya_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Demonic Melody",
      "file": "edo_tensei_tayuya_(s)_skill_1_(demonic_melody).png",
      "description": "Tayuya deals 5 affliction damage to all enemies for 3 turns. During this time, if they use a new harmful damaging skill, Tayuya will steal 5 health from them. The following 3 turns, 'Doki Ghost' will be improved.",
      "descriptionBR": "Tayuya causa 5 de dano affliction a todos os inimigos por 3 turnos. Durante esse tempo, se eles usarem uma nova habilidade ofensiva que cause dano, Tayuya irá roubar 5 de vida deles. Nos próximos 3 turnos, 'Doki Ghost' será aprimorada.",
      "descriptionRaw": "Tayuya <Damage>deals 5 affliction damage<Damage> to all enemies for 3 turns. During this time, if they use a new <Classes>harmful damaging skill<Classes>, Tayuya will <Damage>steal 5 health<Damage> from them. The following 3 turns, <SkillName>'Doki Ghost'<SkillName> will be <Improvements>improved<Improvements>.",
      "descriptionBRRaw": "Tayuya <Damage>causa 5 de dano affliction<Damage> a todos os inimigos por 3 turnos. Durante esse tempo, se eles usarem uma nova <Classes>habilidade ofensiva que cause dano<Classes>, Tayuya irá <Damage>roubar 5 de vida<Damage> deles. Nos próximos 3 turnos, <SkillName>'Doki Ghost'<SkillName> será <Improvements>aprimorada<Improvements>.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Affliction",
        "Action",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "Tayuya deals 5 affliction damage to all enemies for 3 turns. During this time, if they use a new harmful damaging skill, Tayuya will steal 5 health from them. The following 3 turns, 'Doki Ghost' will be improved. Chakra cost: 1 Gen. Catalog classes: Affliction, Action, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tayuya causa 5 de dano affliction a todos os inimigos por 3 turnos. Durante esse tempo, se eles usarem uma nova habilidade ofensiva que cause dano, Tayuya irá roubar 5 de vida deles. Nos próximos 3 turnos, 'Doki Ghost' será aprimorada. Custo de chakra: 1 genjutsu. Classes no catálogo: Affliction, Action, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Doki Ghost",
      "file": "edo_tensei_tayuya_(s)_skill_2_(doki_ghost).png",
      "description": "Tayuya summons her doki ghosts, dealing 20 affliction damage to one enemy. While improved, this skill will steal 20 health and 1 ninjutsu or bloodline chakra instead.",
      "descriptionBR": "Tayuya invoca seus fantasmas doki, causando 20 de dano affliction a um inimigo. Quando aprimorada, essa habilidade irá roubar 20 de vida e 1 chakra ninjutsu ou bloodline.",
      "descriptionRaw": "Tayuya summons her doki ghosts, <Damage>dealing 20 affliction damage<Damage> to one enemy. While improved, this skill will <Improvements>steal 20 health and 1 ninjutsu or bloodline chakra instead<Improvements>.",
      "descriptionBRRaw": "Tayuya invoca seus fantasmas doki, <Damage>causando 20 de dano affliction<Damage> a um inimigo. Quando aprimorada, essa habilidade irá <Improvements>roubar 20 de vida e 1 chakra ninjutsu ou bloodline<Improvements>.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Tayuya summons her doki ghosts, dealing 20 affliction damage to one enemy. While improved, this skill will steal 20 health and 1 ninjutsu or bloodline chakra instead. Chakra cost: 1 Gen, 1 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tayuya invoca seus fantasmas doki, causando 20 de dano affliction a um inimigo. Quando aprimorada, essa habilidade irá roubar 20 de vida e 1 chakra ninjutsu ou bloodline. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Summoning: Doki Demons",
      "file": "edo_tensei_tayuya_(s)_skill_3_(summoning_doki_demons).png",
      "description": "For 1 turn, the first harmful damaging skill used on her or an ally will be countered. If successful, the countered enemy will be dealt 5 damage and will have their harmful skills stunned for 1 turn. This skill is invisible.",
      "descriptionBR": "Por 1 turno, a primeira habilidade ofensiva que cause dano usada nela ou em um aliado será counterada. Se for bem-sucedido, o inimigo counterado irá receber 5 de dano e terá suas habilidades ofensivas atordoadas por 1 turno. Essa habilidade é invisível.",
      "descriptionRaw": "For 1 turn, the first <Classes>harmful damaging skill<Classes> used on her or an ally will be <Defense>countered<Defense>. If successful, the countered enemy will be <Damage>dealt 5 damage<Damage> and will have their <Classes>harmful skills<Classes> <Effects>stunned<Effects> for 1 turn. This skill is <Invisible>invisible<Invisible>.",
      "descriptionBRRaw": "Por 1 turno, a primeira <Classes>habilidade ofensiva que cause dano<Classes> usada nela ou em um aliado será <Defense>counterada<Defense>. Se for bem-sucedido, o inimigo counterado irá <Damage>receber 5 de dano<Damage> e terá suas <Classes>habilidades ofensivas<Classes> <Effects>atordoadas<Effects> por 1 turno. Essa habilidade é <Invisible>invisível<Invisible>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 2,
      "ruleDescription": "For 1 turn, the first harmful damaging skill used on her or an ally will be countered. If successful, the countered enemy will be dealt 5 damage and will have their harmful skills stunned for 1 turn. This skill is invisible. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 1 turno, a primeira habilidade ofensiva que cause dano usada nela ou em um aliado será counterada. Se for bem-sucedido, o inimigo counterado irá receber 5 de dano e terá suas habilidades ofensivas atordoadas por 1 turno. Essa habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Tayuya: Chakra Unseal",
      "file": "edo_tensei_tayuya_(s)_skill_4_(tayuya_chakra_unseal).png",
      "description": "This skill makes Edo Tensei Tayuya (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Tayuya (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Tayuya (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Tayuya (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Tayuya (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Tayuya (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
