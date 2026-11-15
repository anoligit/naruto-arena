// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Yakushi Kabuto",
  "portraits": [
    {
      "number": 1,
      "file": "yakushikabuto_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Mystical Palm Technique",
      "file": "yakushikabuto_skill_1_(mystical_palm_technique).jpg"
    },
    {
      "number": 2,
      "name": "Temple of Nirvana",
      "file": "yakushikabuto_skill_2_(temple_of_nirvana).jpg"
    },
    {
      "number": 3,
      "name": "Secret Healing Wound Destruction",
      "file": "yakushikabuto_skill_3_(secret_healing_wound_destruction).jpg"
    },
    {
      "number": 4,
      "name": "Dead Soul Technique",
      "file": "yakushikabuto_skill_4_(dead_soul_technique).jpg"
    }
  ]
} as const;

export default character;
