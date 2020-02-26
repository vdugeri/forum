import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  height: 12rem;
  background-color: #fff;
  padding: 1rem;
`;
export const Number = styled.span`
  font-size: 3.5rem;
  font-weight: 600;
  color: #00856f;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  background-color: #18be60;
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;

export const Title = styled.span`
  font-size: 1.6rem;
  color: #ccc;
`;
export const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 2rem;
`;
