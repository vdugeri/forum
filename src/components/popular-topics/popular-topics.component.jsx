import React from "react";

import PostPreview from "../post-preview/post-preview.component";

import "./popular-topics.styles.scss";

const PopularTopics = ({ category }) => (
  <div className="popular-topics">
    <div className="popular-topics__header">
      <h2>Popular in {category.name}</h2>
      <img src={category.icon} alt={category.name} />
    </div>
    <div className="popular-topics__posts">
      {category.posts.map(post => (
        <PostPreview post={post} key={post.id} />
      ))}
    </div>
  </div>
);

export default PopularTopics;
