// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Akimichi Chouji",
  "portraits": [
    {
      "number": 1,
      "file": "akimichichouji_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Partial Double Size",
      "file": "akimichichouji_skill_1_(partial_double_size).jpg"
    },
    {
      "number": 2,
      "name": "Meat Tank",
      "file": "akimichichouji_skill_2_(meat_tank).jpg"
    },
    {
      "number": 3,
      "name": "Akimichi Pills",
      "file": "akimichichouji_skill_3_(akimichi_pills).jpg"
    },
    {
      "number": 4,
      "name": "Effortless Block",
      "file": "akimichichouji_skill_4_(effortless_block).png"
    },
    {
      "number": 5,
      "name": "Passive: Butterfly Mode",
      "file": "akimichichouji_skill_5_(passive_butterfly_mode).png"
    }
  ]
} as const;

export default character;
