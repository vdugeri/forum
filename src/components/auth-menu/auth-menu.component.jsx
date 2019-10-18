import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import "./auth-menu.styles.scss";

const AuthMenu = ({ match }) => {
  return (
    <div className="auth-menu">
      <div className="auth-menu__logo">
        <img src={logo} alt="tales" />
      </div>
      <div className="auth-menu__links">
        <Link
          to="/login"
          className={`${match.path === "/login" ? "current-link" : ""}`}
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className={`${match.path === "/register" ? "current-link" : ""}`}
        >
          Create account
        </Link>
      </div>
    </div>
  );
};

export default withRouter(AuthMenu);
