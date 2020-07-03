import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/user.selectors";
import { Link } from "react-router-dom";
import {
  SettingsWrapper,
  SettingsHeading,
  SettingsTitle,
  SettingsContainer,
  SettingsBlock,
  BlockSection,
  SkillTags,
} from "components/accounts/account-settings/account-settings.styles";

import Chip from "components/shared/chip/chip.component";
import Button from "components/shared/custom-button/custom-button.component";

const AccountSettings = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { user } = currentUser;

  return (
    <SettingsWrapper className="account-settings">
      <SettingsHeading>Account Settings</SettingsHeading>
      <SettingsTitle>{`${user.firstName} ${user.lastName}`}</SettingsTitle>
      <SettingsContainer>
        <SettingsBlock>
          <BlockSection>
            <h4>Email:</h4>
            {user.emailAddress}
          </BlockSection>
          <BlockSection>
            <h4>Password:</h4> ********
          </BlockSection>
          <BlockSection>
            <h4>Access Level:</h4>
            {user.type}
          </BlockSection>
        </SettingsBlock>
        <SettingsBlock>
          <BlockSection>
            <h4>Phone:</h4>
            {user.phone}
          </BlockSection>
          <BlockSection>
            <h4>Location:</h4>
            {user.location}
          </BlockSection>
        </SettingsBlock>
        <SettingsBlock>
          <BlockSection>
            <h4>Primary Skill:</h4>
            <Chip label={user.primarySkill} />
          </BlockSection>
        </SettingsBlock>
        <SettingsBlock>
          <h4>Other Skills:</h4>
          <SkillTags>
            {user.otherSkills.map((skill, index) => (
              <Chip label={skill} key={index} />
            ))}
          </SkillTags>
        </SettingsBlock>
        <SettingsBlock>
          <Button primary>
            <Link to="account/edit">Edit Account</Link>
          </Button>
        </SettingsBlock>
      </SettingsContainer>
    </SettingsWrapper>
  );
};

export default AccountSettings;
