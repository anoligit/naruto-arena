// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Haku",
  "portraits": [
    {
      "number": 1,
      "file": "haku_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Flying Water Needles of Death",
      "file": "haku_skill_1_(flying_water_needles_of_death).jpg"
    },
    {
      "number": 2,
      "name": "Acupuncture",
      "file": "haku_skill_2_(acupuncture).jpg"
    },
    {
      "number": 3,
      "name": "Demonic Ice Mirrors",
      "file": "haku_skill_3_(demonic_ice_mirrors).jpg"
    },
    {
      "number": 4,
      "name": "Mirror Transfer",
      "file": "haku_skill_4_(mirror_transfer).jpg"
    }
  ]
} as const;

export default character;
