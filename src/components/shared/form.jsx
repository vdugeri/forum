import styled, { css } from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Theme } from "./theme";
import { lighten, transparentize, darken } from "polished";
import { String } from "./string";
import { Button } from "./button";
import { Link } from "react-router-dom";
import { DatePicker } from "@y0c/react-datepicker";
import "@y0c/react-datepicker/assets/styles/calendar.scss";
import "moment/locale/en-gb";

export const InputWrapper = styled.div`
		position: relative;
		width: 100%;
		& .picker {
			display: block;
		}

		& .calendar__head {
			background: #1092d6
		}

		.calendar__day:hover:not(.calendar__day--disabled) {
			background: #1092d6;
			color: #fff;
		}

    & input{
        display: block;
        position: relative;
        z-index: 0;
        width: 100%;
        padding: 0 10px;
				height: 40px;
				font-size: 1.6rem;
        border: 1px solid ${Theme.PrimaryBorderColor};
        border-radius: ${Theme.PrimaryRadius};
        &:focus{
            outline: none;
            border: 1px solid ${Theme.PrimaryColor};
            box-shadow: 0 0 3px ${transparentize(0.3, Theme.PrimaryColor)};
        }
        &::placeholder{
            color: ${darken(0, Theme.PrimaryBorderColor)};
        }
        &:disabled{
            background: ${transparentize(0.8, Theme.PrimaryBorderColor)};
            border: 1px dashed ${darken(0.1, Theme.PrimaryBorderColor)};
        }
        ${(props) =>
          props.error &&
          css`
            border: 1px solid ${Theme.PrimaryRed};
            box-shadow: 0 0 2px ${transparentize(0.6, Theme.PrimaryRed)};
          `}

    & .type{
        display: inline-flex;
        position: absolute;
        height: 40px;
        z-index: 1;
        width: 40px;
        bottom: 0;
        right: 0;
        align-items: center;
        justify-content: center;
        color:  ${darken(0.1, Theme.PrimaryBorderColor)};
    }
`;

export const InputLabel = styled.div`
  height: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${lighten(0.2, Theme.PrimaryFontColor)};
`;

export const InputError = styled.div`
    font-size: ${Theme.PrimaryFontSize};
    font-weight: lighter;
    font-style: italic;
    /* color: ${(props) => props.color}; */
    text-align: right;
    position: absolute;
    width: 100%;
    bottom: -15px;
    right: 0;
    color: ${transparentize(0.2, Theme.PrimaryRed)};
`;

const InputIcon = (type) => {
  switch (type) {
    case "search":
      return ["icon-search", type];
    case "number":
      return ["icon-sort-numeric", type];
    case "location":
      return ["icon-globe", type];
    case "date":
      return ["icon-calendar-empty", type];
    case "password":
      return ["icon-lock-open", type];
    case "plain":
      return ["", "text"];
    case "email":
      return ["icon-envelope-open-o", "text"];
    case "phone":
      return ["icon-phone-squared", "text"];
    default:
      return ["icon-sort-alphabet", type];
  }
};
export const Input = ({ onClear, ...otherProps }) => {
  return (
    <InputWrapper {...otherProps}>
      {otherProps.label && (
        <InputLabel>
          <String>{otherProps.label}</String>
          {otherProps.required && (
            <String color={Theme.PrimaryRed} size="1.5rem">
              *
            </String>
          )}
        </InputLabel>
      )}
      <i className={`type ${InputIcon(otherProps.type)[0]}`} />
      <input {...otherProps} type={InputIcon(otherProps.type)[1]} />
      <InputError>
        <String>{otherProps.error}</String>
      </InputError>
    </InputWrapper>
  );
};

export const DateInput = ({ onClear, ...otherProps }) => {
  return (
    <InputWrapper {...otherProps}>
      {otherProps.label && (
        <InputLabel>
          <String>{otherProps.label}</String>
          {otherProps.required && (
            <String color={Theme.PrimaryRed} size="1.5rem">
              *
            </String>
          )}
        </InputLabel>
      )}
      <DatePicker {...otherProps} onClear={onClear} inputComponent={Input} />
    </InputWrapper>
  );
};

