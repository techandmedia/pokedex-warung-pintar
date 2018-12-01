import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
  return (
    <div>
      {
        pokemons.map((pokemon, i) => {
          return (
            <Card
              key={i}
              id={pokemon[i].id}
              name={pokemon[i].name}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;