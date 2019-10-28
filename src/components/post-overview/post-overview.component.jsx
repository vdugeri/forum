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
        <p dangerouslySetInnerHTML={{ __html: post.body.substring(0, 200) }} />
      </div>
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
