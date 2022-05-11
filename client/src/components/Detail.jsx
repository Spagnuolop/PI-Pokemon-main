import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetails } from "../Actions";
import "../Styles/Detail.css";

export const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { pokemon } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  return (
    <div className="wall">
      <div>
        <img className="imgs" src={pokemon.image} alt="" width="500px" />
      </div>
      <div className="block">
        <div className="details">
          <h1 className="titleCreate">{pokemon.name?.toUpperCase()}</h1>
          <h3 className="names">
            Types:
            {pokemon.types?.map((type, index) => {
              return (
                <span key={index}>
                  {type.name?.charAt(0).toUpperCase() +
                    type.name.substr(1) +
                    " "}
                </span>
              );
            })}
          </h3>
          <h3 className="names">Hp: {pokemon.hp}</h3>
          <h3 className="names">Height: {pokemon.height}</h3>
          <h3 className="names">Weight: {pokemon.weight}</h3>
          <h3 className="names">Attack: {pokemon.attack}</h3>
          <h3 className="names">Defense: {pokemon.defense}</h3>
          <h3 className="names">Speed: {pokemon.speed}</h3>
          <Link to="/home">
            <button className="btnCreate">Return</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
