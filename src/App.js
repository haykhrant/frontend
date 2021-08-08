import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Bar from "./components/Bar";
import Messages from "./components/Messages";

import { Registration } from "./screens/Registration";
import { Login } from "./screens/Login";

import "./App.css";
import NotFound from "./components/NotFound404";

function App(props) {
  const [isOpenMessage, setIsOpenMessage] = useState(false);

  useEffect(() => {
    setIsOpenMessage(true);
  }, [props.messages]);

  return (
    <>
      <Router>
        <Bar />
        <Switch>
          <Route exact path="/" />
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
      {isOpenMessage && (
        <Messages
          isOpen={isOpenMessage}
          setIsOpenMessage={setIsOpenMessage}
          messages={props.messages}
          time={2500}
        />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  const { message } = state;
  return message;
};

export default connect(mapStateToProps)(App);
