// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Uchiha Sasuke",
  "portraits": [
    {
      "number": 1,
      "file": "uchihasasuke_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Lion Combo",
      "file": "uchihasasuke_skill_1_(lion_combo).png"
    },
    {
      "number": 2,
      "name": "Chidori",
      "file": "uchihasasuke_skill_2_(chidori).png"
    },
    {
      "number": 3,
      "name": "Sharingan",
      "file": "uchihasasuke_skill_3_(sharingan).png"
    },
    {
      "number": 4,
      "name": "Swift Block",
      "file": "uchihasasuke_skill_4_(swift_block).png"
    },
    {
      "number": 5,
      "name": "Passive: Cursed Seal Awakening",
      "file": "uchihasasuke_skill_5_(passive_cursed_seal_awakening).png"
    }
  ]
} as const;

export default character;
