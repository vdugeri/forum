import styled from "styled-components";

export const MessageContainer = styled.div`
  min-width: 98%;
  border: 2px solid #e7e7e7;
  margin: 0.5rem 0.5rem;
  min-height: 35rem;
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MessageBody = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-left: 5rem;
  line-height: 2;
  font-size: 1.8rem;
  font-family: "Domaine", serif;
  font-weight: 300;
`;

export const MessageAuthorImage = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #b8c0c0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
  font-family: "Domine", serif;
  font-weight: 700;
  border-radius: 50%;

  & img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
`;
