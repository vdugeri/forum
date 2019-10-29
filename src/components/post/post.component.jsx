import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/hopscotch.css";

import "./post.styles.scss";

const Post = ({ post }) => {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      console.log(block);
      hljs.highlightBlock(block);
    });
  }, []);
  const handleClick = () => {
    console.log("hello");
  };
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
        <div onClick={handleClick}>Reply</div>
      </div>
    </div>
  );
};

export default Post;
