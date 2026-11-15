// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Shodai Hokage",
  "portraits": [
    {
      "number": 1,
      "file": "shodaihokage_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Tree Strangulation",
      "file": "shodaihokage_skill_1_(tree_strangulation).jpg"
    },
    {
      "number": 2,
      "name": "Branch Manipulation",
      "file": "shodaihokage_skill_2_(branch_manipulation).jpg"
    },
    {
      "number": 3,
      "name": "Birth of the Trees",
      "file": "shodaihokage_skill_3_(birth_of_the_trees).jpg"
    },
    {
      "number": 4,
      "name": "Deflection",
      "file": "shodaihokage_skill_4_(deflection).jpg"
    }
  ]
} as const;

export default character;
