import styled from "styled-components";
import { Theme } from "components/shared/theme";

export const AvatarWrapper = styled.div`
  cursor: pointer;
  & img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`;

export const UserInitials = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: ${Theme.PrimaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  font-weight: 600;
  font-size: 2rem;
  font-family: "Domine", serif;
`;
