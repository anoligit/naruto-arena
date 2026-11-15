// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Kyuubi Naruto",
  "portraits": [
    {
      "number": 1,
      "file": "kyuubinaruto_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Kyuubi Rasengan",
      "file": "kyuubinaruto_skill_1_(kyuubi_rasengan).jpg"
    },
    {
      "number": 2,
      "name": "Kyuubi Rage",
      "file": "kyuubinaruto_skill_2_(kyuubi_rage).jpg"
    },
    {
      "number": 3,
      "name": "Kyuubi Chakra",
      "file": "kyuubinaruto_skill_3_(kyuubi_chakra).jpg"
    },
    {
      "number": 4,
      "name": "Chakra Howl",
      "file": "kyuubinaruto_skill_4_(chakra_howl).jpg"
    }
  ]
} as const;

export default character;
