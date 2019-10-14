import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import { setCurrentMessage } from "../../redux/messages/messages.actions";

import "./message-preview.styles.scss";

const MessagePreview = ({ message, readMessage }) => (
  <div className="message-preview" onClick={() => readMessage(message)}>
    <div className="message-preview__header">
      <div className="message-preview__image">
        <img src={message.sender.image} alt={message.sender.username} />
      </div>
      <div className="message-preview__designation">
        {message.sender.designation}
      </div>
      <div className="message-preview__date">
        {moment(message.createdAt).calendar()}
      </div>
    </div>
    <div className="message-preview__sender-name">{`${message.sender.firstName} ${message.sender.lastName}`}</div>
    <p className="message-preview__text">{message.text.substring(0, 200)}...</p>
  </div>
);

const mapDispatchToProps = dispatch => ({
  readMessage: message => dispatch(setCurrentMessage(message))
});

export default connect(
  null,
  mapDispatchToProps
)(MessagePreview);