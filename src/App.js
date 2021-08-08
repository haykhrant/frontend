import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Bar from "./components/Bar";
import Messages from "./components/Messages";

import { Registration } from "./screens/Registration";
import { Login } from "./screens/Login";

import "./App.css";

function App(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMessage, setIsOpenMessage] = useState(false);

  useEffect(() => {
    if (props.messageDate) {
      setIsOpenMessage(true);
    }
  }, [props.messages]);

  return (
    <>
      <Router>
        <Bar setOpenModal={setIsOpen} />
        <Switch>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" />
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
