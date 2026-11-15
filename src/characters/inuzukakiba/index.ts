// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Inuzuka Kiba",
  "portraits": [
    {
      "number": 1,
      "file": "inuzukakiba_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Garouga",
      "file": "inuzukakiba_skill_1_(garouga).png"
    },
    {
      "number": 2,
      "name": "Double Headed Wolf",
      "file": "inuzukakiba_skill_2_(double_headed_wolf).png"
    },
    {
      "number": 3,
      "name": "Dynamic Air Marking",
      "file": "inuzukakiba_skill_3_(dynamic_air_marking).png"
    },
    {
      "number": 4,
      "name": "Smoke Bomb",
      "file": "inuzukakiba_skill_4_(smoke_bomb).png"
    }
  ]
} as const;

export default character;
