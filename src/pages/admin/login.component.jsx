import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  LoginOverlay,
  LoginContainer,
  Catchline,
} from "pages/admin/login.styles";
import { Heading } from "pages/experts/expert-list.styles";
import { Button } from "components/shared/form/button";
import { useDispatch } from "react-redux";
import { adminLogin } from "redux/admin/admin.actions";
import { Input } from "components/shared/form/form";
import { Box, Grid } from "components/shared/form/layout";
import validateCreds from "pages/admin/validate";

const AdminLogin = ({ history }) => {
  const [userCreds, setUserCreds] = useState({
    emailAddress: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

  function handleLogin() {
    const { isValid, errors } = validateCreds(emailAddress, password);

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    dispatch(adminLogin(userCreds));
  }

  const { emailAddress, password } = userCreds;

  return (
    <LoginOverlay>
      <Catchline>Help Educate the Child</Catchline>
      <LoginContainer>
        <Box
          wide
          width="80%"
          pad="30px 0"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Heading size="18px">Sign In</Heading>
          <Grid default="1fr" padVertical="30px">
            <Input
              type="email"
              name="emailAddress"
              label="Email Address"
              value={emailAddress}
              required
              error={formErrors.emailAddress}
              onChange={(e) => {
                setUserCreds({ ...userCreds, emailAddress: e.target.value });
                setFormErrors({ ...formErrors, emailAddress: "" });
              }}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              value={password}
              required
              error={formErrors.password}
              onChange={(e) => {
                setUserCreds({ ...userCreds, password: e.target.value });
                setFormErrors({ ...formErrors, password: "" });
              }}
            />
            <Button onClick={handleLogin}>Login</Button>
          </Grid>
        </Box>
      </LoginContainer>
    </LoginOverlay>
  );
};

export default withRouter(AdminLogin);
