import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Registration } from "../modals/Registration";
import { Login } from "../modals/Login";

const Bar = () => {
  const [isOpen, setIsOpen] = useState("");

  const onClick = (event) => {
    setIsOpen(event.target.id);
  };

  return (
    <div className="bar">
      <div className="_title">
        <Link to="/">Eco-Market</Link>
      </div>
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
      <Registration isOpen={isOpen} setIsOpen={setIsOpen} />
      <Login isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Bar;
