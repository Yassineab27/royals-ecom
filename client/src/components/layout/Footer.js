import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <i className="fas fa-crown fa-4x logo text-center" />
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
            className="option"
            to="/checkout"
            activeClassName="active-option"
          >
            CHECKOUT
          </NavLink>
        </li>
      </ul>
      <h4 className="text-center">
        Copyright &copy; 2019 Royals - All Rights Reserved{" "}
      </h4>
    </div>
  );
};

export default Footer;
