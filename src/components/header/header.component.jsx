import React from "react";

import logo from "../../assets/logo.png";

import CustomButton from "../custom-button/custom-button.component";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <img src={logo} alt="folktales logo" />
    </div>
    <div className="header__nav">
      <div className="header__nav--item">Community</div>
      <div className="header__nav--item">
        <CustomButton ghost="true">Sign in</CustomButton>
      </div>
      <div className="header__nav--item">
        <CustomButton primary="true">Create account</CustomButton>
      </div>
    </div>
  </div>
);

export default Header;
