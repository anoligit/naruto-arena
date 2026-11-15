// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Cursed Seal Sasuke",
  "portraits": [
    {
      "number": 1,
      "file": "cursedsealsasuke_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Corrupt Chidori",
      "file": "cursedsealsasuke_skill_1_(corrupt_chidori).jpg"
    },
    {
      "number": 2,
      "name": "Katon: Goukakyuu no Jutsu",
      "file": "cursedsealsasuke_skill_2_(katon_goukakyuu_no_jutsu).jpg"
    },
    {
      "number": 3,
      "name": "Cursed Seal",
      "file": "cursedsealsasuke_skill_3_(cursed_seal).jpg"
    },
    {
      "number": 4,
      "name": "Sharingan Evasion",
      "file": "cursedsealsasuke_skill_4_(sharingan_evasion).jpg"
    },
    {
      "number": 5,
      "name": "Dark Void",
      "file": "cursedsealsasuke_skill_5_(dark_void).jpeg"
    }
  ]
} as const;

export default character;
