import React from "react";

import "./post-preview.styles.scss";

const PostPreview = ({ post }) => (
  <div className="post-preview">
    <div className="post-preview__metadata">
      <div className="post-preview--author-image">
        {post.author.username.substring(0, 1).toUpperCase()}
      </div>
      <div className="post-preview__metadata--right">
        <div className="post-preview__author">{post.author.username}</div>
        <div className="post-preview__date">Oct 2, 2019</div>
      </div>
    </div>
    <div className="post-preview__details">
      <h2 className="post-preview__topic">{post.title}</h2>
      <p className="post-preview__summary">{post.body}</p>
      <span>Be the first to reply</span>
    </div>
  </div>
);

export default PostPreview;
