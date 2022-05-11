import React from "react";
import "../Styles/Card.css";

export default function Card({ name, image, id, types }) {
  return (
    <div className="container">
      <div>
        <img
          className="img"
          src={image}
          alt={name}
          width="200px"
          heigth="250px"
        />
        <h2>{name.charAt(0).toUpperCase() + name.substr(1)}</h2>
        <div>
          {types?.map((type, index) => {
            return (
              <div key={index}>
                <span>
                  {type.name.charAt(0).toUpperCase() + type.name.substr(1)}
                </span>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
