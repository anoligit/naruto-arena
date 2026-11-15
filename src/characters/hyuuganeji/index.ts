// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hyuuga Neji",
  "portraits": [
    {
      "number": 1,
      "file": "hyuuganeji_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Neji Gentle Fist",
      "file": "hyuuganeji_skill_1_(neji_gentle_fist).jpg"
    },
    {
      "number": 2,
      "name": "Eight Trigram Heavenly Spin",
      "file": "hyuuganeji_skill_2_(eight_trigram_heavenly_spin).jpg"
    },
    {
      "number": 3,
      "name": "Eight Trigram Sixty-Four Palms",
      "file": "hyuuganeji_skill_3_(eight_trigram_sixty-four_palms).jpg"
    },
    {
      "number": 4,
      "name": "Neji Byakugan",
      "file": "hyuuganeji_skill_4_(neji_byakugan).jpeg"
    }
  ]
} as const;

export default character;