export const TextWrapper = styled.div`
  position: relative;

  & textarea {
    display: block;
    position: relative;
    z-index: 0;
    width: 100%;
    padding: 10px;
    height: ${(props) => props.height};
    border: 1px solid ${Theme.PrimaryBorderColor};
    border-radius: ${Theme.PrimaryRadius};
    &:focus {
      outline: none;
      border: 1px solid ${Theme.PrimaryColor};
      box-shadow: 0 0 3px ${transparentize(0.3, Theme.PrimaryColor)};
    }
    &::placeholder {
      color: ${darken(0, Theme.PrimaryBorderColor)};
    }
    &:disabled {
      background: ${transparentize(0.8, Theme.PrimaryBorderColor)};
      border: 1px dashed ${darken(0.1, Theme.PrimaryBorderColor)};
    }
    ${(props) =>
      props.error &&
      css`
        border: 1px solid ${Theme.PrimaryRed};
        box-shadow: 0 0 2px ${transparentize(0.6, Theme.PrimaryRed)};
      `}
  }
`;
export const TextArea = (props) => {
  return (
    <TextWrapper {...props}>
      {props.label && (
        <InputLabel>
          <String>{props.label}</String>
          {props.required && (
            <String color={Theme.PrimaryRed} size="1.5rem">
              *
            </String>
          )}
        </InputLabel>
      )}
      <textarea {...props} />
      <InputError>
        <String>{props.error}</String>
      </InputError>
    </TextWrapper>
  );
};
TextArea.defaultProps = {
  height: "80px",
};
TextArea.propTypes = {
  height: PropTypes.string,
};

export const SelectWrapper = styled.div`
	position: relative;
	font-size: 1.6rem;
	${(props) =>
    props.inline &&
    css`
      display: inline-block;
      min-width: ${(props) => props.width};
      margin: ${(props) => props.margin};
    `}
    & .c9__control {
			border: 1px solid ${Theme.PrimaryBorderColor};
			${(props) =>
        props.pale &&
        css`
          border: 1px solid ${transparentize(0.6, Theme.PrimaryBorderColor)};
          box-shadow: 0 1px 3px ${transparentize(0.8, Theme.PrimaryBorderColor)};
        `}
        border-radius: ${Theme.PrimaryRadius};
        height: 40px;
        &:focus{
            outline: none;
            border: 1px solid ${Theme.PrimaryColor};
            box-shadow: 0 0 3px ${transparentize(0.3, Theme.PrimaryColor)};
        }
        ${(props) =>
          props.disabled &&
          css`
            border: 1px dashed ${Theme.PrimaryBorderColor};
          `}
        &:hover{
            border: 1px solid ${Theme.PrimaryBorderColor};
        }
        &.c9__control--is-focused,:focus{
            outline: none;
            border: 1px solid ${Theme.PrimaryColor};
            box-shadow: 0 0 3px ${transparentize(0.3, Theme.PrimaryColor)};
             & .c9__value-container{
            ${(props) =>
              props.search &&
              css`
                &::after {
                  left: calc(100% - 20px);
                }
                ${(props) =>
                  props.pale &&
                  css`
                    &::after {
                      left: 100%;
                      opacity: 0;
                    }
                  `}
              `}
             }
             & .c9__placeholder{
                ${(props) =>
                  props.search &&
                  css`
                    margin-left: 3px;
                  `}
            }
            & .c9__indicator.c9__dropdown-indicator{
                & svg{
                    transform: rotateZ(180deg);
                }
            }
        }
        &:disabled{
            background: ${transparentize(0.8, Theme.PrimaryBorderColor)};
            border: 1px dashed ${darken(0.1, Theme.PrimaryBorderColor)};
        }
        ${(props) =>
          props.error &&
          css`
            border: 1px solid ${Theme.PrimaryRed};
            box-shadow: 0 0 2px ${transparentize(0.6, Theme.PrimaryRed)};
            font-size: 12px;
          `}
        & .c9__value-container{
            height: 100%;
            ${(props) =>
              props.search &&
              css`
                &::after {
                  content: "\\e834";
                  display: flex;
                  position: absolute;
                  height: 38px;
                  align-items: center;
                  font-family: "adams";
                  color: ${Theme.PrimaryBorderColor};
                  left: 12px;
                  transition: all 0.3s ease-out;
                }
              `}
            &.c9__value-container--has-value{
                ${(props) =>
                  props.search &&
                  css`
                    &::after {
                      left: calc(100% - 20px);
                    }
                    ${(props) =>
                      props.pale &&
                      css`
                        &::after {
                          left: 100%;
                        }
                      `}
                  `}
            }
        }
        & .c9__placeholder{
            color: ${darken(0, Theme.PrimaryBorderColor)};
            transition: all 0.3s ease-out;
            ${(props) =>
              props.search &&
              css`
                margin-left: 20px;
              `}
        }
        & .c9__indicators{
            background: none;
            & .c9__indicator-separator{
                display: none;
            }
            & .c9__indicator.c9__dropdown-indicator{
                height: 38px;
                width: 38px;
                border-radius: 0 ${Theme.PrimaryRadius} ${
  Theme.PrimaryRadius
} 0;
                align-items: center;
                justify-content: center;
                background: ${transparentize(0.8, Theme.PrimaryBorderColor)};
                border-left: 1px solid ${Theme.PrimaryBorderColor};
                ${(props) =>
                  props.pale &&
                  css`
                    border-left: none;
                    background: none;
                  `}

                & svg{
                    fill:${Theme.PrimaryBorderColor};
                    width: 14px;
                    transition: all 0.2s ease-out;
                }
            }
        }
    }
    & .c9__menu{
        z-index: 10;
        border-radius: ${Theme.PrimaryRadius};
        border: 1px solid ${darken(0.2, Theme.PrimaryBorderColor)};
        ${Theme.Elevate_2};
        overflow: hidden;

        & .c9__menu-list{
            padding: 0;

            & .c9__option{
                &.c9__option--is-focused{
                    background: ${transparentize(
                      0.6,
                      Theme.PrimaryBorderColor
                    )};
                }
                &.c9__option--is-selected{
                    background: ${darken(0.2, Theme.PrimaryBorderColor)};
                    &.c9__option--is-focused{
                        background: ${darken(0.25, Theme.PrimaryBorderColor)};
                    }
                }
            }
        }
    }
`;

