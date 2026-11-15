// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Temari",
  "portraits": [
    {
      "number": 1,
      "file": "temari_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Cutting Whirlwind",
      "file": "temari_skill_1_(cutting_whirlwind).jpg"
    },
    {
      "number": 2,
      "name": "Summoning Quick Beheading Dance",
      "file": "temari_skill_2_(summoning_quick_beheading_dance).jpg"
    },
    {
      "number": 3,
      "name": "Dust Wind",
      "file": "temari_skill_3_(dust_wind).jpg"
    },
    {
      "number": 4,
      "name": "Fan Defence Technique",
      "file": "temari_skill_4_(fan_defence_technique).jpg"
    }
  ]
} as const;

export default character;
