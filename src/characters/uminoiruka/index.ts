// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Umino Iruka",
  "portraits": [
    {
      "number": 1,
      "file": "uminoiruka_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Shuriken Throw",
      "file": "uminoiruka_skill_1_(shuriken_throw).jpg"
    },
    {
      "number": 2,
      "name": "Shield Ally",
      "file": "uminoiruka_skill_2_(shield_ally).jpg"
    },
    {
      "number": 3,
      "name": "Sealed Bombs Square Formation",
      "file": "uminoiruka_skill_3_(sealed_bombs_square_formation).jpg"
    },
    {
      "number": 4,
      "name": "Kunai Parry",
      "file": "uminoiruka_skill_4_(kunai_parry).png"
    }
  ]
} as const;

export default character;
