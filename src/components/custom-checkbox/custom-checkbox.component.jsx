import React from "react";
import { CheckBoxContainer } from "components/custom-checkbox/custom-checkbox.styles";

const CustomCheckbox = ({ handleChange, label, name }) => (
  <CheckBoxContainer>
    {label}
    <input type="checkbox" onChange={handleChange} name={name} />
    <span className="checkmark"></span>
  </CheckBoxContainer>
);

export default CustomCheckbox;
