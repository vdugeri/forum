import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  font-size: 1.8rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:active {
    outline: none;
  }

  &:first-child {
    border-top: 1px solid #ccc;
  }
`;

export const TopicLinkIcon = styled.span`
  color: #00856f;
  font-size: 3rem;
  font-weight: 500;
`;
