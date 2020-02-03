import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import hljs from "highlight.js";
import "highlight.js/styles/hopscotch.css";
import {
  PostWrapper,
  PostAuthor,
  AuthorImage,
  AuthorName,
  PostDate,
  PostTitle,
  PostBody,
  ReplyPost,
  PostLogin
} from "components/post/post.styles";

import CreateReply from "components/create-reply/create-reply.component";

import { selectCurrentUser } from "redux/user/user.selectors";

const Post = ({ post }) => {
  console.log(post);
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  }, []);
  return (
    <PostWrapper>
      <PostAuthor>
        <AuthorImage>
          {post.author.firstName.substring(0, 1).toUpperCase()}
        </AuthorImage>
        <div>
          <AuthorName>{post.author.firstName}</AuthorName>
          <PostDate>{moment(post.created_at).calendar()}</PostDate>
        </div>
      </PostAuthor>
      <PostTitle>
        <h2>{post.title}</h2>
      </PostTitle>
      <PostBody>
        <p dangerouslySetInnerHTML={{ __html: post.body }} />
      </PostBody>
      {currentUser ? (
        <ReplyPost>
          <CreateReply post={post} />
        </ReplyPost>
      ) : (
        <PostLogin>
          <Link to="/login">Log In to Reply</Link>
        </PostLogin>
      )}
    </PostWrapper>
  );
};

export default Post;
