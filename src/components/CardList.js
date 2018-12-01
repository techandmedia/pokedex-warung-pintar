import React from 'react';
import Card from './Card';

const CardList = ({ pokemons, toggleModal }) => {
  return (
    <div className="card-list">
      {
        pokemons.map((pokemon, i) => {
          let id = i + 1
          // console.log(pokemon.name,i)
          return (
            <Card
              toggleModal={toggleModal}
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