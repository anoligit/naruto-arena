// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Edo Tensei Itachi (S)",
  "description": "One of the five past Akatsuki members reanimated by Kabuto during the Fourth Shinobi World War, Itachi sees this as an opportunity to pursue his true goals and set things right with Naruto and Sasuke. Freeing himself from Kabuto's shackles, Itachi unleashes the full power of the Uchiha with his deathless body.",
  "descriptionBR": "Um dos cinco antigos membros da Akatsuki reanimados por Kabuto durante a Quarta Grande Guerra Ninja, Itachi vê isso como uma oportunidade para perseguir seus verdadeiros objetivos e consertar as coisas com Naruto e Sasuke. Libertando-se das correntes de Kabuto, Itachi libera todo o poder do Uchiha com seu corpo imortal.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "edo_tensei_itachi_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Phoenix Flower Shuriken",
      "file": "edo_tensei_itachi_(s)_skill_1_(phoenix_flower_shuriken).png",
      "description": "Itachi unleashes a volley of fire-infused shuriken, dealing 10 affliction damage to all enemies. For 1 turn, if they use a new harmful skill, they will have 'Phoenix Flower Shuriken' re-applied on them.",
      "descriptionBR": "Itachi libera uma rajada de shurikens infundidas com fogo, causando 10 de dano affliction a todos os inimigos. Por 1 turno, se eles usarem uma nova habilidade ofensiva, 'Phoenix Flower Shuriken' será reaplicada a eles.",
      "descriptionRaw": "Itachi unleashes a volley of fire-infused shuriken, dealing 10 affliction damage to all enemies. For 1 turn, if they use a new harmful skill, they will have 'Phoenix Flower Shuriken' re-applied on them.",
      "descriptionBRRaw": "Itachi libera uma rajada de shurikens infundidas com fogo, causando 10 de dano affliction a todos os inimigos. Por 1 turno, se eles usarem uma nova habilidade ofensiva, 'Phoenix Flower Shuriken' será reaplicada a eles.",
      "energy": [
        "Nin"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Itachi unleashes a volley of fire-infused shuriken, dealing 10 affliction damage to all enemies. For 1 turn, if they use a new harmful skill, they will have 'Phoenix Flower Shuriken' re-applied on them. Chakra cost: 1 Nin. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Itachi libera uma rajada de shurikens infundidas com fogo, causando 10 de dano affliction a todos os inimigos. Por 1 turno, se eles usarem uma nova habilidade ofensiva, 'Phoenix Flower Shuriken' será reaplicada a eles. Custo de chakra: 1 ninjutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Demonic Illusion: Mirage Crow",
      "file": "edo_tensei_itachi_(s)_skill_2_(demonic_illusion_mirage_crow).png",
      "description": "For 2 turns, one enemy will be unable to reduce damage or become invulnerable and will take 15 damage each turn. During this time, Itachi will become invulnerable to that enemy's skills.",
      "descriptionBR": "Por 2 turnos, um inimigo não poderá reduzir dano nem se tornar invulnerável e irá receber 15 de dano a cada turno. Durante esse tempo, Itachi se tornará invulnerável às habilidades desse inimigo.",
      "descriptionRaw": "For 2 turns, one enemy will be unable to reduce damage or become invulnerable and will take 15 damage each turn. During this time, Itachi will become invulnerable to that enemy's skills.",
      "descriptionBRRaw": "Por 2 turnos, um inimigo não poderá reduzir dano nem se tornar invulnerável e irá receber 15 de dano a cada turno. Durante esse tempo, Itachi se tornará invulnerável às habilidades desse inimigo.",
      "energy": [
        "Gen",
        "Random"
      ],
      "classes": [
        "Mental",
        "Action",
        "Melee"
      ],
      "cooldown": 2,
      "ruleDescription": "For 2 turns, one enemy will be unable to reduce damage or become invulnerable and will take 15 damage each turn. During this time, Itachi will become invulnerable to that enemy's skills. Chakra cost: 1 Gen, 1 Random. Catalog classes: Mental, Action, Melee. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 2 turnos, um inimigo não poderá reduzir dano nem se tornar invulnerável e irá receber 15 de dano a cada turno. Durante esse tempo, Itachi se tornará invulnerável às habilidades desse inimigo. Custo de chakra: 1 genjutsu, 1 aleatório. Classes no catálogo: Mental, Action, Melee. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Passive: Edo Tensei Sharingan",
      "file": "edo_tensei_itachi_(s)_skill_3_(passive_edo_tensei_sharingan).png",
      "description": "Each turn, this skill will randomly switch between 'Izanami', 'Itachi Mangekyou Sharingan', and 'Itachi Kotoamatsukami'. Each of these skills can only be used once per game. This passive is invisible.",
      "descriptionBR": "A cada turno, essa habilidade irá alternar aleatoriamente entre 'Izanami', 'Itachi Mangekyou Sharingan' e 'Itachi Kotoamatsukami'. Cada uma dessas habilidades só pode ser usada uma vez por jogo. Essa passiva é invisível.",
      "descriptionRaw": "Each turn, this skill will randomly switch between 'Izanami', 'Itachi Mangekyou Sharingan', and 'Itachi Kotoamatsukami'. Each of these skills can only be used once per game. This passive is invisible.",
      "descriptionBRRaw": "A cada turno, essa habilidade irá alternar aleatoriamente entre 'Izanami', 'Itachi Mangekyou Sharingan' e 'Itachi Kotoamatsukami'. Cada uma dessas habilidades só pode ser usada uma vez por jogo. Essa passiva é invisível.",
      "energy": [],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Each turn, this skill will randomly switch between 'Izanami', 'Itachi Mangekyou Sharingan', and 'Itachi Kotoamatsukami'. Each of these skills can only be used once per game. This passive is invisible. Chakra cost: no chakra cost listed. Catalog classes: Mental, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "A cada turno, essa habilidade irá alternar aleatoriamente entre 'Izanami', 'Itachi Mangekyou Sharingan' e 'Itachi Kotoamatsukami'. Cada uma dessas habilidades só pode ser usada uma vez por jogo. Essa passiva é invisível. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Itachi Block",
      "file": "edo_tensei_itachi_(s)_skill_4_(itachi_block).png",
      "description": "This skill makes Edo Tensei Itachi (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Edo Tensei Itachi (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Edo Tensei Itachi (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Edo Tensei Itachi (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Edo Tensei Itachi (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Edo Tensei Itachi (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Edo Tensei Mangekyou Sharingan",
      "file": "edo_tensei_itachi_(s)_skill_5_(edo_tensei_mangekyou_sharingan).png",
      "description": "This skill can only be used once to apply both 'Amaterasu' and 'Tsukuyomi' on an enemy; This skill ends when Itachi killed. Amaterasu: Deals 20 affliction damage instantly, and 5 affliction permanently. Tsukuyomi: Fully stuns the enemy's skills for 1 turn.",
      "descriptionBR": "Essa habilidade só pode ser usada uma vez para aplicar tanto 'Amaterasu' quanto 'Tsukuyomi' em um inimigo; Essa habilidade termina quando Itachi morrer. Amaterasu: Causa 20 de dano affliction instantaneamente, e 5 de dano affliction permanentemente. Tsukuyomi: Atordoa completamente as habilidades do inimigo por 1 turno.",
      "descriptionRaw": "This skill can only be used once to apply both 'Amaterasu' and 'Tsukuyomi' on an enemy; This skill ends when Itachi killed.<br> Amaterasu: Deals 20 affliction damage instantly, and 5 affliction permanently.<br> Tsukuyomi: Fully stuns the enemy's skills for 1 turn.",
      "descriptionBRRaw": "Essa habilidade só pode ser usada uma vez para aplicar tanto 'Amaterasu' quanto 'Tsukuyomi' em um inimigo; Essa habilidade termina quando Itachi morrer.<br> Amaterasu: Causa 20 de dano affliction instantaneamente, e 5 de dano affliction permanentemente.<br> Tsukuyomi: Atordoa completamente as habilidades do inimigo por 1 turno.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged",
        "$_"
      ],
      "cooldown": 0,
      "ruleDescription": "This skill can only be used once to apply both 'Amaterasu' and 'Tsukuyomi' on an enemy; This skill ends when Itachi killed. Amaterasu: Deals 20 affliction damage instantly, and 5 affliction permanently. Tsukuyomi: Fully stuns the enemy's skills for 1 turn. Chakra cost: 1 Blood, 1 Random. Catalog classes: Mental, Instant, Ranged, $_. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade só pode ser usada uma vez para aplicar tanto 'Amaterasu' quanto 'Tsukuyomi' em um inimigo; Essa habilidade termina quando Itachi morrer. Amaterasu: Causa 20 de dano affliction instantaneamente, e 5 de dano affliction permanentemente. Tsukuyomi: Atordoa completamente as habilidades do inimigo por 1 turno. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Mental, Instant, Ranged, $_. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Edo Tensei Kotoamatsukami",
      "file": "edo_tensei_itachi_(s)_skill_6_(edo_tensei_kotoamatsukami).png",
      "description": "This skill can only be used once to target Itachi or an ally permanently. The next time the marked target's health drops to 5 or less, they will instantly heal to 40 health, and then heal 5 health for the following 3 turns. This skill is invisible until triggered.",
      "descriptionBR": "Essa habilidade só pode ser usada uma vez para alvejar Itachi ou um aliado permanentemente. Na próxima vez que a vida do alvo marcado cair para 5 ou menos, ele irá curar instantaneamente para 40 de vida, e então curará 5 de vida nos próximos 3 turnos. Essa habilidade é invisível até ser ativada.",
      "descriptionRaw": "This skill can only be used once to target Itachi or an ally permanently. The next time the marked target's health drops to 5 or less, they will instantly heal to 40 health, and then heal 5 health for the following 3 turns. This skill is invisible until triggered.",
      "descriptionBRRaw": "Essa habilidade só pode ser usada uma vez para alvejar Itachi ou um aliado permanentemente. Na próxima vez que a vida do alvo marcado cair para 5 ou menos, ele irá curar instantaneamente para 40 de vida, e então curará 5 de vida nos próximos 3 turnos. Essa habilidade é invisível até ser ativada.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "This skill can only be used once to target Itachi or an ally permanently. The next time the marked target's health drops to 5 or less, they will instantly heal to 40 health, and then heal 5 health for the following 3 turns. This skill is invisible until triggered. Chakra cost: 1 Blood, 1 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade só pode ser usada uma vez para alvejar Itachi ou um aliado permanentemente. Na próxima vez que a vida do alvo marcado cair para 5 ou menos, ele irá curar instantaneamente para 40 de vida, e então curará 5 de vida nos próximos 3 turnos. Essa habilidade é invisível até ser ativada. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 7,
      "name": "Izanami",
      "file": "edo_tensei_itachi_(s)_skill_7_(izanami).png",
      "description": "This skill can only be used once to target an enemy permanently. The next time that enemy uses a new skill, they will be countered and this skill will end. If successful, the countered skill will be stunned for 3 turns; This duration is increased by the skill's current cooldown. This skill is invisible until triggered.",
      "descriptionBR": "Essa habilidade só pode ser usada uma vez para alvejar um inimigo permanentemente. Na próxima vez que esse inimigo usar uma nova habilidade, ele será counterado e essa habilidade irá terminar. Se for bem-sucedida, a habilidade counterada terá seu cooldown atual aumentado em 3. Essa habilidade é invisível até ser ativada.",
      "descriptionRaw": "This skill can only be used once to target an enemy permanently. The next time that enemy uses a new skill, they will be countered and this skill will end. If successful, the countered skill will be stunned for 3 turns; This duration is increased by the skill's current cooldown. This skill is invisible until triggered.",
      "descriptionBRRaw": "Essa habilidade só pode ser usada uma vez para alvejar um inimigo permanentemente. Na próxima vez que esse inimigo usar uma nova habilidade, ele será counterado e essa habilidade irá terminar. Se for bem-sucedida, a habilidade counterada terá seu cooldown atual aumentado em 3. Essa habilidade é invisível até ser ativada.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Mental",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "This skill can only be used once to target an enemy permanently. The next time that enemy uses a new skill, they will be countered and this skill will end. If successful, the countered skill will be stunned for 3 turns; This duration is increased by the skill's current cooldown. This skill is invisible until triggered. Chakra cost: 1 Blood, 1 Random. Catalog classes: Mental, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade só pode ser usada uma vez para alvejar um inimigo permanentemente. Na próxima vez que esse inimigo usar uma nova habilidade, ele será counterado e essa habilidade irá terminar. Se for bem-sucedida, a habilidade counterada terá seu cooldown atual aumentado em 3. Essa habilidade é invisível até ser ativada. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Mental, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
