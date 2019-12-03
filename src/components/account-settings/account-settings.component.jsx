import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/user.selectors";
import { Link } from "react-router-dom";

import Chip from "components/chip/chip.component";
import Button from "components/custom-button/custom-button.component";

import "./account-settings.styles.scss";

const AccountSettings = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { user } = currentUser;

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      <div className="account-settings__name">{`${user.firstName} ${user.lastName}`}</div>
      <div className="account-settings__container">
        <div className="account-settings__block">
          <span>
            <h4>Email:</h4>
            {user.emailAddress}
          </span>
          <span>
            <h4>Password:</h4> ********
          </span>
          <span>
            <h4>Access Level:</h4>
            {user.type}
          </span>
        </div>
        <div className="account-settings__block">
          <span>
            <h4>Phone:</h4>
            {user.phone}
          </span>
          <span>
            <h4>Location:</h4>
            {user.location}
          </span>
        </div>
        <div className="account-settings__block">
          <span>
            <h4>Primary Skill:</h4>
            <Chip label={user.primarySkill} />
          </span>
        </div>
        <div className="account-settings__block">
          <h4>Other Skills:</h4>
          <span className="tags">
            {user.otherSkills.map((skill, index) => (
              <Chip label={skill} key={index} />
            ))}
          </span>
        </div>
        <div className="account-settings__block">
          <Button primary>
            <Link to="account/edit">Edit Account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
