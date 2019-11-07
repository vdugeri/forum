import React from "react";

import PostOverview from "components/post-overview/post-overview.component";
import ForwardLink from "components/forward-link/forward-link.component";

import "components/popular-topics/popular-topics.styles.scss";

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
