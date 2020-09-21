import { darken } from "polished";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Theme } from "components/shared/theme";
import PropTypes from "prop-types";

export const Wrapper = styled.div`
  width: 15%;
  min-height: 100vh;
  background-color: ${Theme.PrimaryColor};
  position: sticky;
  top: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  overflow-x: hidden;
`;

export const LogoContainer = styled.div`
  width: 100%;
  background-color: #fff;
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 1.8rem;

  & span {
    margin-left: 1rem;
    font-weight: 600;
  }
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${Theme.PrimaryColor};
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 600;
  font-size: 1.6rem;
  padding: 2rem 2rem;
  cursor: pointer;
  text-decoration: none;

  ${(props) =>
    props.active &&
    css`
      background-color: ${darken(0.04, Theme.PrimaryColor)};
    `}

  & span {
    margin-left: 0.8rem;
  }

  &:hover {
    background-color: ${darken(0.04, Theme.PrimaryColor)};
  }
`;

MenuLink.defaultProps = {
  active: false,
};

MenuLink.propTypes = {
  active: PropTypes.bool,
};
