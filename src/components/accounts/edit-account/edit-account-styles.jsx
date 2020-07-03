import styled from "styled-components";

export const EditAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AccountHeading = styled.h3`
  margin-top: 4rem;
  align-self: flex-start;
  align-self: center;
  font-size: 3rem;
  font-family: "Domaine Display Semibold", serif;
  margin-bottom: 6rem;
  width: 60%;
`;

export const EditForm = styled.form`
  display: grid;
  width: 60%;
  grid-template-columns: auto auto;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;

  & button {
    width: 20rem;
    margin-top: 2rem;
  }
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  margin-top: 1rem;
  font-size: 1.6rem;
`;
