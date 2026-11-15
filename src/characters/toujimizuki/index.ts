// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Touji Mizuki",
  "portraits": [
    {
      "number": 1,
      "file": "toujimizuki_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Kunai Assault",
      "file": "toujimizuki_skill_1_(kunai_assault).jpeg"
    },
    {
      "number": 2,
      "name": "Execution Shuriken",
      "file": "toujimizuki_skill_2_(execution_shuriken).jpg"
    },
    {
      "number": 3,
      "name": "Genjutsu Ambush Tactics",
      "file": "toujimizuki_skill_3_(genjutsu_ambush_tactics).png"
    },
    {
      "number": 4,
      "name": "Mizuki Dodge",
      "file": "toujimizuki_skill_4_(mizuki_dodge).jpg"
    }
  ]
} as const;

export default character;
