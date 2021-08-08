import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  let location = useLocation();
  return (
    <div className="not_found">{`Page not found, no match for "${location.pathname}"`}</div>
  );
};

export default NotFound;
