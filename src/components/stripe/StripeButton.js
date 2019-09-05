import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const key = "pk_test_bRhI9yGJdqQkPz4GfrYmKnyo00bfKijxix";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful!");
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

export default StripeButton;
