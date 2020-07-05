import React, { useState } from "react";
import { withRouter } from "react-router-dom";
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
  Paragraph,
} from "components/experts/expert-profile/expert-profile.styles";
import { Button } from "components/shared";
import MessageModal from "components/messages/message-modal/message-modal.component";

const ExpertProfile = ({ expert, onClose, history }) => {
  const [sendMessage, setSendMessage] = useState(false);
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
          <String>Head Teacher, Physics at Mart Andrews High</String>
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
          <Button ghost onClick={() => setSendMessage(true)}>
            Message Expert
          </Button>
          <Button
            primary
            onClick={() =>
              history.push(`/booking/checkout?expert=${expert._id}`)
            }
          >
            Contact Expert
          </Button>
        </Footer>
      </ProfileContainer>
      {sendMessage && (
        <MessageModal expert={expert} onClose={() => setSendMessage(false)} />
      )}
    </ProfileOverlay>
  );
};

export default withRouter(ExpertProfile);
