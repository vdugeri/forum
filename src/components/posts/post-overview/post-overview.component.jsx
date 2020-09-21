import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
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

const PostOverview = ({ post }) => {
  const dispatch = useDispatch();

  let { content, replies, id, createdAt, title, author } = post;

  content = content?.length > 300 ? `${content.substring(0, 300)}...` : content;

  return (
    <OverviewWrapper>
      <Metadata>
        <AuthorImage>
          {author?.firstName?.substring(0, 1).toUpperCase()}
        </AuthorImage>
        <MetadataRight>
          <OverviewAuthor>
            {author && titleCase(author?.firstName)}
          </OverviewAuthor>
          <OverviewDate>{moment(createdAt).fromNow()}</OverviewDate>
        </MetadataRight>
      </Metadata>
      <OverviewDetails>
        <Link to={`/posts/${id}`} onClick={() => dispatch(post)}>
          <OverviewTopic>{title}</OverviewTopic>
        </Link>

        <OverviewSummary
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />

        <Link
          to={`/posts/${post?.id}`}
          onClick={() => dispatch(openPostStart(post))}
        >
          <span>
            {replies?.length ? `View all replies` : `Be the first to reply`}
          </span>
        </Link>
      </OverviewDetails>
    </OverviewWrapper>
  );
};

export default PostOverview;
