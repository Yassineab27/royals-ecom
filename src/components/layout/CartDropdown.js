import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartItem from "./CartItem";
import { selectCartItems } from "../selectors/cartSelectors";

const CartDropdown = ({ cartItems }) => {
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
      <Link className="btn text-center" to="/checkout">
        Go to Check out
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartItems: selectCartItems(state) };
};

export default connect(mapStateToProps)(CartDropdown);
