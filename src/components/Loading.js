import React from "react";
import LoadingIcon from "../icon/loading.gif";
const Loading = ({ size }) => {
  return (
    <div className="loading">
      <img src={LoadingIcon} alt="Loading..." className={"icon " + size} />
    </div>
  );
};

export default Loading;
