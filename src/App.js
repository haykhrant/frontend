import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { Bar } from "./components/Bar";
import { MobileBar } from "./components/MobileBar";
import Messages from "./components/Messages";
import NotFound from "./components/NotFound404";

import { Home } from "./screens/Home";

import "./App.scss";
import { logout } from "./actions";
import { Registration } from "./modals/Registration";
import { Login } from "./modals/Login";
import { AcceptModal } from "./components/AcceptModal";

function App() {
  const [isOpen, setIsOpen] = useState("");

  const { auth, authStatus } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onClick = (event) => {
    setIsOpen(event.target.id);
  };

  const onLogout = () => {
    dispatch(logout());
    setIsOpen("");
  };

  const handleClose = () => {
    setIsOpen("");
  };

  useEffect(() => {
    if (authStatus) {
      setIsOpen("");
    }
  }, [authStatus, setIsOpen]);

  return (
    <>
      <Router>
        <Bar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          auth={auth}
          authStatus={authStatus}
          onClick={onClick}
        />
        <MobileBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          auth={auth}
          authStatus={authStatus}
          dispatch={dispatch}
          onClick={onClick}
          handleClose={handleClose}
        />
        <Registration isOpen={isOpen} setIsOpen={setIsOpen} />
        <Login isOpen={isOpen} setIsOpen={setIsOpen} />
        <AcceptModal
          onAccept={onLogout}
          isOpen={isOpen === "accept"}
          setIsOpen={setIsOpen}
          text="Are you sure you want to log out?"
        />
        <Switch>
          <Route exact path="/">
            <Home />
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
