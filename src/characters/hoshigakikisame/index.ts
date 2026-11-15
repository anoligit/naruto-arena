// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Hoshigaki Kisame",
  "portraits": [
    {
      "number": 1,
      "file": "hoshigakikisame_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Samehada Slash",
      "file": "hoshigakikisame_skill_1_(samehada_slash).jpg"
    },
    {
      "number": 2,
      "name": "Samehada Shred",
      "file": "hoshigakikisame_skill_2_(samehada_shred).jpg"
    },
    {
      "number": 3,
      "name": "Water Shark Projectile",
      "file": "hoshigakikisame_skill_3_(water_shark_projectile).jpg"
    },
    {
      "number": 4,
      "name": "Samehada Scale Block",
      "file": "hoshigakikisame_skill_4_(samehada_scale_block).jpg"
    }
  ]
} as const;

export default character;
