import React from "react";
import { connect } from "react-redux";
import {
  StyledLink,
  TopicLinkIcon
} from "components/topic-link/topic-link.styles";

import { setCurrentTopic } from "redux/topics/topics.actions";

const TopicLink = ({ topic, setCurrentTopic }) => (
  <StyledLink to={topic.linkUrl} onClick={() => setCurrentTopic(topic)}>
    {topic.name}
    <TopicLinkIcon>&#8250;</TopicLinkIcon>
  </StyledLink>
);

const mapDispatchToProps = dispatch => ({
  setCurrentTopic: topic => dispatch(setCurrentTopic(topic))
});

export default connect(null, mapDispatchToProps)(TopicLink);
