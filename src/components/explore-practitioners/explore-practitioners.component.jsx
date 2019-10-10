import React from "react";

import ExpertPhoto from "../expert-photo/expert-photo.component";
import CustomButton from "../custom-button/custom-button.component";

import "./explore-practitioners.styles.scss";

const ExplorePractitioners = ({ topExperts }) => (
  <div className="explore">
    <div className="explore__experts">
      {topExperts.map(expert => (
        <ExpertPhoto photo={expert.photo} key={expert.id} />
      ))}
    </div>
    <h2 className="explore__heading">Need an expert's advice?</h2>
    <p className="explore__message">
      Send a private message or video chat with a variety of specialists 24/7 on
      your own time.
    </p>
    <CustomButton ghost>Explore practitioners</CustomButton>
  </div>
);

export default ExplorePractitioners;
