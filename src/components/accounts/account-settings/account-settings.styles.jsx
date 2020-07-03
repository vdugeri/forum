import styled from "styled-components";

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  width: 40%;
  align-self: center;
`;

export const SettingsHeading = styled.h2`
  font-size: 4rem;
  font-family: "Domaine Display Semibold", serif;
  font-weight: 700;
  padding: 6rem 0;
`;

export const SettingsTitle = styled.div`
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

export const SettingsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 5rem;
`;

export const SettingsBlock = styled.div`
  display: flex;
  flex-direction: column;

  & button {
    width: 20rem;
    font-size: 1.6rem;

    & a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const BlockSection = styled.span`
  display: flex;
  align-items: baseline;
  font-size: 1.8rem;

  &:not(:first-child) {
    margin-top: 1rem;
  }

  & h4 {
    font-weight: 600;
    margin-right: 0.5rem;
    font-size: 1.6rem;
  }
`;

export const SkillTags = styled.span`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
`;
