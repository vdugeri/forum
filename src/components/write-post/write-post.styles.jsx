import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  margin-left: 2rem;
  margin-right: auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #eee;
  height: 8.8rem;
  margin-top: 2rem;
  border-radius: 5px;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
