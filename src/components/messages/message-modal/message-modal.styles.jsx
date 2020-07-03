import styled from "styled-components";
import PropTypes from "prop-types";

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes unfoldIn {
    0% {
      transform: scaleY(0.005) scaleX(0);
    }
    50% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(1) scaleX(1);
    }
  }
`;
export const ModalContainer = styled.div`
  width: 35%;
  height: 68%;
  background-color: #fff;
`;

export const CloseModal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;
  font-size: 2rem;
`;

export const IconContainer = styled.span`
  cursor: pointer;
`;
export const Header = styled.div`
  padding: 0 3rem;
  font-size: 2.5rem;
  font-family: "Domaine Display Semibold", serif;
`;
export const Info = styled.div`
  padding: 1rem 3rem 2rem 3rem;
  font-size: 1.8rem;
`;
export const Gap = styled.div`
  display: block;
  height: ${props => props.height};
  width: 100%;
`;

Gap.defaultProps = {
  height: "10px"
};

Gap.propTypes = {
  height: PropTypes.string
};

export const Heading = styled.h2`
  font-size: 2rem;
  padding: 0 3rem;
`;
export const Label = styled.label`
  font-size: 1.8rem;
  padding: 1rem 3rem;
`;

export const FieldContainer = styled.div`
  padding: 1rem 3rem;
`;
