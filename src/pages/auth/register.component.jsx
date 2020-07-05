import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AuthMenu from "components/auth/auth-menu/auth-menu.component";
import { userSignUpStart } from "redux/user/user.actions";
import { Button } from "components/shared/form/button";
import { Input } from "components/shared/form/form";
import { String } from "components/shared/form/string";
import { Grid, Contain, Box } from "components/shared/form/layout";
import { validateRegistration } from "pages/auth/validate";

const Register = () => {
  const [userCreds, setUserCreds] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setUserCreds({ ...userCreds, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { isValid, errors } = validateRegistration(userCreds);

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    dispatch(userSignUpStart(userCreds));
  }

  const { firstName, lastName, username, password } = userCreds;

  return (
    <Contain wide width="30%">
      <AuthMenu />
      <Box align="center">
        <String size="2.2rem">Get Started!</String>
      </Box>

      <Grid default="1fr" padVertical="20px">
        <Input
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          required
          autoFocus
          error={formErrors.firstName}
        />
        <Input
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
          required
          error={formErrors.lastName}
        />
        <Input
          label="Username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          required
          error={formErrors.username}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          error={formErrors.password}
        />
        <Button onClick={handleSubmit}>Register</Button>
      </Grid>
    </Contain>
  );
};

export default Register;
