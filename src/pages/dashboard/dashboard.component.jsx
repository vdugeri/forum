import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import Welcome from "../../components/welcome/welcome.component";
import UserPosts from "../../components/user-posts/user-posts.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./dashboard.styles.scss";

const Dashboard = ({ currentUser, match }) => {
  console.log(match);
  return (
    <Switch>
      <Route path={`${match.path}`} component={Welcome} />
      <Route
        path={`${match.path}/posts`}
        component={() =>
          currentUser ? <UserPosts /> : <Redirect to="/login" />
        }
      />
    </Switch>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(withRouter(Dashboard));
