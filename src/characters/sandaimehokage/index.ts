// Caminhos relativos a esta pasta. A ordem segue o catálogo do jogo.
// file: null indica uma imagem indisponível na origem.
export const character = {
  "name": "Sandaime Hokage",
  "portraits": [
    {
      "number": 1,
      "file": "sandaimehokage_char_1.jpg"
    }
  ],
  "skills": [
    {
      "number": 1,
      "name": "Fire Dragon Flame Missile",
      "file": "sandaimehokage_skill_1_(fire_dragon_flame_missile).jpg"
    },
    {
      "number": 2,
      "name": "Dead Demon Consuming Seal",
      "file": "sandaimehokage_skill_2_(dead_demon_consuming_seal).jpg"
    },
    {
      "number": 3,
      "name": "Summoning: Enma",
      "file": "sandaimehokage_skill_3_(summoning_enma).jpg"
    },
    {
      "number": 4,
      "name": "Earth Release Wall",
      "file": "sandaimehokage_skill_4_(earth_release_wall).jpg"
    }
  ]
} as const;

export default character;
