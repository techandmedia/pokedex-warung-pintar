import React, { Component } from "react";
import axios from "axios";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: "",
      prodURL: "https://app.subarnanto.com/api/v2/pokemon/",
      devURL: "http://localhost:5001/api/v2/pokemon/"
    };
  }

  async componentDidMount() {
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
    console.log(event.target.value)
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { pokemons, searchField } = this.state;
    const filteredPokemon = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !pokemons.length ? (
      <h1>Loading</h1>
    ) : (
      <div>
        <h1>Pokemon</h1>
        <SearchBox
          searchChange={this.onSearchChange}
          searchField={searchField}
        />
        <Scroll>
          <CardList pokemons={filteredPokemon} />
        </Scroll>
      </div>
    );
  }
}

export default App;
