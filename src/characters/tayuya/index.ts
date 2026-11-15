// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Tayuya",
  "portraits": [
    {
      "number": 1,
      "file": "tayuya_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Summoning: Doki",
      "file": "tayuya_skill_1_(summoning_doki).jpg"
    },
    {
      "number": 2,
      "name": "Doki Ghosts",
      "file": "tayuya_skill_2_(doki_ghosts).jpg"
    },
    {
      "number": 3,
      "name": "Demonic Flute Illusion",
      "file": "tayuya_skill_3_(demonic_flute_illusion).jpg"
    },
    {
      "number": 4,
      "name": "Tayuya Insight",
      "file": "tayuya_skill_4_(tayuya_insight).jpg"
    }
  ]
} as const;

export default character;
