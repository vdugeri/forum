import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter, Link } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderLogo,
  Nav,
  NavItem
} from "components/header/header.styles";

import logo from "assets/logo.png";

import CustomButton from "components/custom-button/custom-button.component";
import TopicsDropdown from "components/topics-dropdown/topics-dropdown.component";
import AccountDropdown from "components/account-dropdown/account-dropdown.component";
import UserAvatar from "components/user-avatar/user-avatar.component";

import { selectIsOpen } from "redux/topics/topics.selectors";
import { toggleTopicsDropdown } from "redux/topics/topics.actions";
import {
  selectCurrentUser,
  selectIsAccountOpen
} from "redux/user/user.selectors";

const Header = ({
  history,
  isDropdownOpen,
  toggleTopicsDropdown,
  isAccountOpen,
  currentUser
}) => {
  const {
    location: { pathname }
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
        {isAccountOpen && <AccountDropdown user={currentUser.user} />}

        {!isAdmin ? (
          <>
            {!currentUser ? (
              <React.Fragment>
                <NavItem>
                  <CustomButton onClick={() => history.push("/login")} ghost>
                    Sign in
                  </CustomButton>
                </NavItem>
                <NavItem>
                  <CustomButton
                    primary
                    onClick={() => history.push("/register")}
                  >
                    Create account
                  </CustomButton>
                </NavItem>
              </React.Fragment>
            ) : (
              <>{currentUser && <UserAvatar user={currentUser.user} />}</>
            )}
          </>
        ) : (
          <>{currentUser && <UserAvatar user={currentUser.user} />}</>
        )}
      </Nav>
    </HeaderWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  isDropdownOpen: selectIsOpen,
  currentUser: selectCurrentUser,
  isAccountOpen: selectIsAccountOpen
});

const mapDispatchToProps = dispatch => ({
  toggleTopicsDropdown: () => dispatch(toggleTopicsDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
