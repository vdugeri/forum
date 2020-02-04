import React from "react";
import {
  StyledLink,
  LinkIcon,
  LinkText
} from "components/forward-link/forward-link.styles";

const ForwardLink = ({ linkText, linkUrl, ...otherProps }) => (
  <StyledLink to={linkUrl} {...otherProps}>
    <LinkText {...otherProps}>{linkText}</LinkText>
    <LinkIcon>&#8250;</LinkIcon>
  </StyledLink>
);

export default ForwardLink;
