import React from "react";
import ArrowUp from "../icon/arrow_up.png";
import { Link } from "react-router-dom";

const Bar = ({ onDeleteAll }) => {
  return (
    <>
      <div className="bar">
        <p className="_title">
          <Link to="/">Eco-Market</Link>
        </p>
        <div className={"link_container"}>
          <li className="link">
            <Link to="/register">Registration</Link>
          </li>
          <li className="link" onClick={onDeleteAll}>
            <Link to="/login">Log in</Link>
          </li>
        </div>
        <div className="in_bar">
          <img src={ArrowUp} alt="GO HERE!" className="icon middle" />
        </div>
      </div>
      <div className="hide">
        <img src={ArrowUp} alt="GO HERE!" className="icon middle" />
      </div>
    </>
  );
};

export default Bar;
