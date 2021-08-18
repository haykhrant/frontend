import React from "react";
import LoadingIcon from "../icon/loading.gif";
const Loading = () => {
  return (
    <div className="loading_small">
      <img src={LoadingIcon} alt="Loading..." className="icon" />
    </div>
  );
};

export default Loading;
