import React from "react";
import {
  StyledLink,
  LinkIcon
} from "components/forward-link/forward-link.styles";

const ForwardLink = ({ linkText, linkUrl, ...otherProps }) => (
  <StyledLink to={linkUrl} {...otherProps}>
    <span>{linkText}</span>
    <LinkIcon>&#8250;</LinkIcon>
  </StyledLink>
);

export default ForwardLink;
