// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi Alliance Neji (S)",
  "description": "During the Fourth Great Ninja War, Neji fights alongside the Allied Shinobi Forces, using his mastery of the Byakugan and Gentle Fist to protect his comrades. Despite his chakra reserves gradually wearing thin, Neji remains determined to defend those he cares about.",
  "descriptionBR": "Durante a Quarta Grande Guerra Ninja, Neji luta ao lado das Forças Aliadas Shinobi, utilizando seu domínio do Byakugan e do Punho Suave para proteger seus companheiros. Apesar de suas reservas de chakra se esgotarem gradualmente, Neji permanece determinado a defender aqueles que ama.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_alliance_neji_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Heavenly Palm Rotation",
      "file": "shinobi_alliance_neji_(s)_skill_1_(heavenly_palm_rotation).png",
      "description": "By refining his mastery of the Gentle Fist, Neji performs an enhanced rotation, dealing 20 damage to all enemies and becoming invulnerable for 1 turn.",
      "descriptionBR": "Refinando suas habilidades com o Punho Suave, Neji realiza uma rotação melhorada, causando 20 de dano a todos os inimigos e se tornando invulnerável por 1 turno.",
      "descriptionRaw": "By refining his mastery of the Gentle Fist, Neji performs an enhanced rotation, <Damage>dealing 20 damage<Damage> to all enemies and becoming <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Refinando suas habilidades com o Punho Suave, Neji realiza uma rotação melhorada, <Damage>causando<Damage> <Damage>20 de dano<Damage> a todos os inimigos e se tornando <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Blood",
        "Random"
      ],
      "classes": [
        "Chakra",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "By refining his mastery of the Gentle Fist, Neji performs an enhanced rotation, dealing 20 damage to all enemies and becoming invulnerable for 1 turn. Chakra cost: 1 Blood, 1 Random. Catalog classes: Chakra, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Refinando suas habilidades com o Punho Suave, Neji realiza uma rotação melhorada, causando 20 de dano a todos os inimigos e se tornando invulnerável por 1 turno. Custo de chakra: 1 linhagem sanguínea, 1 aleatório. Classes no catálogo: Chakra, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Airborne Palm Crush",
      "file": "shinobi_alliance_neji_(s)_skill_2_(airborne_palm_crush).png",
      "description": "Neji unleashes a powerful wave of chakra that strikes an enemy from a distance. The enemy takes 30 damage and has 1 random chakra removed from them.",
      "descriptionBR": "Neji libera uma poderosa onda de chakra que acerta um inimigo a distância. O inimigo recebe 30 de dano e tem 1 chakra aleatório removido dele.",
      "descriptionRaw": "Neji unleashes a powerful wave of chakra that strikes an enemy from a distance. The enemy takes <Damage>30 damage<Damage> and has <Effects>1 random chakra removed<Effects> from them.",
      "descriptionBRRaw": "Neji libera uma poderosa onda de chakra que acerta um inimigo a distância. O inimigo recebe <Damage>30 de dano<Damage> e tem <Effects>1 chakra aleatório removido<Effects> dele.",
      "energy": [
        "Tai",
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "Neji unleashes a powerful wave of chakra that strikes an enemy from a distance. The enemy takes 30 damage and has 1 random chakra removed from them. Chakra cost: 1 Tai, 1 Random. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Neji libera uma poderosa onda de chakra que acerta um inimigo a distância. O inimigo recebe 30 de dano e tem 1 chakra aleatório removido dele. Custo de chakra: 1 taijutsu, 1 aleatório. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Gentle Fist Art: One Blow Body",
      "file": "shinobi_alliance_neji_(s)_skill_3_(gentle_fist_art_one_blow_body).png",
      "description": "Neji releases a powerful burst of chakra from every tenketsu in his body, removing every harmful skill from himself. His skills will cost 1 less random chakra for 1 turn.",
      "descriptionBR": "Neji libera uma explosão de chakra de cada tenketsu em seu corpo, removendo todas as habilidades ofensivas de si mesmo. As habilidades dele custarão 1 chakra aleatório a menos por 1 turno.",
      "descriptionRaw": "Neji releases a powerful burst of chakra from every tenketsu in his body, <Effects>removing every harmful skill<Effects> from himself. His skills <Effects>will cost 1 less random chakra<Effects> for 1 turn.",
      "descriptionBRRaw": "Neji libera uma explosão de chakra de cada tenketsu em seu corpo, <Effects>removendo todas as habilidades ofensivas<Effects> de si mesmo. As habilidades dele <Effects>custarão 1 chakra aleatório a menos<Effects> por 1 turno.",
      "energy": [],
      "classes": [
        "Chakra",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Neji releases a powerful burst of chakra from every tenketsu in his body, removing every harmful skill from himself. His skills will cost 1 less random chakra for 1 turn. Chakra cost: no chakra cost listed. Catalog classes: Chakra, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Neji libera uma explosão de chakra de cada tenketsu em seu corpo, removendo todas as habilidades ofensivas de si mesmo. As habilidades dele custarão 1 chakra aleatório a menos por 1 turno. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Chakra, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Eight Trigrams: Vanishing Step",
      "file": "shinobi_alliance_neji_(s)_skill_4_(eight_trigrams_vanishing_step).png",
      "description": "This skill makes Neji invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Neji invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Neji <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Neji <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "This skill makes Neji invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Neji invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Passive: The Price of Perseverance",
      "file": "shinobi_alliance_neji_(s)_skill_5_(passive_the_price_of_perseverance).png",
      "description": "As the battle drags on, Neji pushes his chakra network beyond its limits. Everytime he uses a new skill, the base cooldowns of all his skills are increased by 1 turn (stacks). Once he uses 6 skills in the game, 'Heavenly Palm Rotation' and 'Airborne Palm Crush' will lose their non-damage effects and 'Eight Trigrams: Vanishing Step' is permanently replaced by 'A Fate of His Own'.",
      "descriptionBR": "Enquanto a batalha passa, Neji leva sua rede de chakra além de seu limite. Sempre que ele usa uma nova habilidade, os tempos de recarga base de todas as suas habilidades são aumentados em 1 turno. Quando ele usar 6 habilidades na partida, 'Heavenly Palm Rotation' e 'Airborne Palm Crush' apenas causarão dano e 'Eight Trigrams: Vanishing Step' será permanentemente substituída por 'A Fate of His Own'.",
      "descriptionRaw": "As the battle drags on, Neji pushes his chakra network beyond its limits. Everytime he uses a new skill, <Effects>the base cooldowns of all his skills are increased by 1 turn (stacks)<Effects>. Once he uses 6 skills in the game, <SkillName>'Heavenly Palm Rotation'<SkillName> and <SkillName>'Airborne Palm Crush'<SkillName> <Effects>will lose their non-damage effects<Effects> and <SkillName>'Eight Trigrams: Vanishing Step'<SkillName> <Effects>is permanently replaced by<Effects> <SkillName>'A Fate of His Own'.<SkillName>",
      "descriptionBRRaw": "Enquanto a batalha passa, Neji leva sua rede de chakra além de seu limite. Sempre que ele usa uma nova habilidade, <Effects>os tempos de recarga base de todas as suas habilidades são aumentados em 1 turno<Effects>. Quando ele usar 6 habilidades na partida, <SkillName>'Heavenly Palm Rotation'<SkillName> e <SkillName>'Airborne Palm Crush'<SkillName> <Effects>apenas causarão dano<Effects> e <SkillName>'Eight Trigrams: Vanishing Step'<SkillName> <Effects>será permanentemente substituída por<Effects> <SkillName>'A Fate of His Own'.<SkillName>",
      "energy": [],
      "classes": [
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "As the battle drags on, Neji pushes his chakra network beyond its limits. Everytime he uses a new skill, the base cooldowns of all his skills are increased by 1 turn (stacks). Once he uses 6 skills in the game, 'Heavenly Palm Rotation' and 'Airborne Palm Crush' will lose their non-damage effects and 'Eight Trigrams: Vanishing Step' is permanently replaced by 'A Fate of His Own'. Chakra cost: no chakra cost listed. Catalog classes: Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Enquanto a batalha passa, Neji leva sua rede de chakra além de seu limite. Sempre que ele usa uma nova habilidade, os tempos de recarga base de todas as suas habilidades são aumentados em 1 turno. Quando ele usar 6 habilidades na partida, 'Heavenly Palm Rotation' e 'Airborne Palm Crush' apenas causarão dano e 'Eight Trigrams: Vanishing Step' será permanentemente substituída por 'A Fate of His Own'. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 6,
      "name": "A Fate of His Own",
      "file": "shinobi_alliance_neji_(s)_skill_6_(a_fate_of_his_own).png",
      "description": "Neji defies his own destiny and places himself between an ally and deadly attacks. For the rest of the game, every harmful skill used on that ally will be reflected to Neji. This skill can only be used once.",
      "descriptionBR": "Neji desafia seu próprio destino e se coloca entre um aliado e ataques mortais. Pelo resto do jogo, toda habilidade ofensiva usada naquele aliado será refletida para Neji. Essa habilidade só pode ser usada uma vez.",
      "descriptionRaw": "Neji defies his own destiny and places himself between an ally and deadly attacks. For the rest of the game, every <Classes>harmful skill<Classes> used on that ally <Effects>will be reflected to Neji<Effects>. This skill can only be used once.",
      "descriptionBRRaw": "Neji desafia seu próprio destino e se coloca entre um aliado e ataques mortais. Pelo resto do jogo, toda <Classes>habilidade ofensiva<Classes> usada naquele aliado <Effects>será refletida para Neji<Effects>. Essa habilidade só pode ser usada uma vez.",
      "energy": [],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Neji defies his own destiny and places himself between an ally and deadly attacks. For the rest of the game, every harmful skill used on that ally will be reflected to Neji. This skill can only be used once. Chakra cost: no chakra cost listed. Catalog classes: Mental, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Neji desafia seu próprio destino e se coloca entre um aliado e ataques mortais. Pelo resto do jogo, toda habilidade ofensiva usada naquele aliado será refletida para Neji. Essa habilidade só pode ser usada uma vez. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
