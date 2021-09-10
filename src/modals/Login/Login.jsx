import React, { useState } from "react";
import { connect } from "react-redux";
import { loginThunk } from "../../thunks/auth.thunk";

import Modal from "../../components/Modal";

const Login = ({ login, isOpen, setIsOpen, loading }) => {
  const [postLogin, setPostLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setPostLogin((prev) => ({
      ...prev,
      [event.target.name]: `${event.target.value}`,
    }));
  };
  const handleClick = () => {
    login(postLogin);
  };

  const handleClose = () => {
    if (isOpen === "login") {
      setIsOpen("");
    }
  };

  return (
    <Modal
      loading={loading}
      name={"Log in"}
      isOpen={isOpen === "login"}
      handleClose={handleClose}
    >
      <div className={"_form"}>
        <input
          className={"_input"}
          name={"username"}
          placeholder={"User name"}
          onChange={handleChange}
          value={postLogin.username}
        />
        <input
          className={"_input"}
          name={"password"}
          placeholder={"Password"}
          type={"password"}
          onChange={handleChange}
          value={postLogin.password}
        />
      </div>
      <div className={"_form_buttons"}>
        <button className={"_button"} onClick={handleClick}>
          Log in
        </button>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  const { auth } = state;
  return auth;
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(loginThunk(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
