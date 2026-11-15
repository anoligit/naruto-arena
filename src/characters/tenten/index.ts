// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Tenten",
  "portraits": [
    {
      "number": 1,
      "file": "tenten_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Twin Rising Dragons",
      "file": "tenten_skill_1_(twin_rising_dragons).jpg"
    },
    {
      "number": 2,
      "name": "Twin Rising Dragons Trap",
      "file": "tenten_skill_2_(twin_rising_dragons_trap).jpg"
    },
    {
      "number": 3,
      "name": "Twin Rising Dragons Full Release",
      "file": "tenten_skill_3_(twin_rising_dragons_full_release).jpg"
    },
    {
      "number": 4,
      "name": "Spiked Boulder Shield",
      "file": "tenten_skill_4_(spiked_boulder_shield).png"
    }
  ]
} as const;

export default character;
