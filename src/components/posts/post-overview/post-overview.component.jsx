import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import hljs from "highlight.js";
import "highlight.js/styles/hopscotch.css";
import {
  OverviewDetails,
  OverviewDate,
  OverviewTopic,
  AuthorImage,
  OverviewWrapper,
  OverviewAuthor,
  Metadata,
  MetadataRight,
  OverviewSummary,
} from "components/posts/post-overview/post-overview.styles";

import { openPostStart } from "redux/posts/posts.actions";

import titleCase from "utils/title-case";
import { selectCurrentPost } from "redux/posts/post.selectors";

const PostOverview = () => {
  const dispatch = useDispatch();
  const post = useSelector(selectCurrentPost);
  useEffect(() => {
    highlightCode();
  }, []);

  function highlightCode() {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }

  return (
    <OverviewWrapper>
      <Metadata>
        <AuthorImage>
          {post?.author?.firstName?.substring(0, 1).toUpperCase()}
        </AuthorImage>
        <MetadataRight>
          <OverviewAuthor>
            {post && titleCase(post?.author?.firstName)}
          </OverviewAuthor>
          <OverviewDate>{post?.createdAt}</OverviewDate>
        </MetadataRight>
      </Metadata>
      <OverviewDetails>
        <Link to={`/posts/${post?.id}`} onClick={() => dispatch(post)}>
          <OverviewTopic>{post?.title}</OverviewTopic>
        </Link>

        <OverviewSummary
          dangerouslySetInnerHTML={{
            __html: post?.body?.substring(0, 300) + " ...",
          }}
        />

        <Link
          to={`/posts/${post?.id}`}
          onClick={() => dispatch(openPostStart(post))}
        >
          <span>
            {post?.replies?.length
              ? `View all replies`
              : `Be the first to reply`}
          </span>
        </Link>
      </OverviewDetails>
    </OverviewWrapper>
  );
};

export default PostOverview;
