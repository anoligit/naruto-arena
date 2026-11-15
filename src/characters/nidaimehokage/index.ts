// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Nidaime Hokage",
  "portraits": [
    {
      "number": 1,
      "file": "nidaimehokage_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Water Assault",
      "file": "nidaimehokage_skill_1_(water_assault).jpg"
    },
    {
      "number": 2,
      "name": "Water Collision Destruction",
      "file": "nidaimehokage_skill_2_(water_collision_destruction).jpg"
    },
    {
      "number": 3,
      "name": "Bringer of Darkness",
      "file": "nidaimehokage_skill_3_(bringer_of_darkness).jpg"
    },
    {
      "number": 4,
      "name": "Water Encampment Wall",
      "file": "nidaimehokage_skill_4_(water_encampment_wall).jpg"
    }
  ]
} as const;

export default character;
