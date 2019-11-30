import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import hljs from "highlight.js";
import "highlight.js/styles/hopscotch.css";

import { openPostStart } from "redux/posts/posts.actions";

import titleCase from "utils/title-case";

import "components/post-overview/post-overview.styles.scss";

const PostOverview = ({ post, onOpenPostStart }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  }, []);
  return (
    <div className="post-overview">
      <div className="post-overview__metadata">
        <div className="post-overview--author-image">
          {post.author.firstName.substring(0, 1).toUpperCase()}
        </div>
        <div className="post-overview__metadata--right">
          <div className="post-overview__author">
            {titleCase(post.author.firstName)}
          </div>
          <div className="post-overview__date">{post.createdAt}</div>
        </div>
      </div>
      <div className="post-overview__details">
        <Link to={`/posts/${post._id}`} onClick={() => onOpenPostStart(post)}>
          <h2 className="post-overview__topic">{post.title}</h2>
        </Link>
        <div className="post-overview__summary">
          <p
            dangerouslySetInnerHTML={{
              __html: post.body.substring(0, 300) + " ..."
            }}
          />
        </div>
        <Link
          to={`/posts/${post._id}`}
          onClick={() => dispatch(openPostStart(post))}
        >
          <span>
            {post.replies.length ? `View all replies` : `Be the first to reply`}
          </span>
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onOpenPostStart: postId => dispatch(openPostStart(postId))
});

export default connect(null, mapDispatchToProps)(PostOverview);
