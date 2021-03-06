import React, { Component } from "react";
import axios from "axios";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import Modal from "./components/Modal";
import PokemonProfile from "./components/PokemonProfile";
import SelectBox from "./components/SelectBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchField: "",
      prodURL: "https://app.subarnanto.com/api/v2/",
      devURL: "http://localhost:5001/api/v2/",
      isModalOpen: false,
      pokemonID: null,
      pokemonType: "",
      pokemonTypeURL: "/api/v2/type/1/",
      selectPokemons: [],
      route: "all"
    };
  }

  componentDidMount() {
    const URL =
      process.env.NODE_ENV === "production"
        ? this.state.prodURL
        : this.state.devURL;
    axios.get(URL + "pokemon").then(response => {
      // console.log(response.data.results);
      this.setState({ pokemons: response.data.results });
    });
  }

  onSearchChange = event => {
    // console.log(event.target.value);
    this.setState({ searchField: event.target.value });
  };

  // handleClick() {
  //   this.setState(state => ({
  //     clicks: state.clicks + 1
  //   }));
  // }

  toggleModal = id => {
    console.log(id);
    this.setState(prevState => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
      pokemonID: id
    }));
  };

  onSelectChange = event => {
    console.log(event);
    this.setState({
      pokemonType: event.target.value,
      pokemonTypeURL: this.state.pokemonType
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const URL =
      process.env.NODE_ENV === "production"
        ? `https://app.subarnanto.com${this.state.pokemonTypeURL}`
        : `http://localhost:5001${this.state.pokemonTypeURL}`;
    axios.get(URL).then(response => {
      const pokemons = response.data.pokemon;
      this.setState({ selectPokemons: pokemons });
      console.log(this.state.selectPokemons);
    });
    // this.setState({ pokemonTypeURL: this.state.pokemonType });
    // alert("Select Pokemon Type: " + this.state.pokemonTypeURL);
  };

  onRouteChange = route => {
    if (route === "selected") {
      this.setState({ route: "selected" });
    } else if (route === "all") {
      this.setState({ route: "all" });
    }
    this.setState({ route });
  };

  render() {
    const {
      pokemons,
      searchField,
      isModalOpen,
      pokemonID,
      pokemonType,
      // pokemonTypeURL,
      selectPokemons,
      route
    } = this.state;

    const filteredPokemon = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    });

    // const selectedPokemon = selectPokemons

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
              URL={URL}
            />
          </Modal>
        )}
        <h1>Pokemon</h1>
        <SearchBox
          onSearchChange={this.onSearchChange}
          searchField={searchField}
        />
        <SelectBox
          onSelectChange={this.onSelectChange}
          handleSubmit={this.handleSubmit}
          pokemonType={pokemonType}
          URL={URL}
          onRouteChange={this.onRouteChange}
          // pokemonTypeURL={pokemonTypeURL}
        />
        <Scroll>
          {route === "all" ? (
            <CardList
              pokemons={filteredPokemon}
              toggleModal={this.toggleModal}
            />
          ) : route === "selected" ? (
            <CardList
              pokemons={selectPokemons}
              toggleModal={this.toggleModal}
            />
          ) : null}
        </Scroll>
      </div>
    );
  }
}

export default App;
