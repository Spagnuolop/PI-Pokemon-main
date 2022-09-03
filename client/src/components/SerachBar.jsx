import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchPokemon } from "../Actions";
import "../Styles/Search.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const history = useNavigate();
  const { pokemonsList } = useSelector((state) => state);

  /*  useEffect(() => {
    pokemon.id && history("/pokemons/details/" + pokemon.id);
  }, [history]); */

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name !== "") {
      let poke = pokemonsList.filter(
        (pokemon) => pokemon.name === name.toLocaleLowerCase()
      );
      if (poke.length === 0) {
        alert("Pokemon " + name + " not found");
      } else {
        history("/pokemons/details/" + poke[0].id);
      }
    }
  }

  return (
    <form>
      <div className="search">
        <input
          className="inputSearch"
          type="text"
          placeholder="Pokemon name..."
          onChange={(e) => handleChange(e)}
        ></input>
        <button
          className="btnSearch"
          type="button"
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </button>
      </div>
    </form>
  );
}
