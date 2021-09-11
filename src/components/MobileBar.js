import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MenuIcon from "../icon/menu.svg";
import Modal from "./Modal";
import Categories from "./Categories";

import { getProductByCategoryThunk } from "../thunks/product.thunk";

import { formatCategories } from "../utils";

export const MobileBar = ({
  isOpen,
  setIsOpen,
  auth,
  authStatus,
  dispatch,
  onClick,
  handleClose,
}) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const categories = useSelector(({ category }) =>
    formatCategories(category.categories)
  );

  const onMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  const onCategory = (id) => {
    dispatch(getProductByCategoryThunk(id));
    setIsOpen("");
  };

  useEffect(() => {
    setIsMenuActive(false);
  }, [isOpen, setIsMenuActive]);

  return (
    <div className="bar_mobile">
      <div className="_title">
        <Link to="/">Eco-Market</Link>
      </div>
      <div className="menu_icon" onClick={onMenu}>
        <img src={MenuIcon} alt="menu" className="icon" />
      </div>
      <div className={isMenuActive ? "menu active" : "menu"}>
        <div className={"menu_container"}>
          {!authStatus ? (
            <>
              <li className="link">
                <p id="register" onClick={onClick}>
                  Registration
                </p>
              </li>
              <li className="link">
                <p id="login" onClick={onClick}>
                  Log in
                </p>
              </li>
            </>
          ) : (
            <>
              <div className="user-text">{auth.fullname}</div>
              <li className="link">
                <p id="accept" onClick={onClick}>
                  Logout
                </p>
              </li>
            </>
          )}
          <li className="link">
            <p id="categories" onClick={onClick}>
              Categories
            </p>
          </li>
        </div>
      </div>
      <Modal
        isOpen={isOpen === "categories"}
        setIsOpen={setIsOpen}
        handleClose={handleClose}
      >
        <div className={"page_container"}>
          <Categories categories={categories} onCategory={onCategory} />
        </div>
      </Modal>
    </div>
  );
};
