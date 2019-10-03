import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import TopicStrip from "../topic-strip/topic-strip.component";
import CustomButton from "../custom-button/custom-button.component";

import { selectTopicList } from "../../redux/topics/topics.selectors";
import { toggleTopicsDropdown } from "../../redux/topics/topics.actions";

import "./topic-dropdown.styles.scss";

const TopicsDropdown = ({ topics, history, toggleTopicsDropdown }) => {
  const goToPostPage = () => {
    toggleTopicsDropdown();
    history.push("/posts/create");
  };

  return (
    <div className="topic-dropdown" onMouseLeave={toggleTopicsDropdown}>
      <h2>Community</h2>
      {topics.map(topic => (
        <TopicStrip topic={topic} key={topic.id} />
      ))}
      <div className="topic-dropdown__cta">
        <span>Have a question?</span>
        <CustomButton ghost onClick={goToPostPage}>
          Write a post
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  topics: selectTopicList
});

const mapDispatchToProps = dispatch => ({
  toggleTopicsDropdown: () => dispatch(toggleTopicsDropdown())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TopicsDropdown));
