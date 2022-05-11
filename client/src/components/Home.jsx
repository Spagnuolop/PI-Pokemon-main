import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  byAttackasc,
  byAttackdesc,
  filterType,
  getAllPokemons,
  getTypes,
  byNameAsc,
  byNameDesc,
  byCreated,
} from "../Actions/index";
import { Link } from "react-router-dom";
import Paginado from "./Paginado";
import SearchBar from "./SerachBar";
import "../Styles/Home.css";
import Card from "./Card";
import inventory from "../imgs/inventory.png";

export default function Home() {
  const dispatch = useDispatch();
  const { pokemonsList, pokemonTypes } = useSelector((state) => state);

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(12);
  var lastPokemon = currentPage * pokemonPerPage;
  var firstPokemon = lastPokemon - pokemonPerPage;
  var currentPokemons = pokemonsList.slice(firstPokemon, lastPokemon);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllPokemons());
  }

  useEffect(() => {
    setCurrentPage(1);
    lastPokemon = currentPage * pokemonPerPage;
    firstPokemon = lastPokemon - pokemonPerPage;
    currentPokemons = pokemonsList.slice(firstPokemon, lastPokemon);
  }, [pokemonsList]);

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  function handleSort(e) {
    e.preventDefault();
    if (e.target.value === "asc") {
      dispatch(byNameAsc());
    } else if (e.target.value === "desc") {
      dispatch(byNameDesc());
    }
  }

  function handleFilteredCreated(e) {
    e.preventDefault();
    dispatch(byCreated(e.target.value));
  }

  function handleFilterType(e) {
    if (e.target.value !== "title") {
      e.preventDefault();
      dispatch(filterType(e.target.value));
    }
  }

  function attackSort(e) {
    e.preventDefault();
    if (e.target.value === "asc") {
      dispatch(byAttackasc());
    } else if (e.target.value === "desc") {
      dispatch(byAttackdesc());
    }
  }

  return (
    <div className="home">
      <img className="title" src={inventory} atl="title" />

      <div>
        <button className="btnHome">
          <Link className="linkBtn" to="/createpokemon">
            Create Pokemon
          </Link>
        </button>
        <button
          className="btnHome"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Reset List
        </button>

        <select className="options" onChange={(e) => attackSort(e)}>
          <option className="options">Order By Attack</option>
          <option className="options" value="asc">
            Ascending order
          </option>
          <option className="options" value="desc">
            Descending order
          </option>
        </select>

        <select className="options" onChange={(e) => handleSort(e)}>
          <option className="options">Order By Name</option>
          <option className="options" value="asc">
            Ascending order
          </option>
          <option className="options" value="desc">
            Descending order
          </option>
        </select>
        <select
          className="options"
          onChange={(e) => {
            handleFilterType(e);
          }}
        >
          <option className="options" value="title">
            By Type
          </option>
          {pokemonTypes?.map((e, index) => (
            <option className="options" key={index} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
        <select
          className="options"
          onChange={(e) => {
            handleFilteredCreated(e);
          }}
        >
          <option className="options">Creator</option>
          <option className="options" value={false}>
            Reals
          </option>
          <option className="options" value={true}>
            Created
          </option>
        </select>
      </div>
      <SearchBar />
      <div>
        <Paginado
          pokemonPerPage={pokemonPerPage}
          pokemons1={pokemonsList.length}
          paginado={paginado}
          page={currentPage}
        />
      </div>
      <div className="card">
        {currentPokemons?.map((element, index) => {
          return (
            <div key={index}>
              <Link className="linkCard" to={`/pokemons/details/${element.id}`}>
                <Card
                  name={element.name}
                  image={element.image}
                  types={element.types}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
