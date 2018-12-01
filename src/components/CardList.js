import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
  return (
    <div className="card-list">
      {
        pokemons.map((pokemon, i) => {
          let id = i + 1
          // console.log(pokemon.name,i)
          return (
            <Card
              key={i}
              id={id}
              name={pokemon.name}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;