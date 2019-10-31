import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as WavingHand } from "../../assets/icons/waving-hand.svg";
import WelcomeModal from "../../components/welcome-modal/welcome-modal.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import profileImage from "../../assets/images/profile_image.jpg";
import Topic from "../../components/topic/topic.component";

import { selectTopicList } from "../../redux/topics/topics.selectors";

import "./welcome.styles.scss";

const user = { firstName: "Verem" };
const carePerson = { name: "Kaitlyn", image: profileImage };

const Welcome = ({ showWelcome, topics }) => (
  <div className="welcome">
    {showWelcome ? (
      <WelcomeModal newUser={user} carePerson={carePerson} />
    ) : null}
    <div className="welcome__waving-hand">
      <WavingHand />
    </div>

    <h2 className="welcome__salutation">Hi, {user.firstName}</h2>
    <p className="welcome__welcome-text">
      Welcome to Vanillatots, the digital home for educational content.
    </p>
    <h2 className="welcome__intro">What can we help you with?</h2>
    <div className="welcome__topics">
      {topics.map(topic => (
        <Topic topic={topic} key={topic._id} />
      ))}
    </div>
    <span className="welcome__info-header">Just browsing?</span>
    <p className="welcome__info">
      Check out our Community Forum. Ask anonymous questions, get answers from
      professionals and other learners who've been there.
    </p>
    <Link to="/">
      <CustomButton ghost>Visit the Forum</CustomButton>
    </Link>
  </div>
);

const mapStateTopProps = createStructuredSelector({
  topics: selectTopicList
});

export default connect(mapStateTopProps)(Welcome);
