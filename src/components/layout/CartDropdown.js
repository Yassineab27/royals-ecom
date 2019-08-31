import React from "react";
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
      <button className="btn">Go to Check out</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartItems: selectCartItems(state) };
};

export default connect(mapStateToProps)(CartDropdown);
