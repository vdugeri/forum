import React, { useState } from "react";
import { connect } from "react-redux";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { userSignUpStart } from "../../redux/user/user.actions";

import "./register.styles.scss";

const Register = ({ onSignUpStart }) => {
  const [userCreds, setUserCreds] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCreds({ ...userCreds, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSignUpStart(userCreds);
  };

  const { firstName, lastName, emailAddress, password } = userCreds;

  return (
    <div className="register">
      <h2>Hi there! Let's get to know each other.</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          handleChange={handleChange}
        />
        <CustomInput
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          handleChange={handleChange}
        />
        <CustomInput
          label="Email Address"
          type="email"
          name="emailAddress"
          value={emailAddress}
          handleChange={handleChange}
        />
        <CustomInput
          label="Password"
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
        />
        <CustomButton type="submit" primary large>
          Register
        </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onSignUpStart: userCreds => dispatch(userSignUpStart(userCreds))
});

export default connect(
  null,
  mapDispatchToProps
)(Register);
