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

import { Contain, Box, String, Grid } from "components/shared";

const PostPreviewWithSpinner = WithSpinner(PostPreview);

const Forum = ({
  topics,
  currentTopic,
  onFetchPostsStart,
  posts,
  isLoading,
}) => {
  useEffect(() => {
    onFetchPostsStart(currentTopic.id);
  }, [currentTopic, onFetchPostsStart]);
  return (
    <Contain wide width="55%">
      <BackLink linkText="All Topics" linkUrl="/" />
      <Grid default="1fr 1fr">
        <String bold size="2.2rem">
          {titleCase(removeDashes(currentTopic.name))}
        </String>
        <SearchField placeholder="what are you looking for?" />
      </Grid>
      <Box pad="30px 0">
        {topics.map((topic) => (
          <TopicLink topic={topic} key={topic.id} />
        ))}
      </Box>
      <WritePost />
      <Box bottomBordered pad="50px 0 0 0">
        <String size="2rem" font={`"Domaine Display Semibold", serif`}>
          Recent Posts
        </String>
      </Box>

      {posts?.data.map((post) => (
        <PostPreviewWithSpinner
          isLoading={isLoading}
          post={post}
          key={post.id}
        />
      ))}
    </Contain>
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
