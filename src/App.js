import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Forum from "./pages/forum/forum.component";
import Login from "./pages/login/login.component";
import Register from "./pages/register/register.component";
import CreatePost from "./pages/create-post/create-post.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Forum} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/posts/create" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
