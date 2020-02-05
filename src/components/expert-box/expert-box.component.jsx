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
  NameContainer,
  String,
  Icon
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
      <StyledLink onClick={handleClick}>
        <String>View Profile and Availability</String>
        <Icon>&#8250;</Icon>
      </StyledLink>
    </ProfileLink>
  </Container>
);

ExpertBox.propTypes = {
  expert: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default ExpertBox;
