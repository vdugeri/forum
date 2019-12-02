import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter, Link } from "react-router-dom";

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

import "components/header/header.styles.scss";

const Header = ({
  history,
  isDropdownOpen,
  toggleTopicsDropdown,
  isAccountOpen,
  currentUser
}) => (
  <div className="header">
    <div className="header__logo">
      <Link to="/">
        <img src={logo} alt="folktales logo" />
      </Link>
    </div>
    <div className="header__nav">
      {currentUser && <div className="header__nav--item">Find Experts</div>}
      <div onClick={toggleTopicsDropdown} className="header__nav--item">
        Community
      </div>
      {isDropdownOpen && <TopicsDropdown />}
      {isAccountOpen && <AccountDropdown user={currentUser.user} />}

      {!currentUser ? (
        <React.Fragment>
          <div className="header__nav--item">
            <CustomButton onClick={() => history.push("/login")} ghost>
              Sign in
            </CustomButton>
          </div>
          <div className="header__nav--item">
            <CustomButton primary onClick={() => history.push("/register")}>
              Create account
            </CustomButton>
          </div>
        </React.Fragment>
      ) : (
        <>
          <UserAvatar user={currentUser.user} />
        </>
      )}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  isDropdownOpen: selectIsOpen,
  currentUser: selectCurrentUser,
  isAccountOpen: selectIsAccountOpen
});

const mapDispatchToProps = dispatch => ({
  toggleTopicsDropdown: () => dispatch(toggleTopicsDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
