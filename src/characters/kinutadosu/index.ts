// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Kinuta Dosu",
  "portraits": [
    {
      "number": 1,
      "file": "kinutadosu_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Resonating Echo Drill",
      "file": "kinutadosu_skill_1_(resonating_echo_drill).jpg"
    },
    {
      "number": 2,
      "name": "Sound Manipulation",
      "file": "kinutadosu_skill_2_(sound_manipulation).jpg"
    },
    {
      "number": 3,
      "name": "Melody Arm Tuning",
      "file": "kinutadosu_skill_3_(melody_arm_tuning).jpg"
    },
    {
      "number": 4,
      "name": "Dosu Hide",
      "file": "kinutadosu_skill_4_(dosu_hide).jpg"
    }
  ]
} as const;

export default character;
