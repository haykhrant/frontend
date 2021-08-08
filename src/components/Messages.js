import React, { useEffect } from "react";
import Message from "./Message";
import { emptyMessages } from "../actions";
import { useDispatch } from "react-redux";

const Messages = ({ messages, time }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const _timeDispatch = setTimeout(() => {
      dispatch(emptyMessages([]));
    }, time);

    return () => {
      clearTimeout(_timeDispatch);
    };
  }, [messages, dispatch, time]);

  return (
    <div className={"messages"}>
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
