import React, { useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { userCheckoutConfirmation } from "../../actions";
import { selectCurrentUser } from "../selectors/userSelectors";

const CheckoutConfirmation = props => {
  useEffect(() => {
    props.userCheckoutConfirmation(props.currentUser._id);
  }, []);

  if (!props.currentUser) {
    return <Redirect to="/auth" />;
  }
  return (
    <div>
      <h1 className="text-center">
        Checkout Confirmation{" "}
        <i className="fas fa-check fa-lg color-success"></i>
      </h1>
      <div className="small-underline" />
      <div className="confirmation-info">
        <i className="fas fa-shipping-fast fa-3x color-grey my-2"></i>{" "}
        <h4>
          Your payment was processed successfully. Your products are being
          packed and going to be sent to the address you provided.
        </h4>
        <p>
          *Please note that the process may take few days (max 5 days). If you
          have any questions, please do not hesitate to contact us, our support
          team is here for you 24/7.*
        </p>
        <Link className="btn" to="/shop">
          <i className="fas fa-shopping-cart"></i> Go back to the shop page
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentUser: selectCurrentUser(state) };
};

export default connect(
  mapStateToProps,
  { userCheckoutConfirmation }
)(CheckoutConfirmation);
