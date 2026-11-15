// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shigure",
  "portraits": [
    {
      "number": 1,
      "file": "shigure_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Umbrella Toss",
      "file": "shigure_skill_1_(umbrella_toss).jpg"
    },
    {
      "number": 2,
      "name": "Sprinkling Needles",
      "file": "shigure_skill_2_(sprinkling_needles).jpg"
    },
    {
      "number": 3,
      "name": "Needle Barrage",
      "file": "shigure_skill_3_(needle_barrage).jpg"
    },
    {
      "number": 4,
      "name": "Umbrella Block",
      "file": "shigure_skill_4_(umbrella_block).jpg"
    }
  ]
} as const;

export default character;
