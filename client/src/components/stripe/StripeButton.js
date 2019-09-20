import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { StripeOnToken } from "../../actions";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const key = "pk_test_bRhI9yGJdqQkPz4GfrYmKnyo00bfKijxix";

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
      token={token => StripeOnToken(token, priceForStripe)}
    />
  );
};

export default connect(
  null,
  { StripeOnToken }
)(StripeButton);
