import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Post from "../../components/post/post.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CreateReply from "../../components/create-reply/create-reply.component";
import Reply from "../../components/reply/reply.component";

import {
  selectCurrentPost,
  selectIsPostLoading
} from "../../redux/posts/post.selectors";

import "./post-page.styles.scss";

const PostWithSpinner = WithSpinner(Post);

const PostPage = ({ currentPost, isPostLoading }) => (
  <div className="post-page">
    <PostWithSpinner isLoading={isPostLoading} post={currentPost} />
    {currentPost.replies.map(reply => (
      <Reply reply={reply} key={reply.id} />
    ))}
    <CreateReply />
  </div>
);
const mapStateToProps = createStructuredSelector({
  currentPost: selectCurrentPost,
  isPostLoading: selectIsPostLoading
});

export default connect(mapStateToProps)(PostPage);
