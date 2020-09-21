import React from "react";

import ExpertPhoto from "components/experts/expert-photo/expert-photo.component";
import { Button } from "components/shared";
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
      {topExperts.data.map((expert) => (
        <ExpertPhoto photo={expert.image} key={expert._id} />
      ))}
    </Experts>
    <ExpertsHeading>Need an expert's advice?</ExpertsHeading>
    <Message>
      Send a private message or video chat with a variety of specialists 24/7 on
      your own time.
    </Message>
    <Button ghost={true}>
      <StyledLink to="/dashboard/book">Explore practitioners</StyledLink>
    </Button>
  </ExploreExpertsWrapper>
);

export default ExplorePractitioners;
