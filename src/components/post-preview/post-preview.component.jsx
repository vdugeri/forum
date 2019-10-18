import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import titleCase from "../../utils/title-case";

import "./post-preview.styles.scss";

const PostPreview = ({ post }) => (
  <div className="post-preview">
    <div className="post-preview__author">
      <div className="post-preview__author--image">
        {post.author.username.substring(0, 1).toUpperCase()}
      </div>
      <div className="post-preview__author--details">
        <div className="post-preview__author--name">
          {titleCase(post.author.username)}
        </div>
        <div className="post-preview__author--date">
          {moment(post.createdAt).format("ll")}
        </div>
      </div>
    </div>

    <span className="post-preview__title">
      <Link to={`/posts/${post._id}`}>{post.title}</Link>
    </span>
    <p className="post-preview__body">{post.body}</p>
    <span>
      <Link to={`/posts/${post.id}`}>Be the first to reply</Link>
    </span>
  </div>
);

export default PostPreview;
