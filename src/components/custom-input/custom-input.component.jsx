import React from "react";
import {
  InputWrapper,
  InputLabel,
  InputField
} from "components/custom-input/custom-input.styles";

const CustomInput = ({ label, handleChange, type, ...otherProps }) => {
  const hasValue = otherProps.value && otherProps.value.trim().length > 0;
  return (
    <InputWrapper>
      <InputField type={type} onChange={handleChange} {...otherProps} />
      {label && <InputLabel hasValue={!!hasValue}>{label}</InputLabel>}
    </InputWrapper>
  );
};

export default CustomInput;
