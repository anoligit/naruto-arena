// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Kankuro",
  "portraits": [
    {
      "number": 1,
      "file": "kankuro_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Black Secret Machine One Shot",
      "file": "kankuro_skill_1_(black_secret_machine_one_shot).jpg"
    },
    {
      "number": 2,
      "name": "Poison Bomb",
      "file": "kankuro_skill_2_(poison_bomb).jpg"
    },
    {
      "number": 3,
      "name": "Puppet Preparation",
      "file": "kankuro_skill_3_(puppet_preparation).jpg"
    },
    {
      "number": 4,
      "name": "Puppet Replacement Technique",
      "file": "kankuro_skill_4_(puppet_replacement_technique).jpg"
    }
  ]
} as const;

export default character;
