import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { openPostStart } from "../../redux/posts/posts.actions";

import titleCase from "../../utils/title-case";

import "./post-preview.styles.scss";

const PostPreview = ({ post, onOpenPostStart }) => (
  <div className="post-preview">
    <div className="post-preview__metadata">
      <div className="post-preview--author-image">
        {post.author.username.substring(0, 1).toUpperCase()}
      </div>
      <div className="post-preview__metadata--right">
        <div className="post-preview__author">
          {titleCase(post.author.username)}
        </div>
        <div className="post-preview__date">{post.createdAt}</div>
      </div>
    </div>
    <div className="post-preview__details">
      <Link to={`/posts/${post.id}`} onClick={() => onOpenPostStart(post.id)}>
        <h2 className="post-preview__topic">{post.title}</h2>
      </Link>
      <p className="post-preview__summary">{post.body}</p>
      <span>Be the first to reply</span>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onOpenPostStart: postId => dispatch(openPostStart(postId))
});

export default connect(
  null,
  mapDispatchToProps
)(PostPreview);
