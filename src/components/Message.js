import React, { useEffect, useState } from "react";
import CrossIcon from "../icon/cross_button.png";

const Message = ({ message, time }) => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const _timeStart = setTimeout(() => {
      setOpen(true);
    });

    const _timeEnd = setTimeout(() => {
      setOpen(false);
    }, time - 300);

    const _timeShown = setTimeout(() => {
      setShown(true);
    }, time);

    return () => {
      clearTimeout(_timeEnd);
      clearTimeout(_timeStart);
      clearTimeout(_timeShown);
    };
  }, [time]);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={open ? "message active" : shown ? "message shown" : "message"}
    >
      <span>{message.text}</span>
      <div className="message_close" onClick={onClose}>
        <img src={CrossIcon} alt="Close" className="icon small" />
      </div>
    </div>
  );
};

export default Message;
