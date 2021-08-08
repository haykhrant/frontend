import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loginThunk } from "../../thunks/auth.thunk";

import Modal from "../../components/Modal";
import { useLocation } from "react-router-dom";

const Registration = ({ register }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const [postRegistration, setPostRegistration] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    pathname === "/login" && setIsOpen(true);
  }, [pathname]);

  const handleChange = (event) => {
    setPostRegistration((prev) => ({
      ...prev,
      [event.target.name]: `${event.target.value}`,
    }));
  };
  const handleClick = async () => {
    setLoading(true);
    await register(postRegistration);
    setLoading(false);
  };

  return (
    <Modal
      loading={loading}
      name={"Log in"}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
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
        onChange={handleChange}
        value={postRegistration.password}
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
    register: async (data) => {
      await dispatch(loginThunk(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
