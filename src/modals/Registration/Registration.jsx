import React, { useState } from "react";
import { connect } from "react-redux";
import { registerThunk } from "../../thunks/auth.thunk";

import Modal from "../../components/Modal";

const Registration = ({ register, isOpen, setIsOpen, loading }) => {
  const [postRegistration, setPostRegistration] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setPostRegistration((prev) => ({
      ...prev,
      [event.target.name]: `${event.target.value}`,
    }));
  };
  const handleClick = () => {
    register(postRegistration);
  };

  const handleClose = () => {
    if (isOpen === "register") {
      setIsOpen("");
    }
  };

  return (
    <Modal
      loading={loading}
      name={"Registration"}
      isOpen={isOpen === "register"}
      handleClose={handleClose}
    >
      <div className="_form">
        <input
          className={"_input"}
          name={"fullname"}
          placeholder={"Full name"}
          onChange={handleChange}
          value={postRegistration.fullname}
        />
        <input
          className={"_input"}
          name={"username"}
          placeholder={"User name"}
          onChange={handleChange}
          value={postRegistration.username}
        />
        <input
          className={"_input"}
          name={"password"}
          placeholder={"Password"}
          type={"password"}
          onChange={handleChange}
          value={postRegistration.password}
        />
      </div>
      <div className={"_form_buttons"}>
        <button className={"_button"} onClick={handleClick}>
          Register
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
    register: (data) => dispatch(registerThunk(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
