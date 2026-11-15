// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hyuuga Hanabi",
  "portraits": [
    {
      "number": 1,
      "file": "hyuugahanabi_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Hanabi Gentle Fist",
      "file": "hyuugahanabi_skill_1_(hanabi_gentle_fist).png"
    },
    {
      "number": 2,
      "name": "Hanabi Kaiten",
      "file": "hyuugahanabi_skill_2_(hanabi_kaiten).png"
    },
    {
      "number": 3,
      "name": "Unyielding Tenacity",
      "file": "hyuugahanabi_skill_3_(unyielding_tenacity).jpg"
    },
    {
      "number": 4,
      "name": "Byakugan Insight",
      "file": "hyuugahanabi_skill_4_(byakugan_insight).png"
    }
  ]
} as const;

export default character;
