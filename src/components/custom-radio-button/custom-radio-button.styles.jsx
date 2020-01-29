import styled from "styled-components";

export const RadioButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const RadioButton = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  border: 2px solid #00856f;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;

  &::after {
    content: "";
    height: 1.2rem;
    width: 1.2rem;
    border-radius: 50%;
    background-color: #00856f;
    opacity: 0;
  }
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const RadioInput = styled.input`
  display: none;
  &:checked ~ ${RadioLabel} ${RadioButton}::after {
    opacity: 1;
  }
`;
