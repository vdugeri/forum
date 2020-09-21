import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AuthMenu from "components/auth/auth-menu/auth-menu.component";
import {
  Input,
  Button,
  String,
  Grid,
  Contain,
  Gap,
  Box,
} from "components/shared";
import { Theme } from "components/shared/theme";
import { userSignInStart } from "redux/user/user.actions";
import { validateLogin } from "pages/auth/validate";

const Login = ({ onSignInStart }) => {
  const [userCreds, setUserCreds] = useState({
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setUserCreds({ ...userCreds, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  }

  function handleLogin() {
    const { isValid, errors } = validateLogin(userCreds);
    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    onSignInStart(userCreds);
  }

  const { username, password } = userCreds;

  return (
    <Contain wide width="30%">
      <Gap height="30px" />
      <AuthMenu />
      <Box align="center">
        <String size="2.2rem">Welcome back!</String>
      </Box>

      <Grid default="1fr" padVertical="30px">
        <Input
          label="Username"
          type="text"
          name="username"
          value={username}
          required
          onChange={handleChange}
          autoFocus
          error={formErrors.username}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
          error={formErrors.password}
        />
        <Grid default="1fr 1fr">
          <Box leftAlign>
            <Link to="/reset-password">
              <String color={Theme.PrimaryColor} size="1.6rem">
                Forgot password?
              </String>
            </Link>
          </Box>
          <Button onClick={handleLogin} disabled={!username || !password}>
            Sign In
          </Button>
        </Grid>
      </Grid>
    </Contain>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSignInStart: (userCreds) => dispatch(userSignInStart(userCreds)),
});

export default connect(null, mapDispatchToProps)(Login);
