import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TopicLink from "../../components/topic-link/topic-link.component";
import SearchField from "../../components/search-field/search-field.component";
import WritePost from "../../components/write-post/write-post.component";
import BackLink from "../../components/back-link/back-link.component";

import titleCase from "../../utils/title-case";
import removeDashes from "../../utils/remove-dashes";

import {
  selectTopicList,
  selectCurrentTopic
} from "../../redux/topics/topics.selectors";

import "./forum.styles.scss";

const Forum = ({ topics, match }) => (
  <div className="forum">
    <BackLink linkText="All Topics" linkUrl="/" />
    <div className="forum__header">
      <h2>{titleCase(removeDashes(match.params.topic))}</h2>
      <SearchField placeholder="what are you looking for?" />
    </div>
    <div className="forum__links">
      {topics.map(topic => (
        <TopicLink topic={topic} key={topic.id} />
      ))}
    </div>
    <WritePost />
    <h2 className="forum__posts-heading">Recent Posts</h2>
  </div>
);

const mapStateToProps = createStructuredSelector({
  topics: selectTopicList,
  currentTopic: selectCurrentTopic
});

export default connect(mapStateToProps)(Forum);
