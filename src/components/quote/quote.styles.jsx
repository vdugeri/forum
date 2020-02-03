import styled from "styled-components";

export const QuoteWrapper = styled.div`
  display: flex;
`;

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 4rem;
  margin-top: 30rem;
`;

export const Heading = styled.h2`
  font-size: 3.5rem;
  font-weight: 600;
  font-family: "Domine", serif;
  color: #253632;
  border-bottom: 1.2px solid #e7e7e7;
  display: block;
  width: 50%;
  padding-bottom: 1rem;
`;

export const BlockQuote = styled.blockquote`
  width: 50%;
  font-size: 1.4rem;
  font-family: "Domaine Display Regular", serif;
  line-height: 2;
  font-weight: 300;
`;
