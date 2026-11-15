// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Uchiha Itachi",
  "portraits": [
    {
      "number": 1,
      "file": "uchihaitachi_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Mangekyo Sharingan",
      "file": "uchihaitachi_skill_1_(mangekyo_sharingan).png"
    },
    {
      "number": 2,
      "name": "Amaterasu",
      "file": "uchihaitachi_skill_2_(amaterasu).png"
    },
    {
      "number": 3,
      "name": "Tsukuyomi",
      "file": "uchihaitachi_skill_3_(tsukuyomi).png"
    },
    {
      "number": 4,
      "name": "Sharingan Insight",
      "file": "uchihaitachi_skill_4_(sharingan_insight).png"
    }
  ]
} as const;

export default character;
