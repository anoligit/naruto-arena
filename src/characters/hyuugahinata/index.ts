// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hyuuga Hinata",
  "portraits": [
    {
      "number": 1,
      "file": "hyuugahinata_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Hinata Gentle Fist",
      "file": "hyuugahinata_skill_1_(hinata_gentle_fist).png"
    },
    {
      "number": 2,
      "name": "Eight Trigrams 64 Palms Protection",
      "file": "hyuugahinata_skill_2_(eight_trigrams_64_palms_protection).png"
    },
    {
      "number": 3,
      "name": "Byakugan",
      "file": "hyuugahinata_skill_3_(byakugan).png"
    },
    {
      "number": 4,
      "name": "Hinata Block",
      "file": "hyuugahinata_skill_4_(hinata_block).png"
    }
  ]
} as const;

export default character;
