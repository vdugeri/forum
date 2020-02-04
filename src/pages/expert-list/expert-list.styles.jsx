import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 10rem auto;
  & a {
    align-self: auto;
    width: auto;
  }
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-family: "Domaine Display Bold", serif;
  margin-bottom: 3rem;
`;
