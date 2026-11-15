// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Jiroubou",
  "portraits": [
    {
      "number": 1,
      "file": "jiroubou_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Nirvana Fist Style",
      "file": "jiroubou_skill_1_(nirvana_fist_style).jpg"
    },
    {
      "number": 2,
      "name": "Earth Seal Mud Cannonball",
      "file": "jiroubou_skill_2_(earth_seal_mud_cannonball).jpg"
    },
    {
      "number": 3,
      "name": "Dungeon Chamber of Nothingness",
      "file": "jiroubou_skill_3_(dungeon_chamber_of_nothingness).jpg"
    },
    {
      "number": 4,
      "name": "Earth Wall Land Flip",
      "file": "jiroubou_skill_4_(earth_wall_land_flip).jpg"
    }
  ]
} as const;

export default character;
