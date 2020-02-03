import styled from "styled-components";

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4rem auto;
  border-bottom: 1px solid #ccc;
  padding-bottom: 4rem;
`;

export const PostAuthor = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
`;

export const AuthorImage = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #00413e;
  color: #fff;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const AuthorName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const PostDate = styled.div`
  color: #777;
  font-weight: 400;
`;

export const PostTitle = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: "Domine", serif;

  & h2 {
    font-weight: 600;
    font-size: 1.6rem;
  }
`;

export const PostBody = styled.div`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2;
  font-family: "Domaine Display Regular", serif;
`;

export const ReplyPost = styled.div`
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
  color: #00856f;
  cursor: pointer;
`;

export const PostLogin = styled.div`
  margin: 2rem 0;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  & a {
    color: #00856f;
  }
`;
