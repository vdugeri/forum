import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { PostListWrapper } from "components/post-list/post-list.styles";

import PostPreview from "components/posts/post-preview/post-preview.component";
import NoPosts from "components/posts/no-posts/no-posts.component";

import { selectUserPosts } from "redux/posts/post.selectors";

import "components/posts/post-list/post-list.styles.scss";

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <React.Fragment>
      {posts.length ? (
        <PostListWrapper>
          {posts.map((post) => (
            <PostPreview post={post} key={post.id} />
          ))}
        </PostListWrapper>
      ) : (
        <NoPosts />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectUserPosts,
});

export default connect(mapStateToProps)(PostList);
