// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shiore Orochimaru",
  "portraits": [
    {
      "number": 1,
      "file": "shioreorochimaru_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Five Elements Seal",
      "file": "shioreorochimaru_skill_1_(five_elements_seal).png"
    },
    {
      "number": 2,
      "name": "Giant Snake Bind",
      "file": "shioreorochimaru_skill_2_(giant_snake_bind).png"
    },
    {
      "number": 3,
      "name": "Curse Seal",
      "file": "shioreorochimaru_skill_3_(curse_seal).png"
    },
    {
      "number": 4,
      "name": "Snake Body Replacement",
      "file": "shioreorochimaru_skill_4_(snake_body_replacement).png"
    }
  ]
} as const;

export default character;
