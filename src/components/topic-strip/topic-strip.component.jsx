import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { toggleTopicsDropdown } from "../../redux/topics/topics.actions";

import "./topic-strip.styles.scss";

const TopicStrip = ({ topic, toggleTopicsDropdown }) => (
  <div className="topic-strip">
    <Link onClick={toggleTopicsDropdown} to={`/${topic.linkUrl}`}>
      <span className="topic-strip__name">{topic.name}</span>
      <span className="topic-strip__icon">
        <img src={topic.icon} alt={topic.name} />
      </span>
    </Link>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleTopicsDropdown: () => dispatch(toggleTopicsDropdown())
});

export default connect(
  null,
  mapDispatchToProps
)(TopicStrip);
