import React from "react";
import {
  TextareaContainer,
  TextareaField,
  TextareaLabel
} from "components/custom-textarea/custom-textarea.styles";

const CustomTextarea = ({
  name,
  value,
  label,
  handleChange,
  ...otherProps
}) => (
  <TextareaContainer className="custom-textarea">
    <TextareaField
      name={name}
      value={value}
      onChange={handleChange}
      {...otherProps}
    ></TextareaField>
    {label && !value ? <TextareaLabel>{label}</TextareaLabel> : null}
  </TextareaContainer>
);

export default CustomTextarea;
