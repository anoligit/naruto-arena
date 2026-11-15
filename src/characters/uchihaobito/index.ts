// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Uchiha Obito",
  "portraits": [
    {
      "number": 1,
      "file": "uchihaobito_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Piercing Stab",
      "file": "uchihaobito_skill_1_(piercing_stab).jpg"
    },
    {
      "number": 2,
      "name": "Obito Goukakyuu no Jutsu",
      "file": "uchihaobito_skill_2_(obito_goukakyuu_no_jutsu).jpg"
    },
    {
      "number": 3,
      "name": "Obito Sharingan",
      "file": "uchihaobito_skill_3_(obito_sharingan).jpg"
    },
    {
      "number": 4,
      "name": "Sparkling Parry",
      "file": "uchihaobito_skill_4_(sparkling_parry).jpg"
    }
  ]
} as const;

export default character;
