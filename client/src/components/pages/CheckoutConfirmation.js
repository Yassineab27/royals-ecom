import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
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
      <h2>CONFIRMATION</h2>
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
