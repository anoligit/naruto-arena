// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Namikaze Minato",
  "portraits": [
    {
      "number": 1,
      "file": "namikazeminato_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Flying Thunder God",
      "file": "namikazeminato_skill_1_(flying_thunder_god).jpg"
    },
    {
      "number": 2,
      "name": "Space-Time Marking",
      "file": "namikazeminato_skill_2_(space-time_marking).jpg"
    },
    {
      "number": 3,
      "name": "Space-Time Kunai Scatter",
      "file": "namikazeminato_skill_3_(space-time_kunai_scatter).jpg"
    },
    {
      "number": 4,
      "name": "Seal Sensing",
      "file": "namikazeminato_skill_4_(seal_sensing).jpg"
    }
  ]
} as const;

export default character;
