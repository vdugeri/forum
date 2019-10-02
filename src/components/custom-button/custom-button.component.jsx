import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...props }) => (
  <button
    {...props}
    className={`btn ${props.ghost ? "btn--ghost" : ""} ${
      props.primary ? "btn--primary" : ""
    }`}
  >
    {children}
  </button>
);

export default CustomButton;
