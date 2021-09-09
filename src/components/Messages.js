import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";

const Messages = ({ time }) => {
  const { messages, messageType } = useSelector(({ message }) => message);

  return (
    <div className={"messages"}>
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          messageType={messageType}
          time={time}
        />
      ))}
    </div>
  );
};

export default Messages;
