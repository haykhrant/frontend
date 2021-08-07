import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import Bar from "./components/Bar";
import { Registration } from "./screens/Registration";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Messages from "./components/Messages";

function App(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMessage, setIsOpenMessage] = useState(false);

  useEffect(() => {
    if (props.messageDate) {
      setIsOpenMessage(true);
    }
  }, [props.messageDate]);

  return (
    <>
      <Router>
        <Bar setOpenModal={setIsOpen} />
        <Switch>
          <Route path="/register">
            <Registration isOpen={isOpen} setIsOpen={setIsOpen} />
          </Route>
          <Route path="/login"/>
          <Route path="/"/>
        </Switch>
      </Router>
      {/*<Registration isOpen={isOpen} setIsOpen={setIsOpen} />*/}
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
