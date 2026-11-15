// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Sarutobi Asuma",
  "portraits": [
    {
      "number": 1,
      "file": "sarutobiasuma_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Flying Swallow",
      "file": "sarutobiasuma_skill_1_(flying_swallow).jpg"
    },
    {
      "number": 2,
      "name": "Finishing Blow",
      "file": "sarutobiasuma_skill_2_(finishing_blow).jpg"
    },
    {
      "number": 3,
      "name": "Self Sacrifice",
      "file": "sarutobiasuma_skill_3_(self_sacrifice).jpg"
    },
    {
      "number": 4,
      "name": "Wind Chakra Blades Block",
      "file": "sarutobiasuma_skill_4_(wind_chakra_blades_block).jpg"
    }
  ]
} as const;

export default character;
