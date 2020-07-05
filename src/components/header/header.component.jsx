import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter, Link } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderLogo,
  Nav,
  NavItem,
} from "components/header/header.styles";

import logo from "assets/logo.png";

import { Button } from "components/shared";
import TopicsDropdown from "components/topics/topics-dropdown/topics-dropdown.component";
import AccountDropdown from "components/accounts/account-dropdown/account-dropdown.component";
import UserAvatar from "components/users/user-avatar/user-avatar.component";

import { selectIsOpen } from "redux/topics/topics.selectors";
import { toggleTopicsDropdown } from "redux/topics/topics.actions";
import {
  selectCurrentUser,
  selectIsAccountOpen,
} from "redux/user/user.selectors";

const Header = ({
  history,
  isDropdownOpen,
  toggleTopicsDropdown,
  isAccountOpen,
  currentUser,
}) => {
  const {
    location: { pathname },
  } = history;
  const isAdmin = pathname.indexOf("admin") !== -1;
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Link to="/">
          <img src={logo} alt="vanillatots logo" />
        </Link>
      </HeaderLogo>
      <Nav>
        {currentUser && (
          <NavItem onClick={() => history.push("/dashboard/book")}>
            Find Experts
          </NavItem>
        )}
        <NavItem onClick={toggleTopicsDropdown}>Community</NavItem>
        {isDropdownOpen && <TopicsDropdown />}
        {isAccountOpen && <AccountDropdown user={currentUser} />}

        {!isAdmin ? (
          <>
            {!currentUser ? (
              <React.Fragment>
                <NavItem>
                  <Button onClick={() => history.push("/login")} ghost>
                    Sign in
                  </Button>
                </NavItem>
                <NavItem>
                  <Button primary onClick={() => history.push("/register")}>
                    Create account
                  </Button>
                </NavItem>
              </React.Fragment>
            ) : (
              <>{currentUser && <UserAvatar user={currentUser} />}</>
            )}
          </>
        ) : (
          <>{currentUser && <UserAvatar user={currentUser} />}</>
        )}
      </Nav>
    </HeaderWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  isDropdownOpen: selectIsOpen,
  currentUser: selectCurrentUser,
  isAccountOpen: selectIsAccountOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTopicsDropdown: () => dispatch(toggleTopicsDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
