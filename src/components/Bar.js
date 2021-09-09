import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth.actions";
import { Link } from "react-router-dom";
import { Registration } from "../modals/Registration";
import { Login } from "../modals/Login";
import AcceptModal from "./AcceptModal";

const Bar = () => {
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

  useEffect(() => {
    if (authStatus) {
      setIsOpen("");
    }
  }, [authStatus]);

  return (
    <div className="bar">
      <div className="_title">
        <Link to="/">Eco-Market</Link>
      </div>
      {!authStatus ? (
        <div className={"link_container"}>
          <li className="link">
            <p id="register" onClick={onClick}>
              Registration
            </p>
          </li>
          <li className="link">
            <p id="login" onClick={onClick}>
              Log in
            </p>
          </li>
        </div>
      ) : (
        <div className={"link_container"}>
          <div className="">{auth.fullname}</div>
          <li className="link">
            <p id="accept" onClick={onClick}>
              Logout
            </p>
          </li>
        </div>
      )}
      <Registration isOpen={isOpen} setIsOpen={setIsOpen} />
      <Login isOpen={isOpen} setIsOpen={setIsOpen} />
      <AcceptModal
        onAccept={onLogout}
        isOpen={isOpen === "accept"}
        setIsOpen={setIsOpen}
        text="Are you sure you want to log out?"
      />
    </div>
  );
};

export default Bar;
