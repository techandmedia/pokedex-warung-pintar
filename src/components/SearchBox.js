import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="search-box">
      <input
        type="search"
        placeholder="Search by Pokemon Name"
        onChange={searchChange}
        // Warning: React does not recognize the `searchField` prop on a DOM element. 
        // If you intentionally want it to appear in the DOM as a custom attribute, 
        // spell it as lowercase `searchfield` instead. 
        // If you accidentally passed it from a parent component, remove it from the DOM element
        searchfield={searchField}
      />
    </div>
  );
};

export default SearchBox;
