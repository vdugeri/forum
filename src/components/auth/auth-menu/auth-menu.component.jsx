import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuLink,
  LogoImage,
} from "components/auth/auth-menu/auth-menu.styles";
import { Box, Grid } from "components/shared/layout";
import { String } from "components/shared/string";

import logo from "assets/logo.png";

const AuthMenu = ({ match }) => {
  return (
    <Box wide width="100%" pad="30px">
      <Box flex centered>
        <LogoImage src={logo} alt="vanillatots" />
      </Box>
      <Grid default="1fr 1fr">
        <MenuLink to="/login" current={match.path === "/login"}>
          <String size="1.8rem">Sign In</String>
        </MenuLink>
        <MenuLink to="/register" current={match.path === "/register"}>
          <String size="1.8rem">Create Account</String>
        </MenuLink>
      </Grid>
    </Box>
  );
};

export default withRouter(AuthMenu);
