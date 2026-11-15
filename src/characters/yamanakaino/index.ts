// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Yamanaka Ino",
  "portraits": [
    {
      "number": 1,
      "file": "yamanakaino_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Mind Body Disturbance",
      "file": "yamanakaino_skill_1_(mind_body_disturbance).jpg"
    },
    {
      "number": 2,
      "name": "Change of Heart",
      "file": "yamanakaino_skill_2_(change_of_heart).jpg"
    },
    {
      "number": 3,
      "name": "Chakra Hair Strand Trap",
      "file": "yamanakaino_skill_3_(chakra_hair_strand_trap).jpeg"
    },
    {
      "number": 4,
      "name": "Ino Block",
      "file": "yamanakaino_skill_4_(ino_block).png"
    },
    {
      "number": 5,
      "name": "Art of the Valentine",
      "file": "yamanakaino_skill_5_(art_of_the_valentine).jpg"
    }
  ]
} as const;

export default character;
