import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Forum from "./pages/forum/forum.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/forum" component={Forum} />
      </Switch>
    </div>
  );
}

export default App;
