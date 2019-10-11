import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./welcome-modal.styles.scss";

const WelcomeModal = ({ newUser, carePerson }) => (
  <div className="welcome-modal__overlay">
    <div className="welcome-modal__content">
      <div className="welcome-modal__content--close">&#10005;</div>
      <div className="welcome-modal__profile-image">
        <img src={carePerson.image} alt={carePerson.name} />
      </div>
      <div className="welcome-modal__salutation">Hi, {newUser.firstName}</div>
      <p className="welcome-modal__message">
        I’m {carePerson.name}, your personal Tales Care Coordinator. Welcome to
        Maven! I’m here to answer any question and recommend the best
        practitioners to talk to based on your needs.
      </p>
      <p className="welcome-modal__action">
        Send me a message anytime and let me know how I can help!
      </p>
      <p>
        <span className="welcome-modal__closing-salutation">Take care,</span>
        <span className="welcome-modal__signature">{carePerson.name}</span>
      </p>

      <CustomButton primary>Got it</CustomButton>
    </div>
  </div>
);

export default WelcomeModal;
