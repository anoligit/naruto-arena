// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Young Kushina",
  "portraits": [
    {
      "number": 1,
      "file": "youngkushina_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Red-Hot Habanero",
      "file": "youngkushina_skill_1_(red-hot_habanero).png"
    },
    {
      "number": 2,
      "name": "Fierce Punch",
      "file": "youngkushina_skill_2_(fierce_punch).png"
    },
    {
      "number": 3,
      "name": "Dropping Kick",
      "file": "youngkushina_skill_3_(dropping_kick).png"
    },
    {
      "number": 4,
      "name": "Skilled Landing",
      "file": "youngkushina_skill_4_(skilled_landing).png"
    }
  ]
} as const;

export default character;
