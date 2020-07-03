import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  text-decoration: none;
  color: #00856f;
  font-weight: 600;

  & .icon {
    font-size: 3rem;
    margin-right: 0.5rem;
    margin-top: -6px;
  }
`;

export const BackLinkIcon = styled.span`
  font-size: 3rem;
  margin-right: 0.5rem;
  margin-top: -6px;
`;
