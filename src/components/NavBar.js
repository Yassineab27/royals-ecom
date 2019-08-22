import React from "react";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
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
            <i className="fas fa-cart-arrow-down fa-lg" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
