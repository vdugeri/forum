import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Theme } from "./theme";

export const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  padding-top: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

export const LinkText = styled.span`
  color: ${(props) => props.color};
`;

LinkText.defaultProps = {
  color: "inherit",
};

LinkText.propTypes = {
  color: PropTypes.string,
};

export const LinkIcon = styled.span`
  color: ${Theme.PrimaryColor};
  font-size: 2.5rem;
  font-weight: 500;
`;

const ForwardLink = ({ linkText, linkUrl, ...otherProps }) => (
  <StyledLink to={linkUrl} {...otherProps}>
    <LinkText {...otherProps}>{linkText}</LinkText>
    <LinkIcon>&#8250;</LinkIcon>
  </StyledLink>
);

export default ForwardLink;
