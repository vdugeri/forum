import styled from "styled-components";

export const ExpertPhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #777;
  margin-left: -2rem;

  & img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 3px solid #fff;
  }
`;
