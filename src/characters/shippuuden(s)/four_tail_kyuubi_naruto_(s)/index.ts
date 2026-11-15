// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Four Tail Kyuubi Naruto (S)",
  "description": "After completely giving into his anger and manifesting a fourth tail, Naruto ceases to be himself. In this state, Naruto's own body is completely overtaken by a deep, dense Nine-Tails chakra cloak, and at the cost of huge internal damage, Naruto becomes a mindless monster; a being of pure rage and destruction.",
  "descriptionBR": "Após se entregar completamente à raiva e manifestar uma quarta cauda, Naruto deixa de ser ele mesmo. Nesse estado, seu corpo é completamente tomado por um denso e profundo manto de chakra da Nove-Caudas e, ao custo de enormes danos internos, Naruto se torna um monstro irracional, um ser de pura fúria e destruição.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "four_tail_kyuubi_naruto_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Four Tails Transformation",
      "file": "four_tail_kyuubi_naruto_(s)_skill_1_(four_tails_transformation).png",
      "description": "Naruto gains 15 points of damage reduction and 20 points of destructible defense permanently. During this time, he cannot be stunned. Each turn Naruto uses a new harmful skill, he loses 10 health that cannot kill him. This skill will be replaced by 'Kyuubi Chakra Gather'.",
      "descriptionBR": "Naruto ganha 15 pontos de redução de dano e 20 pontos de defesa destrutível permanentemente. Durante esse tempo, ele não pode ser atordoado. A cada turno em que Naruto usar uma nova habilidade ofensiva, ele perde 10 de vida, o que não pode matá-lo. Essa habilidade será substituída por 'Kyuubi Chakra Gather'.",
      "descriptionRaw": "Naruto gains 15 <Defense>points of damage reduction<Defense> and 20 <Defense>points of destructible defense<Defense> permanently. During this time, he <Defense>cannot be stunned<Defense>. Each turn Naruto uses a new <Classes>harmful skill<Classes>, he <Damage>loses 10 health<Damage> that cannot kill him. This skill will be <Improvements>replaced<Improvements> by <SkillName>'Kyuubi Chakra Gather'<SkillName>.",
      "descriptionBRRaw": "Naruto ganha 15 <Defense>pontos de redução de dano<Defense> e 20 <Defense>pontos de defesa destrutível<Defense> permanentemente. Durante esse tempo, ele <Defense>não pode ser atordoado<Defense>. A cada turno em que Naruto usar uma nova <Classes>habilidade ofensiva<Classes>, ele <Damage>perde 10 de vida<Damage>, o que não pode matá-lo. Essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Kyuubi Chakra Gather'<SkillName>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Naruto gains 15 points of damage reduction and 20 points of destructible defense permanently. During this time, he cannot be stunned. Each turn Naruto uses a new harmful skill, he loses 10 health that cannot kill him. This skill will be replaced by 'Kyuubi Chakra Gather'. Chakra cost: 1 Random. Catalog classes: Affliction, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naruto ganha 15 pontos de redução de dano e 20 pontos de defesa destrutível permanentemente. Durante esse tempo, ele não pode ser atordoado. A cada turno em que Naruto usar uma nova habilidade ofensiva, ele perde 10 de vida, o que não pode matá-lo. Essa habilidade será substituída por 'Kyuubi Chakra Gather'. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Shockwave Smash",
      "file": "four_tail_kyuubi_naruto_(s)_skill_2_(shockwave_smash).png",
      "description": "Naruto smashes the ground, generating a violent shockwave and dealing 15 piercing damage to all enemies. The following turn, 'Four Tailed Beast Bomb' will cost 1 less random chakra. Requires 'Four Tails Transformation'.",
      "descriptionBR": "Naruto esmaga o chão, gerando uma onda de choque violenta e causando 15 de dano perfurante a todos os inimigos. No próximo turno, 'Four Tailed Beast Bomb' irá custar 1 chakra aleatório a menos. Requer 'Four Tails Transformation'.",
      "descriptionRaw": "Naruto smashes the ground, generating a violent shockwave and <Damage>dealing 15 piercing damage<Damage> to all enemies. The following turn, <SkillName>'Four Tailed Beast Bomb'<SkillName> will <Improvements>cost 1 less random chakra<Improvements>. Requires <SkillName>'Four Tails Transformation'<SkillName>.",
      "descriptionBRRaw": "Naruto esmaga o chão, gerando uma onda de choque violenta e <Damage>causando 15 de dano perfurante<Damage> a todos os inimigos. No próximo turno, <SkillName>'Four Tailed Beast Bomb'<SkillName> irá <Improvements>custar 1 chakra aleatório a menos<Improvements>. Requer <SkillName>'Four Tails Transformation'<SkillName>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Naruto smashes the ground, generating a violent shockwave and dealing 15 piercing damage to all enemies. The following turn, 'Four Tailed Beast Bomb' will cost 1 less random chakra. Requires 'Four Tails Transformation'. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naruto esmaga o chão, gerando uma onda de choque violenta e causando 15 de dano perfurante a todos os inimigos. No próximo turno, 'Four Tailed Beast Bomb' irá custar 1 chakra aleatório a menos. Requer 'Four Tails Transformation'. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Four Tailed Beast Bomb",
      "file": "four_tail_kyuubi_naruto_(s)_skill_3_(four_tailed_beast_bomb).png",
      "description": "Naruto releases a massive tailed beast bomb, dealing 50 piercing damage to one enemy. The following turn, 'Shockwave Smash' will deal 5 additional damage. Requires 'Four Tails Transformation'.",
      "descriptionBR": "Naruto libera uma enorme bomba da besta com cauda, causando 50 de dano perfurante a um inimigo. No próximo turno, 'Shockwave Smash' irá causar 5 de dano adicional. Requer 'Four Tails Transformation'.",
      "descriptionRaw": "Naruto releases a massive tailed beast bomb, <Damage>dealing 50 piercing damage<Damage> to one enemy. The following turn, <SkillName>'Shockwave Smash'<SkillName> will <Improvements>deal 5 additional damage<Improvements>. Requires <SkillName>'Four Tails Transformation'<SkillName>.",
      "descriptionBRRaw": "Naruto libera uma enorme bomba da besta com cauda, <Damage>causando 50 de dano perfurante<Damage> a um inimigo. No próximo turno, <SkillName>'Shockwave Smash'<SkillName> irá <Improvements>causar 5 de dano adicional<Improvements>. Requer <SkillName>'Four Tails Transformation'<SkillName>.",
      "energy": [
        "Random",
        "Random",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Naruto releases a massive tailed beast bomb, dealing 50 piercing damage to one enemy. The following turn, 'Shockwave Smash' will deal 5 additional damage. Requires 'Four Tails Transformation'. Chakra cost: 3 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naruto libera uma enorme bomba da besta com cauda, causando 50 de dano perfurante a um inimigo. No próximo turno, 'Shockwave Smash' irá causar 5 de dano adicional. Requer 'Four Tails Transformation'. Custo de chakra: 3 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Kyuubi Chakra Skin",
      "file": "four_tail_kyuubi_naruto_(s)_skill_4_(kyuubi_chakra_skin).png",
      "description": "This skill makes Four Tail Kyuubi Naruto (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Four Tail Kyuubi Naruto (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Four Tail Kyuubi Naruto (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Four Tail Kyuubi Naruto (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Four Tail Kyuubi Naruto (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Four Tail Kyuubi Naruto (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Kyuubi Chakra Gather",
      "file": "four_tail_kyuubi_naruto_(s)_skill_5_(kyuubi_chakra_gather).png",
      "description": "Naruto concentrates an immense amount of chakra in his mouth, gaining 10 permanent destructible defense and permanently increasing 'Four Tailed Beast Bomb' damage by 5. This skill will end when Naruto uses his next new harmful skill. This skill may only stack 3 times.",
      "descriptionBR": "Naruto concentra uma quantidade imensa de chakra em sua boca, ganhando 10 de defesa destrutível permanente e aumentando permanentemente o dano de 'Four Tailed Beast Bomb' em 5. Essa habilidade irá terminar quando Naruto usar sua próxima nova habilidade ofensiva. Essa habilidade só pode acumular 3 vezes.",
      "descriptionRaw": "Naruto concentrates an immense amount of chakra in his mouth, <Defense>gaining 10 permanent destructible defense<Defense> and permanently <Improvements>increasing<Improvements> <SkillName>'Four Tailed Beast Bomb'<SkillName> damage by 5. This skill will <Effects>end<Effects> when Naruto uses his next new <Classes>harmful skill<Classes>. This skill may only <Effects>stack 3 times<Effects>.",
      "descriptionBRRaw": "Naruto concentra uma quantidade imensa de chakra em sua boca, <Defense>ganhando 10 de defesa destrutível permanente<Defense> e <Improvements>aumentando<Improvements> permanentemente o dano de <SkillName>'Four Tailed Beast Bomb'<SkillName> em 5. Essa habilidade irá <Effects>terminar<Effects> quando Naruto usar sua próxima nova <Classes>habilidade ofensiva<Classes>. Essa habilidade só pode <Effects>acumular 3 vezes<Effects>.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Naruto concentrates an immense amount of chakra in his mouth, gaining 10 permanent destructible defense and permanently increasing 'Four Tailed Beast Bomb' damage by 5. This skill will end when Naruto uses his next new harmful skill. This skill may only stack 3 times. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Naruto concentra uma quantidade imensa de chakra em sua boca, ganhando 10 de defesa destrutível permanente e aumentando permanentemente o dano de 'Four Tailed Beast Bomb' em 5. Essa habilidade irá terminar quando Naruto usar sua próxima nova habilidade ofensiva. Essa habilidade só pode acumular 3 vezes. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
