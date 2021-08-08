import React, { useEffect } from "react";
import Message from "./Message";
import { emptyMessages } from "../actions";
import { useDispatch } from "react-redux";

const Messages = ({ isOpen, setIsOpenMessage, messages, time }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!messages.length) {
      setIsOpenMessage(false);
      return;
    }
    const _timeDispatch = setTimeout(() => {
      dispatch(emptyMessages([]));
    }, time + 200);
    return () => {
      clearTimeout(_timeDispatch);
    };
  }, [messages, setIsOpenMessage, dispatch, time]);

  return (
    <div className={isOpen ? "messages active" : "messages"}>
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          messages={messages}
          time={time}
        />
      ))}
    </div>
  );
};

export default Messages;
