import React from "react";
import styled, { css } from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import { media, Theme } from "components/shared/form/theme";
import { String } from "components/shared/form/string";
import "assets/fonts/fonts/fonts.css";

export const Layout = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  font-size: ${Theme.PrimaryFontSize};
  font-family: ${Theme.PrimaryFontFamily};
  font-weight: 400;
  color: ${Theme.PrimaryFontColor};
  -webkit-font-smoothing: antialiased;
  ${(props) =>
    props.shaded &&
    css`
      background: ${Theme.PrimaryPale};
    `}
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.default};
  grid-gap: ${(props) => props.pad};
  ${(props) =>
    props.padHorizontal &&
    css`
      grid-column-gap: ${(props) => props.padHorizontal};
    `}
  ${(props) =>
    props.padVertical &&
    css`
      grid-row-gap: ${(props) => props.padVertical};
    `}
  ${(props) =>
    props.autoRow &&
    css`
      grid-auto-rows: ${(props) => props.autoRow};
    `}
  ${(props) =>
    !props.rigid &&
    css`
    ${media.desktop`
      grid-template-columns: ${(props) => props.tablet};   
    `}
    ${media.tablet`
      grid-template-columns: ${(props) => props.tablet};   
      ${(props) =>
        props.mobilePad &&
        css`
          grid-gap: ${(props) => props.mobilePad};
        `}
    `}
    ${media.phone`
      grid-template-columns: ${(props) => props.mobile};
      ${(props) =>
        props.mobilePad &&
        css`
          grid-gap: ${(props) => props.mobilePad};
        `}
    `}
  `}
`;

Grid.defaultProps = {
  default: "repeat(6, 1fr)",
  mobile: "1fr",
  desktop: "repeat(3, 1fr)",
  tablet: "repeat(2, 1fr)",
  pad: "0",
  padHorizontal: "10px",
};
Grid.propTypes = {
  default: PropTypes.string,
  mobile: PropTypes.string,
  desktop: PropTypes.string,
  tablet: PropTypes.string,
  pad: PropTypes.string,
  padHorizontal: PropTypes.string,
  padVertical: PropTypes.string,
  autoRow: PropTypes.string,
};

export const Contain = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  ${(props) =>
    props.wide &&
    css`
      max-width: ${(props) => props.width};
      @media (max-width: ${(props) => props.width}) {
        padding-left: 30px;
        padding-right: 30px;
      }
    `}
`;
Contain.defaultProps = {
  wide: false,
  width: "1200px",
};
Contain.propTypes = {
  wide: PropTypes.bool,
  width: PropTypes.string,
};

export const Gap = styled.div`
  height: ${(props) => props.height};
`;
Gap.defaultProps = {
  height: "25px",
};
Gap.propTypes = {
  height: PropTypes.string,
};

export const Box = styled.div`
text-align: ${(props) => props.align};
${(props) =>
  props.flex &&
  css`
    display: flex;
  `}
${(props) =>
  props.inline &&
  css`
    display: inline-block;
  `}
${(props) =>
  props.flexColumn &&
  css`
    flex-direction: column;
  `}
padding: ${(props) => props.pad};
position: ${(props) => props.position};
${(props) =>
  props.background &&
  css`
    background: ${(props) => props.background};
  `}
width: ${(props) => props.width};
${(props) =>
  props.maxWidth &&
  css`
    max-width: ${(props) => props.maxWidth};
  `}
height: ${(props) => props.height};
${(props) =>
  props.minHeight &&
  css`
    min-height: ${(props) => props.minHeight};
  `}

${(props) =>
  props.fullscreen &&
  css`
    min-width: 100vh;
    min-height: 100vh;
  `}
  ${(props) =>
    props.verticalAlign &&
    css`
      display: flex;
      align-items: center;
    `}
  ${(props) =>
    props.horizontalAlign &&
    css`
      display: flex;
      justify-content: center;
    `}
  ${(props) =>
    props.centered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  ${(props) =>
    props.leftAlign &&
    css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
    `}
  ${(props) =>
    props.rightAlign &&
    css`
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `}
  ${(props) =>
    props.bordered &&
    css`
      border: 1px solid ${(props) => props.border};
    `}
  ${(props) =>
    props.sideBordered &&
    css`
      border-left: 1px solid ${(props) => props.border};
      border-right: 1px solid ${(props) => props.border};
    `}
  ${(props) =>
    props.bottomBordered &&
    css`
      border-bottom: 1px solid ${(props) => props.border};
    `}
  ${(props) =>
    props.leftBordered &&
    css`
      border-left: 1px solid ${(props) => props.border};
    `}
  ${(props) =>
    props.rightBordered &&
    css`
      border-right: 1px solid ${(props) => props.border};
    `}
  ${(props) =>
    props.margin &&
    css`
      margin: ${(props) => props.margin};
    `}
  ${(props) =>
    props.verticalPad &&
    css`
      padding-top: ${(props) => props.verticalPad};
      padding-top: ${(props) => props.verticalPad};
    `}
  ${(props) =>
    props.horizontalPad &&
    css`
      padding-left: ${(props) => props.horizontalPad};
      padding-right: ${(props) => props.horizontalPad};
    `}
  ${(props) =>
    props.elevate &&
    css`
      ${Theme.Elevate};
      ${(props) =>
        props.elevate === "high" &&
        css`
          ${Theme.Elevate_2}
        `};
      ${(props) =>
        props.elevate === "higher" &&
        css`
          ${Theme.Elevate_3}
        `};
    `}
  ${(props) =>
    props.radius &&
    css`
      border-radius: ${Theme.PrimaryRadius};
      ${(props) =>
        props.radius === "high" &&
        css`
          border-radius: ${Theme.SecondaryRadius};
        `}
    `}
  ${(props) =>
    props.hidden &&
    css`
      overflow: hidden;
    `}
  ${(props) =>
    props.transition &&
    css`
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    `}

