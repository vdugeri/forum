import styled from "styled-components";
import ForwardLink from "components/forward-link/forward-link.component";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  border: 1px solid #eee;
  margin-bottom: 2rem;
  border-radius: 5px;
`;

export const DetailBox = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
`;

export const ExpertPhoto = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-left: 4rem;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const ExpertName = styled.span`
  font-size: 1.8rem;
  display: block;
`;

export const Designation = styled.span`
  font-size: 1.8rem;
  display: block;
  color: #75827e;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

export const Availability = styled.div`
  margin-left: 4rem;
  padding: 2rem 0;
  font-size: 1.8rem;
  color: #263633;
`;

export const ProfileLink = styled.div`
  border-top: 1px solid #eee;
  padding: 1rem 4rem 1rem 4rem;
`;

export const StyledLink = styled(ForwardLink)`
  padding: 0;
`;

export const String = styled.p``;
