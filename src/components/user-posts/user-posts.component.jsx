import React from "react";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import useFetch from "effects/use-fetch.effect";
import PostPreview from "components/post-preview/post-preview.component";
import NoPosts from "components/no-posts/no-posts.component";
import { selectUserPosts } from "redux/posts/post.selectors";

import "components/user-posts/user-posts.styles.scss";
import { selectCurrentUser } from "redux/user/user.selectors";
import Loader from "components/loader/loader.component";
import WithSpinner from "components/with-spinner/with-spinner.component";

const PostPreviewWithSpinner = WithSpinner(PostPreview);

const UserPosts = () => {
  const currentUser = useSelector(selectCurrentUser);
  const url = `/users/${currentUser.user._id}/posts`;
  const [{ data, loading }] = useFetch(url, []);
  const { posts } = data;
  return (
    <>
      {loading && <Loader />}
      {posts && posts.length ? (
        <div className="user-posts">
          <h2>My Posts</h2>
          {posts.map(post => (
            <PostPreviewWithSpinner
              isLoading={loading}
              post={post}
              key={post._id}
            />
          ))}
        </div>
      ) : (
        <NoPosts />
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectUserPosts
});

export default connect(mapStateToProps)(UserPosts);
