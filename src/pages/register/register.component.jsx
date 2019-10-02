import React from "react";

import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./register.styles.scss";

const Register = () => (
  <div className="register">
    <h2>Hi there! Let's get to know each other.</h2>
    <CustomInput label="First Name" />
  </div>
);
