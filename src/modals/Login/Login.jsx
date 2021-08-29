import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loginThunk } from "../../thunks/auth.thunk";

import Modal from "../../components/Modal";
import { useHistory, useLocation } from "react-router-dom";

const Login = ({ login }) => {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();
  const { pathname } = useLocation();

  const [postLogin, setPostLogin] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    pathname === "/login" && setIsOpen(true);
  }, [pathname]);

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
    setIsOpen(false);
    history.push("/");
  };

  return (
    <Modal
      loading={loading}
      name={"Log in"}
      isOpen={isOpen}
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
