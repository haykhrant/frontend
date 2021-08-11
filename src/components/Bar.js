import React from "react";
import { Link } from "react-router-dom";

const Bar = () => {
  return (
    <div className="bar">
      <p className="_title">
        <Link to="/">Eco-Market</Link>
      </p>
      <div className={"link_container"}>
        <li className="link">
          <Link to="/register">Registration</Link>
        </li>
        <li className="link">
          <Link to="/login">Log in</Link>
        </li>
      </div>
    </div>
  );
};

export default Bar;
