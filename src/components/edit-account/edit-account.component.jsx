import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser, selectIsLoading } from "redux/user/user.selectors";
import Input from "components/custom-input/custom-input.component";
import Button from "components/custom-button/custom-button.component";
import Dropdown from "components/dropdown/dropdown.component";
import Loader from "components/loader/loader.component";

import { updateUserAccountStart } from "redux/user/user.actions";

import "./edit-account.styles.scss";

const locations = [
  { value: "Garki", id: 1 },
  { value: "Wuse", id: 2 },
  { value: "Gudu", id: 3 },
  { value: "Lugbe", id: 4 },
  { value: "Gwarimpa", id: 5 },
  { value: "Galadimawa", id: 6 },
  { value: "Gwagwalada", id: 7 },
  { value: "Bwari", id: 8 },
  { value: "Kubwa", id: 9 }
];

const EditAccount = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const { user } = currentUser || {};

  const [userData, setUserData] = useState(user);
  const [dirty, setDirty] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateUserAccountStart(userData));
  };
  const handleChange = e => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
    setDirty(true);
  };

  const {
    emailAddress,
    phone,
    firstName,
    lastName,
    location,
    primarySkill
  } = userData;

  return (
    <>
      {isLoading && <Loader />}
      <div className="edit-account">
        <h3>Account Settings</h3>
        <form onSubmit={handleSubmit}>
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

          <Button primary disabled={!dirty}>
            Save Changes
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditAccount;
