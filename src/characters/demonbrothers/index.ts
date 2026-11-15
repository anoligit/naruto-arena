// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Demon Brothers",
  "portraits": [
    {
      "number": 1,
      "file": "demonbrothers_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Chain Wrap",
      "file": "demonbrothers_skill_1_(chain_wrap).jpg"
    },
    {
      "number": 2,
      "name": "Bladed Gauntlet",
      "file": "demonbrothers_skill_2_(bladed_gauntlet).jpg"
    },
    {
      "number": 3,
      "name": "Puddle Illusion",
      "file": "demonbrothers_skill_3_(puddle_illusion).jpg"
    },
    {
      "number": 4,
      "name": "Demon Brothers Vanish",
      "file": "demonbrothers_skill_4_(demon_brothers_vanish).jpeg"
    },
    {
      "number": 5,
      "name": "Chain Shred",
      "file": "demonbrothers_skill_5_(chain_shred).jpg"
    }
  ]
} as const;

export default character;
