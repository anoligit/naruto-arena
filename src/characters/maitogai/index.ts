// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Maito Gai",
  "portraits": [
    {
      "number": 1,
      "file": "maitogai_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Strong Whirlwind",
      "file": "maitogai_skill_1_(strong_whirlwind).jpg"
    },
    {
      "number": 2,
      "name": "Sixth Gate Opening",
      "file": "maitogai_skill_2_(sixth_gate_opening).jpg"
    },
    {
      "number": 3,
      "name": "Counter Punch",
      "file": "maitogai_skill_3_(counter_punch).jpg"
    },
    {
      "number": 4,
      "name": "Gai Dodge",
      "file": "maitogai_skill_4_(gai_dodge).png"
    }
  ]
} as const;

export default character;
