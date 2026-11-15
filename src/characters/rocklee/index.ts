// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Rock Lee",
  "portraits": [
    {
      "number": 1,
      "file": "rocklee_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "High Speed Taijutsu",
      "file": "rocklee_skill_1_(high_speed_taijutsu).jpg"
    },
    {
      "number": 2,
      "name": "Front Lotus",
      "file": "rocklee_skill_2_(front_lotus).jpg"
    },
    {
      "number": 3,
      "name": "Fifth Gate Opening",
      "file": "rocklee_skill_3_(fifth_gate_opening).jpg"
    },
    {
      "number": 4,
      "name": "Lee Block",
      "file": "rocklee_skill_4_(lee_block).jpg"
    },
    {
      "number": 5,
      "name": "Final Lotus",
      "file": "rocklee_skill_5_(final_lotus).png"
    }
  ]
} as const;

export default character;
