// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Karatachi Yagura",
  "portraits": [
    {
      "number": 1,
      "file": "karatachiyagura_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Isobu: Tailed Beast Bomb",
      "file": "karatachiyagura_skill_1_(isobu_tailed_beast_bomb).png"
    },
    {
      "number": 2,
      "name": "Bloodshed",
      "file": "karatachiyagura_skill_2_(bloodshed).png"
    },
    {
      "number": 3,
      "name": "Isobu Transformation",
      "file": "karatachiyagura_skill_3_(isobu_transformation).png"
    },
    {
      "number": 4,
      "name": "Isobu: Chakra Skin",
      "file": "karatachiyagura_skill_4_(isobu_chakra_skin).png"
    }
  ]
} as const;

export default character;
