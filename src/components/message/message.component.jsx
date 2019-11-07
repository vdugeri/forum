import React from "react";
import moment from "moment";

import "components/message/message.styles.scss";

const Message = ({ message }) => (
  <div className="message">
    <div className="message__header">
      <div className="message__header--author-image">
        {message.sender.image ? (
          <img src={message.sender.image} alt={message.sender.firstName} />
        ) : (
          message.sender.firstName.substring(0, 1)
        )}
      </div>
      <div className="message__header--date">
        {moment(message.created_at).calendar()}
      </div>
    </div>
    <div className="message__body">{message.text}</div>
  </div>
);

export default Message;
