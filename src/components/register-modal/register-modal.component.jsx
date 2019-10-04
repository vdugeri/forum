import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { toggleModalStatus } from "../../redux/user/user.actions";

import { userSignUpStart } from "../../redux/user/user.actions";

import "./register-modal.styles.scss";

const RegisterModal = ({ toggleModalStatus, onSignupStart }) => {
  const [userCreds, setUserCreds] = useState({
    emailAddress: "",
    firstName: "",
    username: "",
    lastName: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCreds({ ...userCreds, [name]: value });
  };

  const { username, password, emailAddress, firstName, lastName } = userCreds;

  const handleSubmit = e => {
    e.preventDefault();
    onSignupStart(userCreds);
  };
  return (
    <div className="register-modal">
      <div className="register-modal__content">
        <div className="register-modal__close" onClick={toggleModalStatus}>
          &#10005;
        </div>
        <h2>Join the conversation</h2>
        <p>
          Ask a question and get an answer from our community and seasoned
          experts. Get advice on health, relationships, parenting issues and
          more. Discover. Learn. Share.
        </p>
        <form className="register-modal__form" onSubmit={handleSubmit}>
          <div className="register-modal__form--first-row">
            <CustomInput
              type="email"
              name="emailAddress"
              value={emailAddress}
              handleChange={handleChange}
              label="Email address"
            />
          </div>
          <div className="register-modal__form--middle-row">
            <CustomInput
              type="text"
              value={firstName}
              name="firstName"
              handleChange={handleChange}
              label="First name"
            />
            <CustomInput
              type="text"
              value={lastName}
              name="lastName"
              handleChange={handleChange}
              label="Last name"
            />
            <CustomInput
              type="text"
              value={username}
              name="username"
              handleChange={handleChange}
              label="Username"
            />
            <CustomInput
              type="password"
              value={password}
              name="password"
              handleChange={handleChange}
              label="Password"
            />
          </div>

          <CustomButton type="submit" primary>
            Register
          </CustomButton>
          <span>
            By registering a new account I agree to the
            <Link to="/terms-conditions">terms and conditions</Link>
          </span>
          <span>
            Already have an account? <Link to="/login">Sign in</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onSignupStart: userCreds => dispatch(userSignUpStart(userCreds)),
  toggleModalStatus: () => dispatch(toggleModalStatus())
});

export default connect(
  null,
  mapDispatchToProps
)(RegisterModal);
