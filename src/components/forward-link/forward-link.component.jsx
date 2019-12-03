import React from "react";
import { Link } from "react-router-dom";

import "components/forward-link/forward-link.styles.scss";

const ForwardLink = ({ linkText, linkUrl, ...otherProps }) => (
  <Link to={linkUrl} {...otherProps} className="forward-link">
    <span className="forward-link__text">{linkText}</span>
    <span className="forward-link__icon">&#8250;</span>
  </Link>
);

export default ForwardLink;
