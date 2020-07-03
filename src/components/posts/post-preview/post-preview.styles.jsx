import styled from "styled-components";
import { ReactComponent as Icon } from "assets/icons/delete.svg";
import { Link } from "react-router-dom";

export const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  border-bottom: 1px solid #ccc;
  width: 100%;
  import { ReactComponent as DeleteIcon } from "assets/icons/delete.svg";
`;

export const DeleteIcon = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  align-self: flex-end;
  fill: #880000;
  cursor: pointer;
`;

export const PreviewAuthorWrapper = styled.div`
  display: flex;
`;

export const AuthorName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const AuthorDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-left: 1rem;
`;

export const PostDate = styled.div`
  font-size: 1.2rem;
`;

export const AuthorImageWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #08561f;
  border-radius: 50%;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Title = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const PreviewBody = styled.p`
  font-size: 1.5rem;
  padding: 0.5rem 0 2rem 0;
  line-height: 2;
  font-family: "Domine", serif;
`;

export const ReplyLink = styled(Link)`
  color: #26856f;
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
`;
