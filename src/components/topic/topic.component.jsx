import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setCurrentTopic } from "../../redux/topics/topics.actions";

import "./topic.styles.scss";

const Topic = ({ topic, setCurrentTopic }) => (
  <Link
    className="category"
    to={`/${topic.linkUrl}`}
    onClick={() => setCurrentTopic(topic)}
  >
    <div className="category__icon">
      <img src={topic.icon} alt={topic.name} />
    </div>
    <div className="category__name">{topic.name}</div>
  </Link>
);

const mapDispatchToProps = dispatch => ({
  setCurrentTopic: topic => dispatch(setCurrentTopic(topic))
});

export default connect(
  null,
  mapDispatchToProps
)(Topic);
