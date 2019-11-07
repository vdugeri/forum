import React from "react";

import "components/custom-textarea/custom-textarea.styles.scss";

const CustomTextarea = ({
  name,
  value,
  label,
  handleChange,
  ...otherProps
}) => (
  <div className="custom-textarea">
    <textarea
      name={name}
      value={value}
      onChange={handleChange}
      className="custom-textarea__field"
      {...otherProps}
    ></textarea>
    {label && !value ? <label>{label}</label> : null}
  </div>
);

export default CustomTextarea;
