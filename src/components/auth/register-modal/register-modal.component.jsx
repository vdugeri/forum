import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CustomInput from "components/shared/custom-input/custom-input.component";

import {
  ModalOverlay,
  ModalContent,
  Heading,
  Paragraph,
  CloseButton,
  RegisterForm,
  FormFirstRow,
  FormMiddleRow,
  StyledButton,
  TermsWrapper,
} from "components/auth/register-modal/register-modal.styles";

import { toggleModalStatus } from "redux/user/user.actions";

import { userSignUpStart } from "redux/user/user.actions";

const RegisterModal = ({ toggleModalStatus, onSignupStart, match }) => {
  const [userCreds, setUserCreds] = useState({
    emailAddress: "",
    firstName: "",
    username: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCreds({ ...userCreds, [name]: value });
  };

  const { username, password, emailAddress, firstName, lastName } = userCreds;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignupStart(userCreds);
    toggleModalStatus();
  };
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={toggleModalStatus}>&#10005;</CloseButton>
        <Heading>Join the conversation</Heading>
        <Paragraph>
          Ask a question and get an answer from our community and seasoned
          experts. Get advice on health, relationships, parenting issues and
          more. Discover. Learn. Share.
        </Paragraph>
        <RegisterForm onSubmit={handleSubmit}>
          <FormFirstRow>
            <CustomInput
              type="email"
              name="emailAddress"
              value={emailAddress}
              handleChange={handleChange}
              label="Email address"
              required
            />
          </FormFirstRow>
          <FormMiddleRow className="register-modal__form--middle-row">
            <CustomInput
              type="text"
              value={firstName}
              name="firstName"
              handleChange={handleChange}
              label="First name"
              required
            />
            <CustomInput
              type="text"
              value={lastName}
              name="lastName"
              handleChange={handleChange}
              label="Last name"
              required
            />
            <CustomInput
              type="text"
              value={username}
              name="username"
              handleChange={handleChange}
              label="Username"
              required
            />
            <CustomInput
              type="password"
              value={password}
              name="password"
              handleChange={handleChange}
              label="Password"
              required
            />
          </FormMiddleRow>

          <StyledButton type="submit" primary>
            Register
          </StyledButton>
          <TermsWrapper>
            By registering a new account I agree to the
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
          </TermsWrapper>
          <TermsWrapper>
            Already have an account? <Link to="/login">Sign in</Link>
          </TermsWrapper>
        </RegisterForm>
      </ModalContent>
    </ModalOverlay>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSignupStart: (userCreds) => dispatch(userSignUpStart(userCreds)),
  toggleModalStatus: () => dispatch(toggleModalStatus()),
});

export default connect(null, mapDispatchToProps)(RegisterModal);
