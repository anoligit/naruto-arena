// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Nohara Rin",
  "portraits": [
    {
      "number": 1,
      "file": "nohararin_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Pit Trap",
      "file": "nohararin_skill_1_(pit_trap).jpg"
    },
    {
      "number": 2,
      "name": "Healing Touch",
      "file": "nohararin_skill_2_(healing_touch).jpg"
    },
    {
      "number": 3,
      "name": "Medical Kit",
      "file": "nohararin_skill_3_(medical_kit).jpg"
    },
    {
      "number": 4,
      "name": "Flee",
      "file": "nohararin_skill_4_(flee).jpg"
    }
  ]
} as const;

export default character;
