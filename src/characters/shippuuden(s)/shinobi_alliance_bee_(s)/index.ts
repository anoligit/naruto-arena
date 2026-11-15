// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Bee (S)",
  "description": "After his encounter with Kisame, in which the sentient weapon took a liking to his chakra, Killer Bee became the owner of the legendary Shark-Skin Blade, Samehada. With it at his side, Bee can use his arsenal of swords more efficiently, combining them with Samehada's ability to absorb chakra.",
  "descriptionBR": "Após seu encontro com Kisame, no qual a arma consciente se afeiçoou ao seu chakra, Killer Bee se tornou o dono da lendária espada Pele de Tubarão, Samehada. Com ela ao seu lado, Bee consegue usar seu arsenal de espadas com mais eficiência, combinando-o com a capacidade de Samehada de absorver chakra.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_bee_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Sting Pierce",
      "file": "shinobi_alliance_bee_(s)_skill_1_(sting_pierce).png",
      "description": "Bee deals 15 piercing damage to one enemy, marking them for 3 turns. For 1 turn, Bee will nullify the first harmful physical or chakra skill used on him. This skill cannot be used on an already marked enemy.",
      "descriptionBR": "Bee causa 15 de dano perfurante a um inimigo, marcando-o por 3 turnos. Por 1 turno, Bee irá anular a primeira habilidade physical ou chakra ofensiva usada nele. Essa habilidade não pode ser usada em um inimigo já marcado.",
      "descriptionRaw": "Bee <Damage>deals 15 piercing damage<Damage> to one enemy, <Invisible>marking them<Invisible> for 3 turns. For 1 turn, Bee will <Defense>nullify<Defense> the first <Classes>harmful physical or chakra skill<Classes> used on him. This skill <Invisible>cannot be used<Invisible> on an <SkillText>already marked enemy<SkillText>.",
      "descriptionBRRaw": "Bee <Damage>causa 15 de dano perfurante<Damage> a um inimigo, <Invisible>marcando-o<Invisible> por 3 turnos. Por 1 turno, Bee irá <Defense>anular<Defense> a primeira <Classes>habilidade physical ou chakra ofensiva<Classes> usada nele. Essa habilidade <Invisible>não pode ser usada<Invisible> em um <SkillText>inimigo já marcado<SkillText>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Bee deals 15 piercing damage to one enemy, marking them for 3 turns. For 1 turn, Bee will nullify the first harmful physical or chakra skill used on him. This skill cannot be used on an already marked enemy. Chakra cost: 1 Random. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Bee causa 15 de dano perfurante a um inimigo, marcando-o por 3 turnos. Por 1 turno, Bee irá anular a primeira habilidade physical ou chakra ofensiva usada nele. Essa habilidade não pode ser usada em um inimigo já marcado. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Samehada Monstruous Drain",
      "file": "shinobi_alliance_bee_(s)_skill_2_(samehada_monstruous_drain).png",
      "description": "Bee targets all enemies marked by 'Sting Pierce', stealing 15 health and 1 bloodline or ninjutsu chakra.",
      "descriptionBR": "Bee tem como alvo todos os inimigos marcados por 'Sting Pierce', roubando 15 de vida e 1 chakra bloodline ou ninjutsu.",
      "descriptionRaw": "Bee targets all enemies <Invisible>marked<Invisible> by <SkillName>'Sting Pierce'<SkillName>, <Damage>stealing 15 health<Damage> and <Effects>1 bloodline or ninjutsu chakra<Effects>.",
      "descriptionBRRaw": "Bee tem como alvo todos os inimigos <Invisible>marcados<Invisible> por <SkillName>'Sting Pierce'<SkillName>, <Damage>roubando 15 de vida<Damage> e <Effects>1 chakra bloodline ou ninjutsu<Effects>.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Bee targets all enemies marked by 'Sting Pierce', stealing 15 health and 1 bloodline or ninjutsu chakra. Chakra cost: 1 Tai, 1 Random. Catalog classes: Affliction, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Bee tem como alvo todos os inimigos marcados por 'Sting Pierce', roubando 15 de vida e 1 chakra bloodline ou ninjutsu. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Affliction, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Hachibi Chakra Cloak",
      "file": "shinobi_alliance_bee_(s)_skill_3_(hachibi_chakra_cloak).png",
      "description": "Bee releases his jinchuuriki chakra, gaining 20 points of destructible defense. During this time, he will heal 10 health each turn. When destroyed, this skill will end and, for 1 turn, Bee's entire team will deal 5 additional non-affliction damage. While active, this skill will be replaced by 'Fatal Sting'.",
      "descriptionBR": "Bee libera seu chakra de jinchuuriki, ganhando 20 pontos de defesa destrutível. Durante esse tempo, ele irá recuperar 10 de vida a cada turno. Quando for destruída, essa habilidade irá terminar e, por 1 turno, toda a equipe de Bee irá causar 5 de dano não-affliction adicional. Enquanto estiver ativa, essa habilidade será substituída por 'Fatal Sting'.",
      "descriptionRaw": "Bee releases his jinchuuriki chakra, <Defense>gaining 20 points of destructible defense<Defense>. During this time, he will <Defense>heal 10 health<Defense> each turn. When <Classes>destroyed<Classes>, this skill will <SkillText>end<SkillText> and, for 1 turn, Bee's entire team will <Improvements>deal 5 additional non-affliction damage<Improvements>. While active, this skill will be <Effects>replaced<Effects> by <SkillName>'Fatal Sting'<SkillName>.",
      "descriptionBRRaw": "Bee libera seu chakra de jinchuuriki, <Defense>ganhando 20 pontos de defesa destrutível<Defense>. Durante esse tempo, ele irá <Defense>recuperar 10 de vida<Defense> a cada turno. Quando for <Classes>destruída<Classes>, essa habilidade irá <SkillText>terminar<SkillText> e, por 1 turno, toda a equipe de Bee irá <Improvements>causar 5 de dano não-affliction adicional<Improvements>. Enquanto estiver ativa, essa habilidade será <Effects>substituída<Effects> por <SkillName>'Fatal Sting'<SkillName>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "Bee releases his jinchuuriki chakra, gaining 20 points of destructible defense. During this time, he will heal 10 health each turn. When destroyed, this skill will end and, for 1 turn, Bee's entire team will deal 5 additional non-affliction damage. While active, this skill will be replaced by 'Fatal Sting'. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Bee libera seu chakra de jinchuuriki, ganhando 20 pontos de defesa destrutível. Durante esse tempo, ele irá recuperar 10 de vida a cada turno. Quando for destruída, essa habilidade irá terminar e, por 1 turno, toda a equipe de Bee irá causar 5 de dano não-affliction adicional. Enquanto estiver ativa, essa habilidade será substituída por 'Fatal Sting'. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Bee Block",
      "file": "shinobi_alliance_bee_(s)_skill_4_(bee_block).png",
      "description": "This skill makes Shinobi Alliance Bee (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Shinobi Alliance Bee (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Bee (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Shinobi Alliance Bee (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Bee (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Shinobi Alliance Bee (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Fatal Sting",
      "file": "shinobi_alliance_bee_(s)_skill_5_(fatal_sting).png",
      "description": "Bee deals 25 piercing damage to one enemy and reduces their non-affliction damage to a maximum of 10 for 1 turn. If that enemy is marked by 'Sting Pierce', they will receive 15 additional damage.",
      "descriptionBR": "Bee causa 25 de dano perfurante a um inimigo e reduz o dano não-affliction dele a um máximo de 10 por 1 turno. Se esse inimigo estiver marcado por 'Sting Pierce', ele irá receber 15 de dano adicional.",
      "descriptionRaw": "Bee <Damage>deals 25 piercing damage<Damage> to one enemy and <Effects>reduces their non-affliction damage to a maximum of 10<Effects> for 1 turn. If that enemy is <Invisible>marked<Invisible> by <SkillName>'Sting Pierce'<SkillName>, they will <Improvements>receive 15 additional damage<Improvements>.",
      "descriptionBRRaw": "Bee <Damage>causa 25 de dano perfurante<Damage> a um inimigo e <Effects>reduz o dano não-affliction dele a um máximo de 10<Effects> por 1 turno. Se esse inimigo estiver <Invisible>marcado<Invisible> por <SkillName>'Sting Pierce'<SkillName>, ele irá <Improvements>receber 15 de dano adicional<Improvements>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": null,
      "ruleDescription": "Bee deals 25 piercing damage to one enemy and reduces their non-affliction damage to a maximum of 10 for 1 turn. If that enemy is marked by 'Sting Pierce', they will receive 15 additional damage. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: None. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Bee causa 25 de dano perfurante a um inimigo e reduz o dano não-affliction dele a um máximo de 10 por 1 turno. Se esse inimigo estiver marcado por 'Sting Pierce', ele irá receber 15 de dano adicional. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: None. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
