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
      isModalOpen: false
    };
  }

  componentDidMount() {
    const URL =
      process.env.NODE_ENV === "production"
        ? this.state.prodURL
        : this.state.devURL;
    axios.get(URL).then(response => {
      console.log(response.data.results);
      this.setState({ pokemons: response.data.results });
    });
  }

  onSearchChange = event => {
    console.log(event.target.value);
    this.setState({ searchField: event.target.value });
  };

  handleClick() {
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen
    }));
  };

  render() {
    const { pokemons, searchField, isModalOpen } = this.state;
    const filteredPokemon = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !pokemons.length ? (
      <h1>Loading</h1>
    ) : (
      <div>
        {isModalOpen && (
          <Modal>
            <PokemonProfile
              // isModalOpen={isModalOpen}
              toggleModal={this.toggleModal}
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
