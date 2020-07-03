import React from "react";
import { connect } from "react-redux";
import {
  UserInitials,
  AvatarWrapper
} from "components/users/user-avatar/user-avatar.styles";
import titleCase from "utils/title-case";
import { toggleAccountDropdown } from "redux/user/user.actions";

const UserAvatar = ({ user, toggleDropdown }) => (
  <AvatarWrapper onClick={toggleDropdown}>
    {user && user.image ? (
      <img src={user.image} alt={user.firstName} />
    ) : (
      <UserInitials>{titleCase(user.firstName.substring(0, 1))}</UserInitials>
    )}
  </AvatarWrapper>
);

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleAccountDropdown())
});

export default connect(null, mapDispatchToProps)(UserAvatar);