export const FSelect = (props) => {
  return (
    <SelectWrapper {...props}>
      {props.label && (
        <InputLabel>
          <String>{props.label}</String>
          {props.required && (
            <String color={Theme.PrimaryRed} size="1.5rem">
              *
            </String>
          )}
        </InputLabel>
      )}
      <Select
        {...props}
        isSearchable={props.search ? true : false}
        isDisabled={props.disabled ? true : false}
        className="c9_select"
        classNamePrefix="c9"
      />
      <InputError>
        <String>{props.error}</String>
      </InputError>
    </SelectWrapper>
  );
};

FSelect.defaultProps = {
  width: "180px",
  margin: "0",
};
FSelect.propTypes = {
  width: PropTypes.string,
  margin: PropTypes.string,
};

export const MultiWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  & .eha-select {
    display: block;
    width: 100%;
    position: relative;
  }
  & .eha__control {
    display: block;
    background: none;
    border: none;
    &.eha__control--is-focused {
      border-color: none;
      border-width: 0;
      box-shadow: none;
      border-radius: 0;
    }

    & .eha__value-container {
      position: relative;
      padding-top: 50px;
      padding-left: 0;
      padding-right: 0;
      & .eha__placeholder {
        margin-top: -8px;
        margin-left: 10px;
      }

      & .eha__input {
        width: 100%;
        background: #fff;
        border: 1px solid ${lighten(0.1, Theme.PrimaryBorderColor)};
        display: flex;
        align-items: center;
        height: 44px;
        border-radius: ${Theme.PrimaryRadius};
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 10px;
        transition: all 0.3s ease-out;
        cursor: hover;
        &:after {
          content: "+";
          font-family: "eha";
          display: flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          position: absolute;
          right: 0;
          top: 0;
          width: 44px;
          border-left: 1px solid ${lighten(0.1, Theme.PrimaryBorderColor)};
          color: ${darken(0.2, Theme.PrimaryBorderColor)};
        }
        &:hover {
          &:after {
            background: ${lighten(0.2, Theme.PrimaryBorderColor)};
          }
        }
        & input {
          height: 38px;
          /* padding: 10px; */
          line-height: 18px;
        }
      }
    }
    & .eha__indicators {
      display: none;
    }
    & .eha__multi-value {
      border: 1px solid ${Theme.PrimaryGreen};
      background: ${lighten(0.4, Theme.PrimaryGreen)};
      color: ${darken(0.2, Theme.PrimaryGreen)};
      text-transform: capitalize;
      & .eha__multi-value__label {
        padding: 8px;
      }

      & svg {
        fill: ${darken(0.2, Theme.PrimaryGreen)};
      }
    }
    & .eha__multi-value__remove {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      &:hover {
        background: ${transparentize(0.3, Theme.PrimaryGreen)};
      }
    }
  }
  .eha__menu {
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 40px;
    background: ${darken(0.1, Theme.PrimaryGrey)};
    border-radius: ${Theme.PrimaryRadius};
    color: #fff;
    border: none;
    z-index: 500;
    font-size: ${Theme.PrimaryFontSize};

    & .eha__menu-list {
      margin: 0;
      padding: 0;
      & .eha__option {
        &:hover {
          background: ${Theme.PrimaryGrey};
        }
        &.eha__option--is-focused {
          background: ${transparentize(0.6, Theme.PrimaryGrey)};
        }
        &.eha__option--is-selected {
          background: ${darken(0.2, Theme.PrimaryColor)};
        }
      }
    }
  }
