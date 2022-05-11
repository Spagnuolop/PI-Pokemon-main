import React from "react";
import { Link } from "react-router-dom";
import Pikaimg from "../imgs/pikachu.png";
import style from "../Styles/Landing.module.css";
import Bulbasurimg from "../imgs/bulbasur.png";
import Charmanderimg from "../imgs/charmander.png";
import Squirtleimg from "../imgs/squirtle.png";
import Title from "../imgs/title.png";

export default function Landing() {
  return (
    <div className={`${style.landing}`}>
      <img className={`${style.title}`} width="65%" src={Title} />
      <p className={`${style.pikachu}`}>
        <img height="300" src={Pikaimg} alt="" />
        <img height="300" src={Bulbasurimg} alt="" />
        <img height="300" src={Charmanderimg} alt="" />
        <img height="300" src={Squirtleimg} alt="" />
      </p>
      <p>
        <Link className={`${style.link}`} to="/home">
          <button className={`${style.btn}`}>Enter</button>
        </Link>
      </p>
    </div>
  );
}
