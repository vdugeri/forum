import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import hljs from "highlight.js";
import "highlight.js/styles/hopscotch.css";

import titleCase from "utils/title-case";

import { openPostStart } from "redux/posts/posts.actions";

import "components/post-preview/post-preview.styles.scss";

const PostPreview = ({ post, openPost }) => {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  }, []);
  return (
    <div className="post-preview">
      <div className="post-preview__author">
        <div className="post-preview__author--image">
          {post.author.firstName.substring(0, 1).toUpperCase()}
        </div>
        <div className="post-preview__author--details">
          <div className="post-preview__author--name">
            {titleCase(post.author.firstName)}
          </div>
          <div className="post-preview__author--date">
            {moment(post.created_at).format("ll")}
          </div>
        </div>
      </div>

      <span className="post-preview__title">
        <Link to={`/posts/${post._id}`} onClick={() => openPost(post)}>
          {post.title}
        </Link>
      </span>
      <div className="post-preview__body">
        <p
          dangerouslySetInnerHTML={{
            __html: post.body.substring(0, 300) + "..."
          }}
        />
      </div>
      <span>
        <Link to={`/posts/${post._id}`} onClick={() => openPost(post)}>
          Be the first to reply
        </Link>
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  openPost: post => dispatch(openPostStart(post))
});

export default connect(
  null,
  mapDispatchToProps
)(PostPreview);
