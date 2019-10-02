import React from "react";

import { ReactComponent as SearchIcon } from "../../assets/icons/magnifying-glass.svg";

import "./search-field.styles.scss";

const SearchField = ({ value, placeholder, handleChange }) => (
  <div className="search-field">
    <SearchIcon className="search-field__icon" />
    <input
      type="search"
      className="search-field__input"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  </div>
);

export default SearchField;
