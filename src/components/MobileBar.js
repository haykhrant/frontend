import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/auth.actions';
import { Link } from 'react-router-dom';
import { Registration } from '../modals/Registration';
import { Login } from '../modals/Login';
import { AcceptModal } from './AcceptModal';

import MenuIcon from '../icon/menu.svg';
import Modal from './Modal';
import Categories from './Categories';

import { getProductByCategoryThunk } from '../thunks/product.thunk';

import { formatCategories } from '../utils';

export const MobileBar = () => {
  const [isOpen, setIsOpen] = useState('');
  const [isMenuActive, setIsMenuActive] = useState(false);

  const { auth, authStatus } = useSelector(({ auth }) => auth);
  const categories = useSelector(({ category }) =>
    formatCategories(category.categories)
  );
  const dispatch = useDispatch();

  const onMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  const onClick = (event) => {
    setIsOpen(event.target.id);
  };

  const onLogout = () => {
    dispatch(logout());
    setIsOpen('');
  };

  const onCategory = (id) => {
    dispatch(getProductByCategoryThunk(id));
    setIsOpen('');
  };

  const handleClose = () => {
    setIsOpen('');
  };

  useEffect(() => {
    setIsMenuActive(false);
  }, [isOpen, setIsMenuActive]);

  useEffect(() => {
    if (authStatus) {
      setIsOpen('');
    }
  }, [authStatus]);

  return (
    <div className="bar_mobile">
      <div className="_title">
        <Link to="/">Eco-Market</Link>
      </div>
      <div className="menu_icon" onClick={onMenu}>
        <img src={MenuIcon} alt="menu" className="icon" />
      </div>
      <div className={isMenuActive ? 'menu active' : 'menu'}>
        <div className={'menu_container'}>
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
              <div className="">{auth.fullname}</div>
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
      <Registration isOpen={isOpen} setIsOpen={setIsOpen} />
      <Login isOpen={isOpen} setIsOpen={setIsOpen} />
      <AcceptModal
        onAccept={onLogout}
        isOpen={isOpen === 'accept'}
        setIsOpen={setIsOpen}
        text="Are you sure you want to log out?"
      />
      <Modal
        isOpen={isOpen === 'categories'}
        setIsOpen={setIsOpen}
        handleClose={handleClose}
      >
        <div className={'page_container'}>
          <Categories categories={categories} onCategory={onCategory} />
        </div>
      </Modal>
    </div>
  );
};
