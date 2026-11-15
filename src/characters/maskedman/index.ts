// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Masked Man",
  "portraits": [
    {
      "number": 1,
      "file": "maskedman_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Strange Jutsu",
      "file": "maskedman_skill_1_(strange_jutsu).png"
    },
    {
      "number": 2,
      "name": "Chain Assault",
      "file": "maskedman_skill_2_(chain_assault).png"
    },
    {
      "number": 3,
      "name": "Summoning: Kyuubi",
      "file": "maskedman_skill_3_(summoning_kyuubi).png"
    },
    {
      "number": 4,
      "name": "Masked Man Block",
      "file": "maskedman_skill_4_(masked_man_block).png"
    },
    {
      "number": 5,
      "name": "Summoned Kyuubi: Bijuudama",
      "file": "maskedman_skill_5_(summoned_kyuubi_bijuudama).png"
    }
  ]
} as const;

export default character;
