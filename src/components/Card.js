import React from "react";

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.toggleModal(props.id)}>
      <img
        alt="pokemon"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
      />

      <h2>{props.name}</h2>
    </div>
  );
};

export default Card;
