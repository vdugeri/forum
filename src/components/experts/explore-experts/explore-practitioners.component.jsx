import React from "react";

import ExpertPhoto from "components/experts/expert-photo/expert-photo.component";
import CustomButton from "components/shared/custom-button/custom-button.component";
import {
  ExploreExpertsWrapper,
  Experts,
  ExpertsHeading,
  Message,
  StyledLink,
} from "components/experts/explore-experts/explore-practitioners.styles";

const ExplorePractitioners = ({ topExperts }) => (
  <ExploreExpertsWrapper>
    <Experts>
      {topExperts.map((expert) => (
        <ExpertPhoto photo={expert.image} key={expert._id} />
      ))}
    </Experts>
    <ExpertsHeading>Need an expert's advice?</ExpertsHeading>
    <Message>
      Send a private message or video chat with a variety of specialists 24/7 on
      your own time.
    </Message>
    <CustomButton ghost={true}>
      <StyledLink to="/dashboard/book">Explore practitioners</StyledLink>
    </CustomButton>
  </ExploreExpertsWrapper>
);

export default ExplorePractitioners;
