import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

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
  return { currentUser: state.user.currentUser };
};

export default connect(mapStateToProps)(Auth);
