import React from "react";
import { Button } from "components/custom-button/custom-button-styles";

const CustomButton = ({ children, ...otherProps }) => {
  return <Button {...otherProps}>{children}</Button>;
};

export default CustomButton;
