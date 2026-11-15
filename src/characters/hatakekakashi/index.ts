// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hatake Kakashi",
  "portraits": [
    {
      "number": 1,
      "file": "hatakekakashi_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Raikiri",
      "file": "hatakekakashi_skill_1_(raikiri).jpg"
    },
    {
      "number": 2,
      "name": "Summoning: Ninja Dogs",
      "file": "hatakekakashi_skill_2_(summoning_ninja_dogs).jpg"
    },
    {
      "number": 3,
      "name": "Kakashi Sharingan",
      "file": "hatakekakashi_skill_3_(kakashi_sharingan).jpg"
    },
    {
      "number": 4,
      "name": "Clever Hiding",
      "file": "hatakekakashi_skill_4_(clever_hiding).png"
    }
  ]
} as const;

export default character;
