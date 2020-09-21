import React from "react";
import {
  Container,
  IconContainer,
  Label,
} from "components/help-subject/help-subject.styles";
import { Gap } from "components/messages/message-modal/message-modal.styles";

const HelpSubject = ({ subject, handleClick }) => (
  <Container onClick={handleClick}>
    <IconContainer>
      <img src={subject.iconUrl} alt={`${subject.name} icon`} />
    </IconContainer>
    <Gap height="30px" />
    <Label>{subject.name}</Label>
  </Container>
);

export default HelpSubject;
