import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import Login from "./pages/login/login.component";
import Register from "./pages/register/register.component";
import CreatePost from "./pages/create-post/create-post.component";
import Forum from "./pages/forum/forum.component";
import PostPage from "./pages/post-page/post-page.component";
import Dashboard from "./pages/dashboard/dashboard.component";
import Messages from "./pages/messages/messages.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/posts/create" component={CreatePost} />
        <Route path="/forum/:topic" component={Forum} />
        <Route path="/posts/:id" component={PostPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/messages" component={Messages} />
      </Switch>
    </div>
  );
}

export default App;
