import React from "react";
import { connect } from "react-redux";

import { Button } from "components/shared";

import { closeWelcomeModal } from "redux/user/user.actions";

import "components/home/welcome-modal/welcome-modal.styles.scss";

const WelcomeModal = ({ newUser, carePerson, closeModal }) => (
  <div className="welcome-modal__overlay">
    <div className="welcome-modal__content">
      <div className="welcome-modal__content--close" onClick={closeModal}>
        &#10005;
      </div>
      <div className="welcome-modal__profile-image">
        <img src={carePerson.image} alt={carePerson.name} />
      </div>
      <div className="welcome-modal__salutation">Hi, {newUser.firstName}</div>
      <p className="welcome-modal__message">
        I’m {carePerson.name}, your personal Vanillatots Care Coordinator.
        Welcome to Vanillatots! I’m here to answer any question and recommend
        the best experts to talk to based on your needs.
      </p>
      <p className="welcome-modal__action">
        Send me a message anytime and let me know how I can help!
      </p>
      <p>
        <span className="welcome-modal__closing-salutation">Take care,</span>
        <span className="welcome-modal__signature">{carePerson.name}</span>
      </p>

      <Button primary onClick={closeModal}>
        Got it
      </Button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeWelcomeModal()),
});

export default connect(null, mapDispatchToProps)(WelcomeModal);
