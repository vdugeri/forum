import React from "react";
import { connect } from "react-redux";

import titleCase from "../../utils/title-case";

import { toggleAccountDropdown } from "../../redux/user/user.actions";

import "./user-avatar.styles.scss";

const UserAvatar = ({ user, toggleDropdown }) => (
  <div className="user-avatar" onClick={toggleDropdown}>
    {user.image ? (
      <img src={user.image} alt={user.username} />
    ) : (
      <div className="user-avatar__initial">
        {titleCase(user.firstName.substring(0, 1))}
      </div>
    )}
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleAccountDropdown())
});

export default connect(
  null,
  mapDispatchToProps
)(UserAvatar);
