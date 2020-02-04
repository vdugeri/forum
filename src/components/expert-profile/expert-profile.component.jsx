import React from "react";
import { Button } from "components/custom-button/custom-button-styles";
import {
  ProfileOverlay,
  ProfileContainer,
  HeaderContainer,
  ExpertName,
  Designation,
  Qualifications,
  String,
  Experience,
  Heading,
  Education,
  ExperienceYears,
  Footer,
  CloseIcon,
  ExpertPhoto,
  About,
  Paragraph
} from "components/expert-profile/expert-profile.styles";

const ExpertProfile = ({ expert, onClose }) => {
  return (
    <ProfileOverlay>
      <ProfileContainer>
        <CloseIcon onClick={onClose}>&#10005;</CloseIcon>
        <HeaderContainer>
          <ExpertPhoto>
            <img src={expert.image} alt="expert" />
          </ExpertPhoto>
          <ExpertName>{expert.name}</ExpertName>
          <Designation>{expert.designation}</Designation>
        </HeaderContainer>
        <Qualifications>
          <Heading>Qualifications</Heading>
          <String>Bsc</String>
          <String>Msc</String>
          <String>Ph.D.</String>
        </Qualifications>
        <Experience>
          <Heading>Experience</Heading>
          <String>Head Teacher, Physicas at NYU</String>
        </Experience>
        <Education>
          <Heading>Education</Heading>
          <String>Chamberlain University College</String>
          <String>Massachussets Institute of Technology</String>
        </Education>
        <ExperienceYears>
          <Heading>Years of experience</Heading>
          <String>8 Years</String>
        </ExperienceYears>
        <About>
          <Heading>About {expert.name}</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            illum hic ex excepturi adipisci repudiandae, sequi rem eos beatae
            ullam tenetur quia deleniti harum veniam numquam praesentium modi.
            Autem, maxime.
          </Paragraph>
        </About>
        <Footer>
          <Button ghost>Message Expert</Button>
          <Button primary>Contact Expert</Button>
        </Footer>
      </ProfileContainer>
    </ProfileOverlay>
  );
};

export default ExpertProfile;
