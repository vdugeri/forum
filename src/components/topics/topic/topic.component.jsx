import React from "react";
import { connect } from "react-redux";

import { TopicLink, TopicIcon, TopicName } from "components/topics/topic/topic.styles";

import { setCurrentTopic } from "redux/topics/topics.actions";

const Topic = ({ topic, setCurrentTopic }) => (
  <TopicLink to={`${topic.linkUrl}`} onClick={() => setCurrentTopic(topic)}>
    <TopicIcon>
      <img src={topic.icon} alt={topic.name} />
    </TopicIcon>
    <TopicName>{topic.name}</TopicName>
  </TopicLink>
);

const mapDispatchToProps = dispatch => ({
  setCurrentTopic: topic => dispatch(setCurrentTopic(topic))
});

export default connect(null, mapDispatchToProps)(Topic);
