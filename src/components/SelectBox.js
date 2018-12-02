import React from "react";
import axios from "axios";

export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeID: null,
      pokemons: []
      // value: ""
    };
  }

  componentDidMount() {
    axios.get(this.props.URL + "type").then(response => {
      const data = response.data.results;
      this.setState({
        pokemons: data
      });
      // console.log(this.state.pokemons);
    });
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div className="select-box">
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Pick Pokemon Type:
            <select
              value={this.props.pokemonType}
              onChange={this.props.onSelectChange}
            >
              {pokemons.map(pokemon => {
                // console.log(pokemon);
                return (
                  <option
                    style={{
                      textTransform: "capitalize"
                    }}
                    key={pokemon.url}
                    value={pokemon.url}
                  >
                    {pokemon.name}
                  </option>
                );
              })}
            </select>
          </label>
          <input type="submit" value="Submit" onClick={()=>this.props.onRouteChange("selected")}/>
        </form>

        <h5 className="button" onClick={() => this.props.onRouteChange("all")}>
          Select All Pokemon
        </h5>
      </div>
    );
  }
}
