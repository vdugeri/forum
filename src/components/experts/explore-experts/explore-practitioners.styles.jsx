import styled from "styled-components";
import { Link } from "react-router-dom";

export const ExploreExpertsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 5rem;
  min-height: 35rem;
`;

export const Experts = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
`;

export const ExpertsHeading = styled.h2`
  font-family: "Domine", serif;
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const Message = styled.div`
  font-size: 1.5rem;
  align-self: center;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