`;
export class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MultiWrapper {...this.props}>
        {/* <div className="filter-label">{this.props.label}</div> */}
        <Select
          className="eha-select"
          isClearable={false}
          {...this.props}
          classNamePrefix="eha"
        />
      </MultiWrapper>
    );
  }
}

export const Pretty = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 1em;
  white-space: nowrap;
  line-height: 1;
  font-size: 12px;
  & * {
    box-sizing: border-box;
  }

  & input:not([type="checkbox"]):not([type="radio"]) {
    display: none;
  }
  & input {
    position: absolute;
    left: 0;
    top: 0;
    min-width: 1em;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  & .state label {
    position: initial;
    display: inline-block;
    font-weight: 400;
    margin: 0;
    text-indent: 1.5em;
    min-width: calc(1em + 2px);
    text-transform: capitalize;
  }

  & .state label:after,
  & .state label:before {
    content: "";
    width: calc(1em + 2px);
    height: calc(1em + 2px);
    display: block;
    box-sizing: border-box;
    border-radius: 0;
    border: 1px solid transparent;
    z-index: 0;
    position: absolute;
    left: 0;
    top: calc((0% - (100% - 0.98em)) - 8%);
    background-color: transparent;
  }

  & .state label:before {
    border-color: ${Theme.PrimaryColor};
  }

  & .state.p-is-hover,
  & .state.p-is-indeterminate {
    display: none;
  }

  &.p-default.p-fill .state label:after {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  &.p-default .state label:after {
    -webkit-transform: scale(0.6);
    -ms-transform: scale(0.6);
    transform: scale(0.6);
  }

  &.p-default input:checked ~ .state label:after {
    background-color: ${Theme.PrimaryColor};
  }

  &.p-default.p-thick .state label:after,
  &.p-default.p-thick .state label:before {
    border-width: calc(1em / 7);
  }

  &.p-default.p-thick .state label:after {
    -webkit-transform: scale(0.4);
    -ms-transform: scale(0.4);
    transform: scale(0.4);
  }

  &.p-icon .state .icon {
    position: absolute;
    font-size: 1em;
    width: calc(1em + 2px);
    height: calc(1em + 2px);
    left: 0;
    z-index: 1;
    text-align: center;
    line-height: normal;
    top: calc((0% - (100% - 1em)) - 8%);
    border: 1px solid transparent;
    opacity: 0;
  }

  &.p-icon .state .icon:before {
    margin: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1;
  }

  &.p-icon input:checked ~ .state .icon {
    opacity: 1;
  }

  &.p-icon input:checked ~ .state label:before {
    border-color: ${Theme.PrimaryColor};
  }

  &.p-svg .state .svg {
    position: absolute;
    font-size: 1em;
    width: calc(1em + 2px);
    height: calc(1em + 2px);
    left: 0;
    z-index: 1;
    text-align: center;
    line-height: normal;
    top: calc((0% - (100% - 1em)) - 8%);
    border: 1px solid transparent;
    opacity: 0;
  }
  &.p-switch input {
    min-width: 2em;
  }

  &.p-switch .state {
    position: relative;
  }

  &.p-switch .state:before {
    content: "";
    border: 1px solid ${Theme.PrimaryBorderColor};
    border-radius: 60px;
    width: calc(2em + 2px);
    box-sizing: unset;
    height: calc(1em + 2px);
    position: absolute;
    top: calc((0% - (100% - 0.98em)) - 16%);
    left: -1px;
    z-index: 0;
    transition: all 0.5s ease;
  }

  &.p-switch .state label {
    text-indent: 2.5em;
  }

  &.p-switch .state label:after,
  &.p-switch .state label:before {
    transition: all 0.5s ease;
    border-radius: 100%;
    left: 0;
    border-color: transparent;
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
  }

  &.p-switch .state label:after {
    background-color: ${Theme.PrimaryBorderColor};
  }

  &.p-switch input:checked ~ .state:before {
    border-color: ${Theme.PrimaryColor};
  }

  &.p-switch input:checked ~ .state label:before {
    opacity: 0;
  }

  &.p-switch input:checked ~ .state label:after {
    background-color: ${Theme.PrimaryColor};
    left: 1em;
  }

  &.p-switch.p-fill input:checked ~ .state:before {
    border-color: ${Theme.PrimaryColor};
    background-color: ${Theme.PrimaryColor};
  }

  &.p-switch.p-fill input:checked ~ .state label:before {
    opacity: 0;
  }

  &.p-switch.p-fill input:checked ~ .state label:after {
    background-color: #fff;
    left: 1em;
  }

  &.p-switch.p-slim .state:before {
    height: 0.1em;
    background: ${Theme.PrimaryColor};
    top: calc(50% - 0.1em);
  }

  &.p-switch.p-slim input:checked ~ .state:before {
    border-color: ${Theme.PrimaryColor};
    background-color: ${Theme.PrimaryColor};
  }

  &.p-has-hover input:hover ~ .state:not(.p-is-hover) {
    display: none;
  }

  &.p-has-hover input:hover ~ .state.p-is-hover {
    display: block;
  }

  &.p-has-hover input:hover ~ .state.p-is-hover .icon {
    display: block;
  }

  &.p-has-focus input:focus ~ .state label:before {
    box-shadow: 0 0 3px 0 ${Theme.PrimaryColor};
  }

  &.p-has-indeterminate
    input[type="checkbox"]:indeterminate
    ~ .state:not(.p-is-indeterminate) {
    display: none;
  }

  &.p-has-indeterminate
    input[type="checkbox"]:indeterminate
    ~ .state.p-is-indeterminate {
    display: block;
  }

  &.p-has-indeterminate
    input[type="checkbox"]:indeterminate
    ~ .state.p-is-indeterminate
    .icon {
    display: block;
    opacity: 1;
  }

  &.p-toggle .state.p-on {
    opacity: 0;
    display: none;
  }

  &.p-toggle .state .icon,
  &.p-toggle .state .svg,
  &.p-toggle .state img,
  &.p-toggle .state.p-off {
    opacity: 1;
    display: inherit;
  }

  &.p-toggle .state.p-off .icon {
    color: ${Theme.PrimaryColor};
  }

  &.p-toggle input:checked ~ .state.p-on {
    opacity: 1;
    display: inherit;
  }

  &.p-toggle input:checked ~ .state.p-off {
    opacity: 0;
    display: none;
  }

  &.p-plain input:checked ~ .state label:before,
  &.p-plain.p-toggle .state label:before {
    content: none;
  }

  &.p-plain.p-plain .icon {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  &.p-round .state label:after,
  &.p-round .state label:before {
    border-radius: 100%;
  }

  &.p-round.p-icon .state .icon {
    border-radius: 100%;
    overflow: hidden;
  }

  &.p-round.p-icon .state .icon:before {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
  }

  &.p-curve .state label:after,
  &.p-curve .state label:before {
    border-radius: 2px;
  }

  &.p-smooth .icon,
  &.p-smooth .svg,
  &.p-smooth label:after,
  &.p-smooth label:before {
    transition: all 0.5s ease;
  }

  &.p-smooth input:checked + .state label:after {
    transition: all 0.3s ease;
  }

  &.p-smooth input:checked + .state .icon,
  &.p-smooth input:checked + .state .svg,
  &.p-smooth input:checked + .state img {
    -webkit-animation: zoom 0.2s ease;
    animation: zoom 0.2s ease;
  }

  &.p-smooth.p-default input:checked + .state label:after {
    -webkit-animation: zoom 0.2s ease;
    animation: zoom 0.2s ease;
  }

  &.p-smooth.p-plain input:checked + .state label:before {
    content: "";
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    transition: all 0.5s ease;
  }

  & input[disabled] {
    cursor: not-allowed;
    display: none;
  }

  & input[disabled] ~ * {
    opacity: 0.5;
  }

  &.p-locked input {
    display: none;
    cursor: not-allowed;
  }

  & input:checked ~ .state.p-primary label:after,
  &.p-toggle .state.p-primary label:after {
    background-color: ${Theme.PrimaryColor};
  }

  & input:checked ~ .state.p-primary .icon,
  & input:checked ~ .state.p-primary .svg,
  &.p-toggle .state.p-primary .icon,
  &.p-toggle .state.p-primary .svg {
    color: #fff;
    stroke: #fff;
  }

  & input:checked ~ .state.p-primary-o label:before,
  &.p-toggle .state.p-primary-o label:before {
    border-color: ${Theme.PrimaryColor};
  }

  & input:checked ~ .state.p-primary-o label:after,
  &.p-toggle .state.p-primary-o label:after {
    background-color: ${Theme.PrimaryColor};
  }

  & input:checked ~ .state.p-primary-o .icon {
    color: ${Theme.PrimaryColor};
    stroke: ${Theme.PrimaryColor};
  }

  &.p-default:not(.p-fill) input:checked ~ .state.p-primary-o label:after {
    background-color: ${Theme.PrimaryColor};
  }

  &.p-switch input:checked ~ .state.p-primary:before {
    border-color: ${Theme.PrimaryColor};
  }

  &.p-switch.p-fill input:checked ~ .state.p-primary:before {
    background-color: ${Theme.PrimaryColor};
  }

  &.p-switch.p-slim input:checked ~ .state.p-primary:before {
    border-color: ${Theme.PrimaryColor};
    background-color: ${Theme.PrimaryColor};
  }

  &.large i,
  &.large .img,
  &.large .svg,
  &.large label:after,
  &.large label:before {
    font-size: 1.8em;
    top: calc((0% - (100% - 0.5em)) - 35%);
  }
  &.large label {
    text-indent: 2.5em;
  }
  &.large i::before,
  &.large i::after {
    font-size: 1.6em;
    padding-left: 0.25em;
  }
  &.large .toggle::before,
  &.large .toggle::after {
    font-size: 1.8em;
    top: calc((0% - (100% - 0.35em)) - 15%);
  }
  &.large .toggle label {
    text-indent: 5em;
  }
`;

