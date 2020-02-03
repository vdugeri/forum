import styled from "styled-components";
import { ReactComponent as Icon } from "assets/icons/magnifying-glass.svg";

export const SearchFieldWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const SearchIcon = styled(Icon)`
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 40%;
  left: 3%;
  z-index: 999;
  fill: #333;
`;

export const SearchInput = styled.input`
  background-color: #f6f6f6;
  padding: 1.2rem 3rem;
  width: 33rem;
  outline: none;
  border: none;
  border-radius: 5rem;
  font-size: 1.4rem;
  color: #333;

  &:focus {
    transform: scale(1.1);
  }

  &:focus ~ ${SearchIcon} {
    left: 0;
  }
`;
