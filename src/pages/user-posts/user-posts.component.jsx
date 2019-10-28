import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PostPreview from "../../components/post-preview/post-preview.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { fetchUserPostsStart } from "../../redux/posts/posts.actions";
import { selectPostList } from "../../redux/posts/post.selectors";

import "./user-posts.styles.scss";

const UserPosts = ({ posts, currentUser, onFetchUserPosts }) => {
  useEffect(() => {
    onFetchUserPosts(currentUser.user._id);
  }, [currentUser, onFetchUserPosts]);
  return (
    <div className="user-posts">
      {posts.map(post => (
        <PostPreview post={post} key={post._id} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  posts: selectPostList
});

const mapDispatchToProps = dispatch => ({
  onFetchUserPosts: userId => dispatch(fetchUserPostsStart(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts);
