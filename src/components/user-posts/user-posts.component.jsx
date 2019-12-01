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

const UserPosts = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [{ data, loading }] = useFetch(`/users/${currentUser.user._id}/posts`);
  const posts = data ? data.posts : [];
  return (
    <>
      {loading && <Loader />}
      {posts && posts.length ? (
        <div className="user-posts">
          {posts.map(post => (
            <PostPreview post={post} key={post._id} />
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
