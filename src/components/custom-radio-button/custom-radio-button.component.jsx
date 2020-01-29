import React from "react";
import {
  RadioButtonWrapper,
  RadioInput,
  RadioLabel,
  RadioButton
} from "components/custom-radio-button/custom-radio-button.styles";

const CustomRadioButton = ({ handleChange, label, name, ...otherProps }) => (
  <RadioButtonWrapper>
    <RadioInput
      type="radio"
      name={name}
      id={label}
      onChange={handleChange}
      {...otherProps}
    />
    <RadioLabel htmlFor={label}>
      <RadioButton />
      {label}
    </RadioLabel>
  </RadioButtonWrapper>
);

export default CustomRadioButton;
