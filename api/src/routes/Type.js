const { Router } = require("express");
const axios = require("axios");
const { Type, Pokemon } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  const api = await Type.findAll();

  if (api.length === 0) {
    try {
      const types = await axios.get("https://pokeapi.co/api/v2/type");
      for (let i = 0; i < types.results.length; i++) {
        await Type.create({ name: types.data.results[i].name });
      }
    } catch (error) {
      return res.status(404).send("There was an error");
    }
  } else {
    return res.status(200).json(api);
  }
});

router.get("/:typeId", async (req, res) => {
  const { typeId } = req.params;
  console.log(typeId);
  const pokemons = await Type.findByPk(typeId, {
    include: Pokemon,
  });
  console.log(pokemons);
  pokemons
    ? res.status(200).send(pokemons)
    : res.status(404).send("Pokemon not found");
});

module.exports = router;
