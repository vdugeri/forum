import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PostList from "../../components/post-list/post-list.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { fetchUserPostsStart } from "../../redux/posts/posts.actions";

import "./user-posts.styles.scss";

const UserPosts = ({ currentUser, onFetchUserPosts }) => {
  useEffect(() => {
    onFetchUserPosts(currentUser.user._id);
  }, [currentUser, onFetchUserPosts]);
  return (
    <div className="user-posts">
      <PostList />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  onFetchUserPosts: userId => dispatch(fetchUserPostsStart(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts);
