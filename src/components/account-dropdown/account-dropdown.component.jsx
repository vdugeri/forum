import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ForwardLink from "../forward-link/forward-link.component";
import {
  toggleAccountDropdown,
  userSignoutStart
} from "../../redux/user/user.actions";

import "./account-dropdown.styles.scss";

const AccountDropdown = ({ user, toggleDropdown, onSignoutStart }) => (
  <div
    className="account-dropdown"
    onMouseLeave={toggleDropdown}
    onClick={toggleDropdown}
  >
    <div className="account-dropdown__username">
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <Link to="/settings">Account settings &amp; payments</Link>
    </div>
    <div className="account-dropdown__links">
      <ForwardLink linkText="My Posts" linkUrl={`/users/${user.id}/posts`} />
      <ForwardLink linkText="Messages" linkUrl="/dashboard/messages" />
      <ForwardLink linkText="Help & contects" linkUrl="/help-contact" />
    </div>

    <div className="account-dropdown__logout" onClick={onSignoutStart}>
      Log out
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleAccountDropdown()),
  onSignoutStart: () => dispatch(userSignoutStart())
});

export default connect(
  null,
  mapDispatchToProps
)(AccountDropdown);
