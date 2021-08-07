import React, { useEffect, useState } from "react";
import CrossIcon from "../icon/cross_button.png";

const Message = ({ message, time }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
    const _time = setTimeout(() => {
      setOpen(false);
    }, time);

    return () => {
      clearTimeout(_time);
    };
  }, []);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={open ? "message active" : "message"}>
      <span>{message.text}</span>
      <div className="message_close" onClick={onClose}>
        <img src={CrossIcon} alt="Close" className="icon small" />
      </div>
    </div>
  );
};

export default Message;
