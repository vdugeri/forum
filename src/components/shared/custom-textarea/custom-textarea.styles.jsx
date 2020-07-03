import styled from "styled-components";

export const TextareaContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const TextareaField = styled.textarea`
  padding: 1.3rem 2rem;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 2px;
  width: 100%;
  color: #777;
  font-size: 1.6rem;

  &:focus {
    border: 2px solid #00856f;
  }

  &:focus ~ label {
    position: absolute;
    top: 10%;
    font-size: 1.2rem;
    font-weight: 400;
    color: #00856f;
  }

  &:active ~ label {
    display: none;
  }
`;

export const TextareaLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 5%;
  font-size: 1.6rem;
  color: #777;
`;
