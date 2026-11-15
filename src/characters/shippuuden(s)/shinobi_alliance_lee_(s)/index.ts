// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Lee (S)",
  "description": "Now a chuunin, Lee has trained endlessly with Gai, and not only learned new abilities, but has learned what it truly means to fight. In battle, Lee now fights for his friends and allies, growing stronger as they fall around him.",
  "descriptionBR": "Agora um chuunin, Lee treinou incansavelmente com Gai, não só aprendendo novas habilidades, mas também entendendo o verdadeiro significado de lutar. Em batalha, Lee luta pelos seus amigos e aliados, ficando mais forte conforme eles caem ao seu redor.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_lee_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Konoha Rising Wind",
      "file": "shinobi_alliance_lee_(s)_skill_1_(konoha_rising_wind).png",
      "description": "Lee tries to hinder an enemy, dealing 15 damage to them and lowering all their non-affliction damage by 15 for 2 turns. This skill will deal an additional 10 damage, and the damage reduction effect will last 1 additional turn for each ally that is dead.",
      "descriptionBR": "Lee tenta atrapalhar um inimigo, causando 15 de dano e reduzindo todo o dano não-affliction dele em 15 por 2 turnos. Esta habilidade causará 10 de dano adicional, e o efeito de redução de dano durará 1 turno a mais para cada aliado morto.",
      "descriptionRaw": "Lee tries to hinder an enemy, <Damage>dealing 15 damage<Damage> to them and <Effects>lowering all their non-affliction damage by 15<Effects> for 2 turns. This skill<Improvements> will deal an additional 10 damage<Improvements>, and the damage reduction effect<Improvements> will last 1 additional<Improvements> turn for each <Classes>ally<Classes> that is <Classes>dead<Classes>.",
      "descriptionBRRaw": "Lee tenta atrapalhar um inimigo, <Damage>causando 15 de dano<Damage> e <Effects>reduzindo todo o dano não-affliction dele em 15<Effects> por 2 turnos. Esta habilidade <Improvements>causará 10 de dano adicional<Improvements>, e o efeito de redução de dano <Improvements>durará 1 turno a mais<Improvements> para cada <Classes>aliado<Classes> <Classes>morto<Classes>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Lee tries to hinder an enemy, dealing 15 damage to them and lowering all their non-affliction damage by 15 for 2 turns. This skill will deal an additional 10 damage, and the damage reduction effect will last 1 additional turn for each ally that is dead. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Lee tenta atrapalhar um inimigo, causando 15 de dano e reduzindo todo o dano não-affliction dele em 15 por 2 turnos. Esta habilidade causará 10 de dano adicional, e o efeito de redução de dano durará 1 turno a mais para cada aliado morto. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Konoha Great Whirlwind",
      "file": "shinobi_alliance_lee_(s)_skill_2_(konoha_great_whirlwind).png",
      "description": "Lee gains momentum, dealing 25 damage to one enemy and gaining 10 points of damage reduction for 1 turn. The following turn this skill will deal an additional 10 damage and grant 10 more damage reduction. This skill will deal an additional 10 damage for every ally that has been killed.",
      "descriptionBR": "Lee ganha impulso, causando 25 de dano a um inimigo e ganhando 10 pontos de redução de dano por 1 turno. No turno seguinte, esta habilidade causará 10 de dano adicional e concederá mais 10 de redução de dano. Esta habilidade causará 10 de dano adicional para cada aliado morto.",
      "descriptionRaw": "Lee gains momentum, <Damage>dealing 25 damage<Damage> to one enemy and gaining <Defense>10 points of damage reduction<Defense> for 1 turn. The following turn this skill <Improvements>will deal an additional 10 damage<Improvements> and <Improvements>grant 10 more damage reduction<Improvements>. This skill <Improvements>will deal an additional 10 damage<Improvements> for every <Classes>ally<Classes> that has been <Classes>killed<Classes>.",
      "descriptionBRRaw": "Lee ganha impulso, <Damage>causando 25 de dano<Damage> a um inimigo e ganhando <Defense>10 pontos de redução de dano<Defense> por 1 turno. No turno seguinte, esta habilidade <Improvements>causará 10 de dano adicional<Improvements> e <Improvements>concederá mais 10 de redução de dano<Improvements>. Esta habilidade <Improvements>causará 10 de dano adicional<Improvements> para cada <Classes>aliado<Classes> <Classes>morto<Classes>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee",
        "allyBypass",
        "__$"
      ],
      "cooldown": 0,
      "ruleDescription": "Lee gains momentum, dealing 25 damage to one enemy and gaining 10 points of damage reduction for 1 turn. The following turn this skill will deal an additional 10 damage and grant 10 more damage reduction. This skill will deal an additional 10 damage for every ally that has been killed. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee, allyBypass, __$. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Lee ganha impulso, causando 25 de dano a um inimigo e ganhando 10 pontos de redução de dano por 1 turno. No turno seguinte, esta habilidade causará 10 de dano adicional e concederá mais 10 de redução de dano. Esta habilidade causará 10 de dano adicional para cada aliado morto. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee, allyBypass, __$. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "One-Man Front Lotus",
      "file": "shinobi_alliance_lee_(s)_skill_3_(one-man_front_lotus).png",
      "description": "Using a modified version of Front Lotus, Lee dives down on an opponent, dealing 20 damage to them. This skill will deal an additional 20 damage for each ally that is dead, and an additional 20 damage for each 30 health that Lee has lost.",
      "descriptionBR": "Usando uma versão modificada do Front Lotus, Lee cai diretamente em um inimigo, causando 20 de dano. Esta habilidade causará 20 de dano adicional para cada aliado morto e mais 20 de dano para cada 30 de vida que Lee perdeu.",
      "descriptionRaw": "Using a modified version of Front Lotus, Lee dives down on an opponent, <Damage>dealing 20 damage<Damage> to them. This skill <Improvements>will deal an additional 20 damage<Improvements> for each <Classes>ally<Classes> that is <Classes>dead<Classes>, and an <Improvements>additional 20 damage<Improvements> for each <Defense>30 health<Defense> that Lee has <Defense>lost<Defense>.",
      "descriptionBRRaw": "Usando uma versão modificada do Front Lotus, Lee cai diretamente em um inimigo, <Damage>causando 20 de dano<Damage>. Esta habilidade <Improvements>causará 20 de dano adicional<Improvements> para cada <Classes>aliado<Classes> <Classes>morto<Classes> e <Improvements>mais 20 de dano<Improvements> para cada <Defense>30 de vida<Defense> que Lee <Defense>perdeu<Defense>.",
      "energy": [
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "Using a modified version of Front Lotus, Lee dives down on an opponent, dealing 20 damage to them. This skill will deal an additional 20 damage for each ally that is dead, and an additional 20 damage for each 30 health that Lee has lost. Chakra cost: 2 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando uma versão modificada do Front Lotus, Lee cai diretamente em um inimigo, causando 20 de dano. Esta habilidade causará 20 de dano adicional para cada aliado morto e mais 20 de dano para cada 30 de vida que Lee perdeu. Custo de chakra: 2 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Lee Heavy Block",
      "file": "shinobi_alliance_lee_(s)_skill_4_(lee_heavy_block).png",
      "description": "This skill makes Rock Lee (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Rock Lee (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Rock Lee (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Rock Lee (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Rock Lee (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Rock Lee (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
