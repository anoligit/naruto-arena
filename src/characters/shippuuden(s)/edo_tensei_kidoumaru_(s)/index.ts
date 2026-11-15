// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Kidoumaru (S)",
  "description": "Reanimated by Kabuto during the Fourth Shinobi World War along with his Sound Four teammates, Kidoumaru is happy to be back in action and wreaking havoc once again. Terrorizing the battlefield with his many spider-based jutsu, enhanced by his Cursed Seal, Kidoumaru is a menace to all who cross his path.",
  "descriptionBR": "Reanimado por Kabuto durante a Quarta Guerra Mundial Shinobi ao lado de seus companheiros do Quarteto do Som, Kidoumaru está feliz por voltar à ação e causar destruição novamente. Aterrorizando o campo de batalha com seus diversos jutsus baseados em aranhas, aprimorados por sua Marca da Maldição, Kidoumaru é uma ameaça para todos que cruzam seu caminho.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_kidoumaru_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "The Spider's Web",
      "file": "edo_tensei_kidoumaru_(s)_skill_1_(the_spider's_web).png",
      "description": "Kidoumaru enables his skills and targets all enemies permanently. Every time they use a new harmful skill, they will gain 1 'Web Stack'. This skill ignores invulnerability and will be replaced by 'Sticky Golden Arrow'.",
      "descriptionBR": "Kidoumaru ativa suas habilidades e alveja todos os inimigos permanentemente. Sempre que eles usarem uma nova habilidade ofensiva, irão ganhar 1 'Web Stack'. Essa habilidade ignora invulnerabilidade e será substituída por 'Sticky Golden Arrow'.",
      "descriptionRaw": "Kidoumaru enables his skills and targets all enemies permanently. Every time they use a new <Classes>harmful skill<Classes>, they will <Effects>gain 1<Effects> <SkillName>'Web Stack'<SkillName>. This skill <Defense>ignores invulnerability<Defense> and will be <Improvements>replaced<Improvements> by <SkillName>'Sticky Golden Arrow'<SkillName>.",
      "descriptionBRRaw": "Kidoumaru ativa suas habilidades e alveja todos os inimigos permanentemente. Sempre que eles usarem uma nova <Classes>habilidade ofensiva<Classes>, irão <Effects>ganhar 1<Effects> <SkillName>'Web Stack'<SkillName>. Essa habilidade <Defense>ignora invulnerabilidade<Defense> e será <Improvements>substituída<Improvements> por <SkillName>'Sticky Golden Arrow'<SkillName>.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Kidoumaru enables his skills and targets all enemies permanently. Every time they use a new harmful skill, they will gain 1 'Web Stack'. This skill ignores invulnerability and will be replaced by 'Sticky Golden Arrow'. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kidoumaru ativa suas habilidades e alveja todos os inimigos permanentemente. Sempre que eles usarem uma nova habilidade ofensiva, irão ganhar 1 'Web Stack'. Essa habilidade ignora invulnerabilidade e será substituída por 'Sticky Golden Arrow'. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Sticky Gold Kunai",
      "file": "edo_tensei_kidoumaru_(s)_skill_2_(sticky_gold_kunai).png",
      "description": "Kidoumaru deals 20 piercing damage to one enemy and stuns their non-mental skills for 1 turn. Afterwards, all enemies will be dealt 5 piercing damage for each 'Web Stack' they have.",
      "descriptionBR": "Kidoumaru causa 20 de dano perfurante a um inimigo e atordoa suas habilidades não mentais por 1 turno. Depois disso, todos os inimigos irão receber 5 de dano perfurante para cada 'Web Stack' que tiverem.",
      "descriptionRaw": "Kidoumaru <Damage>deals 20 piercing damage<Damage> to one enemy and <Effects>stuns<Effects> their <Classes>non-mental skills<Classes> for 1 turn. Afterwards, all enemies will be <Damage>dealt 5 piercing damage<Damage> for each <SkillName>'Web Stack'<SkillName> they have.",
      "descriptionBRRaw": "Kidoumaru <Damage>causa 20 de dano perfurante<Damage> a um inimigo e <Effects>atordoa<Effects> suas <Classes>habilidades não mentais<Classes> por 1 turno. Depois disso, todos os inimigos irão <Damage>receber 5 de dano perfurante<Damage> para cada <SkillName>'Web Stack'<SkillName> que tiverem.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Kidoumaru deals 20 piercing damage to one enemy and stuns their non-mental skills for 1 turn. Afterwards, all enemies will be dealt 5 piercing damage for each 'Web Stack' they have. Chakra cost: 1 Nin. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kidoumaru causa 20 de dano perfurante a um inimigo e atordoa suas habilidades não mentais por 1 turno. Depois disso, todos os inimigos irão receber 5 de dano perfurante para cada 'Web Stack' que tiverem. Custo de chakra: 1 ninjutsu. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Giant Spider Web",
      "file": "edo_tensei_kidoumaru_(s)_skill_3_(giant_spider_web).png",
      "description": "Kidoumaru traps all enemies in a giant web, granting them 1 additional 'Web Stack' and then making them deal 10 less non-affliction damage for 1 turn. This skill cannot be countered.",
      "descriptionBR": "Kidoumaru prende todos os inimigos em uma teia gigante, concedendo a eles 1 stack adicional de 'Web Stack' e, então, fazendo com que causem 10 de dano não-affliction a menos por 1 turno. Essa habilidade não pode ser counterada.",
      "descriptionRaw": "Kidoumaru traps all enemies in a giant web, <Effects>granting them 1 additional<Effects> <SkillName>'Web Stack'<SkillName> and then making them <Effects>deal 10 less non-affliction damage<Effects> for 1 turn. This skill <Defense>cannot be countered<Defense>.",
      "descriptionBRRaw": "Kidoumaru prende todos os inimigos em uma teia gigante, <Effects>concedendo a eles 1 stack adicional<Effects> de <SkillName>'Web Stack'<SkillName> e, então, fazendo com que <Effects>causem 10 de dano não-affliction a menos<Effects> por 1 turno. Essa habilidade <Defense>não pode ser counterada<Defense>.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Kidoumaru traps all enemies in a giant web, granting them 1 additional 'Web Stack' and then making them deal 10 less non-affliction damage for 1 turn. This skill cannot be countered. Chakra cost: 1 Blood. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kidoumaru prende todos os inimigos em uma teia gigante, concedendo a eles 1 stack adicional de 'Web Stack' e, então, fazendo com que causem 10 de dano não-affliction a menos por 1 turno. Essa habilidade não pode ser counterada. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Curse Mark Third Eye",
      "file": "edo_tensei_kidoumaru_(s)_skill_4_(curse_mark_third_eye).png",
      "description": "Kidoumaru activates his Curse Mark, becoming invulnerable for 1 turn.",
      "descriptionBR": "Kidoumaru ativa sua Marca da Maldição, tornando-se invulnerável por 1 turno.",
      "descriptionRaw": "Kidoumaru activates his Curse Mark, becoming <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Kidoumaru ativa sua Marca da Maldição, tornando-se <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "Kidoumaru activates his Curse Mark, becoming invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Chakra, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kidoumaru ativa sua Marca da Maldição, tornando-se invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Sticky Golden Arrow",
      "file": "edo_tensei_kidoumaru_(s)_skill_5_(sticky_golden_arrow).png",
      "description": "Using the Sticky Golden Arrow, Kidoumaru destroys all destructible defense one enemy has and deals 25 piercing damage to them, consuming all 'Web Stacks' they have to deal 10 additional damage per stack.",
      "descriptionBR": "Usando a Sticky Golden Arrow, Kidoumaru destrói toda a defesa destrutível de um inimigo e causa 25 de dano perfurante a ele, consumindo todos os 'Web Stacks' que ele tiver para causar 10 de dano adicional por stack.",
      "descriptionRaw": "Using the Sticky Golden Arrow, Kidoumaru <Effects>destroys all<Effects> <Defense>destructible defense<Defense> one enemy has and <Damage>deals 25 piercing damage<Damage> to them, <Effects>consuming all<Effects> <SkillName>'Web Stacks'<SkillName> they have to <Improvements>deal 10 additional damage per stack<Improvements>.",
      "descriptionBRRaw": "Usando a Sticky Golden Arrow, Kidoumaru <Effects>destrói toda a<Effects> <Defense>defesa destrutível<Defense> de um inimigo e <Damage>causa 25 de dano perfurante<Damage> a ele, <Effects>consumindo todos os<Effects> <SkillName>'Web Stacks'<SkillName> que ele tiver para <Improvements>causar 10 de dano adicional por stack<Improvements>.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Using the Sticky Golden Arrow, Kidoumaru destroys all destructible defense one enemy has and deals 25 piercing damage to them, consuming all 'Web Stacks' they have to deal 10 additional damage per stack. Chakra cost: 1 Blood, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Usando a Sticky Golden Arrow, Kidoumaru destrói toda a defesa destrutível de um inimigo e causa 25 de dano perfurante a ele, consumindo todos os 'Web Stacks' que ele tiver para causar 10 de dano adicional por stack. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
