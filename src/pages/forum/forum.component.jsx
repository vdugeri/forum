import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TopicLink from "components/topics/topic-link/topic-link.component";
import SearchField from "components/shared/search-field.component";
import WritePost from "components/posts/write-post/write-post.component";
import BackLink from "components/shared/backlink.component";
import PostPreview from "components/posts/post-preview/post-preview.component";
import WithSpinner from "components/shared/with-spinner.component";

import titleCase from "utils/title-case";
import removeDashes from "utils/remove-dashes";

import {
  selectTopicList,
  selectCurrentTopic,
} from "redux/topics/topics.selectors";
import { fetchPostsStart } from "redux/posts/posts.actions";
import {
  selectPostList,
  selectIsPostLoading,
} from "redux/posts/post.selectors";

import "pages/forum/forum.styles.scss";

const PostPreviewWithSpinner = WithSpinner(PostPreview);

const Forum = ({
  topics,
  currentTopic,
  onFetchPostsStart,
  posts,
  isLoading,
}) => {
  useEffect(() => {
    onFetchPostsStart(currentTopic._id);
  }, [currentTopic, onFetchPostsStart]);
  return (
    <div className="forum">
      <BackLink linkText="All Topics" linkUrl="/" />
      <div className="forum__header">
        <h2>{titleCase(removeDashes(currentTopic.name))}</h2>
        <SearchField placeholder="what are you looking for?" />
      </div>
      <div className="forum__links">
        {topics.map((topic) => (
          <TopicLink topic={topic} key={topic._id} />
        ))}
      </div>
      <WritePost />
      <h2 className="forum__posts-heading">Recent Posts</h2>
      {posts.map((post) => (
        <PostPreviewWithSpinner
          isLoading={isLoading}
          post={post}
          key={post._id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  topics: selectTopicList,
  currentTopic: selectCurrentTopic,
  posts: selectPostList,
  isLoading: selectIsPostLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchPostsStart: (topicId) => dispatch(fetchPostsStart(topicId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
