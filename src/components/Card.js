import React from 'react';

const Card = ({ name, id }) => {
  return (
    <div>
      <img alt='pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png?size=200x200`} />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default Card;