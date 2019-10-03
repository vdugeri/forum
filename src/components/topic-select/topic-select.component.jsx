import React from "react";

import CustomRadioButton from "../custom-radio-button/custom-radio-button.component";

import "./topic-select.styles.scss";

const TopicSelect = ({ topic, handleChange }) => {
  return (
    <div className="topic-select">
      <CustomRadioButton
        label={topic.name}
        name="topic"
        handleChange={handleChange}
        value={topic.id}
      />
    </div>
  );
};

export default TopicSelect;
