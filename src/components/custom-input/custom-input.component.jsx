import React from "react";

import "./custom-input.styles.scss";

const CustomInput = ({ label, handleChange, type, ...otherProps }) => (
  <div className="custom-input">
    <input
      type={type}
      onChange={handleChange}
      {...otherProps}
      className="custom-input__field"
    />
    {label && !otherProps.value ? <label>{label}</label> : ""}
  </div>
);

export default CustomInput;
