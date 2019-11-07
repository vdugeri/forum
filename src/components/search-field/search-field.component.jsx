import React from "react";

import { ReactComponent as SearchIcon } from "assets/icons/magnifying-glass.svg";

import "components/search-field/search-field.styles.scss";

const SearchField = ({ value, placeholder, handleChange }) => (
  <div className="search-field">
    <input
      type="search"
      className="search-field__input"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
    <SearchIcon className="search-field__icon" />
  </div>
);

export default SearchField;
