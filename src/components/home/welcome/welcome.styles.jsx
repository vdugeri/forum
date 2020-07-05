import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "components/shared";

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 4rem;
`;

export const HandIconContainer = styled.div`
  width: 5rem;
  height: 5rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  margin-left: -3rem;
`;

export const WelcomeSalutation = styled.h2`
  color: #263633;
  font-size: 2.5rem;
  font-family: "Domine", serif;
  font-weight: 600;
  margin-top: 2rem;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  margin-top: 0.5rem;
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 3rem;
`;

export const Intro = styled.h2`
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-family: "Domaine Display Semibold", serif;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const TopicsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 60%;
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 6rem;
`;

export const InfoHeader = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 2rem;
  font-family: "Domaine Display Semibold", serif;
`;

export const Info = styled.p`
  display: flex;
  margin-top: 3rem;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const StyledButton = styled(Button)`
  margin-top: 2rem;
`;
