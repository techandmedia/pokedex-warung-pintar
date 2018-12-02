import React from "react";
import axios from 'axios'

export default function SelectBox(props) {
  const URL = "http://localhost:5001/api/v2/type"
  console.log(props.URL)
  axios.get(URL).then(response => {
    console.log(response)
  })
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Pick Pokemon Type:
        <select value={props.pokemonType} onChange={props.selectChange}>
          <option value="poison">Poison</option>
          <option value="fire">Fire</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
