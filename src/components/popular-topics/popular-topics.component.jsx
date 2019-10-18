import React from "react";

import PostOverview from "../post-overview/post-overview.component";
import ForwardLink from "../forward-link/forward-link.component";

import "./popular-topics.styles.scss";

const PopularTopics = ({ topic }) => (
  <div className="popular-topics">
    {topic.posts.length ? (
      <React.Fragment>
        <div className="popular-topics__header">
          <h2>Popular in {topic.name}</h2>
          <img src={topic.icon} alt={topic.name} />
        </div>
        <div className="popular-topics__posts">
          {topic.posts.map(post => (
            <PostOverview post={post} key={post._id} />
          ))}
        </div>
        <div className="popular-topics__popular-posts">
          <ForwardLink
            linkText="View all popular posts"
            linkUrl={topic.linkUrl}
          />
        </div>
      </React.Fragment>
    ) : null}
  </div>
);

export default PopularTopics;
