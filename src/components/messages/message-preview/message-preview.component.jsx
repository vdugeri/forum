import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import {
  PreviewContainer,
  PreviewHeader,
  PreviewImage,
  PreviewDesignation,
  PreviewText,
  PreviewDate
} from "components/messages/message-preview/message-preview.styles";

import { setCurrentMessage } from "redux/messages/messages.actions";

const MessagePreview = ({ message, readMessage }) => (
  <PreviewContainer
    className="message-preview"
    onClick={() => readMessage(message)}
  >
    <PreviewHeader>
      <PreviewImage>
        {message.sender.image ? (
          <img src={message.sender.image} alt={message.sender.firstName} />
        ) : (
          message.sender.firstName.substring(0, 1)
        )}
      </PreviewImage>
      <PreviewDesignation>{message.sender.firstName}</PreviewDesignation>
      <PreviewDate>{moment(message.created_at).calendar()}</PreviewDate>
    </PreviewHeader>
    <PreviewText>{message.text.substring(0, 200)}...</PreviewText>
  </PreviewContainer>
);

const mapDispatchToProps = dispatch => ({
  readMessage: message => dispatch(setCurrentMessage(message))
});

export default connect(null, mapDispatchToProps)(MessagePreview);
