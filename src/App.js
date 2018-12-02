import React, { Component } from "react";
import axios from "axios";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import Modal from "./components/Modal";
import PokemonProfile from "./components/PokemonProfile";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: "",
      prodURL: "https://app.subarnanto.com/api/v2/pokemon/",
      devURL: "http://localhost:5001/api/v2/pokemon/",
      isModalOpen: false,
      pokemonID: null
    };
  }

  componentDidMount() {
    const URL =
      process.env.NODE_ENV === "production"
        ? this.state.prodURL
        : this.state.devURL;
    axios.get(this.state.prodURL).then(response => {
      // console.log(response.data.results);
      this.setState({ pokemons: response.data.results });
    });
  }

  onSearchChange = event => {
    // console.log(event.target.value);
    this.setState({ searchField: event.target.value });
  };

  handleClick() {
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  toggleModal = id => {
    console.log(id);
    this.setState(prevState => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
      pokemonID: id
    }));
  };

  render() {
    const { pokemons, searchField, isModalOpen, pokemonID } = this.state;
    const filteredPokemon = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    });
    const URL =
      process.env.NODE_ENV === "production"
        ? this.state.prodURL
        : this.state.devURL;

    return !pokemons.length ? (
      <h1>Loading</h1>
    ) : (
      <div>
        {isModalOpen && (
          <Modal>
            <PokemonProfile
              // isModalOpen={isModalOpen}
              toggleModal={this.toggleModal}
              pokemonID={pokemonID}
              URL={this.state.prodURL}
            />
          </Modal>
        )}
        <h1>Pokemon</h1>
        <SearchBox
          searchChange={this.onSearchChange}
          searchField={searchField}
        />
        <Scroll>
          <CardList pokemons={filteredPokemon} toggleModal={this.toggleModal} />
        </Scroll>
      </div>
    );
  }
}

export default App;
