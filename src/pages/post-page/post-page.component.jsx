import React from "react";
import { withRouter } from "react-router-dom";

import Post from "components/posts/post/post.component";
import WithSpinner from "components/shared/with-spinner.component";
import CreateReply from "components/replies/create-reply/create-reply.component";
import Reply from "components/replies/reply/reply.component";
import SearchField from "components/shared/search-field.component";
import BackLink from "components/shared/backlink.component";
import ExplorePractitioners from "components/experts/explore-experts/explore-practitioners.component";
import WritePost from "components/posts/write-post/write-post.component";
import useFetch from "effects/use-fetch.effect";

import {
  PostPageWrapper,
  PageHeader,
  CreateWrapper,
  CreateReplyWrapper,
} from "pages/post-page/post-page.styles";

import Loader from "components/shared/loader/loader.component";

const PostWithSpinner = WithSpinner(Post);
const ExplorePractitionersWithSpinner = WithSpinner(ExplorePractitioners);

const PostPage = ({ showReply, match }) => {
  const {
    params: { id },
  } = match;

  const url = `/posts/${id}`;
  const [{ data: currentPost, loading }] = useFetch(url, {
    author: { firstName: "" },
  });
  const [{ data: topExperts, loading: loadingExperts }] = useFetch(
    "/experts?limit=3",
    []
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <PostPageWrapper>
          <BackLink linkText="All Topics" linkUrl="/" />
          <PageHeader>
            <h2>Join The Conversation</h2>
            <SearchField placeholder="what are you looking for?" />
          </PageHeader>
          <PostWithSpinner isLoading={loading} post={currentPost} />
          <CreateReplyWrapper>
            {showReply ? <CreateReply /> : null}
          </CreateReplyWrapper>
          {currentPost &&
            currentPost.replies &&
            currentPost.replies.map((reply) => (
              <Reply reply={reply} key={reply._id} />
            ))}
          <CreateWrapper>
            <WritePost />
          </CreateWrapper>
          <ExplorePractitionersWithSpinner
            isLoading={loadingExperts}
            topExperts={topExperts}
          />
        </PostPageWrapper>
      )}
    </>
  );
};

export default withRouter(PostPage);
