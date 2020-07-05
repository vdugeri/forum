import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { transparentize, darken } from "polished";
import { Theme } from "./theme";
import Icon from "components/shared/icon/icon.component";
import "assets/fonts/fonts/fonts.css";

export const RoundButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-radius: 30px;
  background: ${Theme.PrimaryColor};
  padding: 0 35px;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;

export const Button = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: ${(props) => props.size};
    border-radius: ${Theme.PrimaryRadius};
    background: ${(props) => props.color};
    color: #fff;
    font-weight: bold;
    transition: all 0.3s ease-out;
    cursor: pointer;
    padding: ${(props) => props.pad};
		margin: ${(props) => props.margin};
		font-size: 1.6rem;

    &:hover{
        background: ${(props) => darken(0.2, props.color)};
    }

    ${(props) =>
      props.pale &&
      css`
        background: ${(props) => props.paleBackground};
        border: 1px solid ${(props) => props.color};
        color: ${(props) => props.color};
        &:hover {
          background: ${(props) => darken(0.2, props.paleBackground)};
          border: 1px solid ${(props) => darken(0.2, props.color)};
          color: ${(props) => darken(0.2, props.color)};
        }
      `}

    ${(props) =>
      props.disabled &&
      css`
        background: ${Theme.PrimaryGreyLight};
        color: ${Theme.PrimaryGrey};
        cursor: not-allowed;
      `}
     ${(props) =>
       props.round &&
       css`
         border-radius: calc(${(props) => props.size} / 2);
       `}

    ${(props) =>
      props.anchor &&
      css`
        position: relative;
        ${(props) =>
          props.left
            ? css`
                padding-left: calc(${(props) => props.size} + 10px);
              `
            : css`
                padding-right: calc(${(props) => props.size} + 10px);
              `}
        
        & i{ 
            ${Theme.Centered};
            position: absolute;
            ${(props) =>
              props.left
                ? css`
                    left: 10px;
                  `
                : css`
                    right: 10px;
                  `}
            top: 10px;
            height: calc(${(props) => props.size} - 20px);
            width: calc(${(props) => props.size} - 20px);
            border-radius: ${Theme.PrimaryRadius};
            ${(props) =>
              props.round &&
              css`
                border-radius: 50%;
              `}
            background: ${(props) => darken(0.2, props.color)};
             ${(props) =>
               props.pale &&
               css`
                 background: ${(props) => darken(0.2, props.paleBackground)};
                 height: calc(${(props) => props.size} - 22px);
               `}
        }
    `}

    ${(props) =>
      props.mini &&
      css`
        height: 30px;
        font-size: 10px;
      `}
`;

Button.defaultProps = {
  size: "40px",
  color: Theme.PrimaryColor,
  pale: false,
  paleBackground: "rgba(255,255,255,0)",
  pad: "0 20px",
  margin: "0",
  round: false,
  left: false,
};
Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  paleBackground: PropTypes.string,
  pale: PropTypes.bool,
  pad: PropTypes.string,
  margin: PropTypes.string,
  round: PropTypes.bool,
  left: PropTypes.bool,
};

export const IconBox = styled.div`
    
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    background: ${(props) => props.color};
    color: #fff;
    ${(props) =>
      props.pale &&
      css`
        background: ${(props) => transparentize(1, props.paleBackground)};
        color: ${(props) => props.color};
      `}
    margin: ${(props) => props.margin};
    border-radius: ${Theme.PrimaryRadius};
    ${Theme.Centered};
    display: ${(props) => props.display};
    transition: all 0.3s ease-out;
    cursor: pointer;
    &:hover{
        background: ${(props) => darken(0.2, props.color)};
        ${(props) =>
          props.pale &&
          css`
            background: ${(props) =>
              transparentize(0.95, props.paleBackground)};
            color: ${(props) => props.color};
          `}
    }
`;

IconBox.defaultProps = {
  size: "40px",
  display: "inline-flex",
  color: Theme.PrimaryColor,
  pale: false,
  paleBackground: "rgba(0,0,0,1)",
  margin: "0",
};
IconBox.propTypes = {
  display: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  paleBackground: PropTypes.string,
  pale: PropTypes.bool,
  margin: PropTypes.string,
};

export const StatusBadge = styled.div`
    height: ${(props) => props.height};
    display: ${(props) => props.display};
    background-color: ${(props) => transparentize(0.8, props.color)};
    /* border: 1px solid  ${(props) => transparentize(0.3, props.color)}; */
    color: ${(props) => props.color};
    border-radius: ${(props) => props.radius};
    align-items: center;
    font-size: ${Theme.FontSize};
    padding: 0 10px;
    min-width: 70px;
    justify-content: center;
`;

StatusBadge.defaultProps = {
  height: "26px",
  color: Theme.PrimaryColor,
  display: "inline-flex",
  radius: Theme.PrimaryRadius,
};
StatusBadge.propTypes = {
  height: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  radius: PropTypes.string,
};

export const ActionButton = styled.div`
  position: relative;
  display: inline-block;
  & span {
    height: ${(props) => props.height};
    width: ${(props) => props.height};
    display: ${(props) => props.display};
    background-color: none;
    color: ${(props) => props.color};
    border-radius: ${(props) => props.radius};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & i {
      display: inline-block;
      transform: rotateZ(90deg);
      font-size: 10px;
    }
    &:hover {
      ${Theme.Elevate};
    }
  }
  & ul {
    display: none;
    position: absolute;
    top: 25px;
    right: 0;
    width: 150px;
    /* height: 150px; */
    border-radius: ${Theme.PrimaryRadius};
    z-index: 1000;
    ${Theme.Elevate_2};
    background: #fff;
    padding: 0;
    margin: 0;
    list-style: none;
    overflow: hidden;
    border: 1px solid ${Theme.PrimaryGreyMid};
    & li {
      height: 36px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      font-size: 1.3rem;
      border-bottom: 1px solid ${Theme.PrimaryGreyBackground};
      cursor: pointer;
      &:hover {
        background: ${transparentize(0.2, Theme.PrimaryGreyBackground)};
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
  &:hover {
    ul {
      display: block;
    }
  }
`;

ActionButton.defaultProps = {
  height: "26px",
  color: Theme.PrimaryGrey,
  display: "inline-flex",
  radius: Theme.PrimaryRadius,
};
ActionButton.propTypes = {
  height: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  radius: PropTypes.string,
};

export const DropAction = (props) => {
  return (
    <ActionButton>
      <span>
        <Icon name="dots" />
      </span>
      {props.children}
    </ActionButton>
  );
};
