import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./reply.styles.scss";

const Reply = ({ reply }) => (
  <div className="reply">
    <div className="reply__author">
      <div className="reply__author--image">
        <img src={reply.author.image} alt={reply.author.name} />
      </div>
      <div className="reply__author--credentials">
        <span className="name">{reply.author.name}</span>
        <span className="designation">{reply.author.designation}</span>
        {reply.author.isPractitioner ? (
          <span className="cta">Book Appointment</span>
        ) : null}
      </div>
    </div>
    <p className="reply__text">{reply.text}</p>
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
