import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuLink,
  MenuLogo,
  MenuWrapper,
  LinksWrapper
} from "components/auth-menu/auth-menu.styles";

import logo from "assets/logo.png";

import "components/auth-menu/auth-menu.styles.scss";

const AuthMenu = ({ match }) => {
  return (
    <MenuWrapper>
      <MenuLogo>
        <img src={logo} alt="tales" />
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
