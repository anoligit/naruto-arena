// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Drunken Lee",
  "portraits": [
    {
      "number": 1,
      "file": "drunkenlee_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Unpredictable Assault",
      "file": "drunkenlee_skill_1_(unpredictable_assault).png"
    },
    {
      "number": 2,
      "name": "Drunken Fist",
      "file": "drunkenlee_skill_2_(drunken_fist).jpeg"
    },
    {
      "number": 3,
      "name": "Drunken Counter",
      "file": "drunkenlee_skill_3_(drunken_counter).png"
    },
    {
      "number": 4,
      "name": "Drunken Leap",
      "file": "drunkenlee_skill_4_(drunken_leap).jpeg"
    }
  ]
} as const;

export default character;
