import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/Createpokemon.css";
import createTitle from "../imgs/create.png";
import { getTypes, newPokemon } from "../Actions";
import { useNavigate } from "react-router-dom";

export const CreatePokemon = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonTypes);
  const history = useNavigate();
  const [tipos, setTipos] = useState("");
  const [data, setData] = useState({
    name: "",
    weight: 0,
    height: 0,
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
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
    e.preventDefault();
    data[e.target.name] = e.target.value;
    setData(data);
  }

  function handleSubmit(e) {
    console.log(data);
    dispatch(newPokemon(data));
    alert("Pokemon created successfully");
    history("/home", { replace: false });
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
              id="name"
              placeholder=""
              required
              pattern="[A-Za-z0-9]{4,20}"
              title="No se permiten caracteres especiales"
            />
          </div>
          <div className="div">
            <label className="bars">Weight:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="number"
              id="weight"
              name="weight"
              step="0.1"
              placeholder=""
              required
            />
          </div>
          <div className="div">
            <label className="bars">Height:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="number"
              id="height"
              name="height"
              step="0.1"
              placeholder=""
              required
            />
          </div>
          <div className="div">
            <label className="bars">Hp:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="number"
              name="hp"
              id="hp"
              placeholder=""
              required
            />
          </div>
          <div className="div">
            <label className="bars">Attack:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="number"
              id="attack"
              name="attack"
              placeholder=""
              required
            />
          </div>
          <div className="div">
            <label className="bars">Defense:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="number"
              id="defense"
              name="defense"
              placeholder=""
              required
            />
          </div>
          <div className="div">
            <label className="bars">Speed:</label>
            <input
              className="input"
              onChange={(e) => {
                handleInput(e);
              }}
              type="number"
              id="speed"
              name="speed"
              placeholder=""
              required
            />
          </div>
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
              id="image"
              name="image"
              placeholder=""
              required
            />
          </div>
          <div className="ubibtn">
            <button className="btn1" type="submit">
              Create Pokemon
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
