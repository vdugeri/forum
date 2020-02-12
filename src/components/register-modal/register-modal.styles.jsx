import styled from "styled-components";
import CustomButton from "components/custom-button/custom-button.component";

export const ModalOverlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  width: 55%;
  background-color: #fff;
  position: relative;
  animation: fadeIn 0.8s linear;
  min-height: 60rem;
  padding: 4rem;
`;

export const Heading = styled.h2`
  align-self: center;
  font-size: 2rem;
  font-weight: 600;
  font-family: "Domine", serif;
  line-height: 1.2;
  margin: 2rem 0;
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 90%;
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  font-size: 1.8rem;
  margin-top: -2rem;
  margin-right: -2rem;
  font-weight: 300;
  cursor: pointer;
`;

export const RegisterForm = styled.form`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
`;

export const FormFirstRow = styled.div`
  display: grid;
  grid-template-columns: auto;
`;
export const FormMiddleRow = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1rem;
  margin-bottom: 2rem;
`;

export const StyledButton = styled(CustomButton)`
  margin: 2rem 0;
  align-self: center;
`;

export const TermsWrapper = styled.span`
  display: flex;
  align-self: center;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  & a {
    display: block;
    margin-left: 0.5rem;
    color: #00856f;
  }
`;
