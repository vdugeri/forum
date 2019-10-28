import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setCurrentTopic } from "../../redux/topics/topics.actions";

import "./topic-link.styles.scss";

const TopicLink = ({ topic, setCurrentTopic }) => (
  <Link
    to={topic.linkUrl}
    className="topic-link"
    onClick={() => setCurrentTopic(topic)}
  >
    {topic.name}
    <span className="topic-link__icon">&#8250;</span>
  </Link>
);

const mapDispatchToProps = dispatch => ({
  setCurrentTopic: topic => dispatch(setCurrentTopic(topic))
});

export default connect(
  null,
  mapDispatchToProps
)(TopicLink);
