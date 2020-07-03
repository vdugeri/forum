import React from "react";
import { TopicSelectWrapper } from "components/topics/topic-select/topic-select.styles";
import CustomRadioButton from "components/shared/custom-radio-button/custom-radio-button.component";

const TopicSelect = ({ topic, handleChange }) => {
  return (
    <TopicSelectWrapper>
      <CustomRadioButton
        label={topic.name}
        name="topicId"
        handleChange={handleChange}
        value={topic._id}
      />
    </TopicSelectWrapper>
  );
};

export default TopicSelect;
