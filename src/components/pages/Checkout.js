import React from "react";

import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice
} from "../selectors/cartSelectors";

import CheckoutItem from "./CheckoutItem";

const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="header-item">
          <span>product</span>
        </div>
        <div className="header-item">
          <span>name</span>
        </div>
        <div className="header-item">
          <span>quantity</span>
        </div>
        <div className="header-item">
          <span>price</span>
        </div>
        <div className="header-item">
          <span>delete</span>
        </div>
      </div>
      {cartItems.length
        ? cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))
        : null}
      <div className="checkout-total">TOTAL: ${totalPrice}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItems(state),
    totalPrice: selectCartTotalPrice(state)
  };
};

export default connect(mapStateToProps)(Checkout);
