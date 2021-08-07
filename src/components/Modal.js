import React from "react";
import LoadingIcon from "../icon/loading.gif";
import CrossIcon from "../icon/cross_button.png";
import { useHistory } from "react-router-dom";

const Modal = ({ name, isOpen, setIsOpen, loading, children }) => {
  const history = useHistory();

  const onOpen = () => {
    history.push("/");
  };

  return (
    <div className={isOpen ? "modal active" : "modal"}>
      <div className={"_container"}>
        <div className="modal_close" onClick={onOpen}>
          <img src={CrossIcon} alt="Close" className="icon small" />
        </div>
        <span className="_title">{name}</span>
        {loading && (
          <div className="loading_small">
            <img src={LoadingIcon} alt="Loading..." className="icon small" />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
