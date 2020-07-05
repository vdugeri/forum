import styled, { css } from "styled-components";
import { transparentize, darken } from "polished";
import { Theme } from "./theme";

export const TableFilter = styled.div`
  padding: 15px 0;
`;

export const TableWrapper = styled.div`
  padding: 0;
  margin: 0;
  font-size: 1.3rem;
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  & thead {
    border-bottom: 1px solid ${darken(0.1, Theme.PrimaryBorderColor)};
    & th {
      text-align: left;
      font-weight: bold;
      padding: 15px;
      font-size: ${Theme.FontSize_s};
      font-family: ${Theme.TetiaryFont};
      color: ${darken(0.3, Theme.PrimaryBorderColor)};
    }
  }
  & tbody {
    & tr {
      min-height: 60px;
      border-bottom: 1px solid ${darken(0.04, Theme.PrimaryGreyBackground)};
      position: relative;
      z-index: 1;
      transition: all 0.3s ease-out;
      &:nth-child(even) {
        background-color: ${Theme.tableStripeColor};
        ${(props) =>
          props.expandable &&
          css`
            background-color: ${Theme.tableStripeColor};
            border-bottom: 1px solid ${Theme.PrimaryGreyBackground};
            &:hover {
              box-shadow: none;
            }
          `}
      }
      &:hover {
        z-index: 2;
        box-shadow: 0 2px 12px ${transparentize(0.9, Theme.PrimaryColor)};
        ${(props) =>
          props.expandable &&
          css`
            &.expanded {
              box-shadow: none;
            }
          `}
      }
      ${(props) =>
        props.expandable &&
        css`
          &.expanded {
            border-bottom: 1px solid transparent;
          }
        `}
      & td {
        padding: 15px;
        & a {
          font-weight: 600;
          color: ${Theme.PrimaryColor};
          transition: all 0.2s ease-out;
          text-decoration: none;
          &:hover {
            color: ${darken(0.1, Theme.PrimaryColor)};
          }
        }
      }
    }
  }
`;
