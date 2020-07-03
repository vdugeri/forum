import React from "react";
import moment from "moment";

import CustomButton from "components/shared/custom-button/custom-button.component";

import "components/replies/reply/reply.styles.scss";

const Reply = ({ reply }) => (
  <div className="reply">
    <div className="reply__author">
      <div className="reply__author--image">
        {reply.author.image ? (
          <img src={reply.author.image} alt={reply.author.name} />
        ) : (
          <span>{reply.author.firstName.substring(0, 1)}</span>
        )}
      </div>
      <div className="reply__author--credentials">
        <span className="name">{reply.author.firstName}</span>
        <span className="designation">
          {moment(reply.created_at).calendar()}
        </span>
        {reply.author.isPractitioner ? (
          <span className="cta">Book Appointment</span>
        ) : null}
      </div>
    </div>
    <p
      className="reply__text"
      dangerouslySetInnerHTML={{ __html: reply.text }}
    ></p>
    <div className="reply__cta">
      {reply.author.isPractitioner ? (
        <div>
          <span>
            Have more questions for {reply.author.name.split(" ")[0]}?
          </span>
          <CustomButton ghost>Send a private message</CustomButton>
        </div>
      ) : null}
    </div>
  </div>
);

export default Reply;
