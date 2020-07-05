import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContainer,
  Header,
  Info,
  Gap,
  Heading,
  Label,
  CloseModal,
  IconContainer,
  FieldContainer,
} from "components/messages/message-modal/message-modal.styles";
import { Button, TextArea } from "components/shared";
import { String } from "components/experts/expert-box/expert-box.styles";

const MessageModal = ({ expert, onClose }) => {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    console.log(message);
  };
  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseModal>
          <IconContainer onClick={onClose}>&#10005;</IconContainer>
        </CloseModal>
        <Header>New Message to {expert.name}</Header>
        <Info>
          Messages are a great way to engage with experts in your own time to
          ask a private question, get continued support, and build a
          relationship.
          <Gap height="20px" />
          <String>Your first message is free</String>
        </Info>
        <Heading>Message</Heading>
        <Gap height="20px" />
        <Label>You can expect a response withing 24 hours</Label>
        <FieldContainer>
          <TextArea
            name="message"
            label="What's going on?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="8"
          />
          <Gap height="30px" />
          <Button primary onClick={sendMessage}>
            Send
          </Button>
        </FieldContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default MessageModal;
