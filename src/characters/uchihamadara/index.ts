// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Uchiha Madara",
  "portraits": [
    {
      "number": 1,
      "file": "uchihamadara_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Eternal Mangekyou",
      "file": "uchihamadara_skill_1_(eternal_mangekyou).png"
    },
    {
      "number": 2,
      "name": "Great Fire Annihilation",
      "file": "uchihamadara_skill_2_(great_fire_annihilation).png"
    },
    {
      "number": 3,
      "name": "Madara: Susanoo",
      "file": "uchihamadara_skill_3_(madara_susanoo).png"
    },
    {
      "number": 4,
      "name": "Emergency Susanoo Defense",
      "file": "uchihamadara_skill_4_(emergency_susanoo_defense).png"
    },
    {
      "number": 5,
      "name": "Armored Susanoo Assault",
      "file": "uchihamadara_skill_5_(armored_susanoo_assault).png"
    }
  ]
} as const;

export default character;
