// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Momochi Zabuza",
  "portraits": [
    {
      "number": 1,
      "file": "momochizabuza_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Silent Homicide Technique",
      "file": "momochizabuza_skill_1_(silent_homicide_technique).jpg"
    },
    {
      "number": 2,
      "name": "Great Waterfall Technique",
      "file": "momochizabuza_skill_2_(great_waterfall_technique).jpg"
    },
    {
      "number": 3,
      "name": "Hidden Mist Technique",
      "file": "momochizabuza_skill_3_(hidden_mist_technique).jpg"
    },
    {
      "number": 4,
      "name": "Water Clone Zabuza",
      "file": "momochizabuza_skill_4_(water_clone_zabuza).jpg"
    }
  ]
} as const;

export default character;
