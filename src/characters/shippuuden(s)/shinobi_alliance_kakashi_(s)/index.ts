// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Kakashi (S)",
  "description": "Kakashi, as one of the squad leaders, goes to war alongside all the ninjas. Now, he uses everything at his disposal to win. Besides himself, Kakashi can rely on his allies.",
  "descriptionBR": "Kakashi, como um dos líderes de esquadrão, vai para a guerra ao lado de todos os ninjas. Agora, ele usa tudo ao seu alcance para vencer. Além de si mesmo, Kakashi pode contar com seus aliados.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_kakashi_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Kubikiribouchou: Heavy Attack",
      "file": "shinobi_alliance_kakashi_(s)_skill_1_(kubikiribouchou_heavy_attack).png",
      "description": "Using Zabuza's sword, Kakashi destroys one enemy's destructible defense and deals 15 piercing damage to them. Afterwards, Kakashi will also steal 5 health from that enemy. The following turn, 'Lightning-Infused Kunai' will cost 1 ninjutsu and 1 random chakra.",
      "descriptionBR": "Usando a espada de Zabuza, Kakashi destrói a defesa destrutível de um inimigo e causa 15 de dano perfurante a ele. Depois disso, Kakashi também irá roubar 5 de vida desse inimigo. No próximo turno, 'Lightning-Infused Kunai' irá custar 1 chakra ninjutsu e 1 chakra aleatório.",
      "descriptionRaw": "Using Zabuza's sword, Kakashi <Effects>destroys<Effects> one enemy's <Defense>destructible defense<Defense> and <Damage>deals 15 piercing damage<Damage> to them. Afterwards, Kakashi will also <Damage>steal 5 health<Damage> from that enemy. The following turn, <SkillName>'Lightning-Infused Kunai'<SkillName> will <Improvements>cost 1 ninjutsu and 1 random chakra<Improvements>.",
      "descriptionBRRaw": "Usando a espada de Zabuza, Kakashi <Effects>destrói<Effects> a <Defense>defesa destrutível<Defense> de um inimigo e <Damage>causa 15 de dano perfurante<Damage> a ele. Depois disso, Kakashi também irá <Damage>roubar 5 de vida<Damage> desse inimigo. No próximo turno, <SkillName>'Lightning-Infused Kunai'<SkillName> irá <Improvements>custar 1 chakra ninjutsu e 1 chakra aleatório<Improvements>.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Using Zabuza's sword, Kakashi destroys one enemy's destructible defense and deals 15 piercing damage to them. Afterwards, Kakashi will also steal 5 health from that enemy. The following turn, 'Lightning-Infused Kunai' will cost 1 ninjutsu and 1 random chakra. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando a espada de Zabuza, Kakashi destrói a defesa destrutível de um inimigo e causa 15 de dano perfurante a ele. Depois disso, Kakashi também irá roubar 5 de vida desse inimigo. No próximo turno, 'Lightning-Infused Kunai' irá custar 1 chakra ninjutsu e 1 chakra aleatório. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Lightning-Infused Kunai",
      "file": "shinobi_alliance_kakashi_(s)_skill_2_(lightning-infused_kunai).png",
      "description": "Kakashi deals 40 piercing damage to one enemy, ignoring counters and reflects. If this skill successfully kills the target, it will have its cooldown reset, its chakra cost changed to 2 random chakra, and its damage increased by 10 for 1 turn.",
      "descriptionBR": "Kakashi causa 40 de dano perfurante a um inimigo, ignorando counters e reflexões. Se essa habilidade matar o alvo com sucesso, seu cooldown será resetado, seu custo será alterado para 2 chakras aleatórios e seu dano será aumentado em 10 por 1 turno.",
      "descriptionRaw": "Kakashi <Damage>deals 40 piercing damage<Damage> to one enemy, <Defense>ignoring counters and reflects<Defense>. If this skill successfully kills the target, it will have its <Improvements>cooldown reset<Improvements>, its <Improvements>chakra cost changed to 2 random chakra<Improvements>, and its <Improvements>damage increased by 10<Improvements> for 1 turn.",
      "descriptionBRRaw": "Kakashi <Damage>causa 40 de dano perfurante<Damage> a um inimigo, <Defense>ignorando counters e reflexões<Defense>. Se essa habilidade matar o alvo com sucesso, seu <Improvements>cooldown será resetado<Improvements>, seu <Improvements>custo será alterado para 2 chakras aleatórios<Improvements> e seu <Improvements>dano será aumentado em 10<Improvements> por 1 turno.",
      "energy": [
        "Tai",
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Kakashi deals 40 piercing damage to one enemy, ignoring counters and reflects. If this skill successfully kills the target, it will have its cooldown reset, its chakra cost changed to 2 random chakra, and its damage increased by 10 for 1 turn. Chakra cost: 1 Tai, 1 Nin. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kakashi causa 40 de dano perfurante a um inimigo, ignorando counters e reflexões. Se essa habilidade matar o alvo com sucesso, seu cooldown será resetado, seu custo será alterado para 2 chakras aleatórios e seu dano será aumentado em 10 por 1 turno. Custo de chakra: 1 taijutsu, 1 ninjutsu. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Lightning Transmission Cable",
      "file": "shinobi_alliance_kakashi_(s)_skill_3_(lightning_transmission_cable).png",
      "description": "For 3 turns, Kakashi gains 15 points of damage reduction and any enemy that uses a new non-mental skill on him will take 10 piercing damage. During this time, all enemies will be marked and, if they use a new harmful damaging skill, Kakashi's other skills will permanently steal 5 health from them, dealt as a new source of damage. This effect stacks.",
      "descriptionBR": "Por 3 turnos, Kakashi ganha 15 pontos de redução de dano e qualquer inimigo que usar uma nova habilidade não mental nele irá receber 10 de dano perfurante. Durante esse tempo, todos os inimigos serão marcados e, se usarem uma nova habilidade ofensiva que cause dano, as outras habilidades de Kakashi irão permanentemente roubar 5 de vida deles, causado como uma nova fonte de dano. Esse efeito acumula.",
      "descriptionRaw": "For 3 turns, Kakashi <Defense>gains 15 points of damage reduction<Defense> and any enemy that uses a new <Classes>non-mental skill<Classes> on him will <Damage>take 10 piercing damage<Damage>. During this time, all enemies will be <Effects>marked<Effects> and, if they use a new <Classes>harmful damaging skill<Classes>, <SkillText>Kakashi's other skills<SkillText> will permanently <Damage>steal 5 health<Damage> from them, dealt as a new source of damage. This effect <Effects>stacks<Effects>.",
      "descriptionBRRaw": "Por 3 turnos, Kakashi <Defense>ganha 15 pontos de redução de dano<Defense> e qualquer inimigo que usar uma nova <Classes>habilidade não mental<Classes> nele irá <Damage>receber 10 de dano perfurante<Damage>. Durante esse tempo, todos os inimigos serão <Effects>marcados<Effects> e, se usarem uma nova <Classes>habilidade ofensiva que cause dano<Classes>, as <SkillText>outras habilidades de Kakashi<SkillText> irão permanentemente <Damage>roubar 5 de vida<Damage> deles, causado como uma nova fonte de dano. Esse efeito <Effects>acumula<Effects>.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 4,
      "ruleDescription": "For 3 turns, Kakashi gains 15 points of damage reduction and any enemy that uses a new non-mental skill on him will take 10 piercing damage. During this time, all enemies will be marked and, if they use a new harmful damaging skill, Kakashi's other skills will permanently steal 5 health from them, dealt as a new source of damage. This effect stacks. Chakra cost: 1 Nin. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 3 turnos, Kakashi ganha 15 pontos de redução de dano e qualquer inimigo que usar uma nova habilidade não mental nele irá receber 10 de dano perfurante. Durante esse tempo, todos os inimigos serão marcados e, se usarem uma nova habilidade ofensiva que cause dano, as outras habilidades de Kakashi irão permanentemente roubar 5 de vida deles, causado como uma nova fonte de dano. Esse efeito acumula. Custo de chakra: 1 ninjutsu. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Earth Release: Earth-Style Wall",
      "file": "shinobi_alliance_kakashi_(s)_skill_4_(earth_release_earth-style_wall).png",
      "description": "This skill makes Shinobi Alliance Kakashi (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Shinobi Alliance Kakashi (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Shinobi Alliance Kakashi (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Shinobi Alliance Kakashi (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Shinobi Alliance Kakashi (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Shinobi Alliance Kakashi (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
