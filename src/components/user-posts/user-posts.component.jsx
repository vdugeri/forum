import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PostPreview from "../post-preview/post-preview.component";

import { selectUserPosts } from "../../redux/posts/post.selectors";

import "./user-posts.styles.scss";

const UserPosts = ({ posts }) => {
  return (
    <div className="user-posts">
      {posts.map(post => (
        <PostPreview post={post} key={post._id} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectUserPosts
});

export default connect(mapStateToProps)(UserPosts);
