import styled from "styled-components";

export const Container = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
  padding: 6rem 2rem;
  border: 1px solid #dee3e3;
  border-radius: 5px;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  width: 4rem;
  margin-right: 2rem;
  & img {
    width: 100%;
  }
`;

export const Label = styled.span`
  font-size: 2rem;
  font-family: "Proxima Nova Semibold", sans-serif;
`;
