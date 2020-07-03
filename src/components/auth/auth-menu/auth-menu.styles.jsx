import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 15rem;
  align-items: center;
  justify-content: space-around;
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

export const MenuLogo = styled.div`
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 10rem;
    height: auto;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
`;

export const MenuLink = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #333;
  min-height: 3rem;
  width: 100%;
  padding-bottom: 1rem;

  &:last-of-type {
    margin-left: 1rem;
  }
  ${props =>
    props.current &&
    css`
      color: #00856f;
      border-bottom: 3.5px solid #00856f;
    `}
`;

MenuLink.defaultProps = {
  current: false
};

MenuLink.propTypes = {
  current: PropTypes.bool
};
