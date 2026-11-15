// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Cursed Seal Mizuki",
  "portraits": [
    {
      "number": 1,
      "file": "cursedsealmizuki_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Curse Seal: Tiger",
      "file": "cursedsealmizuki_skill_1_(curse_seal_tiger).jpg"
    },
    {
      "number": 2,
      "name": "Curse Seal: Tiger Punch",
      "file": "cursedsealmizuki_skill_2_(curse_seal_tiger_punch).png"
    },
    {
      "number": 3,
      "name": "Puppets Genjutsu",
      "file": "cursedsealmizuki_skill_3_(puppets_genjutsu).png"
    },
    {
      "number": 4,
      "name": "Evil Intentions",
      "file": "cursedsealmizuki_skill_4_(evil_intentions).png"
    },
    {
      "number": 5,
      "name": "Curse Seal: Tiger Bomb",
      "file": "cursedsealmizuki_skill_5_(curse_seal_tiger_bomb).png"
    }
  ]
} as const;

export default character;
