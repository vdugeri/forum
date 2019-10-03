import React from "react";

import "./custom-checkbox.styles.scss";

const CustomCheckbox = ({ handleChange, label, otherProps }) => (
  <label className="container">
    {label}
    <input type="checkbox" onChange={handleChange} />
    <span className="checkmark"></span>
  </label>
);

export default CustomCheckbox;
