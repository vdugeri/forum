import React from "react";
import {
  Container,
  Number,
  IconContainer,
  Title,
  NumberContainer
} from "components/stat-container/stat-container.style";

const StatContainer = ({ number, title, children }) => (
  <Container>
    <NumberContainer>
      <Title>{title}</Title>
      <Number>{number}</Number>
    </NumberContainer>
    <IconContainer>{children}</IconContainer>
  </Container>
);

export default StatContainer;
