import React from "react";

import logo from "../../assets/logo.png";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <img src={logo} alt="folktales logo" />
    </div>
    <div className="header__nav">
      <div className="header__nav--item">Community</div>
      <div className="header__nav--item">Sign In</div>
      <div className="header__nav--item">Create Account</div>
    </div>
  </div>
);

export default Header;
