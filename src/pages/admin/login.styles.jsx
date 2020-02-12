import styled from "styled-components";
import CustomButton from "components/custom-button/custom-button.component";
import CustomInput from "components/custom-input/custom-input.component";

export const LoginOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #010a43;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  color: #010a43;
`;

export const Catchline = styled.span`
  color: #fff;
  margin: 0 auto;
  font-size: 5rem;
  font-family: "Domaine Display Regular", serif;
`;

export const StyledButton = styled(CustomButton)`
  background-color: #010a43;
  padding: 2rem 2rem;
  border-radius: 0;
`;

export const StyledInput = styled(CustomInput)`
  &:focus,
  &:active {
    border-color: #010a43;
  }
`;

export const LoginForm = styled.form`
  width: 80%;
`;
