import React from "react";

import "./post-preview.styles.scss";

const PostPreview = ({ post }) => (
  <div className="post-preview">
    <div className="post-preview__metadata">
      <img src={post.author.image} alt="author" />
      <div className="post-preview__metadata--right">
        <div className="post-preview__author">{post.author.username}</div>
        <div className="post-preview__date">Oct 2, 2019</div>
      </div>
    </div>
    <div className="post-preview__details">
      <h2 className="post-preview__topic">Eyes can't focus</h2>
      <p className="post-preview__summary">
        My eyes are sensitive to light but they are especially sensitive at
        night even when I’m at home? It’s really hard for my eyes to focus on
        anything and I don’t know why because I wear glasses. Why …
      </p>
      <span>Be the first to reply</span>
    </div>
  </div>
);

export default PostPreview;
