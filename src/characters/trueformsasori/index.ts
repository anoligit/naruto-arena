// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "True Form Sasori",
  "portraits": [
    {
      "number": 1,
      "file": "trueformsasori_char_1.png"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Puppet Flamethrower",
      "file": "trueformsasori_skill_1_(puppet_flamethrower).png"
    },
    {
      "number": 2,
      "name": "Water Stream Shooters",
      "file": "trueformsasori_skill_2_(water_stream_shooters).png"
    },
    {
      "number": 3,
      "name": "Red Secret Technique: 100 Puppets",
      "file": "trueformsasori_skill_3_(red_secret_technique_100_puppets).png"
    },
    {
      "number": 4,
      "name": "Magnificent Pose",
      "file": "trueformsasori_skill_4_(magnificent_pose).png"
    }
  ]
} as const;

export default character;
