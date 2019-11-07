import React from "react";

import "components/custom-radio-button/custom-radio-button.styles.scss";

const CustomRadioButton = ({ handleChange, label, name, ...otherProps }) => (
  <div className="radio-group">
    <input
      type="radio"
      name={name}
      className="radio-group__radio-input"
      id={label}
      onChange={handleChange}
      {...otherProps}
    />
    <label htmlFor={label} className="radio-group__radio-label">
      <div className="radio-group__radio-button"></div>
      {label}
    </label>
  </div>
);

export default CustomRadioButton;
