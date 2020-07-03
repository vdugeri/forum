import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  min-height: 92vh;
  width: 100%;
  background-color: #f7f8fa;
  display: flex;
`;

export const Sidebar = styled.div`
  min-height: 92vh;
  width: 100%;
  background-color: #010a43;
  color: #fff;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 10rem;
  font-size: 1.8rem;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      background-color: #01856f;
      color: #fff;
    `}
`;

MenuItem.defaultProps = {
  active: false
};

MenuItem.propTypes = {
  active: PropTypes.bool
};

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
