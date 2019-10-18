import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import Login from "./pages/login/login.component";
import Register from "./pages/register/register.component";
import CreatePost from "./pages/create-post/create-post.component";
import Forum from "./pages/forum/forum.component";
import PostPage from "./pages/post-page/post-page.component";
import Dashboard from "./pages/dashboard/dashboard.component";
import Messages from "./pages/messages/messages.component";
import WithSpinner from "./components/with-spinner/with-spinner.component";

import {
  selectCurrentUser,
  selectIsLoading
} from "./redux/user/user.selectors";
import { selectIsFetchingTopics } from "./redux/topics/topics.selectors";
import { startFetchTopics } from "./redux/topics/topics.actions";

import "./App.css";

const RegisterWithSpinner = WithSpinner(Register);
const LoginWithSpinner = WithSpinner(Login);
const HomePageWithSpinner = WithSpinner(Homepage);

function App({
  currentUser,
  isUserLoading,
  isFetchingTopics,
  onStartFetchTopics
}) {
  useEffect(() => {
    onStartFetchTopics();
  }, [onStartFetchTopics]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <HomePageWithSpinner isLoading={isFetchingTopics} {...props} />
          )}
        />
        <Route
          path="/login"
          render={props =>
            !currentUser ? (
              <LoginWithSpinner isLoading={isUserLoading} {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          path="/register"
          render={props =>
            !currentUser ? (
              <RegisterWithSpinner isLoading={isUserLoading} {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route path="/posts/create" component={CreatePost} />
        <Route path="/forum/:topic" component={Forum} />
        <Route path="/posts/:id" component={PostPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/messages" component={Messages} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isUserLoading: selectIsLoading,
  currentUser: selectCurrentUser,
  isFetchingTopics: selectIsFetchingTopics
});

const mapDispatchToProps = dispatch => ({
  onStartFetchTopics: () => dispatch(startFetchTopics())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
