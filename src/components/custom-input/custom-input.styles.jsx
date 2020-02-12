import styled, { css } from "styled-components";
import PropTypes from "prop-types";

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
  width: 100%;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 2%;
  font-size: 1.6rem;
  color: #777;

  ${props =>
    props.hasValue &&
    css`
      transform: translateY(-60%);
      font-size: 1.3rem;
      color: #00856f;
      font-weight: 600;
    `}
`;

InputLabel.defaultProps = {
  hasValue: false
};

InputLabel.propTypes = {
  hasValue: PropTypes.bool
};

export const InputField = styled.input`
  padding: 2rem 2rem;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 2px;
  width: 100%;
  color: #777;
  font-size: 1.6rem;

  &:focus {
    border: 2px solid #00856f;
  }

  &:focus ~ ${InputLabel} {
    position: absolute;
    transform: translateY(-60%);
    font-size: 1.4rem;
    font-weight: 400;
    color: #00856f;
  }
`;
