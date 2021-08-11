import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Bar from "./components/Bar";
import Messages from "./components/Messages";

import { Registration } from "./screens/Registration";
import { Login } from "./screens/Login";

import "./App.scss";
import NotFound from "./components/NotFound404";
import Home from "./screens/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Bar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Messages time={3000} />
    </>
  );
}

export default App;
