import React, { Component } from "react";
import axios from 'axios';
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchInput: ""
    };
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then(response => {
        // console.log(response);
        console.log(response);
        // this.setState({ pokemons: pokemon });
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { pokemons, searchInput } = this.state;
    const filteredPokemon = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return !pokemons.length ? (
      <h1>Loading</h1>
    ) : (
      <div>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList pokemons={filteredPokemon} />
        </Scroll>
      </div>
    );
  }
}

export default App;
