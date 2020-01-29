import styled from "styled-components";

export const CheckButtonContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
  height: 100%;

  & input {
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover input ~ .checkmark {
    background-color: #00856f;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
  }

  & input:checked ~ .checkmark {
    background-color: #00856f;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    width: 0.5rem;
    height: 1rem;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    margin-bottom: 0.35rem;
  }

  & .checkmark {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem;
    background-color: #ccc;

    &:after {
      content: "";
      display: none;
    }
  }
`;
