import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser, selectIsLoading } from "redux/user/user.selectors";
import { Button, Input, Tag } from "components/shared";
import Dropdown from "components/shared/dropdown/dropdown.component";
import Loader from "components/shared/loader/loader.component";

import {
  EditAccountWrapper,
  AccountHeading,
  SkillsWrapper,
  EditForm,
} from "components/accounts/edit-account/edit-account-styles";

import { updateUserAccountStart } from "redux/user/user.actions";

const locations = [
  { value: "Garki", id: 1 },
  { value: "Wuse", id: 2 },
  { value: "Gudu", id: 3 },
  { value: "Lugbe", id: 4 },
  { value: "Gwarimpa", id: 5 },
  { value: "Galadimawa", id: 6 },
  { value: "Gwagwalada", id: 7 },
  { value: "Bwari", id: 8 },
  { value: "Kubwa", id: 9 },
];

const EditAccount = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const { user } = currentUser || {};

  const [userData, setUserData] = useState(user);
  const [dirty, setDirty] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAccountStart(userData));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
    setDirty(true);
  };

  const handleClose = (skill) => {
    let otherSkills = new Set(userData.otherSkills);
    otherSkills.delete(skill);
    otherSkills = Array.from(otherSkills);
    setUserData({ ...userData, otherSkills });
    setDirty(true);
  };

  const addSkill = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const otherSkills = userData.otherSkills;
      setUserData({ ...userData, otherSkills: [...otherSkills, newSkill] });
      setNewSkill("");
      setDirty(true);
    }
  };

  const {
    emailAddress,
    phone,
    firstName,
    lastName,
    location,
    primarySkill,
    otherSkills,
  } = userData;

  return (
    <>
      {isLoading && <Loader />}
      <EditAccountWrapper>
        <AccountHeading>Account Settings</AccountHeading>
        <EditForm onSubmit={handleSubmit}>
          <Input
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleChange}
            label="First Name"
          />
          <Input
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleChange}
            label="Last Name"
          />
          <Input
            name="emailAddress"
            type="email"
            value={emailAddress}
            onChange={handleChange}
            label="Email Address"
          />
          <Input
            name="phone"
            type="text"
            value={phone}
            onChange={handleChange}
            label="Phone Number"
          />
          <Input
            name="primarySkill"
            type="text"
            value={primarySkill}
            onChange={handleChange}
            label="Primary Skill"
          />
          <Dropdown
            name="location"
            value={location}
            onChange={handleChange}
            label="Location"
            options={locations}
            selected={location}
          />

          <Input
            label="Add Skills"
            name="otherSkills"
            onKeyDown={addSkill}
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />

          <SkillsWrapper>
            {otherSkills.map((skill, index) => (
              <Tag
                label={skill}
                closeable={true}
                key={index}
                onClose={handleClose}
              />
            ))}
          </SkillsWrapper>

          <Button primary disabled={!dirty}>
            Save Changes
          </Button>
        </EditForm>
        <h3>Payment Settings</h3>
      </EditAccountWrapper>
    </>
  );
};

export default EditAccount;
