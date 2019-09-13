import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { setAlert } from "../../actions";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => props.history.push("/"))
      .catch(err => props.setAlert(err.message, "danger"));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="small-underline"></div>
      <p>Please login with your email and password</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button className="btn btn-block">Sign in</button>
      </form>
      <button onClick={signInWithGoogle} className="btn btn-block btn-google">
        Sign in with Google
      </button>
    </div>
  );
};

export default withRouter(
  connect(
    null,
    { setAlert }
  )(Login)
);
