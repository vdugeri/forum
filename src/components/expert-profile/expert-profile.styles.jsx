import styled from "styled-components";

export const ProfileOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes unfoldIn {
    0% {
      transform: scaleY(0.005) scaleX(0);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(1) scaleX(1);
    }
  }
`;
export const ProfileContainer = styled.div`
  width: 30%;
  margin-left: auto;
  background-color: #fff;
  min-height: 100%;
  padding: 3rem 0;
`;

export const CloseIcon = styled.div`
  width: 100%;
  height: 2rem;
  margin-left: 3rem;
  cursor: pointer;
  font-size: 1.8rem;

  &:hover {
    font-size: 2rem;
  }
`;

export const ExpertPhoto = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ExpertName = styled.span`
  font-size: 1.8rem;
  font-family: "Proxima Nova Regular", sans-serif;
`;
export const Designation = styled.span`
  color: #697774;
  font-size: 1.6rem;
  font-family: "Proxima Nova Regular", sans-serif;
`;
export const Qualifications = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;
export const String = styled.span`
  font-size: 1.6rem;
`;
export const Experience = styled.div`
  margin-left: 3rem;
`;
export const Heading = styled.h2`
  padding: 1rem 0;
  font-size: 2rem;
`;
export const Education = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
`;
export const ExperienceYears = styled.div`
  display: flex;
  margin-left: 3rem;
  flex-direction: column;
`;
export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 4rem 0;
  border-top: 1px solid #ccc;
  width: 100%;
  margin-left: 0;
  display: flex;

  & button {
    margin-left: 2rem;
  }
`;

export const About = styled.div`
  width: 90%;
  margin-left: 3rem;
`;

export const Paragraph = styled.p`
  max-height: 24rem;
  overflow-y: scroll;
  font-size: 1.8rem;
`;
