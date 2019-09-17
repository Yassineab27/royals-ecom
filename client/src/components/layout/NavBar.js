import React from "react";
import { connect } from "react-redux";

import { Link, NavLink } from "react-router-dom";

import CartDropdown from "../layout/CartDropdown";
import { toggleCartDropdown, logoutUser } from "../../actions";
import {
  selectCartItemsCount,
  selectCartHidden
} from "../selectors/cartSelectors";
import { selectCurrentUser } from "../selectors/userSelectors";

const NavBar = props => {
  // console.log("2");
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
            <li onClick={() => props.logoutUser()}>
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
            {props.cartCount ? (
              <span className="item-count">{props.cartCount}</span>
            ) : null}
          </li>
        </ul>
        {props.cartHidden ? null : <CartDropdown />}
      </nav>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  // console.log("1");
  return {
    currentUser: selectCurrentUser(state),
    cartHidden: selectCartHidden(state),
    cartCount: selectCartItemsCount(state)
  };
};

export default connect(
  mapStateToProps,
  { toggleCartDropdown, logoutUser }
)(NavBar);
