// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Gaara Rehabilitated",
  "portraits": [
    {
      "number": 1,
      "file": "gaararehabilitated_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Sand Mastery",
      "file": "gaararehabilitated_skill_1_(sand_mastery).jpg"
    },
    {
      "number": 2,
      "name": "Desert Imperial Funeral",
      "file": "gaararehabilitated_skill_2_(desert_imperial_funeral).jpg"
    },
    {
      "number": 3,
      "name": "Quicksand Waterfall",
      "file": "gaararehabilitated_skill_3_(quicksand_waterfall).jpg"
    },
    {
      "number": 4,
      "name": "Shield of Shukaku",
      "file": "gaararehabilitated_skill_4_(shield_of_shukaku).jpg"
    }
  ]
} as const;

export default character;
