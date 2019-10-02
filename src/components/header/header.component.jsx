import React from "react";
import { withRouter, Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import CustomButton from "../custom-button/custom-button.component";

import "./header.styles.scss";

const Header = ({ history }) => (
  <div className="header">
    <div className="header__logo">
      <Link to="/">
        <img src={logo} alt="folktales logo" />
      </Link>
    </div>
    <div className="header__nav">
      <div className="header__nav--item">Community</div>
      <div className="header__nav--item">
        <CustomButton onClick={() => history.push("/login")} ghost>
          Sign in
        </CustomButton>
      </div>
      <div className="header__nav--item">
        <CustomButton primary onClick={() => history.push("/register")}>
          Create account
        </CustomButton>
      </div>
    </div>
  </div>
);

export default withRouter(Header);
