// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Baki",
  "portraits": [
    {
      "number": 1,
      "file": "baki_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Sudden Strike",
      "file": "baki_skill_1_(sudden_strike).jpg"
    },
    {
      "number": 2,
      "name": "Wind Blade",
      "file": "baki_skill_2_(wind_blade).jpg"
    },
    {
      "number": 3,
      "name": "Flak Jacket",
      "file": "baki_skill_3_(flak_jacket).jpg"
    },
    {
      "number": 4,
      "name": "Baki Teleportation",
      "file": "baki_skill_4_(baki_teleportation).jpeg"
    }
  ]
} as const;

export default character;
