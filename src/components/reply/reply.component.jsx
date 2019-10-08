import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./reply.styles.scss";

const Reply = ({ reply }) => (
  <div className="reply">
    <div className="reply__author">
      <div className="reply__author--image"></div>
      <div className="reply__author--credentials">
        <span>{reply.author.name}</span>
        <span>{reply.author.designation}</span>
        <span>Book Appointment</span>
      </div>
    </div>
    <p className="reply__text">{reply.text}</p>
    <div className="reply__cta">
      <span>Have more questions for {reply.author.name}?</span>
      <CustomButton>Send a private message</CustomButton>
    </div>
  </div>
);

export default Reply;
