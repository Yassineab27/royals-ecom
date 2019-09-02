import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartItem from "./CartItem";
import { selectCartItems } from "../selectors/cartSelectors";
import { toggleCartDropdown } from "../../actions";

const CartDropdown = ({ cartItems, toggleCartDropdown }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <p className="text">Your cart is empty...</p>
        )}
      </div>
      <Link
        className="btn text-center"
        to="/checkout"
        onClick={toggleCartDropdown}
      >
        Go to Check out
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartItems: selectCartItems(state) };
};

export default connect(
  mapStateToProps,
  { toggleCartDropdown }
)(CartDropdown);
