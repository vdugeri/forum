import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PostPreview from "../post-preview/post-preview.component";
import NoPosts from "../no-posts/no-posts.component";

import { selectUserPosts } from "../../redux/posts/post.selectors";

import "./post-list.styles.scss";

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <React.Fragment>
      {posts.length ? (
        <div className="post-list">
          {posts.map(post => (
            <PostPreview post={post} key={post._id} />
          ))}
        </div>
      ) : (
        <NoPosts />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectUserPosts
});

export default connect(mapStateToProps)(PostList);
