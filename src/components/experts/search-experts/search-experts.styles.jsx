import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
`;

export const SubjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 4rem;
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-family: "Proxima Nova bold", serif;
`;

export const String = styled.p`
  font-size: 1.6rem;
  font-family: "Domaine Display Regular", sans-serif;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
