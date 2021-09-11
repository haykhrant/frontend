import React, { useEffect, useState } from "react";
import CrossIcon from "../icon/cross_button.png";
import { useDispatch } from "react-redux";
import { filterMessages } from "../actions";

const Message = ({ message, messageType, time }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const _timeStart = setTimeout(() => {
      setOpen(true);
    });

    const _timeEnd = setTimeout(() => {
      setOpen(false);
    }, time - 300);

    const _timeDelete = setTimeout(() => {
      dispatch(filterMessages(message.id));
    }, time);

    return () => {
      clearTimeout(_timeEnd);
      clearTimeout(_timeStart);
      clearTimeout(_timeDelete);
    };
  }, [time, dispatch, message.id]);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={open ? `message ${messageType} active` : "message"}>
      <span>{message.text}</span>
      <div className="message_close" onClick={onClose}>
        <img src={CrossIcon} alt="Close" className="icon small" />
      </div>
    </div>
  );
};

export default Message;
