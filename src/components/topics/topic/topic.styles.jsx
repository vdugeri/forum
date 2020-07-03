import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopicLink = styled(Link)`
  display: flex;
  flex-direction: column;
  min-height: 15rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  color: inherit;
  text-decoration: none;
`;

export const TopicIcon = styled.div`
  padding: 1rem;
  & img {
    width: 5rem;
    height: auto;
  }
`;

export const TopicName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
`;
