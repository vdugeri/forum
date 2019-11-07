import React from "react";
import { Link } from "react-router-dom";

import "components/back-link/back-link.styles.scss";

const BackLink = ({ linkText, linkUrl }) => (
  <Link to={linkUrl} className="back-link">
    <span className="icon">&#8249;</span>
    {linkText}
  </Link>
);

export default BackLink;
