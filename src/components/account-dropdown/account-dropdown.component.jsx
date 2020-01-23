import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ForwardLink from "components/forward-link/forward-link.component";
import {
  LogoutLink,
  LinksWrapper,
  UsernameWrapper,
  Container
} from "components/account-dropdown/account-dropdown.styles";
import {
  toggleAccountDropdown,
  userSignoutStart
} from "redux/user/user.actions";

const AccountDropdown = ({ user, toggleDropdown, onSignoutStart }) => (
  <Container onMouseLeave={toggleDropdown} onClick={toggleDropdown}>
    <UsernameWrapper>
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <Link to="/account">Account settings &amp; payments</Link>
    </UsernameWrapper>
    <LinksWrapper className="account-dropdown__links">
      <ForwardLink linkText="My Posts" linkUrl={`/dashboard/posts`} />
      <ForwardLink linkText="Messages" linkUrl="/dashboard/messages" />
      <ForwardLink linkText="Help &amp; contact" linkUrl="/help-contact" />
    </LinksWrapper>
    <LogoutLink onClick={onSignoutStart}>Log out</LogoutLink>
  </Container>
);

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleAccountDropdown()),
  onSignoutStart: () => dispatch(userSignoutStart())
});

export default connect(null, mapDispatchToProps)(AccountDropdown);
