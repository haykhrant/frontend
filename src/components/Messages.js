import React from "react";
import Message from "./Message";
import { useSelector } from "react-redux";

const Messages = ({ time }) => {
  const messages = useSelector((state) => state.message.messages);

  return (
    <div className={"messages"}>
      {messages.map((message) => (
        <Message key={message.id} message={message} time={time} />
      ))}
    </div>
  );
};

export default Messages;
