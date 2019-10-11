import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { openPostStart } from "../../redux/posts/posts.actions";

import titleCase from "../../utils/title-case";

import "./post-overview.styles.scss";

const PostOverview = ({ post, onOpenPostStart }) => (
  <div className="post-overview">
    <div className="post-overview__metadata">
      <div className="post-overview--author-image">
        {post.author.username.substring(0, 1).toUpperCase()}
      </div>
      <div className="post-overview__metadata--right">
        <div className="post-overview__author">
          {titleCase(post.author.username)}
        </div>
        <div className="post-overview__date">{post.createdAt}</div>
      </div>
    </div>
    <div className="post-overview__details">
      <Link to={`/posts/${post.id}`} onClick={() => onOpenPostStart(post.id)}>
        <h2 className="post-overview__topic">{post.title}</h2>
      </Link>
      <p className="post-overview__summary">{post.body}</p>
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
)(PostOverview);
