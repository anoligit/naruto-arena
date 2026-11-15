// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Tsurugi Misumi",
  "portraits": [
    {
      "number": 1,
      "file": "tsurugimisumi_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Flexible Twisting Joints",
      "file": "tsurugimisumi_skill_1_(flexible_twisting_joints).jpg"
    },
    {
      "number": 2,
      "name": "Soft Physique Modification",
      "file": "tsurugimisumi_skill_2_(soft_physique_modification).jpg"
    },
    {
      "number": 3,
      "name": "Tighten Joints",
      "file": "tsurugimisumi_skill_3_(tighten_joints).jpg"
    },
    {
      "number": 4,
      "name": "Misumi Block",
      "file": "tsurugimisumi_skill_4_(misumi_block).jpg"
    }
  ]
} as const;

export default character;
