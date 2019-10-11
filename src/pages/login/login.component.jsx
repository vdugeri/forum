import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import AuthMenu from "../../components/auth-menu/auth-menu.component";

import { userSignInStart } from "../../redux/user/user.actions";

import "./login.styles.scss";

const Login = ({ onSignInStart }) => {
  const [userCreds, setUserCreds] = useState({
    emailAddress: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCreds({ ...userCreds, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSignInStart(userCreds);
  };

  const { emailAddress, password } = userCreds;

  return (
    <form className="login" onSubmit={handleSubmit}>
      <AuthMenu />
      <h2>Welcome back!</h2>
      <CustomInput
        label="Email address"
        type="email"
        name="emailAddress"
        value={emailAddress}
        handleChange={handleChange}
        autoFocus
      />
      <CustomInput
        label="Password"
        type="password"
        name="password"
        value={password}
        handleChange={handleChange}
      />
      <div className="login__button-container">
        <Link to="/reset-password">Forgot password?</Link>
        <CustomButton type="submit" primary>
          Sign In
        </CustomButton>
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  onSignInStart: userCreds => dispatch(userSignInStart(userCreds))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
