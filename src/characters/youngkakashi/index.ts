// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Young Kakashi",
  "portraits": [
    {
      "number": 1,
      "file": "youngkakashi_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "White Fang Slash",
      "file": "youngkakashi_skill_1_(white_fang_slash).jpg"
    },
    {
      "number": 2,
      "name": "Amateur Raikiri",
      "file": "youngkakashi_skill_2_(amateur_raikiri).jpg"
    },
    {
      "number": 3,
      "name": "Implanted Sharingan",
      "file": "youngkakashi_skill_3_(implanted_sharingan).jpg"
    },
    {
      "number": 4,
      "name": "Sword Parry",
      "file": "youngkakashi_skill_4_(sword_parry).jpg"
    }
  ]
} as const;

export default character;
