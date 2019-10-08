import React from "react";
import { Link } from "react-router-dom";

import "./post.styles.scss";

const Post = ({ post }) => (
  <div className="post">
    <div className="post__author">
      <div className="post__author--image">
        {post.author.username.substring(0, 1).toUpperCase()}
      </div>
      <div>
        <div className="post__author--name">{post.author.username}</div>
        <div className="post__date">{post.createdAt}</div>
      </div>
    </div>
    <div className="post__title">
      <h2>{post.title}</h2>
    </div>
    <div className="post__body">{post.body}</div>
    <div className="post__reply">
      <Link to="#reply">Reply</Link>
    </div>
  </div>
);

export default Post;
