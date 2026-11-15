// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shukaku Gaara",
  "portraits": [
    {
      "number": 1,
      "file": "shukakugaara_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Sand Claw",
      "file": "shukakugaara_skill_1_(sand_claw).jpg"
    },
    {
      "number": 2,
      "name": "Constricting Sand Prison",
      "file": "shukakugaara_skill_2_(constricting_sand_prison).jpg"
    },
    {
      "number": 3,
      "name": "Sand Transformation",
      "file": "shukakugaara_skill_3_(sand_transformation).jpg"
    },
    {
      "number": 4,
      "name": "Thick Sand Coat",
      "file": "shukakugaara_skill_4_(thick_sand_coat).jpg"
    },
    {
      "number": 5,
      "name": "Drilling Air Bullet",
      "file": "shukakugaara_skill_5_(drilling_air_bullet).png"
    },
    {
      "number": 6,
      "name": "True Awakening",
      "file": "shukakugaara_skill_6_(true_awakening).jpg"
    }
  ]
} as const;

export default character;
