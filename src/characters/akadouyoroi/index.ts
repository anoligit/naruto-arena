// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Akadou Yoroi",
  "portraits": [
    {
      "number": 1,
      "file": "akadouyoroi_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Chakra and Life Absorption",
      "file": "akadouyoroi_skill_1_(chakra_and_life_absorption).jpg"
    },
    {
      "number": 2,
      "name": "Energy Drain",
      "file": "akadouyoroi_skill_2_(energy_drain).jpg"
    },
    {
      "number": 3,
      "name": "Draining Assault",
      "file": "akadouyoroi_skill_3_(draining_assault).jpg"
    },
    {
      "number": 4,
      "name": "Chakra Block",
      "file": "akadouyoroi_skill_4_(chakra_block).jpg"
    }
  ]
} as const;

export default character;
