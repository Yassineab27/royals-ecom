import React from "react";
import { connect } from "react-redux";

import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import CartDropdown from "../layout/CartDropdown";
import { toggleCartDropdown } from "../../actions";

const NavBar = props => {
  return (
    <React.Fragment>
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

          {props.currentUser ? (
            <li onClick={() => auth.signOut()}>
              <Link className="option" to="/">
                SIGN OUT
              </Link>
            </li>
          ) : (
            <li>
              <NavLink
                className="option"
                to="/auth"
                activeClassName="active-option"
              >
                LOGIN
              </NavLink>
            </li>
          )}
          <li onClick={props.toggleCartDropdown} className="option cart">
            <i className="fas fa-shopping-basket fa-lg" />{" "}
            <span className="item-count">0</span>
          </li>
        </ul>
        {props.cartHidden ? null : <CartDropdown />}
      </nav>
    </React.Fragment>
  );
};

const mapStateToProps = ({ user, cart }) => {
  return { currentUser: user.currentUser, cartHidden: cart.cartHidden };
};

export default connect(
  mapStateToProps,
  { toggleCartDropdown }
)(NavBar);
