// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hiruko Sasori (S)",
  "description": "Hiruko is a puppet used by the Akatsuki shinobi, Sasori. Serving as a 'puppet armor', it allowed Sasori to hide inside of it. Hiruko is a human puppet made from the corpse of a renowned shinobi - this puppet is also Sasori's favorite.",
  "descriptionBR": "Hiruko é uma marionete utilizada pelo shinobi da Akatsuki, Sasori. Servindo como uma 'armadura de marionete', ela permitia que Sasori se escondesse dentro dela. Hiruko é uma marionete humana feita com o cadáver de um shinobi renomado e também é a favorita de Sasori.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "hiruko_sasori_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Poisonous Tail Stab",
      "file": "hiruko_sasori_(s)_skill_1_(poisonous_tail_stab).png",
      "description": "Deals 15 affliction damage to one enemy and applies 'Venom Stack'. This skill will cost 1 random chakra for 1 turn after being used. If the target already has a 'Venom Stack', deals 5 additional damage per stack and applies a 'Venom Stack' to all other enemies.",
      "descriptionBR": "Causa 15 de dano affliction a um inimigo e aplica 'Venom Stack'. Essa habilidade irá custar 1 chakra aleatório por 1 turno após ser usada. Se o alvo já tiver um 'Venom Stack', causa 5 de dano adicional por stack e aplica um 'Venom Stack' a todos os outros inimigos.",
      "descriptionRaw": "<Damage>Deals 15 affliction damage<Damage> to one enemy and <Effects>applies<Effects> <SkillName>'Venom Stack'<SkillName>. This skill will <Effects>cost 1 random chakra<Effects> for 1 turn after being used. If the target already has a <SkillName>'Venom Stack'<SkillName>, <Improvements>deals 5 additional damage per stack<Improvements> and <Effects>applies<Effects> a <SkillName>'Venom Stack'<SkillName> to all other enemies.",
      "descriptionBRRaw": "<Damage>Causa 15 de dano affliction<Damage> a um inimigo e <Effects>aplica<Effects> <SkillName>'Venom Stack'<SkillName>. Essa habilidade irá <Effects>custar 1 chakra aleatório<Effects> por 1 turno após ser usada. Se o alvo já tiver um <SkillName>'Venom Stack'<SkillName>, <Improvements>causa 5 de dano adicional por stack<Improvements> e <Effects>aplica<Effects> um <SkillName>'Venom Stack'<SkillName> a todos os outros inimigos.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Deals 15 affliction damage to one enemy and applies 'Venom Stack'. This skill will cost 1 random chakra for 1 turn after being used. If the target already has a 'Venom Stack', deals 5 additional damage per stack and applies a 'Venom Stack' to all other enemies. Chakra cost: 1 Tai. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Causa 15 de dano affliction a um inimigo e aplica 'Venom Stack'. Essa habilidade irá custar 1 chakra aleatório por 1 turno após ser usada. Se o alvo já tiver um 'Venom Stack', causa 5 de dano adicional por stack e aplica um 'Venom Stack' a todos os outros inimigos. Custo de chakra: 1 taijutsu. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Sand Clone Trap",
      "file": "hiruko_sasori_(s)_skill_2_(sand_clone_trap).png",
      "description": "For 1 turn, the first harmful skill used on Hiruko Sasori or an ally will be countered. This enemy will takes 10 affliction damage* and gains 1 'Venom Stack'. This skill is invisible. ",
      "descriptionBR": "Por 1 turno, a primeira habilidade ofensiva usada em Hiruko Sasori ou em um aliado será counterada. Esse inimigo irá receber 10 de dano affliction* e ganha 1 'Venom Stack'. Essa habilidade é invisível.",
      "descriptionRaw": "For 1 turn, the<Effects> first harmful skill<Effects> used on Hiruko Sasori or an ally will be <Defense>countered<Defense>. This enemy will <Damage>takes 10 affliction damage*<Damage> and <Effects>gains 1<Effects> <SkillName>'Venom Stack'<SkillName>. This skill is <Invisible>invisible<Invisible>. ",
      "descriptionBRRaw": "Por 1 turno, a <Effects>primeira habilidade ofensiva<Effects> usada em Hiruko Sasori ou em um aliado será <Defense>counterada<Defense>. Esse inimigo irá <Damage>receber 10 de dano affliction*<Damage> e <Effects>ganha 1<Effects> <SkillName>'Venom Stack'<SkillName>. Essa habilidade é <Invisible>invisível<Invisible>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Affliction*"
      ],
      "cooldown": 2,
      "ruleDescription": "For 1 turn, the first harmful skill used on Hiruko Sasori or an ally will be countered. This enemy will takes 10 affliction damage* and gains 1 'Venom Stack'. This skill is invisible.  Chakra cost: 1 Random. Catalog classes: Physical, Instant, Affliction*. Catalog cooldown: 2. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Por 1 turno, a primeira habilidade ofensiva usada em Hiruko Sasori ou em um aliado será counterada. Esse inimigo irá receber 10 de dano affliction* e ganha 1 'Venom Stack'. Essa habilidade é invisível. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant, Affliction*. Recarga (cooldown) no catálogo: 2. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Puppet Reveal",
      "file": "hiruko_sasori_(s)_skill_3_(puppet_reveal).png",
      "description": "Sasori activates 'Puppet Reveal'. The next time his health reaches 50 or less, he will gain 20 points of destructible defense for 3 turns. During this time, 'Sand Clone Trap' and 'Puppet Reveal' will be replaced. This skill is invisible and can only be used once.",
      "descriptionBR": "Sasori ativa 'Puppet Reveal'. Na próxima vez que sua vida chegar a 50 ou menos, ele irá ganhar 20 pontos de defesa destrutível por 3 turnos. Durante esse tempo, 'Sand Clone Trap' e 'Puppet Reveal' serão substituídas. Essa habilidade é invisível e só pode ser usada uma vez.",
      "descriptionRaw": "Sasori activates <SkillName>'Puppet Reveal'<SkillName>. The next time his health reaches 50 or less, he will <Defense>gain 20 points of destructible defense<Defense> for 3 turns. During this time, <SkillName>'Sand Clone Trap'<SkillName> and <SkillName>'Puppet Reveal'<SkillName> will be <Improvements>replaced<Improvements>. This skill is <Invisible>invisible<Invisible> and can only be used once.",
      "descriptionBRRaw": "Sasori ativa <SkillName>'Puppet Reveal'<SkillName>. Na próxima vez que sua vida chegar a 50 ou menos, ele irá <Defense>ganhar 20 pontos de defesa destrutível<Defense> por 3 turnos. Durante esse tempo, <SkillName>'Sand Clone Trap'<SkillName> e <SkillName>'Puppet Reveal'<SkillName> serão <Improvements>substituídas<Improvements>. Essa habilidade é <Invisible>invisível<Invisible> e só pode ser usada uma vez.",
      "energy": [],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Sasori activates 'Puppet Reveal'. The next time his health reaches 50 or less, he will gain 20 points of destructible defense for 3 turns. During this time, 'Sand Clone Trap' and 'Puppet Reveal' will be replaced. This skill is invisible and can only be used once. Chakra cost: no chakra cost listed. Catalog classes: Physical, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Sasori ativa 'Puppet Reveal'. Na próxima vez que sua vida chegar a 50 ou menos, ele irá ganhar 20 pontos de defesa destrutível por 3 turnos. Durante esse tempo, 'Sand Clone Trap' e 'Puppet Reveal' serão substituídas. Essa habilidade é invisível e só pode ser usada uma vez. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Tail Deflection",
      "file": "hiruko_sasori_(s)_skill_4_(tail_deflection).png",
      "description": "This skill makes Hiruko Sasori (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade torna Hiruko Sasori (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Hiruko Sasori (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade torna Hiruko Sasori (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Hiruko Sasori (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade torna Hiruko Sasori (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Eight Waves of Needles",
      "file": "hiruko_sasori_(s)_skill_5_(eight_waves_of_needles).png",
      "description": "Applies 2 'Needle Marks' to all enemies for 2 turns. When an enemy with 'Needle Marks' receives damage from Hiruko or his allies, removes 1 mark to deal 10 affliction damage.",
      "descriptionBR": "Aplica 2 'Needle Marks' a todos os inimigos por 2 turnos. Quando um inimigo com 'Needle Marks' recebe dano de Hiruko ou de seus aliados, remove 1 marca para causar 10 de dano affliction.",
      "descriptionRaw": "<Effects>Applies 2<Effects> <SkillName>'Needle Marks'<SkillName> to all enemies for 2 turns. When an enemy with <SkillName>'Needle Marks'<SkillName> receives damage from Hiruko or his allies, <Effects>removes 1 mark<Effects> to <Damage>deal 10 affliction damage<Damage>.",
      "descriptionBRRaw": "<Effects>Aplica 2<Effects> <SkillName>'Needle Marks'<SkillName> a todos os inimigos por 2 turnos. Quando um inimigo com <SkillName>'Needle Marks'<SkillName> recebe dano de Hiruko ou de seus aliados, <Effects>remove 1 marca<Effects> para <Damage>causar 10 de dano affliction<Damage>.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 1,
      "ruleDescription": "Applies 2 'Needle Marks' to all enemies for 2 turns. When an enemy with 'Needle Marks' receives damage from Hiruko or his allies, removes 1 mark to deal 10 affliction damage. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Aplica 2 'Needle Marks' a todos os inimigos por 2 turnos. Quando um inimigo com 'Needle Marks' recebe dano de Hiruko ou de seus aliados, remove 1 marca para causar 10 de dano affliction. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "Prosthetic Arm Senbon",
      "file": "hiruko_sasori_(s)_skill_6_(prosthetic_arm_senbon).png",
      "description": "Consumes all 'Needle Marks' on all enemies: for each mark removed, that enemy takes 15 affliction damage; if at least 5 marks are consumed in total, Sasori becomes invulnerable for 1 turn.",
      "descriptionBR": "Consome todas as 'Needle Marks' de todos os inimigos: para cada marca removida, esse inimigo recebe 15 de dano affliction; se pelo menos 5 marcas forem consumidas no total, Sasori se torna invulnerável por 1 turno.",
      "descriptionRaw": "<Effects>Consumes all<Effects> <SkillName>'Needle Marks'<SkillName> on all enemies: for each mark removed, that enemy <Damage>takes 15 affliction damage<Damage>; if at least 5 marks are consumed in total, Sasori becomes <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "<Effects>Consome todas as<Effects> <SkillName>'Needle Marks'<SkillName> de todos os inimigos: para cada marca removida, esse inimigo <Damage>recebe 15 de dano affliction<Damage>; se pelo menos 5 marcas forem consumidas no total, Sasori se torna <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Consumes all 'Needle Marks' on all enemies: for each mark removed, that enemy takes 15 affliction damage; if at least 5 marks are consumed in total, Sasori becomes invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Consome todas as 'Needle Marks' de todos os inimigos: para cada marca removida, esse inimigo recebe 15 de dano affliction; se pelo menos 5 marcas forem consumidas no total, Sasori se torna invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 7,
      "name": "Poison Stack",
      "file": "hiruko_sasori_(s)_skill_7_(poison_stack).png",
      "description": "Venom Stack: The following turn, this enemy receives 5 affliction damage for 2 turns.",
      "descriptionBR": "Venom Stack: No próximo turno, esse inimigo irá receber 5 de dano affliction por 2 turnos.",
      "descriptionRaw": "<SkillName>Venom Stack<SkillName>: The following turn, this enemy <Damage>receives 5 affliction damage<Damage> for 2 turns.",
      "descriptionBRRaw": "<SkillName>Venom Stack<SkillName>: No próximo turno, esse inimigo irá <Damage>receber 5 de dano affliction<Damage> por 2 turnos.",
      "energy": [],
      "classes": [
        "Affliction",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Venom Stack: The following turn, this enemy receives 5 affliction damage for 2 turns. Chakra cost: no chakra cost listed. Catalog classes: Affliction, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Venom Stack: No próximo turno, esse inimigo irá receber 5 de dano affliction por 2 turnos. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Affliction, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
