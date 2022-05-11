const { Router } = require("express");
const { Pokemon, Type } = require("../db");

const router = Router();

router.get("/attackdesc", async (req, res) => {
  const pokemons = await Pokemon.findAll({ order: [["attack", "DESC"]] });
  pokemons
    ? res.status(200).send(pokemons)
    : res.status(404).send("Query error");
});

router.get("/attackasc", async (req, res) => {
  const pokemons = await Pokemon.findAll({ order: [["attack", "ASC"]] });
  pokemons
    ? res.status(200).send(pokemons)
    : res.status(404).send("Query error");
});

router.get("/nameasc", async (req, res) => {
  const pokemons = await Pokemon.findAll({ order: [["name", "ASC"]] });
  pokemons
    ? res.status(200).send(pokemons)
    : res.status(404).send("Query error");
});

router.get("/namedesc", async (req, res) => {
  const pokemons = await Pokemon.findAll({ order: [["name", "DESC"]] });
  pokemons
    ? res.status(200).send(pokemons)
    : res.status(404).send("Query error");
});

router.get("/", async (req, res) => {
  const result = await Pokemon.findAll({
    include: Type,
  });

  result ? res.status(200).json(result) : res.status(404);
});

router.get("/pokemon/:name", async (req, res) => {
  const { name } = req.params;
  const result = await Pokemon.findOne({
    where: { name: name },
    include: Type,
  });
  result
    ? res.status(200).send(result)
    : res.status(404).send("Pokemon not found");
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Pokemon.findByPk(id, {
    include: Type,
  });
  result
    ? res.status(200).send(result)
    : res.status(404).send("Pokemon not found");
});

router.post("/", async (req, res) => {
  const { name, hp, height, weight, attack, defense, speed, image, type } =
    req.body;
  const pokemon = await Pokemon.create({
    name: name.toLowerCase(),
    hp,
    height,
    weight,
    attack,
    defense,
    speed,
    image,
    create: true,
  });
  type.map((typ) => {
    pokemon.setTypes(typ.id);
  });
  pokemon
    ? res.status(200).send(pokemon)
    : res.status(404).send("Create pokemon error");
});

router.get("/pokemon/created/:payload", async (req, res) => {
  const { payload } = req.params;
  const pokemons = await Pokemon.findAll({
    where: { create: payload },
    include: Type,
  });
  pokemons
    ? res.status(200).send(pokemons)
    : res.status(404).send("Pokemon created not found");
});

module.exports = router;
