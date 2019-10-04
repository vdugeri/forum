import React from "react";
import { Link } from "react-router-dom";

import "./topic-link.styles.scss";

const TopicLink = ({ topic }) => (
  <Link to={`/${topic.linkUrl}`} className="topic-link">
    {topic.name}
    <span className="topic-link__icon">&#x0203A;</span>
  </Link>
);

export default TopicLink;
