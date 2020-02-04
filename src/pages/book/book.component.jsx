import React from "react";
import SearchExperts from "components/search-experts/search-experts.component";
import { BookExpertContainer } from "pages/book/book.styles";

const BookExpert = () => (
  <BookExpertContainer>
    <SearchExperts />
  </BookExpertContainer>
);

export default BookExpert;
