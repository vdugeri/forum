import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import TopicLink from "../../components/topic-link/topic-link.component";
import SearchField from "../../components/search-field/search-field.component";
import WritePost from "../../components/write-post/write-post.component";

import titleCase from "../../utils/title-case";
import removeDashes from "../../utils/remove-dashes";

import {
  selectTopicList,
  selectCurrentTopic
} from "../../redux/topics/topics.selectors";

import "./forum.styles.scss";

const Forum = ({ topics, match }) => {
  console.log(match);
  return (
    <div className="forum">
      <Link to="/" className="forum__back-link">
        <span className="icon">&#8249;</span>
        All Topics
      </Link>
      <div className="forum__header">
        <h2>{titleCase(removeDashes(match.params.topic))}</h2>
        <SearchField />
      </div>
      {topics.map(topic => (
        <TopicLink topic={topic} key={topic.id} />
      ))}

      <WritePost />
      <h2 className="forum__posts-heading">Recent Posts</h2>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  topics: selectTopicList,
  currentTopic: selectCurrentTopic
});

export default connect(mapStateToProps)(Forum);
