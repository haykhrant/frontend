import React from "react";
import LoadingIcon from "../icon/loading.gif";
const Loading = () => {
  return (
    <div className="loading">
      <img src={LoadingIcon} alt="Loading..." className="icon" />
    </div>
  );
};

export default Loading;
