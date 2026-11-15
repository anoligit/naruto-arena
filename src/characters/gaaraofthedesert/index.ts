// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Gaara of the Desert",
  "portraits": [
    {
      "number": 1,
      "file": "gaaraofthedesert_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Desert Graveyard",
      "file": "gaaraofthedesert_skill_1_(desert_graveyard).jpg"
    },
    {
      "number": 2,
      "name": "Desert Coffin",
      "file": "gaaraofthedesert_skill_2_(desert_coffin).jpg"
    },
    {
      "number": 3,
      "name": "Third Eye",
      "file": "gaaraofthedesert_skill_3_(third_eye).jpeg"
    },
    {
      "number": 4,
      "name": "Sand Shield",
      "file": "gaaraofthedesert_skill_4_(sand_shield).jpg"
    }
  ]
} as const;

export default character;
