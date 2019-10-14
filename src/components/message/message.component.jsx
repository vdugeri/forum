import React from "react";
import moment from "moment";

import "./message.styles.scss";

const Message = ({ message }) => (
  <div className="message">
    <div className="message__header">
      <div className="message__header--author-image">
        <img src={message.sender.image} alt={message.sender.name} />
      </div>
      <div className="message__header--date">
        {moment(message.createdAt).calendar()}
      </div>
    </div>
    <div className="message__body">{message.text}</div>
  </div>
);

export default Message;
