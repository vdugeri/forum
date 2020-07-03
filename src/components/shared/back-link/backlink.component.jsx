import React from "react";
import {
  StyledLink,
  BackLinkIcon,
} from "components/shared/back-link/backlink.styles";

const BackLink = ({ linkText, linkUrl }) => (
  <StyledLink to={linkUrl}>
    <BackLinkIcon>&#8249;</BackLinkIcon>
    {linkText}
  </StyledLink>
);

export default BackLink;
