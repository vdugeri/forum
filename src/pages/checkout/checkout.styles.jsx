import styled from "styled-components";
import PropTypes from "prop-types";
import CustomButton from "components/custom-button/custom-button.component";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-self: center;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: 600px;
`;
export const Heading = styled.h2`
  font-size: 2.5rem;
  font-family: "Domaine Display Regular", serif;
  margin: 3rem 5rem;
`;
export const ExpertContainer = styled.div`
  align-items: center;
  margin-left: 5rem;
  display: flex;
`;
export const ExpertPhoto = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;
export const String = styled.span`
  font-size: ${props => props.size};
  color: ${props => props.color};
`;
String.defaultProps = {
  size: "16px",
  color: "inherit"
};

String.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
};
export const ChargeContainer = styled.div`
  margin-left: 5rem;
`;
export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  font-size: 1.8rem;
  border-top: 1px solid #ccc;
  width: 80%;
  margin-left: 5rem;
`;

export const StyledButton = styled(CustomButton)`
  width: 30%;
`;
