import React from "react";
import CrossIcon from "../icon/cross_button.png";
import Loading from "./Loading";

const Modal = ({ name, isOpen, handleClose, loading, children }) => {
  const onClose = () => {
    handleClose();
  };
  const onOutOfModal = (event) => {
    if (event.currentTarget === event.target) handleClose();
  };

  return (
    <div
      className={isOpen ? "modal active" : "modal"}
      onMouseDown={onOutOfModal}
    >
      <div className={"_container"}>
        <div className="modal_close" onClick={onClose}>
          <img src={CrossIcon} alt="Close" className="icon middle" />
        </div>
        <span className="_title">{name}</span>
        {loading && <Loading size={"small"} />}
        {children}
      </div>
    </div>
  );
};

export default Modal;