${(props) =>
  props.tablet &&
  css`
    ${media.tablet`
        text-align: ${(props) => props.tablet.align};
        padding: ${(props) => props.tablet.pad};
        margin: ${(props) => props.tablet.margin};
    `}
  `}
${(props) =>
  props.mobile &&
  css`
    ${media.phone`
        text-align: ${(props) => props.mobile.align};
        padding: ${(props) => props.mobile.pad};
        margin: ${(props) => props.mobile.margin};
    `}
  `}
${(props) =>
  props.bottomBorder &&
  css`
    border-bottom: 1px solid ${Theme.PrimaryBorderColor};
  `}
  ${(props) =>
    props.topBorder &&
    css`
      border-top: 1px solid ${Theme.PrimaryBorderColor};
    `}
`;

Box.defaultProps = {
  pad: "0",
  margin: "0",
  align: "",
  flex: false,
  flexCenter: false,
  width: "auto",
  height: "auto",
  position: "",
  inline: false,
  border: Theme.PrimaryBorderColor,
};
Box.propTypes = {
  pad: PropTypes.string,
  margin: PropTypes.string,
  align: PropTypes.string,
  flex: PropTypes.bool,
  flexCenter: PropTypes.bool,
  fullscreen: PropTypes.bool,
  verticalPad: PropTypes.string,
  horizontalPad: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  position: PropTypes.string,
  maxwidth: PropTypes.string,
  inline: PropTypes.bool,
  minHeight: PropTypes.string,
  background: PropTypes.string,
  bordered: PropTypes.bool,
  bottomBordered: PropTypes.bool,
  sideBordered: PropTypes.bool,
  leftBordered: PropTypes.bool,
  rightBordered: PropTypes.bool,
  border: PropTypes.string,
  radius: PropTypes.any,
  elevate: PropTypes.string,
  hidden: PropTypes.bool,
  transition: PropTypes.bool,
};

export const TopBar = styled.div`
  height: 60px;
  border-bottom: 1px solid ${Theme.PrimaryBorderColor};
  background: #fff;
  display: flex;
  padding: 20px 30px;
  align-items: center;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 5;
`;

export const SideBrand = styled.div`
  height: 60px;
  display: flex;
  padding: 10px;
  align-items: center;
  font-size: 30px;
  color: #fff;
  & i {
    ${Theme.Centered}
    height: 30px;
    width: 50px;
    transition: width 0.3s ease-out;
  }
`;

export const SideMenu = styled.div`
  background: ${Theme.PrimaryColor};
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  color: #fff;
  & .contain {
    width: 200px;
    position: relative;
    top: 0;
    left: 0;
  }
`;

export const SideMenuList = styled.div`
  font-size: ${Theme.PrimaryFontSize};
  & a {
    text-decoration: none;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  height: 40px;
  padding: 0 20px 0 15px;
  margin-left: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;

  &:last-child {
    border-bottom: none;
  }
  &:hover {
  }
  & .useless {
    position: absolute;
    bottom: -5px;
    right: 0px;
    width: 5px;
    height: 5px;
    background: #fff;
    &::after {
      width: 5px;
      height: 5px;
      content: "";
      background: ${Theme.PrimaryColor};
      display: block;
      border-radius: 0;
    }
    &:last-child {
      bottom: none;
      top: -5px;
      &::after {
        border-radius: 0;
      }
    }
  }
  ${(props) =>
    props.active &&
    css`
      z-index: 1;
      background: ${Theme.PrimaryPale};
      border-radius: 20px 0 0 20px;
      color: ${Theme.PrimaryFontColor};
      font-weight: bold;
      & .useless {
        &::after {
          border-radius: 0 5px 0 0;
        }
        &:last-child {
          &::after {
            border-radius: 0 0 5px 0;
          }
        }
      }
    `}
`;

export const Menu = ({ children, to, activeOnlyWhenExact, highlight }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <Link to={to}>
      <MenuWrapper active={match} highlight={highlight}>
        <div className="useless" />
        {children}
        <div className="useless" />
      </MenuWrapper>
    </Link>
  );
};

export const SidedLayout = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  @media (max-width: 760px) {
    grid-template-columns: 50px auto;
    ${SideBrand} {
      & i {
        ${Theme.Centered}
        height: 30px;
        width: 30px;
      }
    }
  }
`;

export const SideProfileWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: max-content min-content;
  grid-gap: 10px;
  transition: opacity 0.5s ease-out;
  color: ${Theme.PrimaryFontColor};

  & .image {
    border-radius: 50%;
    height: 38px;
    width: 38px;
    background: none;
    border: 1px dotted rgba(0, 0, 0, 0.3);
    padding: 2px;
    ${Theme.Centered};

    & .holder {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      background-color: #eee;
      background-size: cover;
      background-position: center;
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
  & div.string {
  }
  & div.string div {
    max-width: 145px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const SideProfile = (props) => {
  return (
    <SideProfileWrapper>
      <div className="string">
        <String bold block>
          {props.title}
        </String>
        <String fade>{props.subTitle}</String>
      </div>
      <div className="image">
        <div className="holder"></div>
      </div>
    </SideProfileWrapper>
  );
};
