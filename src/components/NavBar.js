import React from "react";
import { auth } from "../firebase/firebase.utils";

import { Link, NavLink } from "react-router-dom";

const NavBar = ({ currentUser }) => {
  return (
    <nav className="navbar">
      <h2 className="large">
        <Link to="/">
          <i className="fas fa-crown fa-lg logo" />
        </Link>
      </h2>
      <ul className="options">
        <li>
          <NavLink
            to="/shop"
            className="option"
            activeClassName="active-option"
          >
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink
            className="option"
            to="/contact"
            activeClassName="active-option"
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink
            className="option cart"
            to="/cart"
            activeClassName="active-option"
          >
            <i className="fas fa-shopping-basket fa-lg"></i>
          </NavLink>
        </li>
        {currentUser ? (
          <li onClick={() => auth.signOut()}>
            <NavLink className="option" to="/" activeClassName="active-option">
              <i className="fas fa-door-open fa-lg"></i>
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              className="option"
              to="/auth"
              activeClassName="active-option"
            >
              <i className="fas fa-sign-in-alt fa-lg"></i>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
