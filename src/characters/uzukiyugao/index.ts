// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Uzuki Yugao",
  "portraits": [
    {
      "number": 1,
      "file": "uzukiyugao_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Hazy Moon Night",
      "file": "uzukiyugao_skill_1_(hazy_moon_night).jpg"
    },
    {
      "number": 2,
      "name": "Crescent Moon Strike",
      "file": "uzukiyugao_skill_2_(crescent_moon_strike).jpg"
    },
    {
      "number": 3,
      "name": "Sealing Technique",
      "file": "uzukiyugao_skill_3_(sealing_technique).jpg"
    },
    {
      "number": 4,
      "name": "Yugao Hide",
      "file": "uzukiyugao_skill_4_(yugao_hide).jpg"
    }
  ]
} as const;

export default character;
