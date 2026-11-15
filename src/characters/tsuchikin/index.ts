// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Tsuchi Kin",
  "portraits": [
    {
      "number": 1,
      "file": "tsuchikin_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Illusion Bell Needles",
      "file": "tsuchikin_skill_1_(illusion_bell_needles).jpg"
    },
    {
      "number": 2,
      "name": "Needle and Bell Trap",
      "file": "tsuchikin_skill_2_(needle_and_bell_trap).jpg"
    },
    {
      "number": 3,
      "name": "Unnerving Bells",
      "file": "tsuchikin_skill_3_(unnerving_bells).jpg"
    },
    {
      "number": 4,
      "name": "Sharp Analysis",
      "file": "tsuchikin_skill_4_(sharp_analysis).jpeg"
    }
  ]
} as const;

export default character;
