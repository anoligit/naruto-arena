// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Kimimaro",
  "portraits": [
    {
      "number": 1,
      "file": "kimimaro_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Dance of the Camellia",
      "file": "kimimaro_skill_1_(dance_of_the_camellia).jpg"
    },
    {
      "number": 2,
      "name": "Dance of the Clematis",
      "file": "kimimaro_skill_2_(dance_of_the_clematis).jpg"
    },
    {
      "number": 3,
      "name": "Dance of the Seedling Fern",
      "file": "kimimaro_skill_3_(dance_of_the_seedling_fern).jpg"
    },
    {
      "number": 4,
      "name": "Bone Defense",
      "file": "kimimaro_skill_4_(bone_defense).jpg"
    }
  ]
} as const;

export default character;
