import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PostPreview from "../../components/post-preview/post-preview.component";

import { selectUserPosts } from "../../redux/posts/post.selectors";

import "./post-list.styles.scss";

const PostList = ({ posts }) => (
  <div className="post-list">
    {posts.map(post => (
      <PostPreview post={post} key={post._id} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  posts: selectUserPosts
});

export default connect(mapStateToProps)(PostList);
