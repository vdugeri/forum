import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import WelcomeModal from "../../components/welcome-modal/welcome-modal.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { ReactComponent as WavingHand } from "../../assets/icons/waving-hand.svg";

import profileImage from "../../assets/images/profile_image.jpg";
import Topic from "../../components/topic/topic.component";

import { selectTopicList } from "../../redux/topics/topics.selectors";

import "./dashboard.styles.scss";

const user = { firstName: "Verem" };
const carePerson = { name: "Kaitlyn", image: profileImage };

const Dashboard = ({ showWelcome, topics }) => (
  <div className="dashboard">
    {showWelcome ? (
      <WelcomeModal newUser={user} carePerson={carePerson} />
    ) : null}
    <div className="dashboard__waving-hand">
      <WavingHand />
    </div>

    <h2 className="dashboard__salutation">Hi, {user.firstName}</h2>
    <p className="dashboard__welcome-text">
      Welcome to Tales, the digital home for educational content.
    </p>
    <h2 className="dashboard__intro">What can we help you with?</h2>
    <div className="dashboard__topics">
      {topics.map(topic => (
        <Topic topic={topic} key={topic.id} />
      ))}
    </div>
    <span className="dashboard__info-header">Just browsing?</span>
    <p className="dashboard__info">
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

export default connect(mapStateTopProps)(Dashboard);
