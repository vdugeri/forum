import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4rem;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;

  & img {
    height: 5rem;
    width: auto;
  }

  & h2 {
    font-size: 2.2rem;
    font-weight: 400;
    color: #263633;
    font-family: "Domaine Display Semibold", serif;
  }
`;

export const PostsWrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-column-gap: 6rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 2rem;
`;

export const PopularPosts = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  border-top: 1px solid #ccc;
`;
