// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Samehada Fusion Kisame (S)",
  "description": "After merging with the sentient blade Samehada, Kisame transforms into a monstrous shark-like being. In this form, he reigns supreme underwater, draining chakra upon contact and relentlessly hunting his prey within a vast, moving prison of water.",
  "descriptionBR": "Após se fundir com a espada senciente Samehada, Kisame se transforma em um ser monstruoso parecido com um tubarão. Nessa forma, ele reina supremo debaixo d'água, drenando chakra ao contato e caçando implacavelmente suas presas dentro de uma vasta e móvel prisão de água.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "samehada_fusion_kisame_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Water Prison Shark Dance",
      "file": "samehada_fusion_kisame_(s)_skill_1_(water_prison_shark_dance).png",
      "description": "For 3 turns, all enemies and all allies will have the cost of their harmful skills increased by 1 random chakra, while Kisame's harmful skills will cost 1 less random chakra. During this time, any target that uses a new harmful skill will ignore 'Water Prison Shark Dance' for 1 turn. This skill ends when Kisame dies.",
      "descriptionBR": "Por 3 turnos, todos os inimigos e todos os aliados terão o custo de suas habilidades ofensivas aumentado em 1 chakra aleatório, enquanto as habilidades ofensivas de Kisame custarão 1 chakra aleatório a menos. Durante esse tempo, qualquer alvo que usar uma nova habilidade ofensiva irá ignorar 'Water Prison Shark Dance' por 1 turno. Esta habilidade termina quando Kisame morrer.",
      "descriptionRaw": "For 3 turns, all enemies and all allies will have the cost of their <Classes>harmful skills increased by 1 random chakra<Classes>, while Kisame's <Improvements>harmful skills will cost 1 less random chakra<Improvements>. During this time, any target that <Classes>uses a new harmful skill<Classes> will ignore <SkillName>'Water Prison Shark Dance'<SkillName> for 1 turn. This skill ends when Kisame dies.",
      "descriptionBRRaw": "Por 3 turnos, todos os inimigos e todos os aliados terão o <Classes>custo de suas habilidades ofensivas aumentado em 1 chakra aleatório<Classes>, enquanto as <Improvements>habilidades ofensivas de Kisame custarão 1 chakra aleatório a menos<Improvements>. Durante esse tempo, qualquer alvo que <Classes>usar uma nova habilidade ofensiva<Classes> irá ignorar <SkillName>'Water Prison Shark Dance'<SkillName> por 1 turno. Esta habilidade termina quando Kisame morrer.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "For 3 turns, all enemies and all allies will have the cost of their harmful skills increased by 1 random chakra, while Kisame's harmful skills will cost 1 less random chakra. During this time, any target that uses a new harmful skill will ignore 'Water Prison Shark Dance' for 1 turn. This skill ends when Kisame dies. Chakra cost: 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 3 turnos, todos os inimigos e todos os aliados terão o custo de suas habilidades ofensivas aumentado em 1 chakra aleatório, enquanto as habilidades ofensivas de Kisame custarão 1 chakra aleatório a menos. Durante esse tempo, qualquer alvo que usar uma nova habilidade ofensiva irá ignorar 'Water Prison Shark Dance' por 1 turno. Esta habilidade termina quando Kisame morrer. Custo de chakra: 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Non-Stop Hunting",
      "file": "samehada_fusion_kisame_(s)_skill_2_(non-stop_hunting).png",
      "description": "Kisame relentlessly hunts an enemy from underwater. For 2 turns, Kisame will deal 20 piercing damage to that enemy and remove 1 random chakra from them each turn.",
      "descriptionBR": "Kisame caça implacavelmente um inimigo debaixo d'água. Por 2 turnos, Kisame irá causar 20 de dano perfurante a esse inimigo e remover 1 chakra aleatório dele a cada turno.",
      "descriptionRaw": "Kisame relentlessly hunts an enemy from underwater. For 2 turns, Kisame will <Damage>deal 20 piercing damage<Damage> to that enemy and <Effects>remove 1 random chakra<Effects> from them each turn.",
      "descriptionBRRaw": "Kisame caça implacavelmente um inimigo debaixo d'água. Por 2 turnos, Kisame irá <Damage>causar 20 de dano perfurante<Damage> a esse inimigo e <Effects>remover 1 chakra aleatório<Effects> dele a cada turno.",
      "energy": [
        "Blood",
        "Random",
        "Random"
      ],
      "classes": [
        "Physical",
        "Action",
        "Melee"
      ],
      "cooldown": 1,
      "ruleDescription": "Kisame relentlessly hunts an enemy from underwater. For 2 turns, Kisame will deal 20 piercing damage to that enemy and remove 1 random chakra from them each turn. Chakra cost: 1 Blood, 2 Random. Catalog classes: Physical, Action, Melee. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kisame caça implacavelmente um inimigo debaixo d'água. Por 2 turnos, Kisame irá causar 20 de dano perfurante a esse inimigo e remover 1 chakra aleatório dele a cada turno. Custo de chakra: 1 linhagem sanguínea, 2 aleatório. Classes no catálogo: Physical, Action, Melee. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Great Water Shark Missile",
      "file": "samehada_fusion_kisame_(s)_skill_3_(great_water_shark_missile).png",
      "description": "Kisame launches a massive shark-shaped water missile, dealing 25 damage to all enemies and removing 1 random chakra from a random enemy. Afterwards, Kisame gains 15 points of destructible defense. This skill cannot be countered.",
      "descriptionBR": "Kisame lança um enorme projétil de água em forma de tubarão, causando 25 de dano a todos os inimigos e removendo 1 chakra aleatório de um inimigo aleatório. Depois disso, Kisame ganha 15 pontos de defesa destrutível. Esta habilidade não pode ser counterada.",
      "descriptionRaw": "Kisame launches a massive shark-shaped water missile, <Damage>dealing 25 damage<Damage> to all enemies and <Effects>removing 1 random chakra<Effects> from a random enemy. Afterwards, Kisame <Defense>gains 15 points of destructible defense<Defense>. This skill <Classes>cannot be countered<Classes>.",
      "descriptionBRRaw": "Kisame lança um enorme projétil de água em forma de tubarão, <Damage>causando 25 de dano<Damage> a todos os inimigos e <Effects>removendo 1 chakra aleatório<Effects> de um inimigo aleatório. Depois disso, Kisame <Defense>ganha 15 pontos de defesa destrutível<Defense>. Esta habilidade <Classes>não pode ser counterada<Classes>.",
      "energy": [
        "Blood",
        "Nin",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Ranged"
      ],
      "cooldown": 2,
      "ruleDescription": "Kisame launches a massive shark-shaped water missile, dealing 25 damage to all enemies and removing 1 random chakra from a random enemy. Afterwards, Kisame gains 15 points of destructible defense. This skill cannot be countered. Chakra cost: 1 Blood, 1 Nin, 1 Random. Catalog classes: Chakra, Instant, Ranged. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kisame lança um enorme projétil de água em forma de tubarão, causando 25 de dano a todos os inimigos e removendo 1 chakra aleatório de um inimigo aleatório. Depois disso, Kisame ganha 15 pontos de defesa destrutível. Esta habilidade não pode ser counterada. Custo de chakra: 1 linhagem sanguínea, 1 ninjutsu, 1 aleatório. Classes no catálogo: Chakra, Instant, Ranged. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Shark Skin",
      "file": "samehada_fusion_kisame_(s)_skill_4_(shark_skin).png",
      "description": "This skill makes Samehada Fusion Kisame (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Samehada Fusion Kisame (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Samehada Fusion Kisame (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Samehada Fusion Kisame (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Samehada Fusion Kisame (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Samehada Fusion Kisame (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
