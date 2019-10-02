import React from "react";
import PropTypes from "prop-types";

import "./custom-button.styles.scss";

const CustomButton = ({ children, primary, ghost, large, ...otherProps }) => (
  <button
    {...otherProps}
    className={`btn ${ghost ? "btn--ghost" : ""} ${
      primary ? "btn--primary" : ""
    } ${large ? "large" : ""}`}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  ghost: PropTypes.bool,
  primary: PropTypes.bool,
  large: PropTypes.bool
};

export default CustomButton;
