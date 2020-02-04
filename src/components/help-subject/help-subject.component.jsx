import React from "react";
import {
  Container,
  IconContainer,
  Label
} from "components/help-subject/help-subject.styles";

const HelpSubject = ({ subject, handleClick }) => (
  <Container onClick={handleClick}>
    <IconContainer>
      <img src={subject.icon} alt={`${subject.name} icon`} />
    </IconContainer>
    <Label>{subject.name}</Label>
  </Container>
);

export default HelpSubject;
