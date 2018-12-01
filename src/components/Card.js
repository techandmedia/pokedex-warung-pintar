import React from "react";

const Card = ({ name, id }) => {
  return (
    <div className="card">
      <img
        alt="pokemon"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />

      <h2>{name}</h2>
    </div>
  );
};

export default Card;
