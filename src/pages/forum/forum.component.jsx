import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TopicLink from "../../components/topic-link/topic-link.component";
import SearchField from "../../components/search-field/search-field.component";
import WritePost from "../../components/write-post/write-post.component";
import BackLink from "../../components/back-link/back-link.component";
import PostPreview from "../../components/post-preview/post-preview.component";

import titleCase from "../../utils/title-case";
import removeDashes from "../../utils/remove-dashes";

import {
  selectTopicList,
  selectCurrentTopic
} from "../../redux/topics/topics.selectors";
import { fetchPostsStart } from "../../redux/posts/posts.actions";
import { selectPostList } from "../../redux/posts/post.selectors";

import "./forum.styles.scss";

const Forum = ({ topics, currentTopic, onFetchPostsStart, posts }) => {
  useEffect(() => {
    onFetchPostsStart(currentTopic._id);
  });
  return (
    <div className="forum">
      <BackLink linkText="All Topics" linkUrl="/" />
      <div className="forum__header">
        <h2>{titleCase(removeDashes(currentTopic.name))}</h2>
        <SearchField placeholder="what are you looking for?" />
      </div>
      <div className="forum__links">
        {topics.map(topic => (
          <TopicLink topic={topic} key={topic._id} />
        ))}
      </div>
      <WritePost />
      <h2 className="forum__posts-heading">Recent Posts</h2>
      {posts.map(post => (
        <PostPreview post={post} key={post.id} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  topics: selectTopicList,
  currentTopic: selectCurrentTopic,
  posts: selectPostList
});

const mapDispatchToProps = dispatch => ({
  onFetchPostsStart: topicId => dispatch(fetchPostsStart(topicId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forum);
