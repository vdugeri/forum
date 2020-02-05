import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { ReactComponent as WavingHand } from "assets/icons/waving-hand.svg";
import WelcomeModal from "components/welcome-modal/welcome-modal.component";
import profileImage from "assets/images/profile_image.jpg";

import { selectTopicList } from "redux/topics/topics.selectors";

import {
  WelcomeWrapper,
  HandIconContainer,
  WelcomeSalutation,
  Text,
  Intro,
  TopicsContainer,
  InfoHeader,
  Info,
  StyledLink,
  StyledButton
} from "components/welcome/welcome.styles.jsx";
import {
  selectCurrentUser,
  selectShowWelcomeModal
} from "redux/user/user.selectors";
import useFetch from "effects/use-fetch.effect";
import Loader from "components/loader/loader.component";
import HelpSubject from "components/help-subject/help-subject.component";

const carePerson = { name: "Kaitlyn", image: profileImage };

const Welcome = ({ showWelcome, currentUser, history }) => {
  const [{ data: topics, loading }] = useFetch("/topics", []);
  return (
    <WelcomeWrapper>
      {showWelcome ? (
        <WelcomeModal newUser={currentUser} carePerson={carePerson} />
      ) : null}
      <HandIconContainer>
        <WavingHand />
      </HandIconContainer>

      <WelcomeSalutation>Hi, {currentUser.user.firstName}</WelcomeSalutation>
      <Text>
        Welcome to Vanillatots, the digital home for educational content.
      </Text>
      <Intro>What can we help you with?</Intro>
      {loading ? (
        <Loader />
      ) : (
        <TopicsContainer>
          {topics.map(topic => (
            <HelpSubject
              subject={topic}
              key={topic._id}
              handleClick={() => history.push(`/dashboard/book/${topic.name}`)}
            />
          ))}
        </TopicsContainer>
      )}
      <InfoHeader>Just browsing?</InfoHeader>
      <Info>
        Check out our Community Forum. Ask anonymous questions, get answers from
        professionals and other learners who've been there.
      </Info>
      <StyledLink to="/">
        <StyledButton ghost>Visit the Forum</StyledButton>
      </StyledLink>
    </WelcomeWrapper>
  );
};

const mapStateTopProps = createStructuredSelector({
  topics: selectTopicList,
  currentUser: selectCurrentUser,
  showWelcome: selectShowWelcomeModal
});

export default connect(mapStateTopProps)(withRouter(Welcome));