export const RadioCheckWrapper = styled.div`
    display: inline-block;
    width: 100%;
    ${(props) =>
      props.inline &&
      css`
        width: auto;
        margin-right: 60px;
        margin-left: 10px;
      `}
    font-size: ${Theme.PrimaryFontSize};
    position: relative;
    transition: ${Theme.PrimaryTransition};
    ${(props) =>
      props.forminput &&
      css`
        margin-bottom: 15px;
        margin-top: 10px;
      `}
    & .state label:before{
        border-color: ${Theme.PrimaryColor};
    }
    & .p-default input:checked~.state label:after {
        background-color: ${Theme.PrimaryColor};
    }
  `;

export const SimpleCheckbox = ({ inline, ...otherProps }) => {
  return (
    <RadioCheckWrapper inline={inline} {...otherProps}>
      <Pretty
        className={`pretty  ${
          otherProps.type === "radio" && "p-default p-round p-smooth"
        } ${otherProps.type === "checkbox" && "p-default  p-smooth"} ${
          otherProps.type === "switch" && "p-switch p-fill"
        } ${otherProps.large && "large"} ${otherProps.prettyclassnames}`}
        disabled={otherProps.disabled}
      >
        <input
          {...otherProps}
          type={otherProps.type === "radio" ? "radio" : "checkbox"}
          large={null}
        />
        <div
          className={`state ${
            otherProps.type === "switch" && "toggle p-primary"
          } ${otherProps.type === "checkbox" && "p-primary"}`}
        >
          <label>{otherProps.label}</label>
        </div>
      </Pretty>
    </RadioCheckWrapper>
  );
};

SimpleCheckbox.propTypes = {
  type: PropTypes.string.isRequired,
  large: PropTypes.bool,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  prettyclassnames: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  inline: PropTypes.bool,
  onClick: PropTypes.func,
};

SimpleCheckbox.defaultProps = {
  inline: false,
  large: false,
  disabled: false,
  icon: "icon icon-ok-2",
  prettyclassnames: null,
  label: "",
  onChange: () => null,
};
export const InputUploaderWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: 0;
  margin: 0;
  ${Button} {
    position: relative;
    z-index: 0;
  }
  &:hover {
    ${Button} {
      background-color: ${darken(0.2, Theme.PrimaryColor)};
    }
  }
  & input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
  }
`;

export const InputUploader = (props) => {
  return (
    <InputUploaderWrapper>
      <Button>{props.label}</Button>
      <input {...props} />
    </InputUploaderWrapper>
  );
};

export const ImageLoader = styled.div`
  border: 1px dashed ${lighten(0.6, Theme.PrimaryFontColor)};
  padding: 20px;
  min-height: 180px;
  border-radius: ${Theme.SecondaryRadius};
  text-align: center;

  & img {
    height: 180px;
    // width: 200px;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
