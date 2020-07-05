import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
to {
      -webkit-transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: ${spin} 1s ease-in-out infinite;
  -webkit-animation: ${spin} 1s ease-in-out infinite;
`;

export const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

const Loader = () => (
  <SpinnerOverlay>
    <Spinner></Spinner>
  </SpinnerOverlay>
);

export default Loader;
