// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Inuzuka Tsume (S)",
  "description": "A Konoha jounin, a member of the Inuzuka clan, and the mother of Kiba, Tsume, much like her son, is a wild and impatient woman with an often odd sense of humor. Like other members of her clan, Tsume fights one with her companion, Kuromaru, while allowing her wild instincts to take over.",
  "descriptionBR": "Jounin de Konoha, membro do clã Inuzuka e mãe de Kiba, Tsume é, assim como seu filho, uma mulher selvagem, impaciente e com um senso de humor peculiar. Como os outros membros de seu clã, ela luta em sincronia com seu companheiro Kuromaru, permitindo que seus instintos selvagens assumam o controle.",
  "isSpecial": false,
  "isPrivateOnly": false,
  "rulesSource": "Public game catalog. Rule descriptions combine the published effect text, chakra cost, classes, and cooldown; they are not extracted engine code.",
  "rulesSourceBR": "Catálogo público do jogo. As descrições das regras reúnem o texto publicado dos efeitos, custo de chakra, classes e cooldown; não são código extraído do motor.",
  "portraits": [
    {
      "number": 1,
      "file": "inuzuka_tsume_(s)_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Summon: Kuromaru",
      "file": "inuzuka_tsume_(s)_skill_1_(summon_kuromaru).png",
      "description": "Tsume calls Kuromaru to aid her. The following 4 turns, she will gain 50% points of damage reduction. During this time, this skill will be replaced by 'Fierce Bite' and any enemy that uses a new harmful non-affliction skill on Tsume will receive 10 damage.",
      "descriptionBR": "Tsume chama Kuromaru para ajudá-la. Pelos próximos 4 turnos, ela receberá 50% de redução de dano. Durante esse tempo, esta habilidade será substituída por 'Fierce Bite' e qualquer inimigo que usar uma nova habilidade ofensiva não aflitiva contra Tsume receberá 10 de dano.",
      "descriptionRaw": "Tsume calls Kuromaru to aid her. The following 4 turns, she will gain 50% points of damage reduction. During this time, this skill will be replaced by 'Fierce Bite' and any enemy that uses a new harmful non-affliction skill on Tsume will receive 10 damage.",
      "descriptionBRRaw": "Tsume chama Kuromaru para ajudá-la. Pelos próximos 4 turnos, ela receberá 50% de redução de dano. Durante esse tempo, esta habilidade será substituída por 'Fierce Bite' e qualquer inimigo que usar uma nova habilidade ofensiva não aflitiva contra Tsume receberá 10 de dano.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "Tsume calls Kuromaru to aid her. The following 4 turns, she will gain 50% points of damage reduction. During this time, this skill will be replaced by 'Fierce Bite' and any enemy that uses a new harmful non-affliction skill on Tsume will receive 10 damage. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tsume chama Kuromaru para ajudá-la. Pelos próximos 4 turnos, ela receberá 50% de redução de dano. Durante esse tempo, esta habilidade será substituída por 'Fierce Bite' e qualquer inimigo que usar uma nova habilidade ofensiva não aflitiva contra Tsume receberá 10 de dano. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 2,
      "name": "Passing Fang",
      "file": "inuzuka_tsume_(s)_skill_2_(passing_fang).png",
      "description": "Tsume spins, dealing 15 piercing damage to one enemy for 2 turns. All stun skills that enemy uses will also be decreased by 2 turns. If 'Summon: Kuromaru' is active, this skill will deal 5 additional damage.",
      "descriptionBR": "Tsume gira, causando 15 de dano perfurante a um inimigo por 2 turnos. Todas as habilidades de atordoamento que esse inimigo usar terão sua duração reduzida em 2 turnos. Se 'Summon: Kuromaru' estiver ativo, esta habilidade causará 5 de dano adicional.",
      "descriptionRaw": "Tsume spins, dealing 15 piercing damage to one enemy for 2 turns. All stun skills that enemy uses will also be decreased by 2 turns. If 'Summon: Kuromaru' is active, this skill will deal 5 additional damage.",
      "descriptionBRRaw": "Tsume gira, causando 15 de dano perfurante a um inimigo por 2 turnos. Todas as habilidades de atordoamento que esse inimigo usar terão sua duração reduzida em 2 turnos. Se 'Summon: Kuromaru' estiver ativo, esta habilidade causará 5 de dano adicional.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Action",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Tsume spins, dealing 15 piercing damage to one enemy for 2 turns. All stun skills that enemy uses will also be decreased by 2 turns. If 'Summon: Kuromaru' is active, this skill will deal 5 additional damage. Chakra cost: 1 Tai. Catalog classes: Physical, Action, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tsume gira, causando 15 de dano perfurante a um inimigo por 2 turnos. Todas as habilidades de atordoamento que esse inimigo usar terão sua duração reduzida em 2 turnos. Se 'Summon: Kuromaru' estiver ativo, esta habilidade causará 5 de dano adicional. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Action, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 3,
      "name": "Flashbang",
      "file": "inuzuka_tsume_(s)_skill_3_(flashbang).png",
      "description": "Tsume covers herself and her allies, making them invulnerable to all non-affliction skills for 1 turn. Tsume only carries 3 of these grenades with her at all times, so this skill can only be used three times in a game.",
      "descriptionBR": "Tsume protege a si mesma e seus aliados, tornando-os invulneráveis a todas as habilidades não aflitivas por 1 turno. Tsume carrega apenas 3 dessas granadas, então esta habilidade só pode ser usada três vezes por partida.",
      "descriptionRaw": "Tsume covers herself and her allies, making them invulnerable to all non-affliction skills for 1 turn. Tsume only carries 3 of these grenades with her at all times, so this skill can only be used three times in a game.",
      "descriptionBRRaw": "Tsume protege a si mesma e seus aliados, tornando-os invulneráveis a todas as habilidades não aflitivas por 1 turno. Tsume carrega apenas 3 dessas granadas, então esta habilidade só pode ser usada três vezes por partida.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 1,
      "ruleDescription": "Tsume covers herself and her allies, making them invulnerable to all non-affliction skills for 1 turn. Tsume only carries 3 of these grenades with her at all times, so this skill can only be used three times in a game. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 1. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Tsume protege a si mesma e seus aliados, tornando-os invulneráveis a todas as habilidades não aflitivas por 1 turno. Tsume carrega apenas 3 dessas granadas, então esta habilidade só pode ser usada três vezes por partida. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 1. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 4,
      "name": "Man-Beast Defense",
      "file": "inuzuka_tsume_(s)_skill_4_(man-beast_defense).png",
      "description": "This skill makes Inuzuka Tsume (S) invulnerable for 1 turn.",
      "descriptionBR": "Essa habilidade faz Inuzuka Tsume (S) invulnerável por 1 turno.",
      "descriptionRaw": "This skill makes Inuzuka Tsume (S) <Defense>invulnerable<Defense> for 1 turn.",
      "descriptionBRRaw": "Essa habilidade faz Inuzuka Tsume (S) <Defense>invulnerável<Defense> por 1 turno.",
      "energy": [
        "Random"
      ],
      "classes": [
        "Physical",
        "Instant"
      ],
      "cooldown": 4,
      "ruleDescription": "This skill makes Inuzuka Tsume (S) invulnerable for 1 turn. Chakra cost: 1 Random. Catalog classes: Physical, Instant. Catalog cooldown: 4. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Essa habilidade faz Inuzuka Tsume (S) invulnerável por 1 turno. Custo de chakra: 1 aleatório. Classes no catálogo: Physical, Instant. Recarga (cooldown) no catálogo: 4. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    },
    {
      "number": 5,
      "name": "Fierce Bite",
      "file": "inuzuka_tsume_(s)_skill_5_(fierce_bite).png",
      "description": "Kuromaru jumps at one enemy dealing 25 damage which ignores invulnerability. If that enemy dies this turn, then for 2 turns Tsume will have her damage increased by 10, will ignore all stun effects and cannot be killed.",
      "descriptionBR": "Kuromaru salta sobre um inimigo causando 25 de dano que ignora invulnerabilidade. Se esse inimigo morrer neste turno, então por 2 turnos Tsume terá seu dano aumentado em 10, ignorará todos os efeitos de atordoamento e não poderá ser morta.",
      "descriptionRaw": "Kuromaru jumps at one enemy dealing 25 damage which ignores invulnerability. If that enemy dies this turn, then for 2 turns Tsume will have her damage increased by 10, will ignore all stun effects and cannot be killed.",
      "descriptionBRRaw": "Kuromaru salta sobre um inimigo causando 25 de dano que ignora invulnerabilidade. Se esse inimigo morrer neste turno, então por 2 turnos Tsume terá seu dano aumentado em 10, ignorará todos os efeitos de atordoamento e não poderá ser morta.",
      "energy": [
        "Tai"
      ],
      "classes": [
        "Physical",
        "Instant",
        "Melee"
      ],
      "cooldown": 0,
      "ruleDescription": "Kuromaru jumps at one enemy dealing 25 damage which ignores invulnerability. If that enemy dies this turn, then for 2 turns Tsume will have her damage increased by 10, will ignore all stun effects and cannot be killed. Chakra cost: 1 Tai. Catalog classes: Physical, Instant, Melee. Catalog cooldown: 0. Rule described by the public catalog; the internal implementation and engine resolution order have not been verified.",
      "ruleDescriptionBR": "Kuromaru salta sobre um inimigo causando 25 de dano que ignora invulnerabilidade. Se esse inimigo morrer neste turno, então por 2 turnos Tsume terá seu dano aumentado em 10, ignorará todos os efeitos de atordoamento e não poderá ser morta. Custo de chakra: 1 taijutsu. Classes no catálogo: Physical, Instant, Melee. Recarga (cooldown) no catálogo: 0. Regra descrita pelo catálogo público; a implementação interna e a ordem de resolução do motor não foram verificadas."
    }
  ]
} as const;

export default character;
