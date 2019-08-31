import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import { selectCurrentUser } from "../selectors/userSelectors";

const Auth = props => {
  if (props.currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const mapStateToProps = state => {
  return { currentUser: selectCurrentUser(state) };
};

export default connect(mapStateToProps)(Auth);
