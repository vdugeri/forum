import React from "react";
import { TopicSelectWrapper } from "components/topics/topic-select/topic-select.styles";
import { SimpleCheckbox } from "components/shared/form";

const TopicSelect = ({ topic, handleChange }) => {
  return (
    <TopicSelectWrapper>
      <SimpleCheckbox
        label={topic.name}
        name="topicId"
        handleChange={handleChange}
        value={topic.id}
        type="radio"
      />
    </TopicSelectWrapper>
  );
};

export default TopicSelect;
