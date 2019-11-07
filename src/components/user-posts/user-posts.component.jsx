import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PostPreview from "components/post-preview/post-preview.component";
import NoPosts from "components/no-posts/no-posts.component";

import { selectUserPosts } from "redux/posts/post.selectors";

import "components/user-posts/user-posts.styles.scss";

const UserPosts = ({ posts }) => {
  return (
    <React.Fragment>
      {posts.length ? (
        <div className="user-posts">
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

export default connect(mapStateToProps)(UserPosts);
