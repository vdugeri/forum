import React from "react";
import { useDispatch } from "react-redux";
import {
  StripWrapper,
  StripLink,
  StripName,
  StripIconContainer
} from "components/topic-strip/topic-strip.styles";

import {
  toggleTopicsDropdown,
  setCurrentTopic
} from "redux/topics/topics.actions";

const TopicStrip = ({ topic }) => {
  const dispatch = useDispatch();
  return (
    <StripWrapper>
      <StripLink
        onClick={() => {
          dispatch(toggleTopicsDropdown());
          dispatch(setCurrentTopic(topic));
        }}
        to={`${topic.linkUrl}`}
      >
        <StripName>{topic.name}</StripName>
        <StripIconContainer>
          <img src={topic.icon} alt={topic.name} />
        </StripIconContainer>
      </StripLink>
    </StripWrapper>
  );
};

export default TopicStrip;
