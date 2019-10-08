import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Post from "../../components/post/post.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CreateReply from "../../components/create-reply/create-reply.component";
import Reply from "../../components/reply/reply.component";
import SearchField from "../../components/search-field/search-field.component";
import BackLink from "../../components/back-link/back-link.component";

import {
  selectCurrentPost,
  selectIsPostLoading
} from "../../redux/posts/post.selectors";

import "./post-page.styles.scss";

const PostWithSpinner = WithSpinner(Post);

const PostPage = ({ currentPost, isPostLoading }) => (
  <div className="post-page">
    <BackLink linkText="All Topics" linkUrl="/" />
    <div className="post-page__header">
      <h2>Join The Conversation</h2>
      <SearchField placeholder="what are you looking for?" />
    </div>
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
