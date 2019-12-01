import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import hljs from "highlight.js";
import "highlight.js/styles/hopscotch.css";

import CreateReply from "components/create-reply/create-reply.component";

import { selectCurrentPost } from "redux/posts/post.selectors";
import { selectCurrentUser } from "redux/user/user.selectors";

import "components/post/post.styles.scss";

const Post = () => {
  const post = useSelector(selectCurrentPost);
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  }, []);
  return (
    <div className="post">
      <div className="post__author">
        <div className="post__author--image">
          {post.author.firstName.substring(0, 1).toUpperCase()}
        </div>
        <div>
          <div className="post__author--name">{post.author.firstName}</div>
          <div className="post__date">{moment(post.created_at).calendar()}</div>
        </div>
      </div>
      <div className="post__title">
        <h2>{post.title}</h2>
      </div>
      <div className="post__body">
        <p dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
      {currentUser ? (
        <div className="post__create-reply">
          <CreateReply />
        </div>
      ) : (
        <div className="post__login">
          <Link to="/login">Log In to Reply</Link>
        </div>
      )}
    </div>
  );
};

export default Post;
