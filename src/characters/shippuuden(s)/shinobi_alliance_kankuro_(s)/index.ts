// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Kankuro (S)",
  "description": "During the Fourth Shinobi World War, Kankurou is put in charge of the Surprise Attack Division, leading his squad as a guerrilla unit. Heading into the war, Kankurou greatly expanded his arsenal, adding the puppets of Sasori and his parents, and will fight using all his weapons in perfect tandem with each other.",
  "descriptionBR": "Durante a Quarta Guerra Mundial Shinobi, Kankurou é colocado no comando da Divisão de Ataque Surpresa, liderando seu esquadrão como uma unidade de guerrilha. Indo para a guerra, Kankurou expandiu enormemente seu arsenal, adicionando as marionetes de Sasori e de seus pais, e irá lutar usando todas as suas armas em perfeita harmonia umas com as outras.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_kankuro_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Kankuro: Puppet Mastery",
      "file": "shinobi_alliance_kankuro_(s)_skill_1_(kankuro_puppet_mastery).png",
      "description": "Kankuro prepares his puppets, gaining 25 unpierceable damager reduction. If Kankuro is targeted by a new harmful non-affliction damaging skill, he will lose 5 points of damage reduction from this skill. If used while active, it will be re-aplied.",
      "descriptionBR": "Kankurou prepara suas marionetes, ganhando 25 pontos de redução de dano impenetrável. Se Kankurou for alvo de uma nova habilidade ofensiva não-affliction que cause dano, ele irá perder 5 pontos de redução de dano dessa habilidade. Se usada enquanto estiver ativa, essa habilidade será reaplicada.",
      "descriptionRaw": "Kankuro prepares his puppets, <Defense>gaining 25 unpierceable damager reduction<Defense>. If Kankuro is <Classes>targeted<Classes> by a <Classes>new harmful non-affliction damaging skill<Classes>, he will <Effects>lose<Effects> 5 <Defense>points of damage reduction<Defense> from this skill. If used while active, it will be <Effects>re-aplied<Effects>.",
      "descriptionBRRaw": "Kankurou prepara suas marionetes, <Defense>ganhando 25 pontos de redução de dano impenetrável<Defense>. Se Kankurou <Classes>for alvo<Classes> de uma <Classes>nova habilidade ofensiva não-affliction que cause dano<Classes>, ele irá <Effects>perder<Effects> 5 <Defense>pontos de redução de dano<Defense> dessa habilidade. Se usada enquanto estiver ativa, essa habilidade será <Effects>reaplicada<Effects>.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "Kankuro prepares his puppets, gaining 25 unpierceable damager reduction. If Kankuro is targeted by a new harmful non-affliction damaging skill, he will lose 5 points of damage reduction from this skill. If used while active, it will be re-aplied. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kankurou prepara suas marionetes, ganhando 25 pontos de redução de dano impenetrável. Se Kankurou for alvo de uma nova habilidade ofensiva não-affliction que cause dano, ele irá perder 5 pontos de redução de dano dessa habilidade. Se usada enquanto estiver ativa, essa habilidade será reaplicada. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Puppet Manipulation: Sasori",
      "file": "shinobi_alliance_kankuro_(s)_skill_2_(puppet_manipulation_sasori).png",
      "description": "Kankuro targets all enemies, dealing damage to them equal the amount of damage reduction points that 'Kankuro: Puppet Mastery' currently has. If 'Kankuro: Puppet Mastery' has 15 points of damage reduction or less, this skill will cost 1 less random chakra.",
      "descriptionBR": "Kankurou atinge todos os inimigos, causando dano a eles igual à quantidade de pontos de redução de dano que 'Kankuro: Puppet Mastery' possui no momento. Se 'Kankuro: Puppet Mastery' tiver 15 pontos de redução de dano ou menos, essa habilidade irá custar 1 chakra aleatório a menos.",
      "descriptionRaw": "Kankuro targets all enemies, <Damage>dealing damage<Damage> to them equal the <Invisible>amount of damage reduction points<Invisible> that <SkillName>'Kankuro: Puppet Mastery'<SkillName> currently has. If <SkillName>'Kankuro: Puppet Mastery'<SkillName> has 15 points of damage reduction or less, this skill will <Improvements>cost 1 less random chakra<Improvements>.",
      "descriptionBRRaw": "Kankurou atinge todos os inimigos, <Damage>causando dano<Damage> a eles igual à <Invisible>quantidade de pontos de redução de dano<Invisible> que <SkillName>'Kankuro: Puppet Mastery'<SkillName> possui no momento. Se <SkillName>'Kankuro: Puppet Mastery'<SkillName> tiver 15 pontos de redução de dano ou menos, essa habilidade irá <Improvements>custar 1 chakra aleatório a menos<Improvements>.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Kankuro targets all enemies, dealing damage to them equal the amount of damage reduction points that 'Kankuro: Puppet Mastery' currently has. If 'Kankuro: Puppet Mastery' has 15 points of damage reduction or less, this skill will cost 1 less random chakra. Chakra cost: 2 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kankurou atinge todos os inimigos, causando dano a eles igual à quantidade de pontos de redução de dano que 'Kankuro: Puppet Mastery' possui no momento. Se 'Kankuro: Puppet Mastery' tiver 15 pontos de redução de dano ou menos, essa habilidade irá custar 1 chakra aleatório a menos. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Puppet Manipulation: Father and Mother",
      "file": "shinobi_alliance_kankuro_(s)_skill_3_(puppet_manipulation_father_and_mother).png",
      "description": "Kankuro protects himself or an ally, granting them 10 destructible defense for each 5 points of damage reduction that 'Kankuro: Puppet Mastery' currently has. If 'Kankuro: Puppet Mastery' has 15 points of damage reduction or less, this skill will cost 1 less random chakra.",
      "descriptionBR": "Kankurou protege a si mesmo ou um aliado, concedendo a eles 10 de defesa destrutível para cada 5 pontos de redução de dano que 'Kankurou: Puppet Mastery' possui no momento. Se 'Kankurou: Puppet Mastery' tiver 15 pontos de redução de dano ou menos, essa habilidade irá custar 1 chakra aleatório a menos.",
      "descriptionRaw": "Kankuro protects himself or an ally, <Defense>granting them 10 destructible defense<Defense> for each <Invisible>5 points of damage reduction<Invisible> that <SkillName>'Kankuro: Puppet Mastery'<SkillName> currently has. If <SkillName>'Kankuro: Puppet Mastery'<SkillName> has 15 points of damage reduction or less, this skill will <Improvements>cost 1 less random chakra<Improvements>.",
      "descriptionBRRaw": "Kankurou protege a si mesmo ou um aliado, <Defense>concedendo a eles 10 de defesa destrutível<Defense> para cada <Invisible>5 pontos de redução de dano<Invisible> que <SkillName>'Kankurou: Puppet Mastery'<SkillName> possui no momento. Se <SkillName>'Kankurou: Puppet Mastery'<SkillName> tiver 15 pontos de redução de dano ou menos, essa habilidade irá <Improvements>custar 1 chakra aleatório a menos<Improvements>.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 4,
      "ruleDescription": "Kankuro protects himself or an ally, granting them 10 destructible defense for each 5 points of damage reduction that 'Kankuro: Puppet Mastery' currently has. If 'Kankuro: Puppet Mastery' has 15 points of damage reduction or less, this skill will cost 1 less random chakra. Chakra cost: 2 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kankurou protege a si mesmo ou um aliado, concedendo a eles 10 de defesa destrutível para cada 5 pontos de redução de dano que 'Kankurou: Puppet Mastery' possui no momento. Se 'Kankurou: Puppet Mastery' tiver 15 pontos de redução de dano ou menos, essa habilidade irá custar 1 chakra aleatório a menos. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Kankuro Sealing Technique",
      "file": "shinobi_alliance_kankuro_(s)_skill_4_(kankuro_sealing_technique).png",
      "description": "This skill makes Shinobi Alliance Kankuro (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Shinobi Alliance Kankuro (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Kankuro (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Shinobi Alliance Kankuro (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Kankuro (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Shinobi Alliance Kankuro (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
