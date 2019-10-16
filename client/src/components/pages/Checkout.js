import React from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { setAlert } from "../../actions";

import {
  selectCurrentUser,
  selectCartItems,
  selectItemsTotalPrice
} from "../selectors/userSelectors";
import StripeButton from "../stripe/StripeButton";
import CheckoutItem from "./CheckoutItem";

const Checkout = ({ cartItems, totalPrice, currentUser, setAlert }) => {
  if (!currentUser) {
    setAlert("You need to Login before accessing the Checkout page.", "danger");
    return <Redirect to="/auth" />;
  }

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
      {totalPrice ? (
        <>
          <h2 className="stipe-test-warning">
            *Use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
          </h2>
          <StripeButton price={totalPrice} />
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: selectCurrentUser(state),
    cartItems: selectCartItems(state),
    totalPrice: selectItemsTotalPrice(state)
  };
};

export default connect(
  mapStateToProps,
  { setAlert }
)(Checkout);
