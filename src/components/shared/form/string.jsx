import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { transparentize } from "polished";
import { Theme } from "./theme";
import "assets/fonts/fonts/fonts.css";

export const StringWrapper = styled.span`
		${(props) =>
      props.size &&
      css`
        font-size: ${props.size};
      `}
    ${(props) =>
      props.bold &&
      css`
        font-weight: bold;
      `}
    ${(props) =>
      props.upper &&
      css`
        text-transform: uppercase;
      `}
    ${(props) =>
      props.lower &&
      css`
        text-transform: lowercase;
      `}
    ${(props) =>
      props.cap &&
      css`
        text-transform: capitalize;
      `}
    ${(props) =>
      props.italic &&
      css`
        font-style: italic;
      `}
    ${(props) =>
      props.noitalic &&
      css`
        font-style: normal;
      `}
    ${(props) =>
      props.block &&
      css`
        display: block;
        padding: ${(props) => props.pad};
        margin: ${(props) => props.margin};
      `}
    ${(props) =>
      props.ellipsis &&
      css`
        ${Theme.Truncate("100%")};
      `}
    ${(props) =>
      props.inlineBlock &&
      css`
        display: inline-block;
        padding: ${(props) => props.pad};
        margin: ${(props) => props.margin};
      `}
    ${(props) =>
      props.inline &&
      css`
        display: inline;
      `}
    ${(props) =>
      props.fade &&
      css`
        opacity: 0.5;
      `}
		${(props) =>
      props.centered &&
      css`
        text-align: center;
      `}
		${(props) =>
      props.color &&
      css`
        color: ${props.color};
      `}
`;
export const String = (props) => {
  return <StringWrapper {...props}>{props.children}</StringWrapper>;
};

String.defaultProps = {};
String.propTypes = {
  block: PropTypes.bool,
  margin: PropTypes.string,
  pad: PropTypes.string,
  bold: PropTypes.bool,
  inline: PropTypes.bool,
  fade: PropTypes.bool,
  noitalic: PropTypes.bool,
  cap: PropTypes.bool,
  lower: PropTypes.bool,
  upper: PropTypes.bool,
  ellipsis: PropTypes.bool,
  centered: PropTypes.bool,
  color: PropTypes.string,
};

export const Label = styled.span`
  display: block;
  color: ${transparentize(0.3, Theme.PrimaryFontColor)};
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Title = styled.h5`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "bold" : 400)};
  font-family: ${Theme.SecondaryFontFamily};
  margin: ${(props) => props.margin};
  line-height: 1.5rem;
`;

Title.defaultProps = {
  size: "18px",
  margin: "0",
  bold: false,
};
Title.propTypes = {
  size: PropTypes.string,
  margin: PropTypes.string,
  bold: PropTypes.bool,
};

export const SubTitle = styled.span`
  font-size: ${(props) => props.size};
  font-family: ${Theme.SecondaryFontFamily};
  margin: ${(props) => props.margin};
  font-style: ${(props) => props.italic};
`;

SubTitle.defaultProps = {
  size: "12px",
  margin: "0",
  italic: false,
};
SubTitle.propTypes = {
  size: PropTypes.string,
  margin: PropTypes.string,
  italic: PropTypes.bool,
};

export const Icon = styled.i`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    font-size: ${(props) => props.size - 4}px;
    ${(props) =>
      props.font &&
      css`
        font-size: ${(props) => props.font};
      `}
    ${(props) =>
      props.color &&
      css`
        color: ${(props) => props.color};
      `}

    ${(props) =>
      props.boxed &&
      css`
        font-size: ${(props) => props.font};
        width: ${(props) => props.size}px;
        height: ${(props) => props.size}px;
        background: ${(props) => props.bg};
        &:hover {
          background: ${(props) => props.bgHover};
        }
        ${(props) =>
          props.round &&
          css`
            border-radius: 50%;
          `}
        ${(props) =>
          props.curve &&
          css`
            border-radius: ${Theme.PrimaryRadius};
          `}
      `}
    transition: all 0.3s ease-out;
    ${(props) =>
      props.rotate &&
      css`
        transform: rotateZ(${(props) => props.rotate});
      `}
`;

Icon.defaultProps = {
  size: 20,
};
Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  font: PropTypes.string,
  round: PropTypes.bool,
  boxed: PropTypes.bool,
  bg: PropTypes.string,
  bgHover: PropTypes.string,
};
