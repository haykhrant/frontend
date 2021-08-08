import React from "react";
import LoadingIcon from "../icon/loading.gif";
import CrossIcon from "../icon/cross_button.png";
import { useHistory } from "react-router-dom";

const Modal = ({ name, isOpen, loading, children }) => {
  const history = useHistory();

  const goToPreviousPath = () => {
    history.goBack();
  };
  const onOutOfModal = (event) => {
    if (event.currentTarget === event.target) goToPreviousPath();
  };

  return (
    <div
      className={isOpen ? "modal active" : "modal"}
      onMouseDown={onOutOfModal}
    >
      <div className={"_container"}>
        <div className="modal_close" onClick={goToPreviousPath}>
          <img src={CrossIcon} alt="Close" className="icon middle" />
        </div>
        <span className="_title">{name}</span>
        {loading && (
          <div className="loading_small">
            <img src={LoadingIcon} alt="Loading..." className="icon middle" />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
