import React, { useState } from "react";

const SearchBar = (props) => {
  // const {handleFormSubmit} = props

  const handleChange = (event) => {
    props.handleFormSubmit(event.target.value);
  };

  return (
    <div>
      <div className="search-bar">
        <div className="field">
          <label htmlFor="video-search">Video Search</label>
          <input
            onChange={(event) => handleChange(event)}
            name="video-search"
            type="text"
            placeholder="Buscar..."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
