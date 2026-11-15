// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Tsunade",
  "portraits": [
    {
      "number": 1,
      "file": "tsunade_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Painful Sky Leg",
      "file": "tsunade_skill_1_(painful_sky_leg).jpg"
    },
    {
      "number": 2,
      "name": "Revitalizing Heal",
      "file": "tsunade_skill_2_(revitalizing_heal).png"
    },
    {
      "number": 3,
      "name": "Major Summoning: Katsuyu",
      "file": "tsunade_skill_3_(major_summoning_katsuyu).jpg"
    },
    {
      "number": 4,
      "name": "Elbow Block",
      "file": "tsunade_skill_4_(elbow_block).png"
    },
    {
      "number": 5,
      "name": "Creation Rebirth",
      "file": "tsunade_skill_5_(creation_rebirth).jpg"
    },
    {
      "number": 6,
      "name": "Tongue Tooth Sticky Acid",
      "file": "tsunade_skill_6_(tongue_tooth_sticky_acid).png"
    }
  ]
} as const;

export default character;
