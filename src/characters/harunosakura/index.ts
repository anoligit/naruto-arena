// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Haruno Sakura",
  "portraits": [
    {
      "number": 1,
      "file": "harunosakura_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "KO Punch",
      "file": "harunosakura_skill_1_(ko_punch).png"
    },
    {
      "number": 2,
      "name": "Cure",
      "file": "harunosakura_skill_2_(cure).png"
    },
    {
      "number": 3,
      "name": "Inner Sakura",
      "file": "harunosakura_skill_3_(inner_sakura).png"
    },
    {
      "number": 4,
      "name": "Sakura Replacement Technique",
      "file": "harunosakura_skill_4_(sakura_replacement_technique).png"
    }
  ]
} as const;

export default character;
