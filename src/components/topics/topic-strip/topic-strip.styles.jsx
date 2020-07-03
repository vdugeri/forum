import styled from "styled-components";
import { Link } from "react-router-dom";

export const StripWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
  padding: 1.2rem 0;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 300;
  font-family: "Proxima Nova Regular", sans-serif;
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
`;

export const StripLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: inherit;
`;

export const StripName = styled.span`
  margin-left: 0;
`;

export const StripIconContainer = styled.span`
  margin-right: 0;

  & img {
    height: 3rem;
    width: auto;
  }
`;
