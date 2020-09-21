import React from "react";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import useFetch from "effects/use-fetch.effect";
import PostPreview from "components/posts/post-preview/post-preview.component";
import NoPosts from "components/posts/no-posts/no-posts.component";
import { selectUserPosts } from "redux/posts/post.selectors";

import { Heading } from "components/posts/user-posts/user-posts.styles.jsx";
import { selectCurrentUser } from "redux/user/user.selectors";
import Loader from "components/shared/loader.component";
import { Box } from "components/shared/layout";
import { Contain } from "components/shared/layout";

const UserPosts = () => {
  const currentUser = useSelector(selectCurrentUser);
  const url = `/users/${currentUser.id}/posts`;
  const [{ data: posts, loading }] = useFetch(url, { data: [] });

  if (loading) return <Loader />;

  return (
    <Contain wide width="100%">
      {posts.data.length ? (
        <Box width="100%" pad="0 30px">
          <Heading>My Posts</Heading>
          {posts.data.map((post) => (
            <PostPreview post={post} key={post.id} />
          ))}
        </Box>
      ) : (
        <NoPosts />
      )}
    </Contain>
  );
};

const mapStateToProps = createStructuredSelector({
  posts: selectUserPosts,
});

export default connect(mapStateToProps)(UserPosts);
