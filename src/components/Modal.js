import React from "react";
import LoadingIcon from "../icon/loading.gif";

const Modal = ({ name, isOpen, loading, children }) => {
  return (
    <div className={isOpen ? "modal active" : "modal"}>
      <div className={"_form"}>
        <span className="_title">{name}</span>
        {loading && (
          <div className="loading_small">
            <img
              src={LoadingIcon}
              alt="Loading..."
              className="loading_img small"
            />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
