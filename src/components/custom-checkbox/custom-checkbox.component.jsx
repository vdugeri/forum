import React from "react";

import "./custom-checkbox.styles.scss";

const CustomCheckbox = ({ handleChange, label, name }) => (
  <label className="container">
    {label}
    <input type="checkbox" onChange={handleChange} name={name} />
    <span className="checkmark"></span>
  </label>
);

export default CustomCheckbox;
