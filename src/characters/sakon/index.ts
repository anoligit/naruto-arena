// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Sakon",
  "portraits": [
    {
      "number": 1,
      "file": "sakon_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Gattling Punch",
      "file": "sakon_skill_1_(gattling_punch).jpg"
    },
    {
      "number": 2,
      "name": "Parasite Demon Technique",
      "file": "sakon_skill_2_(parasite_demon_technique).jpg"
    },
    {
      "number": 3,
      "name": "Rest",
      "file": "sakon_skill_3_(rest).jpg"
    },
    {
      "number": 4,
      "name": "Summoning: Rashoumon",
      "file": "sakon_skill_4_(summoning_rashoumon).jpg"
    }
  ]
} as const;

export default character;
