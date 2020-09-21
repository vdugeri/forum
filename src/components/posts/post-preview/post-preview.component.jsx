import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import hljs from "highlight.js";
import "highlight.js/styles/hopscotch.css";

import {
  PreviewWrapper,
  DeleteIcon,
  AuthorName,
  AuthorDetail,
  AuthorImageWrapper,
  PostDate,
  Title,
  PreviewBody,
  ReplyLink,
} from "components/posts/post-preview/post-preview.styles";

import titleCase from "utils/title-case";

import { deletePostStart } from "redux/posts/posts.actions";
import { Box } from "components/shared/layout";

const PostPreview = ({ post }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);
  return (
    <PreviewWrapper>
      <Box flex verticalAlign>
        <AuthorImageWrapper>
          {post.author.firstName.substring(0, 1).toUpperCase()}
        </AuthorImageWrapper>
        <AuthorDetail>
          <AuthorName>{titleCase(post.author.firstName)}</AuthorName>
          <PostDate>{moment(post.created_at).format("ll")}</PostDate>
        </AuthorDetail>
        <Box margin="0 0 0 80%">
          <DeleteIcon onClick={() => dispatch(deletePostStart(post._id))} />
        </Box>
      </Box>
      <Title>
        <ReplyLink to={`/posts/${post.id}`}>{post.title}</ReplyLink>
      </Title>
      <PreviewBody
        dangerouslySetInnerHTML={{
          __html: post.content.substring(0, 300),
        }}
      />
      <ReplyLink to={`/posts/${post.id}`}>
        {post.replies.length ? `View all replies` : `Be the first to reply`}
      </ReplyLink>
    </PreviewWrapper>
  );
};

export default PostPreview;
