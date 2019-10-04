import React from "react";
import { Link } from "react-router-dom";

import "./topic.styles.scss";

const Topic = ({ topic }) => (
  <Link className="category" to={`/${topic.linkUrl}`}>
    <div className="category__icon">
      <img src={topic.icon} alt={topic.name} />
    </div>
    <div className="category__name">{topic.name}</div>
  </Link>
);

export default Topic;
