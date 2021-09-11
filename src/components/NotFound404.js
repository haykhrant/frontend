import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  let location = useLocation();
  return (
    <h1 className="not_found">{`Page not found, no match for "${location.pathname}"`}</h1>
  );
};

export default NotFound;
