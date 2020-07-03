import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import Header from "components/header/header.component";
import Homepage from "pages/homepage/homepage.component";
import Login from "pages/login/login.component";
import Register from "pages/register/register.component";
import CreatePost from "pages/create-post/create-post.component";
import Forum from "pages/forum/forum.component";
import PostPage from "pages/post-page/post-page.component";
import Dashboard from "pages/dashboard/dashboard.component";
import Messages from "pages/messages/messages.component";
import WithSpinner from "components/shared/with-spinner/with-spinner.component";
import UserPosts from "components/posts/user-posts/user-posts.component";
import AccountPage from "pages/account/account.component";
import BookExpert from "pages/book/book.component";
import EditAccount from "components/accounts/edit-account/edit-account.component";
import ExpertList from "pages/expert-list/expert-list.component";
import Checkout from "pages/checkout/checkout.component";
import AdminLogin from "pages/admin/login.component";
import AdminDashboard from "pages/admin/dashboard.component";

import { selectCurrentUser, selectIsLoading } from "redux/user/user.selectors";
import { selectIsFetchingTopics } from "redux/topics/topics.selectors";
import { startFetchTopics } from "redux/topics/topics.actions";
import { selectIsPostLoading } from "redux/posts/post.selectors";

import "./App.css";

const RegisterWithSpinner = WithSpinner(Register);
const LoginWithSpinner = WithSpinner(Login);
const HomePageWithSpinner = WithSpinner(Homepage);

function App({
  currentUser,
  isUserLoading,
  isFetchingTopics,
  onStartFetchTopics,
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
          render={(props) => (
            <HomePageWithSpinner isLoading={isFetchingTopics} {...props} />
          )}
        />
        <Route
          path="/login"
          component={(props) =>
            !currentUser ? (
              <LoginWithSpinner isLoading={isUserLoading} {...props} />
            ) : (
              <Redirect to="/dashboard" />
            )
          }
        />
        <Route
          path="/register"
          component={(props) =>
            !currentUser ? (
              <RegisterWithSpinner isLoading={isUserLoading} {...props} />
            ) : (
              <Redirect to="/dashboard" />
            )
          }
        />
        <Route
          path="/posts/create"
          component={(props) =>
            !currentUser ? (
              <LoginWithSpinner isLoading={isUserLoading} {...props} />
            ) : (
              <CreatePost />
            )
          }
        />
        <Route path="/forum/:topic" component={Forum} />
        <Route path="/posts/:id" component={PostPage} />
        <Route
          exact
          path="/dashboard/"
          component={() =>
            currentUser ? <Dashboard /> : <Redirect to="/login" />
          }
        />
        <Route
          path="/dashboard/posts"
          component={() => (currentUser ? <UserPosts /> : <Redirect to="/" />)}
        />
        <Route
          path="/dashboard/messages"
          component={() => (currentUser ? <Messages /> : <Redirect to="/" />)}
        />

        <Route
          path="/account"
          exact
          component={() =>
            currentUser ? <AccountPage /> : <Redirect to="/login" />
          }
        />
        <Route
          path="/account/edit"
          exact
          component={() =>
            currentUser ? <EditAccount /> : <Redirect to="/login" />
          }
        />
        <Route
          exact
          path="/dashboard/book"
          component={() =>
            currentUser ? <BookExpert /> : <Redirect to="/login" />
          }
        />
        <Route
          path="/dashboard/book/:subject"
          component={(props) =>
            currentUser ? <ExpertList {...props} /> : <Redirect to="/login" />
          }
        />
        <Route
          path="/booking/checkout"
          component={(props) =>
            currentUser ? <Checkout {...props} /> : <Redirect to="/login" />
          }
        />
        <Route
          path="/admin"
          component={(props) =>
            currentUser && currentUser.user.isAdmin ? (
              <AdminDashboard {...props} />
            ) : (
              <AdminLogin />
            )
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isUserLoading: selectIsLoading,
  currentUser: selectCurrentUser,
  isFetchingTopics: selectIsFetchingTopics,
  isPostsLoading: selectIsPostLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onStartFetchTopics: () => dispatch(startFetchTopics()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
