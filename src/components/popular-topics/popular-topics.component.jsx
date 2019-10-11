import React from "react";

import PostOverview from "../post-overview/post-overview.component";
import ForwardLink from "../forward-link/forward-link.component";

import "./popular-topics.styles.scss";

const PopularTopics = ({ category }) => (
  <div className="popular-topics">
    <div className="popular-topics__header">
      <h2>Popular in {category.name}</h2>
      <img src={category.icon} alt={category.name} />
    </div>
    <div className="popular-topics__posts">
      {category.posts.map(post => (
        <PostOverview post={post} key={post.id} />
      ))}
    </div>
    <div className="popular-topics__popular-posts">
      <ForwardLink
        linkText="View all popular posts"
        linkUrl={category.linkUrl}
      />
    </div>
  </div>
);

export default PopularTopics;
