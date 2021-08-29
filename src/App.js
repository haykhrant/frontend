import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Bar from "./components/Bar";
import Messages from "./components/Messages";
import NotFound from "./components/NotFound404";

import { Registration } from "./modals/Registration";
import { Login } from "./modals/Login";
import { Home } from "./screens/Home";

import "./App.scss";

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
