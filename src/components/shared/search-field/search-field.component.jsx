import React from "react";

import {
  SearchFieldWrapper,
  SearchIcon,
  SearchInput,
} from "components/shared/search-field/search-field.styles";

const SearchField = ({ value, placeholder, handleChange }) => (
  <SearchFieldWrapper>
    <SearchInput
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
    <SearchIcon />
  </SearchFieldWrapper>
);

export default SearchField;
