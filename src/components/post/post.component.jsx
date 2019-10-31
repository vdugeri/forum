import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/hopscotch.css";

import "./post.styles.scss";

const Post = ({ post }) => {
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
          <div className="post__date">{post.createdAt}</div>
        </div>
      </div>
      <div className="post__title">
        <h2>{post.title}</h2>
      </div>
      <div className="post__body">
        <p dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
      <div className="post__reply">
        <div>Reply</div>
      </div>
    </div>
  );
};

export default Post;
