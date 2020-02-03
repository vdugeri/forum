import styled from "styled-components";

export const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  &:nth-child(3),
  &:nth-child(4) {
    border-top: 1px solid #ccc;
    padding-top: 3rem;
  }
`;

export const AuthorImage = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #00413e;
  color: #fff;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export const Metadata = styled.div`
  display: flex;
  margin-bottom: 1rem;

  & img {
    height: 2rem;
    width: auto;
    margin-right: 1rem;
  }
`;

export const MetadataRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OverviewDate = styled.div`
  font-size: 1.2rem;
`;

export const OverviewDetails = styled.div`
  display: flex;
  flex-direction: column;

  & a {
    color: inherit;
    text-decoration: none;
    margin-top: 1.5rem;
  }

  & h2 {
    font-family: "Domaine Display Semibold", serif;
    font-weight: 300;
  }

  & span {
    margin: 2rem 0;
    color: #00856f;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const OverviewTopic = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const OverviewAuthor = styled.div`
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  align-self: flex-start;
`;
