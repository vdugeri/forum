import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/user.selectors";
import hljs from "highlight.js";
import "highlight.js/styles/hopscotch.css";

import {
  PreviewWrapper,
  DeleteIcon,
  PreviewAuthorWrapper,
  AuthorName,
  AuthorDetail,
  AuthorImageWrapper,
  PostDate,
  Title,
  PreviewBody,
  ReplyLink
} from "components/post-preview/post-preview.styles";

import titleCase from "utils/title-case";

import { deletePostStart } from "redux/posts/posts.actions";

const PostPreview = ({ post }) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const ownsPost = () => {
    return currentUser && currentUser.user._id === post.author._id;
  };

  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  }, []);
  return (
    <PreviewWrapper>
      {ownsPost() && (
        <DeleteIcon onClick={() => dispatch(deletePostStart(post._id))} />
      )}
      <PreviewAuthorWrapper>
        <AuthorImageWrapper>
          {post.author.firstName.substring(0, 1).toUpperCase()}
        </AuthorImageWrapper>
        <AuthorDetail>
          <AuthorName>{titleCase(post.author.firstName)}</AuthorName>
          <PostDate>{moment(post.created_at).format("ll")}</PostDate>
        </AuthorDetail>
      </PreviewAuthorWrapper>
      <Title>
        <ReplyLink to={`/posts/${post._id}`}>{post.title}</ReplyLink>
      </Title>
      <PreviewBody
        dangerouslySetInnerHTML={{
          __html: post.body.substring(0, 300) + "..."
        }}
      />
      <ReplyLink to={`/posts/${post._id}`}>
        {post.replies.length ? `View all replies` : `Be the first to reply`}
      </ReplyLink>
    </PreviewWrapper>
  );
};

export default PostPreview;
