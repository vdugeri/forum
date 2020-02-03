import styled from "styled-components";

export const PostPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 60%;
  margin: 4rem auto;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  & h2 {
    font-size: 2rem;
    color: #333;
    font-weight: 600;
    font-family: "Domine", serif;
  }
`;

export const CreateWrapper = styled.div`
  margin-bottom: 6rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid #ccc;
`;

export const CreateReplyWrapper = styled.div`
  margin-top: 4rem;
`;
