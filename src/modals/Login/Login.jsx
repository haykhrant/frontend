import React, { useState } from "react";
import { connect } from "react-redux";
import { loginThunk } from "../../thunks/auth.thunk";

import Modal from "../../components/Modal";

const Login = ({ login, isOpen, setIsOpen }) => {
  const [postLogin, setPostLogin] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setPostLogin((prev) => ({
      ...prev,
      [event.target.name]: `${event.target.value}`,
    }));
  };
  const handleClick = async () => {
    setLoading(true);
    await login(postLogin);
    setLoading(false);
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
    login: async (data) => {
      await dispatch(loginThunk(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
