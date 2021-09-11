import React from "react";

import { Link } from "react-router-dom";

export const Bar = ({ auth, authStatus, onClick }) => {
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
          <div className="user-text">{auth.fullname}</div>
          <li className="link">
            <p id="accept" onClick={onClick}>
              Logout
            </p>
          </li>
        </div>
      )}
    </div>
  );
};
