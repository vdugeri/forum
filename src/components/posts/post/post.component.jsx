import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
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
  PostLogin,
} from "components/posts/post/post.styles";

import CreateReply from "components/replies/create-reply/create-reply.component";

import { selectCurrentUser } from "redux/user/user.selectors";
import { Gap } from "components/messages/message-modal/message-modal.styles";

const Post = ({ post }) => {
  const currentUser = useSelector(selectCurrentUser);

  const { author, title, content } = post;

  return (
    <PostWrapper>
      <PostAuthor>
        <AuthorImage>
          {author.firstName?.substring(0, 1).toUpperCase()}
        </AuthorImage>
        <div>
          <AuthorName>{author.firstName}</AuthorName>
          <PostDate>{moment(post.createdAt).fromNow()}</PostDate>
        </div>
      </PostAuthor>
      <PostTitle>
        <h2>{title}</h2>
      </PostTitle>
      <PostBody>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </PostBody>
      <Gap height="30px" />
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
