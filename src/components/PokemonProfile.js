import React from "react";
import axios from "axios";
import "./modal.css";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonName: null,
      pokemonType1: null,
      pokemonWeight: null,
      hp: null,
      defense: null,
      attack: null,
      speed: null,
      specialDefense: null,
      specialAttack: null

      // pokemonType2: null,
    };
  }

  componentDidMount() {
    axios
      .get(this.props.URL + "pokemon/" + this.props.pokemonID)
      .then(response => {
        // console.log(response.data.name);
        const pokemon = response.data;
        this.setState({
          pokemonName: pokemon.name,
          pokemonType1: pokemon.types[0].type.name,
          pokemonWeight: pokemon.weight,
          hp: pokemon.stats[0].base_stat,
          defense: pokemon.stats[1].base_stat,
          attack: pokemon.stats[2].base_stat,
          speed: pokemon.stats[3].base_stat,
          specialDefense: pokemon.stats[4].base_stat,
          specialAttack: pokemon.stats[5].base_stat
          // pokemonType2: pokemon.types[1].type.name,
        });
      });
  }

  render() {
    const {
      pokemonName,
      pokemonType1,
      // pokemonType2,
      pokemonWeight,
      hp,
      defense,
      attack,
      speed,
      specialAttack,
      specialDefense
    } = this.state;
    const { pokemonID } = this.props;
    return (
      <div className="profile-modal">
        <div className="card-list">
          <div>
            <img
              alt="pokemon"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`}
              style={{ width: 200 }}
            />
          </div>

          <div style={{ marginLeft: 50 }}>
            <h2>{pokemonName}</h2>
            <span>Type: {pokemonType1}</span> <br />
            <span>Weight: {pokemonWeight}</span> <br />
            <span>HP: {hp}</span> <br />
            <span>Defense: {defense}</span> <br />
            <span>Attack: {attack}</span> <br />
            <span>Speed: {speed}</span> <br />
            <span>Special Attack: {specialAttack}</span> <br />
            <span>Special Defense: {specialDefense}</span> <br />
          </div>
        </div>

        <div>
          <button className="button" onClick={this.props.toggleModal}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
}
