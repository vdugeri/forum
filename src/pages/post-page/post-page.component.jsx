import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Post from "../../components/post/post.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CreateReply from "../../components/create-reply/create-reply.component";
import Reply from "../../components/reply/reply.component";
import SearchField from "../../components/search-field/search-field.component";
import BackLink from "../../components/back-link/back-link.component";
// import ExplorePractitioners from "../../components/explore-practitioners/explore-practitioners.component";
import WritePost from "../../components/write-post/write-post.component";

import {
  selectCurrentPost,
  selectIsPostLoading,
  selectIsRepliesLoading
} from "../../redux/posts/post.selectors";
import { startFetchReply } from "../../redux/posts/posts.actions";

import "./post-page.styles.scss";

const PostWithSpinner = WithSpinner(Post);

const PostPage = ({ currentPost, isPostLoading, showReply }) => {
  return (
    <div className="post-page">
      <BackLink linkText="All Topics" linkUrl="/" />
      <div className="post-page__header">
        <h2>Join The Conversation</h2>
        <SearchField placeholder="what are you looking for?" />
      </div>
      <PostWithSpinner isLoading={isPostLoading} />
      <div className="post-page__create-reply">
        {showReply ? <CreateReply /> : null}
      </div>
      {currentPost.replies.map(reply => (
        <Reply reply={reply} key={reply._id} />
      ))}
      <div className="post-page__write-post">
        <WritePost />
      </div>
      {/* <ExplorePractitioners topExperts={users.topExperts} /> */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentPost: selectCurrentPost,
  isPostLoading: selectIsPostLoading,
  isRepliesLoading: selectIsRepliesLoading
});

const mapDispatchToProps = dispatch => ({
  onFetchReplies: postId => dispatch(startFetchReply(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);
