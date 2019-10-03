import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { toggleTopicsDropdown } from "../../redux/topics/topics.actions";

import "./topic-strip.styles.scss";

const TopicStrip = ({ topic, history, toggleTopicsDropdown }) => {
  const goToTopic = () => {
    toggleTopicsDropdown();
    history.push(`/${topic.linkUrl}`);
  };
  return (
    <div onClick={goToTopic} className="topic-strip">
      <span className="topic-strip__name">{topic.name}</span>
      <span className="topic-strip__icon">
        <img src={topic.icon} alt={topic.name} />
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleTopicsDropdown: () => dispatch(toggleTopicsDropdown())
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(TopicStrip));
