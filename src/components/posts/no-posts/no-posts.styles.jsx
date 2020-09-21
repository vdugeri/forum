import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;

  & button {
    margin-top: 3rem;
  }
`;

export const IconContainer = styled.div`
  width: 15rem;
  height: 15rem;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  & svg {
    width: 70%;
    height: auto;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-top: 2rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Message = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 1.5rem;
`;
