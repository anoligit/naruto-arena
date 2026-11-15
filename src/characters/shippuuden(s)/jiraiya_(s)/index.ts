// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Jiraiya (S)",
  "description": "Jiraiya (S) is one of the legendary Sannin that were trained by the third Hokage. Also known as the toad sage, he has been Uzumaki Naruto's teacher for the past few years.",
  "descriptionBR": "Jiraiya (S) é um dos lendários Sannin treinados pelo terceiro Hokage. Também conhecido como o sábio dos sapos, ele tem sido o mestre de Uzumaki Naruto nos últimos anos.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "jiraiya_(s)_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Toad Oil Projectile",
      "file": "jiraiya_(s)_skill_1_(toad_oil_projectile).png",
      "description": "Jiraiya spits a very dense oil at all enemies, dealing 10 affliction damage to them. Permanently, all enemies will receive 10 additional damage from 'Katon Endan'. Enemies marked by 'Wild Lion Mane' will have their action and control skills ended. This skill is replaced by 'Katon Endan' after being used.",
      "descriptionBR": "Jiraiya cospe um óleo muito denso em todos os inimigos, irá causar 10 de dano affliction a eles. Permanentemente, todos os inimigos irão receber 10 de dano adicional de 'Katon Endan'. Inimigos marcados por 'Wild Lion Mane' terão suas habilidades de Action e Control encerradas. Essa habilidade será substituída por 'Katon Endan' após ser usada.",
      "descriptionRaw": "Jiraiya spits a very dense oil at all enemies, dealing 10 affliction damage to them. Permanently, all enemies will receive 10 additional damage from 'Katon Endan'. Enemies marked by 'Wild Lion Mane' will have their action and control skills ended. This skill is replaced by 'Katon Endan' after being used.",
      "descriptionBRRaw": "Jiraiya cospe um óleo muito denso em todos os inimigos, irá causar 10 de dano affliction a eles. Permanentemente, todos os inimigos irão receber 10 de dano adicional de 'Katon Endan'. Inimigos marcados por 'Wild Lion Mane' terão suas habilidades de Action e Control encerradas. Essa habilidade será substituída por 'Katon Endan' após ser usada.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Jiraiya spits a very dense oil at all enemies, dealing 10 affliction damage to them. Permanently, all enemies will receive 10 additional damage from 'Katon Endan'. Enemies marked by 'Wild Lion Mane' will have their action and control skills ended. This skill is replaced by 'Katon Endan' after being used. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Jiraiya cospe um óleo muito denso em todos os inimigos, irá causar 10 de dano affliction a eles. Permanentemente, todos os inimigos irão receber 10 de dano adicional de 'Katon Endan'. Inimigos marcados por 'Wild Lion Mane' terão suas habilidades de Action e Control encerradas. Essa habilidade será substituída por 'Katon Endan' após ser usada. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Jiraya's Rasengan",
      "file": "jiraiya_(s)_skill_2_(jiraya's_rasengan).png",
      "description": "Jiraya hits an opponent with his Rasengan, dealing 35 damage to them. For 1 turn, that enemy will deal 10 less non-affliction damage. If Used on an enemy marked by 'Wild Lion Mane', that enemy will take 10 additional damage. ",
      "descriptionBR": "Jiraya atinge um oponente com seu Rasengan, causando 35 de dano. Por 1 turno, esse inimigo causará 10 de dano não affliction a menos. Se usado em um inimigo marcado por 'Wild Lion Mane', esse inimigo receberá 10 de dano adicional.",
      "descriptionRaw": "Jiraya hits an opponent with his Rasengan, dealing 35 damage to them. For 1 turn, that enemy will deal 10 less non-affliction damage. If Used on an enemy marked by 'Wild Lion Mane', that enemy will take 10 additional damage. ",
      "descriptionBRRaw": "Jiraya atinge um oponente com seu Rasengan, causando 35 de dano. Por 1 turno, esse inimigo causará 10 de dano não affliction a menos. Se usado em um inimigo marcado por 'Wild Lion Mane', esse inimigo receberá 10 de dano adicional.",
      "energy": [
        "Nin",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Jiraya hits an opponent with his Rasengan, dealing 35 damage to them. For 1 turn, that enemy will deal 10 less non-affliction damage. If Used on an enemy marked by 'Wild Lion Mane', that enemy will take 10 additional damage.  Chakra cost: 1 Nin, 1 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Jiraya atinge um oponente com seu Rasengan, causando 35 de dano. Por 1 turno, esse inimigo causará 10 de dano não affliction a menos. Se usado em um inimigo marcado por 'Wild Lion Mane', esse inimigo receberá 10 de dano adicional. Custo de chakra: 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Wild Lion Mane",
      "file": "jiraiya_(s)_skill_3_(wild_lion_mane).jpg",
      "description": "Jiraiya will protect himself or an ally for 2 turns. If an enemy uses a new skill on that ally, they will take 10 piercing damage and will deal 15 less non-affliction damage for 1 turn. This skill is invisible.",
      "descriptionBR": "Jiraiya protegerá a si mesmo ou a um aliado por 2 turnos. Se um inimigo usar uma nova habilidade nesse aliado, ele receberá 10 de dano perfurante e causará 15 de dano não affliction a menos por 1 turno. Esta habilidade é invisível.",
      "descriptionRaw": "Jiraiya will protect himself or an ally for 2 turns. If an enemy uses a new skill on that ally, they will take 10 piercing damage and will deal 15 less non-affliction damage for 1 turn. This skill is invisible.",
      "descriptionBRRaw": "Jiraiya protegerá a si mesmo ou a um aliado por 2 turnos. Se um inimigo usar uma nova habilidade nesse aliado, ele receberá 10 de dano perfurante e causará 15 de dano não affliction a menos por 1 turno. Esta habilidade é invisível.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 3,
      "ruleDescription": "Jiraiya will protect himself or an ally for 2 turns. If an enemy uses a new skill on that ally, they will take 10 piercing damage and will deal 15 less non-affliction damage for 1 turn. This skill is invisible. Chakra cost: 1 Nin. Catalog classes: Physical, Instant. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Jiraiya protegerá a si mesmo ou a um aliado por 2 turnos. Se um inimigo usar uma nova habilidade nesse aliado, ele receberá 10 de dano perfurante e causará 15 de dano não affliction a menos por 1 turno. Esta habilidade é invisível. Custo de chakra: 1 ninjutsu. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Summoning Gamaken",
      "file": "jiraiya_(s)_skill_4_(summoning_gamaken).jpg",
      "description": "This skill makes Jiraiya invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Jiraiya invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Jiraiya <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Jiraiya <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Jiraiya invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Jiraiya invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Katon Endan",
      "file": "jiraiya_(s)_skill_5_(katon_endan).jpg",
      "description": "Jiraiya emits a jet of fire from his mouth, dealing 20 affliction damage to one enemy. This skill is replaced by 'Toad Oil Projectile' after being used.",
      "descriptionBR": "Jiraiya emite um jato de fogo pela boca, causando 20 de dano affliction a um inimigo. Esta habilidade é substituída por 'Toad Oil Projectile' após ser usada.",
      "descriptionRaw": "Jiraiya emits a jet of fire from his mouth, <Damage>dealing 20 affliction damage<Damage> to one enemy. This skill is replaced by <SkillName>'Toad Oil Projectile'<SkillName> after being used.",
      "descriptionBRRaw": "Jiraiya emite um jato de fogo pela boca, <Damage>causando 20 de dano affliction<Damage> a um inimigo. Esta habilidade é substituída por <SkillName>'Toad Oil Projectile'<SkillName> após ser usada.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Jiraiya emits a jet of fire from his mouth, dealing 20 affliction damage to one enemy. This skill is replaced by 'Toad Oil Projectile' after being used. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Jiraiya emite um jato de fogo pela boca, causando 20 de dano affliction a um inimigo. Esta habilidade é substituída por 'Toad Oil Projectile' após ser usada. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
