import React from "react";
import moment from "moment";
import {
  MessageContainer,
  MessageHeader,
  MessageAuthorImage,
  MessageBody
} from "components/message/message.styles";

const Message = ({ message }) => (
  <MessageContainer>
    <MessageHeader>
      <MessageAuthorImage>
        {message.sender.image ? (
          <img src={message.sender.image} alt={message.sender.firstName} />
        ) : (
          message.sender.firstName.substring(0, 1)
        )}
      </MessageAuthorImage>
      <div>{moment(message.created_at).calendar()}</div>
    </MessageHeader>
    <MessageBody>{message.text}</MessageBody>
  </MessageContainer>
);

export default Message;
