import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #b8c0c0;
  width: 90%;
  min-height: 10rem;
  margin: 2rem auto;
  border-radius: 0.5rem;
  padding: 2rem;
  cursor: pointer;
`;
export const PreviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
`;
export const PreviewImage = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #b8c0c0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
  font-family: "Domaine Display Regular", serif;
  font-weight: 700;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const PreviewDesignation = styled.div`
  margin-right: auto;
  margin-left: 2rem;
  font-size: 1.6rem;
  font-family: "Proxima Nova Light", sans-serif;
`;
export const PreviewDate = styled.div`
  font-size: 1.6rem;
  font-family: "Proxima Nova Light", sans-serif;
`;

export const SenderName = styled.div`
  font-weight: 600;
  margin-top: 1rem;
  font-size: 1.4rem;
  margin-left: 7rem;
  margin-bottom: 1rem;
  font-family: "Domaine Display Regular", serif;
`;
export const PreviewText = styled.p`
  font-size: 1.6rem;
  line-height: 2;
  margin-left: 7rem;
  font-family: "Domaine Display Regular", serif;
`;
