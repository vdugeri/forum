import styled, { css } from "styled-components";
import PropTypes from "prop-types";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 15rem;
  min-height: 4rem;
  padding: 0 2rem;
  font-size: 1.4rem;
  border-radius: 2rem;
  font-weight: 600;
  cursor: pointer;

  ${props =>
    props.large &&
    css`
      width: 20rem;
    `}

  ${props =>
    props.ghost &&
    css`
      outline: none;
      border: 1px solid #00856f;
      color: #00856f;
    `}

  ${props =>
    props.primary &&
    css`
      outline: none;
      background-color: #00856f;
      border: none;
      color: #fff;

      &:hover {
        background-color: #123304;
      }
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: #b7c0c0;
      cursor: default;
    `}
`;

Button.defaultProps = {
  large: false,
  ghost: false,
  primary: false,
  disabled: false
};

Button.propTypes = {
  large: PropTypes.bool,
  ghost: PropTypes.bool,
  primary: PropTypes.bool,
  disabled: PropTypes.bool
};
