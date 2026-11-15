// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shinobi War Tobi (S)",
  "description": "During the Fourth Great Ninja War, Tobi conceals his identity behind a white mask, wielding both the Sharingan and Rinnegan. Using the Demonic Statue of the Outer Path, he commands the resurrected jinchuuriki, while his Kamui allows him to evade attacks by rendering his body intangible.",
  "descriptionBR": "Durante a Quarta Grande Guerra Ninja, Tobi esconde sua identidade atrás de uma máscara branca, utilizando tanto o Sharingan quanto o Rinnegan. Com a Estátua Demoníaca do Caminho Exterior, ele controla os jinchuuriki reanimados, enquanto seu Kamui permite evitar ataques ao tornar seu corpo intangível.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "shinobi_war_tobi_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Demonic Chakra Chains",
      "file": "shinobi_war_tobi_(s)_skill_1_(demonic_chakra_chains).png",
      "description": "By releasing the Demonic Statue's chakra chains, Tobi steals 15 health from one enemy. For 1 turn, if that enemy uses a new skill, 1 bloodline chakra will be stored in 'Demonic Statue of the Outer Path'. The following turn, if Tobi uses 'Demonic Statue of the Outer Path', 'Demonic Chakra Chains' will also be applied to all enemies and Tobi will become invulnerable for 1 turn.",
      "descriptionBR": "Liberando as correntes de chakra da estátua demoníaca, Tobi rouba 15 de vida de um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade, 1 chakra bloodline será guardado em 'Demonic Statue of the Outer Path'. No próximo turno, se Tobi usar 'Demonic Statue of the Outer Path', 'Demonic Chakra Chains' também será aplicada em todos os inimigos e Tobi se tornará invulnerável por 1 turno.",
      "descriptionRaw": "By releasing the Demonic Statue's chakra chains, Tobi <Damage>steals 15 health<Damage> from one enemy. For 1 turn, if <Effects>that enemy uses a new skill<Effects>, 1 bloodline chakra will be stored in <SkillName>'Demonic Statue of the Outer Path'<SkillName>. The following turn, if Tobi uses <SkillName>'Demonic Statue of the Outer Path'<SkillName>, <SkillName>'Demonic Chakra Chains'<SkillName> will also be <Effects>applied to all enemies<Effects> and Tobi will become <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Liberando as correntes de chakra da estátua demoníaca, Tobi <Damage>rouba 15 de vida<Damage> de um inimigo. Por 1 turno, se <Effects>esse inimigo usar uma nova habilidade<Effects>, 1 chakra bloodline será guardado em <SkillName>'Demonic Statue of the Outer Path'<SkillName>. No próximo turno, se Tobi usar <SkillName>'Demonic Statue of the Outer Path'<SkillName>, <SkillName>'Demonic Chakra Chains'<SkillName> também será <Effects>aplicada em todos os inimigos<Effects> e Tobi se tornará <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Blood"
      ],
      "classes": [
        "Affliction",
        "Instant",
        "Ranged"
      ],
      "cooldown": 0,
      "ruleDescription": "By releasing the Demonic Statue's chakra chains, Tobi steals 15 health from one enemy. For 1 turn, if that enemy uses a new skill, 1 bloodline chakra will be stored in 'Demonic Statue of the Outer Path'. The following turn, if Tobi uses 'Demonic Statue of the Outer Path', 'Demonic Chakra Chains' will also be applied to all enemies and Tobi will become invulnerable for 1 turn. Chakra cost: 1 Blood. Catalog classes: Affliction, Instant, Ranged. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Liberando as correntes de chakra da estátua demoníaca, Tobi rouba 15 de vida de um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade, 1 chakra bloodline será guardado em 'Demonic Statue of the Outer Path'. No próximo turno, se Tobi usar 'Demonic Statue of the Outer Path', 'Demonic Chakra Chains' também será aplicada em todos os inimigos e Tobi se tornará invulnerável por 1 turno. Custo de chakra: 1 linhagem sanguínea. Classes no catálogo: Affliction, Instant, Ranged. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Demonic Statue of the Outer Path",
      "file": "shinobi_war_tobi_(s)_skill_2_(demonic_statue_of_the_outer_path).png",
      "description": "Tobi summons the Demonic Statue, unleashing its destructive power. Tobi gains all chakra stored in this skill, consuming the stored chakra. If targetable, all enemies take 25 damage.",
      "descriptionBR": "Tobi invoca a estátua demoníaca, liberando seu poder destrutivo. Tobi ganha todo o chakra guardado nessa habilidade, consumindo o chakra guardado. Se possível, todos os inimigos recebem 25 de dano.",
      "descriptionRaw": "Tobi summons the Demonic Statue, unleashing its destructive power. Tobi <Effects>gains all chakra stored in this skill<Effects>, consuming the stored chakra. If targetable, all enemies take <Damage>25 damage<Damage>.",
      "descriptionBRRaw": "Tobi invoca a estátua demoníaca, liberando seu poder destrutivo. Tobi <Effects>ganha todo o chakra guardado nessa habilidade<Effects>, consumindo o chakra guardado. Se possível, todos os inimigos recebem <Damage>25 de dano<Damage>.",
      "energy": [
        "Blood",
        "Blood"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Ranged"
      ],
      "cooldown": 3,
      "ruleDescription": "Tobi summons the Demonic Statue, unleashing its destructive power. Tobi gains all chakra stored in this skill, consuming the stored chakra. If targetable, all enemies take 25 damage. Chakra cost: 2 Blood. Catalog classes: Physical, Instant, Ranged. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tobi invoca a estátua demoníaca, liberando seu poder destrutivo. Tobi ganha todo o chakra guardado nessa habilidade, consumindo o chakra guardado. Se possível, todos os inimigos recebem 25 de dano. Custo de chakra: 2 linhagem sanguínea. Classes no catálogo: Physical, Instant, Ranged. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Six Paths Connection",
      "file": "shinobi_war_tobi_(s)_skill_3_(six_paths_connection).png",
      "description": "Tobi grants an ally the Sharingan and Rinnegan, connecting them through their visual powers. The Sharingan permanently increases that ally's non-affliction damage by 5. The Rinnegan connects the ally to Tobi, causing either character to become invulnerable for 1 turn whenever the other uses an invulnerability skill. This skill ends when Tobi dies and can only be used once.",
      "descriptionBR": "Tobi concede a um aliado o Sharingan e o Rinnegan, conectando-os através de seus poderes visuais. O Sharingan permanentemente aumenta o dano não-aflitivo desse aliado em 5. O Rinnegan conecta o aliado a Tobi, fazendo com que sempre que um deles use uma habilidade de invulnerabilidade, o outro também ficará invulnerável por 1 turno. Essa habilidade acaba se Tobi morre e só pode ser usada uma vez.",
      "descriptionRaw": "Tobi grants an ally the Sharingan and Rinnegan, connecting them through their visual powers. The Sharingan permanently<Effects><Improvements> <Improvements><Effects><Improvements>increases that ally's non-affliction damage by 5<Improvements>. The Rinnegan connects the ally to Tobi, causing either character to become <Defense>invulnerable<Defense> for 1 turn whenever the other <Effects>uses an invulnerability skill<Effects>. This skill ends when Tobi dies and can only be used once.",
      "descriptionBRRaw": "Tobi concede a um aliado o Sharingan e o Rinnegan, conectando-os através de seus poderes visuais. O Sharingan permanentemente <Improvements>aumenta o dano não-aflitivo desse aliado em 5<Improvements>. O Rinnegan conecta o aliado a Tobi, fazendo com que sempre que um deles <Effects>use uma habilidade<Defense> <Defense>de invulnerabilidade<Effects>, o outro também ficará <Defense>invulnerável<Defense> por 1 turno. Essa habilidade acaba se Tobi morre e só pode ser usada uma vez.",
      "energy": [
        "Gen"
      ],
      "classes": [
        "Mental",
        "Instant"
      ],
      "cooldown": 0,
      "ruleDescription": "Tobi grants an ally the Sharingan and Rinnegan, connecting them through their visual powers. The Sharingan permanently increases that ally's non-affliction damage by 5. The Rinnegan connects the ally to Tobi, causing either character to become invulnerable for 1 turn whenever the other uses an invulnerability skill. This skill ends when Tobi dies and can only be used once. Chakra cost: 1 Gen. Catalog classes: Mental, Instant. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tobi concede a um aliado o Sharingan e o Rinnegan, conectando-os através de seus poderes visuais. O Sharingan permanentemente aumenta o dano não-aflitivo desse aliado em 5. O Rinnegan conecta o aliado a Tobi, fazendo com que sempre que um deles use uma habilidade de invulnerabilidade, o outro também ficará invulnerável por 1 turno. Essa habilidade acaba se Tobi morre e só pode ser usada uma vez. Custo de chakra: 1 genjutsu. Classes no catálogo: Mental, Instant. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Kamui: Intangibility",
      "file": "shinobi_war_tobi_(s)_skill_4_(kamui_intangibility).png",
      "description": "Tobi uses Kamui to phase his body into another dimension, avoiding incoming attacks. Every other turn, Tobi ignores all damage dealt to him for 1 turn. This skill cannot be used while active.",
      "descriptionBR": "Tobi usa Kamui para levar seu corpo à outra dimensão, evitando futuros ataques. Turno sim turno não, Tobi ignora todo o dano causado a ele por 1 turno. Essa habilidade não pode ser usada enquanto ativa.",
      "descriptionRaw": "Tobi uses Kamui to phase his body into another dimension, avoiding incoming attacks. Every other turn, Tobi <Defense>ignores all damage dealt to him<Defense> for 1 turn. This skill <Effects>cannot be used while active<Effects>.",
      "descriptionBRRaw": "Tobi usa Kamui para levar seu corpo à outra dimensão, evitando futuros ataques. Turno sim turno não, Tobi <Defense>ignora todo o dano causado a ele<Defense> por 1 turno. Essa habilidade <Effects>não pode ser usada enquanto ativa<Effects>.",
      "energy": [],
      "classes": [
        "Mental",
        "Control"
      ],
      "cooldown": 3,
      "ruleDescription": "Tobi uses Kamui to phase his body into another dimension, avoiding incoming attacks. Every other turn, Tobi ignores all damage dealt to him for 1 turn. This skill cannot be used while active. Chakra cost: no chakra cost listed. Catalog classes: Mental, Control. Catalog cooldown: 3. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tobi usa Kamui para levar seu corpo à outra dimensão, evitando futuros ataques. Turno sim turno não, Tobi ignora todo o dano causado a ele por 1 turno. Essa habilidade não pode ser usada enquanto ativa. Custo de chakra: sem custo de chakra listado. Classes no catálogo: Mental, Control. Recarga (cooldown) no catálogo: 3. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
