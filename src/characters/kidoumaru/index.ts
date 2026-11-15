// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Kidoumaru",
  "portraits": [
    {
      "number": 1,
      "file": "kidoumaru_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Golden Arrow",
      "file": "kidoumaru_skill_1_(golden_arrow).jpg"
    },
    {
      "number": 2,
      "name": "Summoning: Kyodaigumo",
      "file": "kidoumaru_skill_2_(summoning_kyodaigumo).jpg"
    },
    {
      "number": 3,
      "name": "Spider Web",
      "file": "kidoumaru_skill_3_(spider_web).jpg"
    },
    {
      "number": 4,
      "name": "Golden Armor",
      "file": "kidoumaru_skill_4_(golden_armor).jpg"
    }
  ]
} as const;

export default character;
