import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TopicLink from "../../components/topic-link/topic-link.component";

import { selectTopicList } from "../../redux/topics/topics.selectors";

import "./forum.styles.scss";

const Forum = ({ topics }) => (
  <div className="forum">
    {topics.map(topic => (
      <TopicLink topic={topic} key={topic.id} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  topics: selectTopicList
});

export default connect(mapStateToProps)(Forum);
