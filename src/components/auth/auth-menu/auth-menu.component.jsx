import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuLink,
  MenuLogo,
  MenuWrapper,
  LinksWrapper,
} from "components/auth/auth-menu/auth-menu.styles";

import logo from "assets/logo.png";

const AuthMenu = ({ match }) => {
  return (
    <MenuWrapper>
      <MenuLogo>
        <img src={logo} alt="vanillatots" />
      </MenuLogo>
      <LinksWrapper>
        <MenuLink to="/login" current={match.path === "/login"}>
          Sign In
        </MenuLink>
        <MenuLink to="/register" current={match.path === "/register"}>
          Create account
        </MenuLink>
      </LinksWrapper>
    </MenuWrapper>
  );
};

export default withRouter(AuthMenu);
