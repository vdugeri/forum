import React from "react";
import {
  QuoteWrapper,
  QuoteContainer,
  Heading,
  BlockQuote
} from "components/quote/quote.styles";

const Quote = () => (
  <QuoteWrapper className="quote">
    <QuoteContainer className="quote-container">
      <Heading>Messages</Heading>
      <BlockQuote>
        "The man who does not read books has no advantage over the man who can
        not read them."
      </BlockQuote>
    </QuoteContainer>
  </QuoteWrapper>
);

export default Quote;
