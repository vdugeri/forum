import React from "react";
import styled, { keyframes } from "styled-components";

const Overlay = styled.div`
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

const spin = keyframes`
  to {
    -webkit-transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: ${spin} 1s ease-in-out infinite;
`;

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  if (isLoading)
    return (
      <Overlay>
        <Container></Container>
      </Overlay>
    );

  return <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
