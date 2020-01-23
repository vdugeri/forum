import React from "react";
import { withRouter } from "react-router-dom";

import Post from "components/post/post.component";
import WithSpinner from "components/with-spinner/with-spinner.component";
import CreateReply from "components/create-reply/create-reply.component";
import Reply from "components/reply/reply.component";
import SearchField from "components/search-field/search-field.component";
import BackLink from "components/back-link/backlink.component";
import ExplorePractitioners from "components/explore-practitioners/explore-practitioners.component";
import WritePost from "components/write-post/write-post.component";
import useFetch from "effects/use-fetch.effect";

import "pages/post-page/post-page.styles.scss";
import Loader from "components/loader/loader.component";

const PostWithSpinner = WithSpinner(Post);
const ExplorePractitionersWithSpinner = WithSpinner(ExplorePractitioners);

const PostPage = ({ showReply, match }) => {
  const {
    params: { id }
  } = match;

  const url = `/posts/${id}`;
  const [{ data: currentPost, loading }] = useFetch(url);
  const [{ data: topExperts, loading: loadingExperts }] = useFetch(
    "/experts?limit=3",
    []
  );
  return (
    <>
      {loading && <Loader />}
      <div className="post-page">
        <BackLink linkText="All Topics" linkUrl="/" />
        <div className="post-page__header">
          <h2>Join The Conversation</h2>
          <SearchField placeholder="what are you looking for?" />
        </div>
        <PostWithSpinner isLoading={loading} />
        <div className="post-page__create-reply">
          {showReply ? <CreateReply /> : null}
        </div>
        {currentPost &&
          currentPost.replies &&
          currentPost.replies.map(reply => (
            <Reply reply={reply} key={reply._id} />
          ))}
        <div className="post-page__write-post">
          <WritePost />
        </div>
        <ExplorePractitionersWithSpinner
          isLoading={loadingExperts}
          topExperts={topExperts}
        />
      </div>
    </>
  );
};

export default withRouter(PostPage);
