import styled from "styled-components";

export const ComposerContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 0.5fr;
  background-color: #fff;
  width: 100%;
  border: 1px solid #e7e7e7;
`;

export const ComposerInput = styled.div`
  border-right: 1px solid #e7e7e7;
  & textarea {
    padding: 1.7rem 2rem;
    border: 0;
  }
`;

export const SendButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
