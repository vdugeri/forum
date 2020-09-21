import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Post from "components/posts/post/post.component";
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

import { Contain, Gap } from "components/shared/layout";
import { openPostStart, startFetchReplies } from "redux/posts/posts.actions";
import {
  selectCurrentPost,
  selectIsPostLoading,
  selectPostReplies,
} from "redux/posts/post.selectors";
import Loader from "components/shared/loader.component";

const PostPage = ({ showReply, match }) => {
  const { params } = match;
  const { id } = params;

  const dispatch = useDispatch();

  const loading = useSelector(selectIsPostLoading);
  const currentPost = useSelector(selectCurrentPost);
  const postReplies = useSelector(selectPostReplies);

  useEffect(() => {
    dispatch(openPostStart(id));
    dispatch(startFetchReplies(id));
  }, [dispatch, id]);

  const [
    { data: topExperts, loading: loadingExperts },
  ] = useFetch("/experts?limit=3", { data: [] });

  if (loading || loadingExperts) return <Loader />;

  return (
    <Contain wide width="100%">
      <PostPageWrapper>
        <BackLink linkText="All Topics" linkUrl="/" />
        <PageHeader>
          <h2>Join The Conversation</h2>
          <SearchField placeholder="what are you looking for?" />
        </PageHeader>
        <Post post={currentPost} />
        <CreateReplyWrapper>
          {showReply ? <CreateReply /> : null}
        </CreateReplyWrapper>
        {postReplies?.data.map((reply) => (
          <Reply reply={reply} key={reply.id} />
        ))}
        <Gap height="30px" />
        <CreateWrapper>
          <WritePost />
        </CreateWrapper>
        <ExplorePractitioners topExperts={topExperts} />
      </PostPageWrapper>
    </Contain>
  );
};

export default withRouter(PostPage);
