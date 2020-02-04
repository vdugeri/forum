import React from "react";
import {
  Container,
  DetailBox,
  ExpertName,
  Designation,
  Availability,
  ProfileLink,
  ExpertPhoto,
  StyledLink,
  NameContainer
} from "components/expert-box/expert-box.styles";
import PropTypes from "prop-types";

const ExpertBox = ({ expert, handleClick }) => (
  <Container>
    <DetailBox>
      <ExpertPhoto>
        <img src={expert.image} alt="expert" />
      </ExpertPhoto>
      <NameContainer>
        <ExpertName>{expert.name}</ExpertName>
        <Designation>{expert.designation}</Designation>
      </NameContainer>
    </DetailBox>
    <Availability>Next Availability: Today at 10:00 AM</Availability>
    <ProfileLink>
      <StyledLink
        linkText="View Profile and availability"
        color="#02856E"
        onClick={handleClick}
      />
    </ProfileLink>
  </Container>
);

ExpertBox.propTypes = {
  expert: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default ExpertBox;
