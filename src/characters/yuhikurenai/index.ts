// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Yuhi Kurenai",
  "portraits": [
    {
      "number": 1,
      "file": "yuhikurenai_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Cherry Blossom Suffocation",
      "file": "yuhikurenai_skill_1_(cherry_blossom_suffocation).jpg"
    },
    {
      "number": 2,
      "name": "Plant Form Attack",
      "file": "yuhikurenai_skill_2_(plant_form_attack).jpg"
    },
    {
      "number": 3,
      "name": "Demonic Illusion: Tree Binding Death",
      "file": "yuhikurenai_skill_3_(demonic_illusion_tree_binding_death).jpg"
    },
    {
      "number": 4,
      "name": "Vanishing Illusion",
      "file": "yuhikurenai_skill_4_(vanishing_illusion).jpg"
    }
  ]
} as const;

export default character;
