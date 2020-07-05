import { darken, lighten, transparentize, desaturate } from "polished";
import { css } from "styled-components";

const BrandColor = "#26856F";
const BrandGrey = "#8E8A98";

export const Theme = {
  PrimaryColor: BrandColor,
  PrimaryDark: darken(0.1, BrandColor),
  PrimaryLight: lighten(0.2, BrandColor),
  PrimaryPale: "#FAFAFE",
  tableStripeColor: "#F7FBFD",

  PrimaryBorderColor: lighten(0.3, desaturate(0.4, BrandColor)),

  PrimaryRed: "#ED7161",
  PrimaryGreen: "#81B13F",
  PrimaryBlue: BrandColor,
  PrimaryYellow: "#EDBD61",
  PrimaryOrange: "#F27E59",

  PrimaryGrey: BrandGrey,
  PrimaryGreyDark: darken(0.4, BrandGrey),
  PrimaryGreyLight: lighten(0.3, BrandGrey),
  PrimaryGreyBackground: lighten(0.4, BrandGrey),

  PrimaryFontFamily: "Open Sans",
  PrimaryFontSize: "12px",
  PrimaryFontColor: "#223A52",
  SecondaryFontFamily: "Lato",
  PrimaryLineHeight: "1.4rem",

  PrimaryRadius: "3px",
  SecondaryRadius: "5px",

  PrimaryTransition: "transition: all 0.3s ease-out;",

  Elevate: `box-shadow: 0 1px 3px ${transparentize(
    0.8,
    darken(0.3, BrandColor)
  )}`,
  Elevate_2: `box-shadow: 1px 3px 6px ${transparentize(
    0.8,
    darken(0.3, BrandColor)
  )}`,
  Elevate_3: `box-shadow: 3px 6px 15px ${transparentize(
    0.8,
    darken(0.4, BrandColor)
  )}`,

  sizes: {
    giant: 1170,
    desktop: 992,
    tablet: 768,
    phone: 660,
  },

  Centered: () => {
    return `display: flex;
            align-items: center;
            justify-content: center;`;
  },

  Gradient: (Primary, secondary, angle = "-45deg") => {
    return `background: ${Primary};
            background: -moz-linear-gradient(${angle}, ${Primary} 0%, ${secondary} 100%);
            background: -webkit-linear-gradient(${angle}, ${Primary} 0%,${secondary} 100%);
            background: linear-gradient(${angle}, ${Primary} 0%,${secondary} 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${Primary}', endColorstr='${secondary}',GradientType=1 );`;
  },
  Truncate: (width) => {
    return `
          width: ${width};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;`;
  },
};

export const media = Object.keys(Theme.sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${Theme.sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
