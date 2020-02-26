import React from "react";
import { CheckButtonContainer } from "components/custom-checkbox/custom-checkbox.styles";

const CustomCheckbox = ({ handleChange, label, name }) => (
  <CheckButtonContainer>
    {label}
    <input type="checkbox" onChange={handleChange} name={name} />
    <span className="checkmark"></span>
  </CheckButtonContainer>
);

export default CustomCheckbox;
