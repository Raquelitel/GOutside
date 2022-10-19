import React from "react";

const SearchBar = (props) => {
  // const {handleFormSubmit} = props

  const handleChange = (event) => {
    props.handleFormSubmit(event.target.value);
  };

  return (
      <div className="container-fluid search-bar">
        <div className="field">
          <input
          className="form-control"
            onChange={(event) => handleChange(event)}
            name="video-search"
            type="text"
            placeholder="Buscar..."
          />
        </div>
      </div>
  );
};

export default SearchBar;
