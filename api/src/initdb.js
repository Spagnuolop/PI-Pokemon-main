const axios = require("axios");
const { Type, Pokemon } = require("./db");

const InitDB = async () => {
  try {
    const result = await axios.get("https://pokeapi.co/api/v2/type");
    if (result) {
      result.data.results.map(async (element) => {
        const type = await Type.create({ name: element.name });
      });
    }
    for (let index = 1; index <= 40; index++) {
      let result2 = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${index}/`
      );
      const poke = await Pokemon.create({
        name: result2.data.name,
        height: result2.data.height,
        weight: result2.data.weight,
        hp: result2.data.stats[0].base_stat,
        attack: result2.data.stats[1].base_stat,
        defense: result2.data.stats[2].base_stat,
        speed: result2.data.stats[5].base_stat,
        image: result2.data.sprites.other["official-artwork"].front_default,
      });
      result2.data.types.map((element) => {
        poke.setTypes(parseInt(element.type.url.split("/")[6]));
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { InitDB };
