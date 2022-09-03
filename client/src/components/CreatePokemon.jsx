import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/Createpokemon.css";
import createTitle from "../imgs/create.png";
import { getTypes, newPokemon } from "../Actions";
import { Link } from "react-router-dom";
import validaciones from "./CreatePokemonError";

export const CreatePokemon = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonTypes);
  const [tipos, setTipos] = useState("");
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: "",
    weight: "",
    height: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    image: "",
    type: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  function handleType(e) {
    e.preventDefault();
    let datos = e.target.value.split("/");
    if (data.type.length < 2) {
      data.type.push({ id: datos[0], name: datos[1] });
      let newTipo = tipos + " " + datos[1];
      setTipos(newTipo);
      setData(data);
    }
  }

  function handleInput(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setErrors(validaciones(e.target.name, e.target.value, errors));
  }

  function CheckButton() {
    if (!validaciones()) {
      return false;
    }
    if (validaciones()) {
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(newPokemon(data));
    alert("Pokemon created successfully");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="create">
        <img className="title" src={createTitle} alt="title" />
        <div className="cards">
          <div className="div">
            <label className="bars">Name:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="text"
              name="name"
              value={data.name}
              pattern="[A-Za-z0-9]"
              title="No se permiten caracteres especiales"
            />
          </div>
          {errors.name && <p className="errorinput">{errors.name}</p>}
          <div className="div">
            <label className="bars">Weight:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="number"
              value={data.weight}
              name="weight"
              step="0.1"
            />
          </div>
          {errors.weight && <p className="errorinput">{errors.weight}</p>}
          <div className="div">
            <label className="bars">Height:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="number"
              value={data.height}
              name="height"
              step="0.1"
            />
          </div>
          {errors.height && <p className="errorinput">{errors.height}</p>}
          <div className="div">
            <label className="bars">Hp:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="number"
              name="hp"
              value={data.hp}
            />
          </div>
          {errors.hp && <p className="errorinput">{errors.hp}</p>}
          <div className="div">
            <label className="bars">Attack:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="number"
              value={data.attack}
              name="attack"
            />
          </div>
          {errors.attack && <p className="errorinput">{errors.attack}</p>}
          <div className="div">
            <label className="bars">Defense:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="number"
              value={data.defense}
              name="defense"
            />
          </div>
          {errors.defense && <p className="errorinput">{errors.defense}</p>}
          <div className="div">
            <label className="bars">Speed:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="number"
              value={data.speed}
              name="speed"
            />
          </div>
          {errors.speed && <p className="errorinput">{errors.speed}</p>}
          <div className="div">
            <label className="bars">Type:</label>
            <select
              className="input"
              onChange={(e) => {
                handleType(e);
              }}
            >
              <option className="option"></option>
              {types?.map((element, index) => (
                <option key={index} value={element.id + "/" + element.name}>
                  {element.name}
                </option>
              ))}
            </select>
          </div>
          <div className="div">
            <label className="bars">Selected</label>
            <div className="input">{tipos}</div>
          </div>
          <div className="div">
            <label className="bars">Image:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="url"
              value={data.image}
              name="image"
              pattern="https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$"
            />
          </div>
          {console.log(errors)}
          <div className="ubibtn">
            {!data.name ||
            !data.hp ||
            !data.attack ||
            !data.defense ||
            !data.height ||
            !data.weight ||
            !data.speed ||
            !data.image ||
            !data.type ? (
              <button className="btn1" type="submit" disabled="disabled">
                Create Pokemon
              </button>
            ) : (
              <button className="btn1" type="submit">
                Create Pokemon
              </button>
            )}
            <Link to="/home">
              <button className="btn1">Return</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};
