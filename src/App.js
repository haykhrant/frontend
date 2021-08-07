import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import Bar from "./components/Bar";
import Message from "./components/Message";
import { Registration } from "./screens/Registration";

function App(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMessage, setIsOpenMessage] = useState(false);

  useEffect(() => {
    if (props.messageDate) {
      setIsOpenMessage(true);
    }
  }, [props.messageDate]);

  return (
    <>
      <Bar setOpenModal={setIsOpen} />
      <Registration isOpen={isOpen} setIsOpen={setIsOpen} />
      <Message
        isOpen={isOpenMessage}
        setIsOpenMessage={setIsOpenMessage}
        onMessage={props.message}
        messageDate={props.messageDate}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return auth;
};

export default connect(mapStateToProps)(App);
