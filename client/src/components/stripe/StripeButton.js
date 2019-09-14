import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import { connect } from "react-redux";
import { setAlert } from "../../actions";

const StripeButton = ({ price, setAlert }) => {
  const priceForStripe = price * 100;
  const key = "pk_test_bRhI9yGJdqQkPz4GfrYmKnyo00bfKijxix";

  const onToken = token => {
    try {
      console.log(token);
      axios.post("/payment", { token, priceForStripe });
      setAlert("Payment Successful!", "success");
    } catch (err) {
      setAlert(
        "An Issue has occured. Please make sure your credit card is valid.",
        "danger"
      );
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      panelLabel="Pay Now"
      name="ROYALS STORE"
      description={`Total to pay is $${price} `}
      billingAddress
      shippingAddress
      amount={priceForStripe}
      stripeKey={key}
      token={onToken}
    />
  );
};

export default connect(
  null,
  { setAlert }
)(StripeButton);
